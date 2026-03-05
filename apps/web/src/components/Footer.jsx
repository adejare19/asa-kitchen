import { Instagram, Facebook } from "lucide-react";

/* Inline SVGs for platforms lucide-react doesn't cover */
function TikTokIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.81a4.85 4.85 0 01-1.07-.12z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://instagram.com/asakitchen",
    label: "Àṣà Kitchen on Instagram",
    icon: <Instagram size={18} />,
    className: "bg-white/10 hover:bg-[#C45C26]",
  },
  {
    href: "https://facebook.com/asakitchen",
    label: "Àṣà Kitchen on Facebook",
    icon: <Facebook size={18} />,
    className: "bg-white/10 hover:bg-[#C45C26]",
  },
  {
    href: "https://tiktok.com/@asakitchen",
    label: "Àṣà Kitchen on TikTok",
    icon: <TikTokIcon size={18} />,
    className: "bg-white/10 hover:bg-[#C45C26]",
  },
  {
    href: "https://wa.me/447000000000",
    label: "Chat with us on WhatsApp",
    icon: <WhatsAppIcon size={18} />,
    className: "bg-[#25D366] hover:bg-[#20bd5a]",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Featured Dishes", href: "#dishes" },
  { label: "Full Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const cuisineLinks = [
  "Nigerian Food",
  "Ghanaian Dishes",
  "West African Soups",
  "Street Food",
  "African Drinks",
  "Private Events",
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/70 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-white mb-1">
              Àṣà Kitchen
            </h2>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#D4A843] mb-4">
              Authentic African Cuisine · London
            </p>
            <p className="text-sm leading-relaxed max-w-[280px]">
              Celebrating West African food culture in the heart of London since
              2009. Where every meal is a homecoming.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ href, label, icon, className }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${className}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cuisine */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-5">
              Cuisine
            </h4>
            <ul className="space-y-3">
              {cuisineLinks.map((item) => (
                <li key={item}>
                  <a href="#menu" className="text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+447000000000" className="hover:text-white transition-colors">
                  +44 7000 000 000
                </a>
              </li>
              <li>
                <a href="mailto:hello@asakitchen.co.uk" className="hover:text-white transition-colors">
                  hello@asakitchen.co.uk
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Peckham+London+SE15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  42 Market St, Peckham
                  <br />
                  London, SE15 4QH
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-6 text-xs">
          <p>
            © 2025 Àṣà Kitchen Ltd. All rights reserved. |{" "}
            <a href="#" className="text-[#D4A843] hover:underline">Privacy Policy</a>{" "}
            |{" "}
            <a href="#" className="text-[#D4A843] hover:underline">Terms of Service</a>
          </p>
          <p>DexterLabs</p>
        </div>
      </div>
    </footer>
  );
}
