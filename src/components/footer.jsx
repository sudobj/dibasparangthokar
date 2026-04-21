import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Dibas Parang Thokar</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Ministry leader and community servant dedicated to spiritual development, discipleship training, and making a meaningful impact through faith-based service in Nepal.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/Blog" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Mission */}
          <div>
            <h4 className="text-white font-semibold mb-6">Areas of Focus</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Spiritual Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Discipleship Training
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Training & Discipleship
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Mentoring & Coaching
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="text-slate-400">
                <p className="font-medium text-white mb-1">Email</p>
                <a href="mailto:contact@example.com" className="hover:text-indigo-400 transition-colors">
                  contact@example.com
                </a>
              </li>
              <li className="text-slate-400">
                <p className="font-medium text-white mb-1">Phone</p>
                <a href="tel:+977-1-4420000" className="hover:text-indigo-400 transition-colors">
                  +977-1-4420000
                </a>
              </li>
              <li className="text-slate-400">
                <p className="font-medium text-white mb-1">Location</p>
                <p>Kathmandu, Nepal</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}