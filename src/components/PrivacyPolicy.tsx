import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">Privacy Policy</h1>
          <p className="text-gray-500 mb-8 font-montserrat">Last Updated: January 6, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Welcome to OpenTranslateAI, operated by Delivery Apps Now Inc. ("we," "us," or "our"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website translation services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">2.1 Free Open-Source Version</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                When using our free open-source translation widget powered by LibreTranslate:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li>We do not collect, store, or process any translation content</li>
                <li>All translations occur client-side or on your self-hosted instance</li>
                <li>No personal data is transmitted to our servers</li>
                <li>We may collect basic analytics (page views, widget loads) using cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">2.2 Pro Version (When Available)</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                When using our Pro hosted service, we collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li><strong>Account Information:</strong> Name, email address, billing information</li>
                <li><strong>Usage Data:</strong> Translation requests, language pairs, website domains</li>
                <li><strong>Technical Information:</strong> IP addresses, browser type, device information</li>
                <li><strong>Payment Information:</strong> Processed securely through third-party payment processors</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">2.3 Website Analytics</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We use cookies and similar tracking technologies to collect information about your browsing activities. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li>Pages visited and features used</li>
                <li>Time spent on our website</li>
                <li>Referring website addresses</li>
                <li>Geographic location (country/city level)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li>Provide and maintain our translation services</li>
                <li>Process your transactions and send related information</li>
                <li>Improve and optimize our services</li>
                <li>Communicate with you about updates, security alerts, and support</li>
                <li>Detect, prevent, and address technical issues or fraudulent activity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (e.g., payment processors, hosting providers, analytics services)</li>
                <li><strong>AI Model Providers:</strong> For Pro users, translation requests are sent to AI providers (OpenAI, Anthropic, etc.) through secure API connections</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our company</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li>Encryption of data in transit using SSL/TLS</li>
                <li>Secure storage of sensitive information</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information by authorized personnel only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">6. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
              <p className="text-gray-600 leading-relaxed font-montserrat mt-4">
                Translation content processed through our Pro service is not stored permanently and is typically deleted within 30 days unless required for troubleshooting or legal compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">7. Your Privacy Rights</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-Out:</strong> Opt out of certain data processing activities</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-600 leading-relaxed font-montserrat mt-4">
                To exercise these rights, please contact us at privacy@opentranslateai.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. For more information, please see our <Link to="/cookie-policy" className="text-rose-600 hover:text-rose-700 underline">Cookie Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">9. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">10. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">12. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 font-montserrat">
                <p className="text-gray-900 font-semibold mb-2">Delivery Apps Now Inc.</p>
                <p className="text-gray-600">Email: privacy@opentranslateai.com</p>
                <p className="text-gray-600">Website: https://opentranslateai.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
