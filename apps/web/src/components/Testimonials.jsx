export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: "I've travelled across West Africa, and I can honestly say the Egusi Soup here rivals anything I've had in Lagos. The depth of flavour is extraordinary. Àṣà Kitchen is a cultural treasure in London.",
      name: "Amara J.",
      location: "London, UK · Google Review",
      avatar:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80&auto=format",
    },
    {
      stars: 5,
      text: "Took my English friends here for my birthday and they were absolutely blown away. The Suya Skewers had everyone fighting over the last piece. The atmosphere is vibrant and welcoming — we'll be back!",
      name: "Kwame O.",
      location: "Brixton, London · TripAdvisor",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format",
    },
    {
      stars: 5,
      text: "As someone who grew up eating Nigerian food, finding Àṣà Kitchen felt like coming home. The Jollof Rice is cooked the right way — smoky bottom pot and all! Customer service is exceptional too.",
      name: "Ngozi A.",
      location: "Peckham, London · Instagram",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C45C26] mb-3">
            Guest Reviews
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
            What Our Guests Say
          </h2>
          <div className="w-16 h-1 bg-[#C45C26] rounded"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F5EFE0] rounded-xl p-7 relative">
              {/* Quote Mark */}
              <div className="absolute top-4 right-5 text-[#C45C26] text-6xl opacity-20 font-playfair">
                "
              </div>

              {/* Stars */}
              <div className="text-[#D4A843] text-sm mb-3 tracking-wider">
                {"★".repeat(testimonial.stars)}
              </div>

              {/* Review Text */}
              <p className="text-[#4A4A4A] leading-relaxed mb-5 text-sm">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#4A4A4A]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
