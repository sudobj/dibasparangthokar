"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const carouselSection = document.getElementById('carousel-section');
      if (carouselSection) {
        const rect = carouselSection.getBoundingClientRect();
        // Hide navbar when carousel is visible, show when scrolled past it
        setIsVisible(rect.bottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl px-4 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
    }`}>
      <div className="backdrop-blur-lg bg-black/20 border border-white/20 rounded-lg shadow-lg px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <h1 className="font-bold text-white text-lg">Portfolio</h1>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/Blog" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}