"use client";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(".hero-animate");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + index * 200);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1A1A]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/jollof-rice.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/85 via-[#9E3E10]/45 to-[#1A1A1A]/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-20 sm:py-28 md:py-32 w-full">
        <div className="hero-animate opacity-0 translate-y-6 transition-all duration-700 mb-4 sm:mb-6 flex items-center gap-3">
          <div className="w-8 sm:w-10 h-0.5 bg-[#D4A843]"></div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D4A843]">
            London's Premier African Restaurant
          </span>
        </div>

        <h1 className="hero-animate opacity-0 translate-y-6 transition-all duration-700 font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 max-w-4xl leading-tight">
          Where Every Dish
          <br />
          Tells a <em className="italic text-[#E8825A]">Story</em>
        </h1>

        <p className="hero-animate opacity-0 translate-y-6 transition-all duration-700 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8 sm:mb-10">
          From the smoky char of Suya to the deep warmth of Egusi Soup —
          experience the authentic flavours of West Africa, crafted with love
          and tradition in the heart of London.
        </p>

        <div className="hero-animate opacity-0 translate-y-6 transition-all duration-700 flex flex-col sm:flex-row gap-3 mb-10 sm:mb-20">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 bg-[#C45C26] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold hover:bg-[#9E3E10] transition-all shadow-lg text-sm sm:text-base"
          >
            🍽 Explore Our Menu
          </a>
          <a
            href="https://maps.google.com/?q=Peckham,London"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/70 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold hover:bg-white/15 transition-all text-sm sm:text-base"
          >
            📍 Get Directions
          </a>
          <a
            href="tel:+447000000000"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/70 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold hover:bg-white/15 transition-all text-sm sm:text-base"
          >
            📞 Call Us
          </a>
        </div>

        <div className="hero-animate opacity-0 translate-y-6 transition-all duration-700 flex flex-row gap-5 sm:gap-6 overflow-x-auto pb-1">
          {[
            { icon: "🏆", line1: "Best African Restaurant", line2: "London 2024" },
            { icon: "⭐", line1: "4.9 Rating", line2: "600+ Reviews" },
            { icon: "🌿", line1: "Fresh, Locally Sourced", line2: "Ingredients" },
          ].map(({ icon, line1, line2 }) => (
            <div key={line1} className="flex items-center gap-3 text-white/70 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-lg">
                {icon}
              </div>
              <span className="text-xs sm:text-sm">
                {line1}<br />{line2}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs uppercase tracking-wider animate-bounce-slow">
        <span>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="opacity-50">
          <rect x="6.5" y="2" width="3" height="6" rx="1.5" fill="white" />
          <path d="M8 14l-4 4h8l-4-4z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
