import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-fade-up"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
          <div className="flex-shrink-0">
            <Cookie className="w-8 h-8 text-rose-600" aria-hidden="true" />
          </div>

          <div className="flex-1">
            <h3 id="cookie-consent-title" className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
              Cookie Settings
            </h3>
            <p id="cookie-consent-description" className="text-sm text-gray-600 leading-relaxed font-montserrat">
              We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. By clicking "Accept," you agree to our website's cookie use as described in our{' '}
              <a href="/privacy-policy" className="text-rose-600 hover:text-rose-700 underline">
                Privacy Policy
              </a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={declineCookies}
              className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors font-montserrat text-sm"
              aria-label="Decline cookies"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2.5 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors font-montserrat text-sm"
              aria-label="Accept cookies"
            >
              Accept
            </button>
          </div>

          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close cookie consent banner"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
