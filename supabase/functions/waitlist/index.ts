import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const GOOGLE_SHEET_ID = "1n_cp2Dhp0Ip5nFdZxNAWrKGZ78cj2BGrAdkjhbLxmLc";

const GOOGLE_CREDENTIALS = {
  type: "service_account",
  project_id: "opentranslateai",
  private_key_id: "ca1d6dcc20eb55e6d3e5bd6a9dc95e08da749322",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCl+IA+rZjUW19R\nhHsJGu5FCmAunAnmU5FwRavFNhlgoKoE6Lt7RyBNKKWsKsqJUGt79S+XcwZHL+lu\njTI6L04qwEA14ky1vfNHGutSZ68iQEBfPAUBi7XQKOVrPH78M6VvWI/dMsLoQaeH\nC9uHKRQ9lQtKhu4Wd2qQ+hnNnuJchoa2D0v0JidnRcpuMlevRAPkNtM8frPGxrRw\nLUsDFCEKS1Weq/xrscBIOCsrHUAV9Kro7vn8wc4NzXBdSFE8fm7T2STVEhsVsj9S\nYSwu8FhFNXASX6xqcyGYX/kN6FQ19NZobaL2CIq+l89utKDhB9CuOd2JKr9CrcB4\naL4iDH+/AgMBAAECggEAGtfLqhd6kdHrYyxJl+nmonzwnGk5Qqq+aYmjI+TBivrB\nNMUNWX1h8IjD7soG8tlyYNyBY33DhKzvlKU6e+Wdv1VTrUNaA8TifVwRtkS1sxTw\nNFbpOlxFvhJ3NHZW1WRm+9C3h9+HXXgM588XpM8Uinc6GcYj6LdMoYEJvlNVqgAG\n94zmJJyuR1oEFD2Obuse7V07WPYlzkk0pNUEZAdbeCvLNcE8NrnTiJCe4xBTSuXT\nS2D7Q/QNu11dh739s4W84N9IZVJAXBWdPCawiCQgzptVBj6f7dl/V10Bp6kBClNL\nSEUD6y6t/U5gAD0jqGavkMjcd8h4lxVlplPqtq41KQKBgQDjVhexDO9+Sxxqb7E1\n5KtgDQ7oP6JKxk7t7gTNxCyCkz8py4TIeg0KkcKrDE/edlk72Ha+wXTb//6NDe9R\nsKcMYg4PlMk2sHiSX/OY03yLnDOAz3tE6rxXx0YDZuqKMswDM2FwKYSYWkbdXtYZ\nksISDjcjKPGDw3OJ83YCB6aZRwKBgQC65aoPZoX9oSLIe2Emg4Pu7fzl3/mm4Y2M\n20Ns7gy3djU7i/Ep0zwmMQ0dx9mCWBohixVG3Mknu+HHA2BzVL1mOL3/iS8qc9aC\n8KqwI3bFezlTAe57zKDLE3mZ9HSQcBn4CaCJNdQE2Co46+QuwExWxZS7vKrJV0GJ\nmNkPY6QhyQKBgA79ISjCQpQgHaqC3LtB7W6yzbXQZEHr205isBxk/85IKRT3XzTc\nnzmALMacVDPFt9JzTjj7hlnvAfiI36uSKyFs4aJzW+ToM7rq6qO75e1KijbG90iu\n9WYQNHSK95HPEZZwb882XZCx+xQjaZhcDcGlAEuoKmxWmaqRy8kMehaHAoGAFLCN\n9ex8kso+xoDaDWBrv4x6/Zug0HeRqvEu8qUbpUehtvjT9rRaqUOu1wgjrQlBw0rZ\nTSHt5scmxFg8WigcW2+WoO432XQ/X/lye9NBN7VfcC/7jZrmhfSe9osYSFEQnuO5\n8NaTpQGlEu4SMZa6HLT8tRe6tFVDfQ79oHWAWvkCgYEAg/SUDCHUQ6oM6Qavc1Q3\nOv3ZhAfowYBuPagBRocUHbKTAres5dzFyD/GmiOUc61cyWBEYH+VNBYGgkQV8qmu\neQ5NzqNh6HaPb2D6btR2gnoWc7eNmmf2PPLZES2Hb/4M4NAxazKkfk2hTzcOemrl\n6jdyMO0IhiLW833vOAXTEN4=\n-----END PRIVATE KEY-----\n",
  client_email: "opentranslateai@opentranslateai.iam.gserviceaccount.com",
  client_id: "103446003722317646209",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/opentranslateai%40opentranslateai.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

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

    const serviceAccountEmail = GOOGLE_CREDENTIALS.client_email;
    const privateKey = GOOGLE_CREDENTIALS.private_key;

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
