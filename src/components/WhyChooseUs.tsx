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
      className="py-24 relative overflow-hidden bg-[#0a0a0a] selection:bg-pink-500 selection:text-white"
    >
      {/* Creative Multi-Color Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-[100px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-600/30 to-orange-500/30 blur-[100px] mix-blend-screen animate-pulse delay-700"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-indigo-500/10 to-teal-400/10 blur-[120px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Content & Grid */}
          <div>
            <h2
              className="text-6xl md:text-7xl mb-8 mt-4 py-2 leading-relaxed drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#FF4D4D]"
              style={{
                fontFamily: "'Great Vibes', 'Dancing Script', cursive",
                fontWeight: 800,
                letterSpacing: "2px",
              }}
            >
              Why Choose Us?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed font-light">
              We're not just a travel agency — we're your creative partners in crafting extraordinary journeys. Since 2020, painting memories across the Globe.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-500 shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF0080] to-[#7928CA] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1 tracking-wide">{item.title}</h3>
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
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-yellow-400/50 cursor-pointer group"
                >
                  <div className="bg-yellow-400/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Smile className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-sm group-hover:text-yellow-400 transition-colors">500+</div>
                  <div className="text-gray-400 font-bold text-xs uppercase tracking-widest group-hover:text-gray-300">Happy Customers</div>
                </div>
                <div
                  onClick={() => navigate('/states')}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-blue-400/50 cursor-pointer group"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="bg-blue-400/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Globe className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-sm group-hover:text-blue-400 transition-colors">Global</div>
                  <div className="text-gray-400 font-bold text-xs uppercase tracking-widest group-hover:text-gray-300">Reach</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-green-400/50 group" style={{ animationDelay: "0.4s" }}>
                  <div className="bg-green-400/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Trophy className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-sm group-hover:text-green-400 transition-colors">95%</div>
                  <div className="text-gray-400 font-bold text-xs uppercase tracking-widest group-hover:text-gray-300">Satisfaction Rate</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-purple-400/50 group" style={{ animationDelay: "0.6s" }}>
                  <div className="bg-purple-400/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Calendar className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2 drop-shadow-sm group-hover:text-purple-400 transition-colors">5+</div>
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
