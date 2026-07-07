import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import honeyImg from "@/assets/honey_moon.jpg";
import eduImg from "@/assets/education_tour.jpg";
import devImg from "@/assets/devotional.jpg";
import weddingImg from "@/assets/wedding.jpg";
import collegeImg from "@/assets/college_iv.jpg";
import indiaImg from "@/assets/all_india.jpg";
import busmuVideo from "@/assets/busmu.mp4";

const Services = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Dancing+Script:wght@500&family=UnifrakturCook:wght@700&family=Syncopate:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
  }, []);

  const packages = [
    { title: "Honey Moon", img: honeyImg },
    { title: "Educational Trip", img: eduImg },
    { title: "Devotional Trip", img: devImg },
    { title: "Wedding Trip", img: weddingImg },
    { title: "College IV", img: collegeImg },
    { title: "All India trip", img: indiaImg },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % packages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [packages.length]);

  return (
    <section
      id="packages"
      className="relative min-h-screen bg-black overflow-hidden flex flex-col"
    >
      {/* Full Page Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
          <source src={busmuVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>
      </div>

      <div className="relative z-10 w-full px-4 lg:px-12 py-8 flex-grow flex flex-col">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div
            className="w-12 h-12 bg-transparent border border-[#FFD700]/50 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#FFD700]/10 transition-all transform hover:-translate-x-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="text-[#FFD700] w-6 h-6" />
          </div>
        </div>

        <div className="text-center mb-10">
          <div className="inline-block border border-[#FFD700]/50 rounded-full px-6 py-1 mb-6">
             <span className="text-[#FFD700] text-sm tracking-widest uppercase">Our Packages</span>
          </div>
          <h1
            className="text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-4 uppercase leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
            style={{
              fontFamily: "'Syncopate', sans-serif",
              letterSpacing: "0.25em",
            }}
          >
            Spaces We Have <br /> Brought <span className="text-[#FFD700]">To Life</span>
          </h1>
        </div>

        {/* 3D Coverflow Carousel */}
        <div className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] flex items-center justify-center perspective-[1000px] mt-8">
          {packages.map((pkg, index) => {
            let offset = index - currentIndex;
            const numItems = packages.length;
            
            // Handle circular wrap for 6 items
            if (offset > 2) offset -= numItems;
            if (offset < -3) offset += numItems; 
            if (offset === -3) offset = 3; 
            
            let translateX = 0;
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;
            let rotateY = 0;

            if (offset === 0) {
              translateX = 0;
              scale = 1;
              zIndex = 30;
              opacity = 1;
              rotateY = 0;
            } else if (offset === 1) {
              translateX = 80; 
              scale = 0.8;
              zIndex = 20;
              opacity = 0.6;
              rotateY = -15; 
            } else if (offset === -1) {
              translateX = -80;
              scale = 0.8;
              zIndex = 20;
              opacity = 0.6;
              rotateY = 15;
            } else if (offset === 2) {
              translateX = 140;
              scale = 0.6;
              zIndex = 10;
              opacity = 0.3;
              rotateY = -25;
            } else if (offset === -2) {
              translateX = -140;
              scale = 0.6;
              zIndex = 10;
              opacity = 0.3;
              rotateY = 25;
            } else {
              translateX = 0;
              scale = 0.4;
              zIndex = 0;
              opacity = 0;
            }

            return (
              <div
                key={pkg.title}
                className="absolute w-[280px] sm:w-[320px] h-[380px] sm:h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-[#FFD700]/30 shadow-2xl"
                style={{
                  transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                }}
                onClick={() => {
                  if (offset === 0) {
                    if (pkg.title === "Devotional Trip") {
                      navigate('/devotional-details');
                    } else if (pkg.title === "College IV") {
                      navigate('/college-iv-details');
                    } else if (pkg.title === "Educational Trip") {
                      navigate('/educational-trip-details');
                    } else if (pkg.title === "All India trip") {
                      navigate('/all-india-trip-details');
                    } else if (pkg.title === "Wedding Trip") {
                      navigate('/wedding-trip-details');
                    } else {
                      navigate(`/package-details?category=${encodeURIComponent(pkg.title)}`);
                    }
                  } else {
                    setCurrentIndex(index);
                  }
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 ${offset === 0 ? 'opacity-80' : 'opacity-100'}`} />
                </div>

                {/* Content Container (Only fully visible on center slide) */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${offset === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3
                        className="text-2xl lg:text-3xl text-white drop-shadow-lg font-bold mb-1"
                        style={{ fontFamily: "'Cinzel Decorative', cursive" }}
                      >
                        {pkg.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Explore more details
                      </p>
                    </div>
                    {/* Circle Arrow Button (Next Slide) */}
                    <div 
                      className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent the card's onClick from firing
                        setCurrentIndex((prev) => (prev + 1) % packages.length); // Go to next slide
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
