import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Company/Brand */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="text-lg font-semibold text-gray-900">
              Your Company Name
            </div>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Alle Rechte vorbehalten
            </div>
          </div>

          {/* Center - Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link
              href="/impressum"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium cursor-pointer"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium cursor-pointer"
            >
              Datenschutz
            </Link>
            <button
              type="button"
              data-cc="show-preferencesModal"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium cursor-pointer"
            >
              Cookie-Einstellungen
            </button>
          </nav>

          {/* Right side - Created by */}
          <div className="flex items-center">
            <span className="text-sm text-gray-500">
              mit Liebe erstellt von{' '}
              <a
                href="https://schnitzelbytes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium underline decoration-2 underline-offset-2 cursor-pointer"
              >
                Schnitzelbytes
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
