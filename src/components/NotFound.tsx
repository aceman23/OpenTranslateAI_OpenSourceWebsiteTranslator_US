import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="animate-fade-up">
          <h1 className="text-9xl font-bold text-gray-900 mb-4 font-montserrat">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 font-montserrat">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-montserrat leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition-all duration-300 font-montserrat shadow-lg hover:shadow-xl"
              aria-label="Go to homepage"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Go to Homepage
            </a>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 font-montserrat"
              aria-label="Go back to previous page"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Go Back
            </button>
          </div>

          <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">
              Need Help?
            </h3>
            <p className="text-gray-600 font-montserrat mb-6">
              If you believe this is an error, please contact our support team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/" className="text-rose-600 hover:text-rose-700 font-medium">
                Home
              </a>
              <span className="text-gray-400">|</span>
              <a href="/#features" className="text-rose-600 hover:text-rose-700 font-medium">
                Features
              </a>
              <span className="text-gray-400">|</span>
              <a href="https://github.com/aceman23/OpenTranslateAI_OpenSourceWebsiteTranslator_US" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 font-medium">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
