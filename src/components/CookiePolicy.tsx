import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors font-montserrat"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">Cookie Policy</h1>
          <p className="text-gray-500 mb-8 font-montserrat">Last Updated: January 6, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">1. What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to website owners.
              </p>
              <p className="text-gray-600 leading-relaxed font-montserrat mt-4">
                This Cookie Policy explains how Delivery Apps Now Inc. ("we," "us," or "our") uses cookies and similar tracking technologies on the OpenTranslateAI website (https://opentranslateai.com).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">2. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">2.1 Essential Cookies</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 font-montserrat">
                <p className="text-gray-700 font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                  <li>Session management cookies</li>
                  <li>Authentication cookies for logged-in users</li>
                  <li>Security cookies to prevent fraud</li>
                  <li>Cookie consent preferences</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">2.2 Functional Cookies</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, personalized features.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 font-montserrat">
                <p className="text-gray-700 font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                  <li>Language preference cookies</li>
                  <li>Translation widget settings</li>
                  <li>User interface preferences</li>
                  <li>Cached translation data for faster loading</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">2.3 Analytics Cookies</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 font-montserrat">
                <p className="text-gray-700 font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                  <li>Google Analytics cookies</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                  <li>Feature usage statistics</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">2.4 Marketing Cookies</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                These cookies track your online activity to help us deliver more relevant advertising or limit how many times you see an advertisement. They may be set by us or third-party partners.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 font-montserrat">
                <p className="text-gray-700 font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                  <li>Advertising platform cookies</li>
                  <li>Retargeting cookies</li>
                  <li>Social media integration cookies</li>
                  <li>Conversion tracking pixels</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">3. Specific Cookies Used</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-montserrat font-semibold text-gray-900">Cookie Name</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-montserrat font-semibold text-gray-900">Type</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-montserrat font-semibold text-gray-900">Duration</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-montserrat font-semibold text-gray-900">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="font-montserrat">
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">cookie_consent</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Essential</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">1 year</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Stores your cookie consent preferences</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">session_id</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Essential</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Session</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Maintains your session state</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">preferred_language</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Functional</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">30 days</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Remembers your language preference</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">translation_cache</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Functional</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">7 days</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Caches translations for faster loading</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">_ga</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Analytics</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">2 years</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Google Analytics user identification</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">_gid</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Analytics</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">24 hours</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Google Analytics session tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">4. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                In addition to our own cookies, we may use various third-party cookies to report usage statistics, deliver advertisements, and provide enhanced functionality. These third parties may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior tracking</li>
                <li><strong>Payment Processors:</strong> For secure payment processing (Pro version)</li>
                <li><strong>CDN Providers:</strong> For content delivery and performance optimization</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">5. How to Manage Cookies</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">5.1 Browser Settings</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                Most web browsers allow you to control cookies through their settings. You can typically:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li>View cookies stored on your device</li>
                <li>Delete individual or all cookies</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies</li>
                <li>Set cookies to be deleted when you close your browser</li>
              </ul>

              <p className="text-gray-600 leading-relaxed font-montserrat mt-4 mb-4">
                To manage cookies in popular browsers:
              </p>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2 font-montserrat text-sm">
                <p className="text-gray-700"><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</p>
                <p className="text-gray-700"><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</p>
                <p className="text-gray-700"><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</p>
                <p className="text-gray-700"><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">5.2 Our Cookie Consent Tool</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                When you first visit our website, you'll see a cookie consent banner that allows you to accept or reject different categories of cookies. You can change your preferences at any time by clicking the cookie settings link in our website footer.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">5.3 Opt-Out Options</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                You can opt out of certain cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 underline">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Advertising Cookies:</strong> Visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 underline">Digital Advertising Alliance</a> or <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 underline">Your Online Choices</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">6. Impact of Disabling Cookies</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly. Specifically:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li>You may need to manually select your language preference each visit</li>
                <li>Translation caching will not work, resulting in slower performance</li>
                <li>You may not be able to log in or access your account</li>
                <li>Some features may not remember your preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">7. Do Not Track Signals</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Because there is not yet a common understanding of how to interpret DNT signals, we do not currently respond to browser DNT signals. However, you can use the cookie management options described above to control tracking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">8. Updates to This Cookie Policy</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">9. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 font-montserrat">
                <p className="text-gray-900 font-semibold mb-2">Delivery Apps Now Inc.</p>
                <p className="text-gray-600">Email: privacy@opentranslateai.com</p>
                <p className="text-gray-600">Website: https://opentranslateai.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">10. More Information</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                For more information about how we handle your personal data, please see our <Link to="/privacy-policy" className="text-rose-600 hover:text-rose-700 underline">Privacy Policy</Link>.
              </p>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                For more information about cookies in general, you can visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 underline">www.allaboutcookies.org</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
