import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/company-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a0505] via-[#450a0a] to-[#2b0707] text-white pt-16 pb-24 font-sans relative border-t-4 border-[#FFD700]">

      {/* Background Container for clipping blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-overlay filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600 rounded-full mix-blend-overlay filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Dhana Tour Consultors Logo"
                className="w-48 h-auto object-contain drop-shadow-lg filter brightness-110"
              />
            </div>
            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#E6C200] font-bold italic tracking-wider leading-relaxed drop-shadow-md font-serif">
              Creating unforgettable travel experiences across India since 2020. Your trusted partner in exploring the incredible diversity of our nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-[#FFD700] tracking-wide relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#FFD700]"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", link: "#" },
                { name: "Packages", link: "#packages" },
                { name: "About Us", link: "#about" },
                { name: "Reviews", link: "#reviews" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="text-white/80 hover:text-[#FFD700] hover:translate-x-2 transition-all duration-300 block text-xl font-bold tracking-wide"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-[#FFD700] tracking-wide relative inline-block">
              Popular Destinations
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#FFD700]"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "Kerala",
                "Karnataka",
                "Tamilnadu",
                "Andrapradesh"
              ].map((place, idx) => (
                <li key={idx}>
                  <a href="#" className="text-white/80 hover:text-[#FFD700] hover:translate-x-2 transition-all duration-300 block text-xl font-bold tracking-wide">
                    {place}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-[#FFD700] tracking-wide relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#FFD700]"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="bg-white/10 p-3 rounded-xl group-hover:bg-[#FFD700] group-hover:text-[#7F1D1D] transition-all transform group-hover:scale-110">
                  <MapPin className="h-6 w-6 flex-shrink-0" />
                </div>
                <span className="text-white/90 text-lg font-semibold leading-relaxed group-hover:text-[#FFD700] transition-colors">
                  Panangattur Chinnappampatty<br />salem Tamilnadu India
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/10 p-3 rounded-xl group-hover:bg-[#FFD700] group-hover:text-[#7F1D1D] transition-all transform group-hover:scale-110">
                  <Phone className="h-6 w-6 flex-shrink-0" />
                </div>
                <a href="tel:+918883511103" className="text-white/90 text-lg font-semibold group-hover:text-[#FFD700] transition-colors">+91-88835-11103</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/10 p-3 rounded-xl group-hover:bg-[#FFD700] group-hover:text-[#7F1D1D] transition-all transform group-hover:scale-110">
                  <Mail className="h-6 w-6 flex-shrink-0" />
                </div>
                <a href="mailto:dhanatoursconsultors2020@gmail.com" className="text-white/90 text-lg font-semibold break-words group-hover:text-[#FFD700] transition-colors">dhanatoursconsultors2020@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered Large Social Icons */}
        <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
          {[
            { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600", href: "https://www.facebook.com/share/1MAEhtEFQG/" },
            { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500", href: "https://x.com/Dhanatour2020" },
            { icon: MessageCircle, label: "WhatsApp", color: "hover:bg-green-500", href: "https://wa.me/+918883511103" },
            { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600", href: "https://www.instagram.com/dhanatourconsultors/?utm_source=ig_web_button_share_sheet" },
            { icon: Youtube, label: "YouTube", color: "hover:bg-red-600", href: "http://www.youtube.com/@dhanatourconsultors2020" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target={social.href !== "#" ? "_blank" : "_self"}
              rel={social.href !== "#" ? "noopener noreferrer" : ""}
              aria-label={social.label}
              className={`bg-white/10 p-4 rounded-full ${social.color} hover:scale-125 transition-all duration-300 text-white shadow-lg border border-white/10 group`}
            >
              <social.icon className="h-8 w-8" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center">
          <p className="text-white/60 text-sm font-light">
            © {currentYear} Dhana Tour Consultors. All rights reserved. Made with <span className="text-red-400 animate-pulse">❤️</span> for travelers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
