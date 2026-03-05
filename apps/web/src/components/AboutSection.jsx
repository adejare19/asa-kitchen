export default function AboutSection() {
  const values = [
    { icon: "🌿", title: "Local & Fresh", description: "We source ingredients from UK farmers and specialist African suppliers" },
    { icon: "👨‍🍳", title: "Master Chefs", description: "Our kitchen team trained across West Africa and Michelin-starred restaurants" },
    { icon: "🤝", title: "Community First", description: "We celebrate African culture through food, music and community events" },
    { icon: "♻️", title: "Sustainable", description: "Zero food waste policy and eco-friendly packaging across all operations" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-5 sm:px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Image — capped height on mobile, taller on desktop */}
          <div className="relative">
            <img
              src="images/yam.jpeg"
              alt="Chef plating a beautiful African dish at Àṣà Kitchen"
              className="w-full h-64 sm:h-80 lg:h-[520px] object-cover rounded-2xl"
              loading="lazy"
            />
            {/* Stat pill — anchored inside image on mobile (no negative left) */}
            <div className="absolute top-4 left-4 sm:top-8 sm:-left-6 bg-[#C45C26] text-white px-4 sm:px-5 py-3 sm:py-4 rounded-xl shadow-2xl">
              <div className="font-playfair text-3xl sm:text-4xl font-bold leading-none">15</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-90 mt-1">Years of Tradition</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4A843] mb-3">Our Story</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Rooted in Culture,<br />Cooked with Love
            </h2>
            <div className="w-16 h-1 bg-[#C45C26] rounded mb-5"></div>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-4">
              Àṣà Kitchen was born from a simple conviction: that the world needed to taste Africa as Africans truly eat. Founded in 2009 by Chef Adaeze Okafor — a native of Imo State, Nigeria — our restaurant began as a small supper club in Peckham and grew into one of London's most beloved African dining destinations.
            </p>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-4">
              Every recipe on our menu carries a memory. The Egusi Soup is her grandmother's. The Jollof is the one that caused legendary debates at every family gathering. The Suya was perfected over three years of sourcing the right groundnut spice blend from Northern Nigeria.
            </p>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 sm:mb-9">
              We are not a restaurant that serves African-inspired food. We serve{" "}
              <em className="italic text-[#D4A843] not-italic font-semibold">African food</em>{" "}
              — with the pride, precision, and passion that it deserves.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5">
                  <div className="text-2xl mb-2">{value.icon}</div>
                  <h4 className="font-playfair text-base font-bold text-white mb-1">{value.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
