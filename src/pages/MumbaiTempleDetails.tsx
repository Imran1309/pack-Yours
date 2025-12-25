import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Quote, Sparkles, Sun, Bed, Utensils, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Specific Assets for Mumbai
import siddhivinayakImg from "@/assets/mumbaitemple.jpg";
import hajiAliImg from "@/assets/haajiali.png";
const hotelImg = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"; // Luxury Hotel
const foodImg = "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1921&auto=format&fit=crop"; // Vada Pav

const MumbaiTempleDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const mumbaiSlides = [
        {
            title: "Siddhivinayak Temple",
            subtitle: "Lord Ganesha",
            image: siddhivinayakImg,
            icon: Sparkles,
            description: "The Shree Siddhivinayak Ganapati Mandir is dedicated to Lord Shri Ganesh. It is one of the richest temples in India and a significant spiritual destination.",
            quote: "Ganpati Bappa Morya!",
            route: "/booking?package=Mumbai%20Darshan"
        },
        {
            title: "Haji Ali Dargah",
            subtitle: "The Floating Shrine",
            image: hajiAliImg,
            icon: Sun,
            description: "A mosque and dargah located on an islet off the coast of Worli. A stunning example of Indo-Islamic architecture associated with legends of doomed lovers.",
            quote: "A beacon of faith in the Arabian Sea.",
            route: "/booking?package=Mumbai%20Darshan"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % mumbaiSlides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-rose-600 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden">

                {/* Background Slideshow */}
                {mumbaiSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                    >
                        {/* Vignette & Overlay */}
                        <div className="absolute inset-0 bg-slate-950/60 z-10 transition-colors duration-1000"></div>
                        {/* Background Image - Scale effect */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className={`w-full h-full object-cover blur-sm transform transition-transform duration-[10s] ease-linear ${index === activeSlide ? "scale-110" : "scale-100"}`}
                        />
                    </div>
                ))}

                {/* Content Overlay */}
                <div className="relative z-20 pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">

                    {/* Back Button */}
                    <div className="absolute top-28 left-4 lg:left-8 z-50">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all group flex items-center gap-2"
                        >
                            <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Text Content */}
                        <div className="space-y-8 animate-in slide-in-from-left duration-700">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-500/30 backdrop-blur-md">
                                <span className="animate-pulse w-2 h-2 rounded-full bg-rose-400"></span>
                                <span className="text-sm font-medium tracking-wider uppercase text-rose-200">
                                    {mumbaiSlides[activeSlide].subtitle}
                                </span>
                            </div>

                            <h1
                                onClick={() => navigate(mumbaiSlides[activeSlide].route)}
                                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-100 to-white py-2 leading-tight cursor-pointer hover:text-rose-300 transition-colors"
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                            >
                                {mumbaiSlides[activeSlide].title}
                            </h1>

                            <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-rose-400 backdrop-blur-sm">
                                <Quote className="w-8 h-8 text-rose-400 mb-4 opacity-50" />
                                <p className="text-xl text-rose-100 italic leading-relaxed font-light">
                                    "{mumbaiSlides[activeSlide].quote}"
                                </p>
                            </div>

                            <p className="text-lg text-slate-200 font-light leading-relaxed">
                                {mumbaiSlides[activeSlide].description}
                            </p>

                            <button
                                onClick={() => navigate(mumbaiSlides[activeSlide].route)}
                                className="px-8 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold rounded-full hover:from-rose-700 hover:to-pink-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest text-sm"
                            >
                                Explore Mumbai
                            </button>
                        </div>

                        {/* Right Image Card - Slideshow Style */}
                        <div className="relative h-[500px] w-full lg:w-[90%] mx-auto hidden lg:block animate-in slide-in-from-right duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-[3rem] transform rotate-6 blur-xl"></div>
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => navigate(mumbaiSlides[activeSlide].route)}>
                                <img
                                    key={activeSlide} // Key forces re-mount for animation
                                    src={mumbaiSlides[activeSlide].image}
                                    alt={mumbaiSlides[activeSlide].title}
                                    className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
                                    style={{ objectPosition: "center" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    {(() => {
                                        const ActiveIcon = mumbaiSlides[activeSlide].icon;
                                        return <ActiveIcon className="w-10 h-10 text-rose-200" />;
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section - Food & Room */}
                <div className="relative z-20 bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-rose-500/20">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden border border-rose-500/20 shadow-2xl bg-slate-900/20">
                            {/* Room Card */}
                            <div className="relative h-[400px] group overflow-hidden">
                                <img src={hotelImg} alt="Mumbai Luxury Stay" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-3 mb-2 text-rose-400"><Building2 className="w-6 h-6" /><span className="uppercase tracking-widest text-sm font-bold">City Stays</span></div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Luxury & Heritage</h3>
                                    <p className="text-rose-100/80">Stay at iconic locations offering stunning views of likely the Queen's Necklace or the Arabian Sea.</p>
                                </div>
                            </div>
                            {/* Food Card */}
                            <div className="relative h-[400px] group overflow-hidden border-t lg:border-t-0 lg:border-l border-rose-500/20 bg-black">
                                <img src={foodImg} alt="Vada Pav" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-3 mb-2 text-rose-400"><Utensils className="w-6 h-6" /><span className="uppercase tracking-widest text-sm font-bold">Mumbai Cha Swad</span></div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Vada Pav & Street Food</h3>
                                    <p className="text-rose-100/80">Taste the spirit of Mumbai with authentic Vada Pav, Pav Bhaji, and cutting chai.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <div className="relative z-20 bg-slate-950 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="p-8 bg-gradient-to-r from-rose-800 to-pink-800 rounded-3xl border border-rose-500/40 text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-2 text-white">Experience the City of Dreams</h3>
                        <p className="text-rose-200/80 mb-6 text-sm">Book your Mumbai Darshan tour today.</p>
                        <button
                            onClick={() => navigate('/booking?package=Mumbai%20Tour')}
                            className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest"
                        >
                            Book Now
                        </button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default MumbaiTempleDetails;
