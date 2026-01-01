import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/company-logo.png";

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
    { name: "Destinations", type: "page", path: "/states" },
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
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Title */}
          <div className="flex items-center gap-4 md:gap-8 animate-slide-in cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Dhana Tour Consultors Logo" className="h-16 w-auto md:h-20" />

            <div className="flex flex-col">
              <h1
                className="text-sm md:text-3xl font-bold translate-y-1 whitespace-nowrap"
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
                Dhana Tour Consultors
              </h1>

              <p
                className="text-xs md:text-lg block whitespace-nowrap"
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
                className="animate-fade-in bg-cyan-400 text-black hover:bg-cyan-300 ml-4 hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(34,211,238,0.5)] border-2 border-cyan-300 rounded-xl text-xl tracking-wider"
                style={{
                  fontFamily: "'Titan One', cursive",
                  textShadow: "none"
                }}
                onClick={() => navigate("/booking")}
              >
                Book
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
                className="w-full mt-6 bg-cyan-400 text-black hover:bg-cyan-300 hover:opacity-90 shadow-[0_0_15px_rgba(34,211,238,0.5)] border-2 border-cyan-300 rounded-xl text-xl tracking-wider"
                style={{
                  fontFamily: "'Titan One', cursive",
                  textShadow: "none",
                }}
                onClick={() => {
                  navigate("/booking");
                  setMobileMenuOpen(false);
                }}
              >
                Book Now
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
