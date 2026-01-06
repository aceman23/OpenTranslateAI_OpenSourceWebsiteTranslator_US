import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">Terms of Service</h1>
          <p className="text-gray-500 mb-8 font-montserrat">Last Updated: January 6, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Delivery Apps Now Inc. ("Company," "we," "us," or "our") concerning your access to and use of the OpenTranslateAI website (https://opentranslateai.com) and our translation services (collectively, the "Services").
              </p>
              <p className="text-gray-600 leading-relaxed font-montserrat mt-4">
                By accessing or using our Services, you agree that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">2. Services Description</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">2.1 Free Open-Source Version</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We provide an open-source website translation widget powered by LibreTranslate. This version is available free of charge under the MIT License and can be used, modified, and distributed according to the terms of that license.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">2.2 Pro Version (When Available)</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Our Pro version offers enhanced translation capabilities powered by multiple AI models, a hosted backend proxy, and additional premium features available through a paid subscription.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">3. User Accounts</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">3.1 Account Creation</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                To access certain features of our Services, particularly the Pro version, you may be required to create an account. When creating an account, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept all responsibility for activities under your account</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">3.2 Account Eligibility</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                You must be at least 18 years old or the age of majority in your jurisdiction to create an account and use our Services. By creating an account, you represent that you meet these requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">4. Acceptable Use</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">4.1 Permitted Use</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                You may use our Services only for lawful purposes and in accordance with these Terms. You agree to use the Services in a manner that does not violate any applicable laws or regulations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">4.2 Prohibited Activities</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 font-montserrat">
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Use automated systems to access the Services without permission</li>
                <li>Transmit malware, viruses, or malicious code</li>
                <li>Violate any intellectual property rights</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Translate content that is illegal, defamatory, obscene, or harmful</li>
                <li>Attempt to reverse engineer our proprietary technology</li>
                <li>Resell or redistribute our Services without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">5. Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">5.1 Our Content</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                The Services and all content, features, and functionality (excluding open-source components) are owned by Delivery Apps Now Inc. and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">5.2 Open-Source License</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Our free open-source translation widget is licensed under the MIT License. You may use, copy, modify, merge, publish, distribute, sublicense, and sell copies of the software in accordance with the MIT License terms available in our GitHub repository.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">5.3 Your Content</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                You retain all rights to the content you translate using our Services. By using our Services, you grant us a limited license to process your content solely for the purpose of providing translation services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">6. Subscription and Payment Terms</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">6.1 Pro Subscription</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Access to Pro features requires a paid subscription. Subscription fees are charged in advance on a monthly or annual basis, as selected during purchase.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">6.2 Payment Processing</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Payments are processed through third-party payment processors. You agree to provide accurate payment information and authorize us to charge your payment method for all fees incurred.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">6.3 Automatic Renewal</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You will be charged the then-current subscription fee.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">6.4 Cancellation and Refunds</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                You may cancel your subscription at any time through your account settings. Cancellations take effect at the end of the current billing period. We do not provide refunds for partial subscription periods, except as required by law or at our sole discretion.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">6.5 Free Trial</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We may offer a free trial period for Pro features. If you do not cancel before the trial ends, you will be automatically charged for a subscription.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">7. Service Availability and Modifications</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">7.1 Service Availability</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We strive to maintain high service availability but do not guarantee uninterrupted access. The Services may be unavailable due to maintenance, updates, or circumstances beyond our control.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">7.2 Modifications</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">8. Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
              </p>
              <p className="text-gray-600 leading-relaxed font-montserrat mt-4">
                We do not warrant the accuracy, completeness, or reliability of translations. Translations are generated by automated systems and may contain errors or inaccuracies. You should review and verify all translations for critical use cases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">9. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, DELIVERY APPS NOW INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-gray-600 leading-relaxed font-montserrat mt-4">
                OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">10. Indemnification</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                You agree to indemnify, defend, and hold harmless Delivery Apps Now Inc., its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorney fees, arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your violation of any rights of another party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">11. Termination</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
              </p>
              <p className="text-gray-600 leading-relaxed font-montserrat mt-4">
                You may terminate your account at any time by contacting us or using the account closure feature in your settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">12. Governing Law and Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">12.1 Governing Law</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Delivery Apps Now Inc. is registered, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-montserrat">12.2 Dispute Resolution</h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Any disputes arising from or relating to these Terms or the Services shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration or in the courts of competent jurisdiction, as applicable in your region.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">13. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the changes taking effect. Your continued use of the Services after the changes take effect constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">14. Severability</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">15. Entire Agreement</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Delivery Apps Now Inc. regarding the use of the Services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">16. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed font-montserrat mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 font-montserrat">
                <p className="text-gray-900 font-semibold mb-2">Delivery Apps Now Inc.</p>
                <p className="text-gray-600">Email: legal@opentranslateai.com</p>
                <p className="text-gray-600">Website: https://opentranslateai.com</p>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-gray-600 leading-relaxed font-montserrat">
                By using OpenTranslateAI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
