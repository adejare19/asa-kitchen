import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedDishes from "../components/FeaturedDishes";
import MenuSection from "../components/MenuSection";
import AboutSection from "../components/AboutSection";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Àṣà Kitchen | Authentic African Cuisine in London, UK",
  description:
    "Experience the rich flavours of West Africa at Àṣà Kitchen, London's premier authentic African restaurant. Jollof rice, suya, egusi soup & more. Book your table today.",
  keywords:
    "African restaurant London, West African food UK, authentic jollof rice London, Nigerian restaurant London, Ghanaian food London, African cuisine UK, suya London, egusi soup, pounded yam London",
  authors: [{ name: "Àṣà Kitchen" }],
  openGraph: {
    type: "restaurant",
    title: "Àṣà Kitchen | Authentic African Cuisine in London",
    description:
      "Taste the soul of Africa in the heart of London. Traditional recipes, vibrant flavours, warm hospitality.",
    url: "https://www.asakitchen.co.uk/",
    siteName: "Àṣà Kitchen",
    locale: "en_GB",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5EFE0] selection:bg-orange-100 selection:text-orange-900">
      {/* Announcement Bar */}
      <div className="bg-[#2D4A35] text-white text-center py-2.5 px-4 sm:px-6 text-xs sm:text-sm">
        🎉 <strong className="text-[#D4A843]">Now Open Sundays!</strong> Join us
        for our weekend Afro-Brunch — 1pm to 5pm.{" "}
        <a
          href="#contact"
          className="text-[#D4A843] underline hover:text-[#C49530]"
        >
          Book your table →
        </a>
      </div>

      {/* Navigation */}
      <Header />

      <main>
        <HeroSection />
        <FeaturedDishes />
        <MenuSection />
        <AboutSection />
        <Gallery />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Àṣà Kitchen",
            image:
              "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=1200&q=80",
            description:
              "Authentic West African cuisine in the heart of London. Traditional recipes passed down through generations.",
            url: "https://www.asakitchen.co.uk",
            telephone: "+44-7000-000000",
            priceRange: "££",
            servesCuisine: ["West African", "Nigerian", "Ghanaian"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "42 Market Street",
              addressLocality: "Peckham",
              addressRegion: "London",
              postalCode: "SE15 4QH",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 51.4696,
              longitude: -0.0693,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                opens: "12:00",
                closes: "22:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Friday", "Saturday"],
                opens: "12:00",
                closes: "23:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "13:00",
                closes: "21:00",
              },
            ],
            sameAs: [
              "https://www.instagram.com/asakitchen",
              "https://www.facebook.com/asakitchen",
              "https://www.tiktok.com/@asakitchen",
            ],
          }),
        }}
      />
    </div>
  );
}
