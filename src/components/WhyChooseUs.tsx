import {
  Check,
  MapPin,
  Calendar,
  Heart,
  Headphones,
  Wallet,
  Users,
  MousePointer2,
  Leaf,
  Trophy,
  Smile,
  Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const reasons = [
    {
      icon: Trophy,
      title: "Trusted Expertise",
      text: "5+ years of trusted travel expertise"
    },
    {
      icon: Globe,
      title: "Wide Coverage",
      text: "Coverage across the Globe"
    },
    {
      icon: Heart,
      title: "Personalized",
      text: "Personalized itineraries for every budget"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      text: "24/7 customer support during your trip"
    },
    {
      icon: Wallet,
      title: "Best Value",
      text: "Best price guarantee"
    },
    {
      icon: Users,
      title: "Local Guides",
      text: "Expert local guides"
    },
    {
      icon: MousePointer2,
      title: "Easy Booking",
      text: "Hassle-free booking process"
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      text: "Eco-friendly travel options"
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-black selection:bg-[#FFD700] selection:text-black"
    >
      {/* Dual Color Intense Light Leak Background (Gold & Brown) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#050300]">
        
        {/* Intense Gold Glow (Bottom Left area) */}
        <div className="absolute top-[40%] left-[-10%] w-[80vw] h-[40vh] bg-[#FFD700] opacity-30 blur-[150px] -rotate-45 mix-blend-screen"></div>
        {/* Bright core for the gold glow */}
        <div className="absolute top-[50%] left-[5%] w-[40vw] h-[20vh] bg-[#FFF8DC] opacity-20 blur-[100px] -rotate-45 mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>

        {/* Deep Brown/Copper Glow (Top Right area) */}
        <div className="absolute top-[-10%] right-[-10%] w-[90vw] h-[50vh] bg-[#8B4513] opacity-60 blur-[180px] -rotate-45 mix-blend-screen"></div>
        {/* Brighter core for the brown glow */}
        <div className="absolute top-0 right-[5%] w-[50vw] h-[25vh] bg-[#D2691E] opacity-30 blur-[120px] -rotate-45 mix-blend-screen animate-pulse" style={{ animationDuration: '5s' }}></div>
        
        {/* Subtle center blend */}
        <div className="absolute top-[20%] left-[30%] w-[50vw] h-[50vh] bg-[#DAA520] opacity-10 blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Content & Grid */}
          <div>
            <h2
              className="relative inline-block text-3xl md:text-5xl lg:text-6xl mb-8 mt-4 py-2 leading-relaxed uppercase font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
              style={{
                fontFamily: "'Syncopate', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              {/* Metallic Base */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8DC] via-[#FFD700] to-[#B8860B]">
                Why Choose Us?
              </span>
              
              {/* Fast Knife Edge Sharp Glint Overlay */}
              <span 
                className="absolute inset-0 text-transparent bg-clip-text pointer-events-none select-none"
                style={{
                  backgroundImage: 'linear-gradient(110deg, transparent 49.5%, rgba(255,255,255,1) 50%, transparent 50.5%)',
                  backgroundSize: '200% auto',
                  animation: 'glass-shine 2s linear infinite',
                }}
              >
                Why Choose Us?
              </span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed font-light" style={{ fontFamily: "'Cinzel Decorative', cursive" }}>
              We're not just a travel agency — we're your creative partners in crafting extraordinary journeys. Since 2020, painting memories across the Globe.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FFD700]/50 hover:bg-white/10 transition-all duration-500 shadow-lg hover:shadow-[0_5px_15px_rgba(255,215,0,0.15)] hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#B8860B] flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1 tracking-wide" style={{ fontFamily: "'Cinzel Decorative', cursive" }}>{item.title}</h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Floating Stats */}
          <div className="relative mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div
                  onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-[#FFD700]/50 cursor-pointer group"
                >
                  <div className="bg-[#FFD700]/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Smile className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-sm group-hover:text-[#FFD700] transition-colors">500+</div>
                  <div className="text-gray-400 font-bold text-xs uppercase tracking-widest group-hover:text-gray-300">Happy Customers</div>
                </div>
                <div
                  onClick={() => navigate('/states')}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-[#FFD700]/50 cursor-pointer group"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="bg-[#FFD700]/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Globe className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-sm group-hover:text-[#FFD700] transition-colors">Global</div>
                  <div className="text-gray-400 font-bold text-xs uppercase tracking-widest group-hover:text-gray-300">Reach</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-[#FFD700]/50 group" style={{ animationDelay: "0.4s" }}>
                  <div className="bg-[#FFD700]/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Trophy className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-sm group-hover:text-[#FFD700] transition-colors">95%</div>
                  <div className="text-gray-400 font-bold text-xs uppercase tracking-widest group-hover:text-gray-300">Satisfaction Rate</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-[#FFD700]/50 group" style={{ animationDelay: "0.6s" }}>
                  <div className="bg-[#FFD700]/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Calendar className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-sm group-hover:text-[#FFD700] transition-colors">5+</div>
                  <div className="text-gray-400 font-bold text-xs uppercase tracking-widest group-hover:text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
