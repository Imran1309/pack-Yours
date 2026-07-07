import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/dhana_logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const OWNER_EMAIL = "dhanatrip2020@gmail.com";

  // Check for owner status
  useEffect(() => {
    const checkOwner = () => {
      const user = localStorage.getItem("currentUser");
      if (user) {
        try {
          const parsedUser = JSON.parse(user);
          if (parsedUser.email === OWNER_EMAIL) {
            setIsOwner(true);
          } else {
            setIsOwner(false);
          }
        } catch (e) {
          console.error("Error parsing user", e);
          setIsOwner(false);
        }
      } else {
        setIsOwner(false);
      }
    };

    checkOwner();
    // Listen for storage events in case login happens in another tab or component updates it
    window.addEventListener('storage', checkOwner);
    return () => window.removeEventListener('storage', checkOwner);
  }, []);

  // Handle scroll to section if URL has hash on load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navItems = [
    { name: "Home", type: "hash", path: "/" },
    { name: "Packages", type: "hash", path: "#packages" },
    { name: "Destination", type: "page", path: "/destination" },
    { name: "Memories", type: "page", path: "/memories" },
    { name: "Reviews", type: "hash", path: "#reviews" },
    { name: "About us", type: "hash", path: "#about" },
  ];

  if (isOwner) {
    navItems.push({ name: "Bookings", type: "page", path: "/admin-bookings" });
  }

  const handleNavigation = (item: { name: string; type: string; path: string }) => {
    setMobileMenuOpen(false);

    if (item.type === "page") {
      navigate(item.path);
    } else if (item.type === "hash") {
      if (item.path === "/") {
        navigate("/");
        if (location.pathname === "/") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // It is a hash link like #packages
        if (location.pathname !== "/") {
          navigate("/" + item.path);
        } else {
          const element = document.getElementById(item.path.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };



  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="w-full px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Title */}
          <div className="flex items-center gap-4 md:gap-8 animate-slide-in cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Dhana Tour Travels Logo" className="h-12 w-auto md:h-16 lg:h-20" />

            <div className="flex flex-col">
              <h1
                className="text-xs sm:text-base md:text-lg lg:text-2xl font-bold translate-y-1 whitespace-nowrap"
                style={{
                  fontFamily: "'Cinzel Decorative', cursive",
                  background: "linear-gradient(to right, #FFD700, #FF4500, #800080)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "none", // Text shadow doesn't work well with transparent text fill
                  lineHeight: "1.2",
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))" // Alternative for shadow
                }}
              >
                Dhana Tour Travels
              </h1>

              <p
                className="text-[10px] sm:text-xs md:text-sm lg:text-lg block whitespace-nowrap"
                style={{
                  fontFamily: "'Cinzel Decorative', cursive",
                  background: "linear-gradient(to right, #FFD700, #FF4500, #800080)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginTop: "0px",
                  fontWeight: "700"
                }}
              >
                Since 2020
              </p>


            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navItems.map((item, index) =>
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`text-[#FFD700] hover:text-white transition-colors text-lg animate-fade-in relative group whitespace-nowrap uppercase tracking-wider ${item.name === "Bookings" ? "text-white" : ""}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  fontFamily: "'Cinzel Decorative', cursive",
                  textShadow: "2px 2px 0px #DC2626"
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DC2626] transition-all group-hover:w-full"></span>
              </button>
            )}

            {/* Book Button */}
            {!isOwner && (
              <Button
                variant="hero"
                size="lg"
                className="animate-fade-in bg-gradient-to-b from-yellow-400 to-yellow-600 text-black hover:from-yellow-300 hover:to-yellow-500 ml-4 hover:opacity-100 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(250,204,21,0.6)] border border-yellow-300 rounded-xl text-xl tracking-wider relative overflow-hidden group"
                style={{
                  fontFamily: "'Titan One', cursive",
                  textShadow: "none"
                }}
                onClick={() => navigate("/booking")}
              >
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 pointer-events-none rounded-t-xl"></div>
                <div className="absolute top-0 left-0 w-[50%] h-[3px] bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.9)] animate-ambient-slide pointer-events-none"></div>
                <span className="relative z-10 font-bold">Book</span>
              </Button>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-black/90 absolute top-20 left-0 right-0 border-b border-white/10 px-4">
            {navItems.map((item) =>
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`block w-full text-left py-3 text-[#FFD700] hover:text-white transition-colors text-lg border-b border-white/5 last:border-0 uppercase tracking-wider ${item.name === "Bookings" ? "text-white" : ""}`}
                style={{
                  fontFamily: "'Cinzel Decorative', cursive",
                  textShadow: "2px 2px 0px #DC2626"
                }}
              >
                {item.name}
              </button>
            )}

            {!isOwner && (
              <Button
                variant="hero"
                size="lg"
                className="w-full mt-6 bg-gradient-to-b from-yellow-400 to-yellow-600 text-black hover:from-yellow-300 hover:to-yellow-500 hover:opacity-100 shadow-[0_0_15px_rgba(250,204,21,0.6)] border border-yellow-300 rounded-xl text-xl tracking-wider relative overflow-hidden group transition-all duration-300"
                style={{
                  fontFamily: "'Titan One', cursive",
                  textShadow: "none",
                }}
                onClick={() => {
                  navigate("/booking");
                  setMobileMenuOpen(false);
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 pointer-events-none rounded-t-xl"></div>
                <div className="absolute top-0 left-0 w-[50%] h-[3px] bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.9)] animate-ambient-slide pointer-events-none"></div>
                <span className="relative z-10 font-bold">Book Now</span>
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
