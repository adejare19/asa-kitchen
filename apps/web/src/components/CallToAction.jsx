import {
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function CallToAction() {
  return (
    <section id="connect" className="py-24 px-6 bg-white dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black dark:bg-[#1A1A1A] rounded-[64px] p-10 md:p-24 relative overflow-hidden text-white">
          {/* Animated Background Gradients */}
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-orange-600 rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side */}
            <div>
              <h2 className="text-5xl md:text-7xl font-black leading-[1] mb-8 tracking-tighter">
                Craving the <br />
                <span className="text-orange-500">Real Deal?</span>
              </h2>
              <p className="text-xl text-white/70 max-w-md mb-12 leading-relaxed">
                Whether it's a quick lunch, a family feast, or a special event,
                we're ready to serve you the best African cuisine in the UK.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="https://wa.me/441234567890"
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-[32px] text-lg font-black transition-all shadow-xl shadow-[#25D366]/20"
                >
                  <MessageCircle size={24} fill="white" />
                  Order via WhatsApp
                </a>
                <a
                  href="tel:+441234567890"
                  className="flex items-center justify-center gap-3 bg-white text-black hover:bg-orange-50 px-10 py-5 rounded-[32px] text-lg font-black transition-all"
                >
                  Call Us Directly
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-white/50">
                  Follow Our Journey
                </p>
                <div className="flex gap-6">
                  {[
                    { icon: <Instagram size={28} />, label: "Instagram" },
                    { icon: <Facebook size={28} />, label: "Facebook" },
                    { icon: <Twitter size={28} />, label: "Twitter" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      className="text-white hover:text-orange-500 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[40px]">
                <MapPin className="text-orange-500 mb-6" size={32} />
                <h4 className="text-xl font-bold mb-3 uppercase tracking-wider">
                  Visit Us
                </h4>
                <p className="text-white/60 leading-relaxed">
                  123 African Spice Lane,
                  <br />
                  London, SE1 7AB,
                  <br />
                  United Kingdom
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[40px]">
                <Clock className="text-orange-500 mb-6" size={32} />
                <h4 className="text-xl font-bold mb-3 uppercase tracking-wider">
                  Kitchen Hours
                </h4>
                <ul className="text-white/60 space-y-2">
                  <li className="flex justify-between">
                    <span>Mon-Thu</span> <span>12pm-10pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fri-Sat</span> <span>12pm-11pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sun</span> <span>1pm-9pm</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[40px] sm:col-span-2">
                <Mail className="text-orange-500 mb-6" size={32} />
                <h4 className="text-xl font-bold mb-3 uppercase tracking-wider">
                  Catering & Events
                </h4>
                <p className="text-white/60 mb-4">
                  We cater for weddings, birthdays, and corporate events. Let's
                  make your next gathering unforgettable.
                </p>
                <a
                  href="mailto:hello@savourafrica.co.uk"
                  className="text-orange-500 font-bold hover:underline"
                >
                  hello@savourafrica.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-[#999999] text-sm gap-4">
          <p>© 2026 Savour Africa Kitchen. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black dark:hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white">
              Allergens Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
