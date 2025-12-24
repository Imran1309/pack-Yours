import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Dancing+Script:wght@500&family=UnifrakturCook:wght@700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
  }, []);

  const packages = [
    { title: "Honey Moon", img: "/src/assets/honey image.jpg" },
    { title: "Educational Trip", img: "/src/assets/educationtour.jpg" },
    { title: "Devotional Trip", img: "/src/assets/dev.jpg" },
    { title: "Wedding Trip", img: "/src/assets/wd.jpg" },
    { title: "College IV", img: "/src/assets/college iv.jpg" },
    { title: "All India trip", img: "/src/assets/india (1).jpg" },
  ];

  return (
    <section
      id="packages"
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #e11d48, #db2777, #ffffff, #9333ea, #7c3aed)",
      }}
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Top Orange Wave */}
        <svg
          className="absolute top-0 left-0 w-full h-[50vh] object-cover"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#e11d48"
            fillOpacity="0.8"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {/* Floating Abstract Shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#f43f5e] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Middle Wave */}
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 opacity-20">
          <svg viewBox="0 0 1440 320" className="w-full h-full text-rose-300 fill-current">
            <path fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>


        {/* Bottom Green Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[50vh] object-cover"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#7c3aed"
            fillOpacity="0.8"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Navigate Back Arrow */}
        <div className="flex items-start mb-10">
          <div
            className="w-16 h-16 bg-yellow-400 rounded-xl shadow-xl flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition-all transform hover:scale-105"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="text-[#7a0010] w-10 h-10" />
          </div>
        </div>

        <div className="text-center">
          {/* Heading */}
          <h1
            className="text-6xl text-[#b30000] mb-16 drop-shadow-md py-2 leading-normal"
            style={{
              fontFamily: "'Great Vibes', 'Dancing Script', cursive",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            Our Packages
          </h1>

          {/* Packages Grid */}
          {/* Creative Immersive Packages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-4">
            {packages.map((pkg, index) => (
              <div
                key={pkg.title}
                className="group relative h-[450px] w-full max-w-sm rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-pink-900/40"
                onClick={() => {
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
                }}
              >
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#831843] via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end items-center p-8 pb-12">
                  {/* Floating Icon/Badge (Optional decoration) */}
                  <div className="mb-4 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-medium tracking-wider border border-white/30">
                      DISCOVER
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-5xl text-white text-center drop-shadow-lg mb-6 transform transition-transform duration-500 group-hover:scale-105 py-2 leading-normal"
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      fontWeight: 500,
                      letterSpacing: "1px",
                    }}
                  >
                    {pkg.title}
                  </h3>

                  {/* Glass Button */}
                  <div className="overflow-hidden h-0 group-hover:h-14 transition-all duration-500 ease-in-out">
                    <Button
                      className="bg-white text-[#be185d] hover:bg-[#ffe4e6] font-bold py-6 px-8 rounded-full shadow-lg border-2 border-transparent hover:border-[#db2777] transition-all transform hover:scale-105"
                    >
                      Explore
                    </Button>
                  </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-[2.5rem] pointer-events-none group-hover:border-white/50 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
