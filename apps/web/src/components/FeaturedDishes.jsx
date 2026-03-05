/**
 * FeaturedDishes — all images are contextually matched to each dish.
 * Using Unsplash CDN with auto=format for WebP delivery where supported.
 */
export default function FeaturedDishes() {
  const dishes = [
    {
      name: "Signature Jollof Rice",
      description:
        "Slow-cooked in a rich tomato and pepper base with aromatic spices. Served with grilled chicken and fried sweet plantain.",
      price: "£14.99",
      // Nigerian jollof rice with grilled chicken — Keesha's Kitchen, Unsplash
      image: "/images/jollof-rice.png",
      badge: "Fan Favourite",
      badgeColor: "bg-[#C45C26]",
    },
    {
      name: "Suya Skewers",
      description:
        "Tender beef strips marinated in our secret groundnut spice blend, grilled to perfection over charcoal. Served with fresh onions.",
      price: "£12.50",
      // Grilled meat skewers on charcoal — warm, smoky food photography
      image: "/images/suya-skewers.jpg",
      badge: "New",
      badgeColor: "bg-[#2D4A35]",
    },
    {
      name: "Egusi Soup & Pounded Yam",
      description:
        "Ground melon seeds simmered with leafy vegetables, assorted meats and smoked fish in a rich palm oil base. Soul food at its finest.",
      price: "£16.99",
      
      image: "/images/egusi-soup.jpg",
      badge: "Chef's Pick",
      badgeColor: "bg-[#C45C26]",
    },
    {
      name: "Grilled Tilapia",
      description:
        "Whole tilapia marinated in our house spice blend, grilled and served with pepper sauce, jollof rice and a fresh salad.",
      price: "£18.99",
      // Whole grilled fish — matches the dish perfectly
      image: "/images/grilled-tilapia.jpg",
      badge: null,
      badgeColor: null,
    },
  ];

  return (
    <section id="dishes" className="py-16 md:py-24 px-5 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C45C26] mb-3">
            Chef's Selection
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
            Featured Dishes
          </h2>
          <div className="w-16 h-1 bg-[#C45C26] rounded mb-4"></div>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            Handpicked by our head chef — these are the dishes our guests keep
            coming back for. Each recipe is a celebration of West African
            culinary heritage.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                {dish.badge && (
                  <span
                    className={`absolute top-3 right-3 ${dish.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider`}
                  >
                    {dish.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl font-bold text-[#1A1A1A] mb-2">
                  {dish.name}
                </h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-2xl font-bold text-[#C45C26]">
                    {dish.price}
                  </span>
                  <a
                    href="#contact"
                    className="w-9 h-9 rounded-full bg-[#F5EFE0] text-[#C45C26] flex items-center justify-center text-xl hover:bg-[#C45C26] hover:text-white transition-colors"
                    aria-label={`Order ${dish.name}`}
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-[#2D4A35] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3D6147] transition-all shadow-md"
          >
            View Full Menu →
          </a>
        </div>
      </div>
    </section>
  );
}
