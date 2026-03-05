export default function Gallery() {
  const images = [
    {
      src: "images/pounded-yam-assorted-veg.jpg",
      alt: "Beautifully plated African dish at Àṣà Kitchen",
      // Large feature image — 2 cols + 2 rows on desktop, full width on mobile
      className: "col-span-2 row-span-2 h-56 sm:h-72 md:h-full",
    },
    {
      src: "images/egusi-pounded-yam.png",
      alt: "Colourful West African spices and ingredients",
      className: "col-span-1 h-40 sm:h-48 md:h-full",
    },
    {
      src: "/images/jollof-rice.png",
      alt: "Signature Jollof Rice at Àṣà Kitchen",
      className: "col-span-1 h-40 sm:h-48 md:h-full",
    },
    {
      src: "/images/bitter-leaf-soup.png",
      alt: "Pounded yam and egusi soup, traditional West African meal",
      className: "col-span-1 h-40 sm:h-48 md:h-full",
    },
    {
      src: "/images/ofe-owerri.png",
      alt: "The warm and vibrant dining atmosphere at Àṣà Kitchen",
      className: "col-span-1 h-40 sm:h-48 md:h-full",
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-5 sm:px-6 bg-[#EAE0CC]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C45C26] mb-3">Visual Feast</p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">Gallery</h2>
          <div className="w-16 h-1 bg-[#C45C26] rounded"></div>
        </div>

        {/* Mobile: 2-col grid. Desktop: 4-col asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:h-[480px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.className} relative overflow-hidden rounded-xl cursor-pointer group`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#C45C26]/0 group-hover:bg-[#C45C26]/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
