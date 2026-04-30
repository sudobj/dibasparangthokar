"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const isActive = (href) => pathname === href;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/Blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Find the first section after hero (carousel or main content)
      const carouselSection = document.getElementById('carousel-section');
      const heroSection = document.querySelector('[data-hero-section="true"]');
      
      if (carouselSection) {
        const rect = carouselSection.getBoundingClientRect();
        // Show navbar when carousel section is scrolled past (bottom reaches top)
        setIsVisible(rect.bottom <= 0);
      } else if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Show navbar when hero section is scrolled past
        setIsVisible(rect.bottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-black/40 border border-white/20 rounded-xl shadow-lg px-6 py-3 md:px-8">
          <div className="flex justify-between items-center">
            {/* Minimal Logo */}
            <Link href="/" className="text-white font-bold text-xl tracking-tight hover:text-indigo-400 transition-colors">
              D
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    isActive(link.href)
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 