"use client";
import { useState } from "react";

/**
 * All images are contextually matched to the specific dish described.
 * Unsplash CDN — auto=format delivers WebP where the browser supports it.
 */
const menuData = {
  mains: [
    {
      name: "Signature Jollof Rice",
      description: "Party-style jollof with grilled chicken & fried plantain",
      price: "£14.99",
      // Nigerian jollof rice with chicken
      image: "/images/jollof-rice.png",
    },
    {
      name: "Suya Skewers (4 pcs)",
      description: "Spiced beef, grilled over charcoal with fresh onions",
      price: "£12.50",
      // Grilled beef skewers on charcoal
      image: "/images/suya-skewers.jpg",
    },
    {
      name: "Whole Grilled Tilapia",
      description: "With pepper sauce, jollof rice & fresh salad",
      price: "£18.99",
      // Whole grilled fish on plate
      image: "/images/grilled-tilapia.jpg",
    },
    {
      name: "Pounded Yam & Choice of Soup",
      description: "Classic smooth pounded yam with your pick of soup",
      price: "£15.99",
      // White sticky pounded yam / fufu in a bowl
      image: "/images/pounded-yam-assorted-veg.png",
    },
    {
      name: "Pepper Goat (Nkwobi Style)",
      description: "Tender goat in spiced palm oil sauce, ukpaka & utazi leaves",
      price: "£17.50",
      // Braised goat / lamb stew — rich, spiced, dark sauce
      image: "/images/ofe-owerri.png",
    },
    {
      name: "Ofada Rice & Designer Stew",
      description: "Locally grown unpolished rice with assorted meat stew",
      price: "£13.99",
      // Unpolished brown rice with stew — earthy, rustic
      image: "/images/ofada-rice.png",
    },
  ],
  soups: [
    {
      name: "Egusi Soup",
      description: "Ground melon seeds, leafy veg & assorted meats in palm oil",
      price: "£4.99 (add-on)",
      // Rich orange-red palm oil soup with greens
      image: "/images/egusi-soup.jpg",
    },
    {
      name: "Ofe Onugbu (Bitter Leaf Soup)",
      description: "Rich traditional soup with cocoyam thickener & smoked fish",
      price: "£4.99 (add-on)",
      // Dark leafy green soup — similar colour and texture
      image: "/images/bitter-leaf-soup.png",
    },
    {
      name: "Ofe Owerri",
      description: "Imo state's prized soup — cocoyam, uziza & forest spices",
      price: "£5.99 (add-on)",
      // Thick forest-spiced stew
      image: "/images/ofe-owerri.png",
    },
    {
      name: "Light Tomato Pepper Soup",
      description: "Clear broth with fresh peppers, herbs & your choice of protein",
      price: "£4.50 (add-on)",
      // Clear broth / pepper soup with red chillies
      image: "/images/pepper-soup.jpg",
    },
  ],
  sides: [
    {
      name: "Fried Sweet Plantain (Dodo)",
      description: "Golden, caramelised ripe plantain slices",
      price: "£3.50",
      // Caramelised fried plantain slices — golden and glossy
      image: "/images/fried-plantain.png",
    },
    {
      name: "Moi Moi (Bean Pudding)",
      description: "Steamed ground bean pudding with boiled egg & fish",
      price: "£3.99",
      // Steamed bean pudding — orange/brown wrap
      image: "/images/moi-moi.png",
    },
    {
      name: "Akara (Bean Fritters)",
      description: "Crispy fried black-eyed pea fritters, served hot",
      price: "£3.00",
      // Fried fritters / bite-size golden snacks
      image: "/images/akara.png",
    },
    {
      name: "Nigerian Coleslaw",
      description: "Creamy spiced coleslaw with carrots & cucumber",
      price: "£2.50",
      // Fresh coleslaw with carrot — crisp and colourful
      image: "/images/coleslaw.png",
    },
  ],
  drinks: [
    {
      name: "Zobo (Hibiscus Flower Drink)",
      description: "Chilled, lightly spiced hibiscus drink with ginger & pineapple",
      price: "£3.50",
      // Deep red hibiscus drink in a glass — vivid colour
      image: "/images/zobo.jpg",
    },
    {
      name: "Kunu Aya (Tiger Nut Drink)",
      description: "Creamy, naturally sweet tiger nut and date drink",
      price: "£3.50",
      // Creamy milky-white plant-based drink
      image: "/images/kunu.jpg",
    },
    {
      name: "Chapman Cocktail",
      description: "Classic Nigerian party drink — Fanta, Sprite & Grenadine",
      price: "£4.50",
      // Colourful layered cocktail / mocktail with ice
      image: "/images/chapman.jpg",
    },
    {
      name: "Palm Wine",
      description: "Naturally fermented, lightly sweet & earthy. Straight from the tap",
      price: "£5.00",
      // Cloudy/milky natural wine in a cup or gourd
      image: "/images/palm-wine.jpg",
    },
  ],
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("mains");

  const tabs = [
    { id: "mains", label: "Main Dishes" },
    { id: "soups", label: "Soups & Stews" },
    { id: "sides", label: "Sides & Extras" },
    { id: "drinks", label: "Drinks" },
  ];

  return (
    <section id="menu" className="py-16 md:py-24 px-6 bg-[#F5EFE0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C45C26] mb-3">
            Our Offerings
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
            Full Menu
          </h2>
          <div className="w-16 h-1 bg-[#C45C26] rounded mb-4"></div>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            Every dish carries the memory of generations — family recipes
            refined for the modern table, made with ingredients sourced for
            quality.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Menu categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[#C45C26] text-white border-2 border-[#C45C26]"
                  : "bg-white text-[#4A4A4A] border-2 border-[#EAE0CC] hover:border-[#C45C26] hover:text-[#C45C26]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          role="tabpanel"
        >
          {menuData[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 flex gap-4 items-start hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                loading="lazy"
                width={80}
                height={80}
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-playfair text-base font-bold text-[#1A1A1A] mb-1">
                  {item.name}
                </h4>
                <p className="text-xs text-[#4A4A4A] leading-relaxed mb-2">
                  {item.description}
                </p>
                <span className="text-sm font-bold text-[#C45C26]">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#4A4A4A]">
          ℹ️ All prices include VAT. Dishes may contain allergens — please speak
          to our staff. Vegetarian & halal options available.
        </p>
      </div>
    </section>
  );
}
