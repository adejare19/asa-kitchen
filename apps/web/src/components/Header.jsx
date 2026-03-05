"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Dishes", href: "#dishes" },
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMobile = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E9E9E9] transition-all duration-300 ${
        isScrolled ? "py-2 shadow-sm" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex flex-col">
          <span className="font-playfair text-2xl font-bold text-[#1A1A1A] leading-none tracking-tight">
            Àṣà Kitchen
          </span>
          <span className="text-[10px] font-medium text-[#C45C26] uppercase tracking-[0.2em] mt-0.5">
            Authentic African Cuisine · London
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-[#4A4A4A] hover:text-[#C45C26] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#C45C26] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs — Call Now restored alongside Book a Table */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+447000000000"
            className="flex items-center gap-2 border-2 border-[#C45C26] text-[#C45C26] px-5 py-2 rounded-full text-sm font-bold hover:bg-[#C45C26] hover:text-white active:scale-[0.98] transition-all"
            aria-label="Call us now"
          >
            <Phone size={15} />
            Call Now
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#C45C26] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#9E3E10] active:scale-[0.98] transition-all shadow-md"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#1A1A1A]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E9E9E9]">
          <nav className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-bold text-[#1A1A1A] hover:text-[#C45C26]"
                onClick={closeMobile}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+447000000000"
              className="flex items-center justify-center gap-2 border-2 border-[#C45C26] text-[#C45C26] py-3.5 rounded-2xl font-bold hover:bg-[#C45C26] hover:text-white transition-all"
              onClick={closeMobile}
            >
              <Phone size={18} /> Call Now
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-[#C45C26] text-white py-4 rounded-2xl font-bold"
              onClick={closeMobile}
            >
              Book a Table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
