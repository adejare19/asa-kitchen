"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    date: "", time: "", guests: "2 guests", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed");
      setSubmitMessage("🎉 Reservation received! We'll confirm within 2 hours.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", date: "", time: "", guests: "2 guests", message: "" });
    } catch {
      setSubmitMessage("⚠️ Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openingHours = [
    { day: "Mon – Thu", hours: "12:00 – 22:00" },
    { day: "Fri – Sat 🔥", hours: "12:00 – 23:00", highlight: true },
    { day: "Sunday (Brunch)", hours: "13:00 – 21:00" },
  ];

  const inputClass = "w-full px-4 py-3 border-2 border-[#EAE0CC] rounded-lg bg-[#F5EFE0] focus:border-[#C45C26] focus:bg-white outline-none transition-colors text-sm";

  return (
    <section id="contact" className="py-16 md:py-24 px-5 sm:px-6 bg-[#F5EFE0]">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C45C26] mb-3">Find Us</p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">Get in Touch</h2>
          <div className="w-16 h-1 bg-[#C45C26] rounded mb-4"></div>
          <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
            We'd love to welcome you. Book a table, ask us anything, or just come on in — the door is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Contact Info */}
          <div>
            {[
              { icon: <MapPin size={20} />, title: "Address", content: <p className="text-sm text-[#4A4A4A] leading-relaxed">42 Market Street, Peckham<br />London, SE15 4QH</p> },
              { icon: <Phone size={20} />, title: "Phone", content: <><a href="tel:+447000000000" className="text-sm text-[#4A4A4A] hover:text-[#C45C26]">+44 7000 000 000</a><p className="text-xs text-[#4A4A4A] mt-1">Tap to call directly</p></> },
              { icon: <Mail size={20} />, title: "Email", content: <a href="mailto:hello@asakitchen.co.uk" className="text-sm text-[#4A4A4A] hover:text-[#C45C26]">hello@asakitchen.co.uk</a> },
            ].map(({ icon, title, content }) => (
              <div key={title} className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#C45C26] text-white flex items-center justify-center flex-shrink-0">{icon}</div>
                <div><h4 className="font-playfair text-sm font-bold mb-1">{title}</h4>{content}</div>
              </div>
            ))}

            {/* Opening hours — shortened day labels prevent wrapping */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md mt-2">
              {openingHours.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center px-4 sm:px-5 py-3 text-sm border-b last:border-b-0 gap-4 ${item.highlight ? "bg-[#F5EFE0] font-semibold" : ""}`}
                >
                  <span className="text-[#4A4A4A] whitespace-nowrap">{item.day}</span>
                  <span className={`${item.highlight ? "text-[#2D4A35]" : "text-[#1A1A1A]"} whitespace-nowrap`}>{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+447000000000"
                className="flex items-center justify-center gap-2 bg-[#C45C26] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#9E3E10] transition-colors"
              >
                <Phone size={18} /> Call Now
              </a>
              <a
                href="https://wa.me/447000000000?text=Hi%20Àṣà%20Kitchen!%20I'd%20like%20to%20make%20a%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#2D4A35] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3D6147] transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Reservation Form — reduced padding on mobile */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-lg">
            <h3 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-2">Reserve Your Table</h3>
            <p className="text-sm text-[#4A4A4A] mb-6">Fill in your details and we'll confirm your booking within 2 hours.</p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputClass} placeholder="Amara" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputClass} placeholder="Johnson" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="amara@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+44 7xxx xxxxxx" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">Time</label>
                  <select name="time" value={formData.time} onChange={handleChange} className={inputClass}>
                    <option value="">Select time...</option>
                    {["12:00 PM","1:00 PM","2:00 PM","3:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM"].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">Guests</label>
                <select name="guests" value={formData.guests} onChange={handleChange} className={inputClass}>
                  {["1 guest","2 guests","3 guests","4 guests","5 guests","6+ guests (call us)"].map(g => <option key={g}>{g}</option>)}
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A4A] mb-2">Special Requests</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className={`${inputClass} resize-y`} placeholder="Dietary requirements, allergies, special occasion..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C45C26] text-white py-4 rounded-lg font-bold text-base hover:bg-[#9E3E10] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "⏳ Sending..." : "✅ Confirm Reservation"}
              </button>

              {submitMessage && (
                <p className={`mt-4 text-sm text-center ${submitMessage.includes("🎉") ? "text-[#2D4A35]" : "text-[#C45C26]"}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 sm:mt-16 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-[#2D4A35] text-white px-5 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4A843] mb-1">Find Us</p>
              <p className="text-sm sm:text-base font-bold">42 Market Street, Peckham, London SE15 4QH</p>
            </div>
            <a
              href="https://maps.google.com/?q=Peckham+Market+Street+London+SE15"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4A843] text-[#1A1A1A] px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#C49530] transition-colors whitespace-nowrap"
            >
              Open in Google Maps →
            </a>
          </div>
          <iframe
            title="Àṣà Kitchen location on Google Maps"
            src="https://maps.google.com/maps?q=Peckham+London+SE15&output=embed&z=15"
            className="w-full h-72 sm:h-96 border-none"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
