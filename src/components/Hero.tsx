import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import falls3 from "@/assets/bg-city.jpg";
import go3 from "@/assets/bg-falls.jpg";
import promoB3 from "@/assets/night_life.jpg";
import chakra from "@/assets/chakra.jpg";
import heroVideo from "@/assets/heroVideo.mp4";

const Hero = () => {
  const navigate = useNavigate();

  const backgrounds = [
    { type: "video", src: heroVideo },
    { type: "image", src: falls3 },
    { type: "image", src: go3 },
    { type: "image", src: promoB3 },
  ];

  const taglines = [
    "Feel the breeze of wind",
    "Light Cities",
    "Green Dreams Begin",
    "Night Life",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, currentBg === 0 ? 3000 : 5000);

    return () => clearInterval(interval);
  }, [currentBg]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{ opacity: currentBg === index ? 1 : 0 }}
        >
          {bg.type === "video" ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={bg.src} type="video/mp4" />
            </video>
          ) : (
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bg.src})` }}
            />
          )}
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Dynamic Tagline */}
          <div className="mb-4 md:mb-6 animate-fade-in">
            <span
              key={taglines[currentBg]}
              className="text-4xl sm:text-5xl md:text-6xl font-[Great_Vibes] italic underline decoration-yellow-400 transition-all duration-700"
              style={{
                color: "#FF1295",
                textDecorationThickness: "3px",
                textUnderlineOffset: "12px",
                mixBlendMode: "difference",
                fontFamily: "'Great Vibes', 'Fraktur', cursive",
              }}
            >
              {taglines[currentBg]}
            </span>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-4 md:mb-6">
            {taglines.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentBg(index)}
                aria-label={`Go to slide ${index + 1}`}
                title={`Slide ${index + 1}`}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${currentBg === index ? "bg-yellow-400" : "bg-white/50"}`}
              />
            ))}
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 animate-fade-in leading-tight"
            style={{
              animationDelay: "0.2s",
              fontFamily: "'Cinzel Decorative', cursive",
              background: "linear-gradient(to right, #FFD700, #000000ff, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.4))"
            }}
          >
            Where every click brings a little wonder
          </h1>

          <p
            className="text-xl sm:text-3xl md:text-5xl text-primary-foreground mb-4 animate-fade-in tracking-wide"
            style={{
              animationDelay: "0.4s",
              fontFamily: "'Great Vibes', cursive",
              color: "#000000",
              textShadow: "0px 0px 10px rgba(255,255,255,0.9)", // Strong white glow to make black text visible on dark bg
              paddingBottom: "10px"
            }}
          >
            Your dream came true with our team
          </p>
          <div className="flex flex-nowrap items-center justify-center gap-1 mb-6 md:mb-8 text-primary-foreground animate-fade-in whitespace-nowrap overflow-visible" style={{ animationDelay: "0.6s" }}>
            <span className="text-xs sm:text-base md:text-4xl font-bold" style={{ fontFamily: "'Cinzel Decorative', cursive", color: "#ff7700ff", textShadow: "1px 1px 0px #000" }}>The World Is Waiting</span>
            <div className="flex items-center gap-0.5 mx-1">
              <img
                src={chakra}
                alt="Chakra"
                className="inline-block animate-spin w-4 h-4 md:w-8 md:h-8"
              />
            </div>
            <span className="text-xs sm:text-base md:text-4xl font-bold" style={{ fontFamily: "'Cinzel Decorative', cursive", color: "#16aa06ff", textShadow: "1px 1px 0px #000" }}>Let’s Travel</span>
          </div>
          {/* Stats */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            {/* Book Button → TEXT BLACK + navigate */}
            <Button
              variant="default"
              size="xl"
              className="text-white font-bold hover:opacity-90 transition-opacity text-lg md:text-xl px-8 py-6"
              style={{
                backgroundColor: "#870b41ff",
                fontFamily: "'Cinzel Decorative', cursive",
                letterSpacing: "1px" // Added for decorative effect
              }}
              onClick={() => navigate("/booking")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Adventure
            </Button>

            {/* Explore Button → TEXT BLACK + navigate */}
            <Button
              variant="outline"
              size="xl"
              className="bg-black/40 border-white text-white hover:bg-black/60 font-bold text-lg md:text-xl px-8 py-6"
              style={{
                fontFamily: "'Cinzel Decorative', cursive",
                letterSpacing: "1px"
              }}
              onClick={() => navigate("/states")}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Explore Destinations
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-2" style={{ color: "#ff5a07ff" }}>500+</div>
              <div className="text-white text-sm md:text-lg font-medium">Happy Travelers</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-2" style={{ color: "#1d10a9ff" }}>32</div>
              <div className="text-white text-sm md:text-lg font-medium">States Covered</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-3xl md:text-5xl font-bold mb-2" style={{ color: "#05b22aff" }}>
                <Star className="h-6 w-6 md:h-8 md:w-8 fill-[#05b22aff] text-[#05b22aff]" />
                4.9
              </div>
              <div className="text-white text-sm md:text-lg font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
