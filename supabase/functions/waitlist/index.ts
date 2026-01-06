import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const GOOGLE_SHEET_ID = "1n_cp2Dhp0Ip5nFdZxNAWrKGZ78cj2BGrAdkjhbLxmLc";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const timestamp = new Date().toISOString();

    // Get Google Sheets API credentials from environment
    const serviceAccountEmail = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    const privateKey = Deno.env.get("GOOGLE_PRIVATE_KEY");

    if (!serviceAccountEmail || !privateKey) {
      return new Response(
        JSON.stringify({ 
          error: "Google Sheets API credentials not configured",
          message: "Please set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY environment variables"
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Create JWT for Google API authentication
    const header = {
      alg: "RS256",
      typ: "JWT",
    };

    const now = Math.floor(Date.now() / 1000);
    const claim = {
      iss: serviceAccountEmail,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    };

    const encoder = new TextEncoder();
    const base64url = (data: Uint8Array) => 
      btoa(String.fromCharCode(...data))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");

    const headerB64 = base64url(encoder.encode(JSON.stringify(header)));
    const claimB64 = base64url(encoder.encode(JSON.stringify(claim)));
    const signatureInput = `${headerB64}.${claimB64}`;

    // Import private key
    const pemHeader = "-----BEGIN PRIVATE KEY-----";
    const pemFooter = "-----END PRIVATE KEY-----";
    const pemContents = privateKey
      .replace(pemHeader, "")
      .replace(pemFooter, "")
      .replace(/\s/g, "");

    const binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));

    const cryptoKey = await crypto.subtle.importKey(
      "pkcs8",
      binaryDer,
      {
        name: "RSASSA-PKCS1-v1_5",
        hash: "SHA-256",
      },
      false,
      ["sign"]
    );

    const signature = await crypto.subtle.sign(
      "RSASSA-PKCS1-v1_5",
      cryptoKey,
      encoder.encode(signatureInput)
    );

    const signatureB64 = base64url(new Uint8Array(signature));
    const jwt = `${signatureInput}.${signatureB64}`;

    // Exchange JWT for access token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwt,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error("Failed to get access token");
    }

    const { access_token } = await tokenResponse.json();

    // Append row to Google Sheet
    const sheetsResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/Sheet1:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [[timestamp, name, email]],
        }),
      }
    );

    if (!sheetsResponse.ok) {
      const errorData = await sheetsResponse.text();
      throw new Error(`Failed to add to sheet: ${errorData}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Added to waitlist" }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Internal server error" 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});