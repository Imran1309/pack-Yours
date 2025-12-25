import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Quote, Sparkles, Sun, Bed, Utensils, Wheat } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Specific Assets for Punjab
const goldenTempleImg = "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=2070&auto=format&fit=crop";
import durgianaImg from "@/assets/punjabtemple1.png";
import haveliImg from "@/assets/punjabresort.png";
import foodImg from "@/assets/punjabfood.png";

const PunjabTempleDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const punjabSlides = [
        {
            title: "The Golden Temple",
            subtitle: "Harmandir Sahib",
            image: goldenTempleImg,
            icon: Sparkles,
            description: "The holiest Gurdwara of Sikhism, located in the city of Amritsar. The Harmandir Sahib stands as a symbol of human brotherhood and equality.",
            quote: "Recognize the whole human race as one.",
            route: "/booking?package=Golden%20Temple%20Darshan"
        },
        {
            title: "Durgiana Temple",
            subtitle: "Lakshmi Narayan Temple",
            image: durgianaImg,
            icon: Sun,
            description: "Often called the Silver Temple, this Hindu temple in Amritsar is dedicated to Goddess Durga and bears a resemblance to the Golden Temple.",
            quote: "Devotion is the highest form of love.",
            route: "/booking?package=Amritsar%20Temple%20Tour"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % punjabSlides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-orange-950 text-white font-sans selection:bg-orange-600 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden">

                {/* Background Slideshow */}
                {punjabSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                    >
                        {/* Vignette & Overlay */}
                        <div className="absolute inset-0 bg-orange-950/60 z-10 transition-colors duration-1000"></div>
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 backdrop-blur-md">
                                <span className="animate-pulse w-2 h-2 rounded-full bg-orange-400"></span>
                                <span className="text-sm font-medium tracking-wider uppercase text-orange-200">
                                    {punjabSlides[activeSlide].subtitle}
                                </span>
                            </div>

                            <h1
                                onClick={() => navigate(punjabSlides[activeSlide].route)}
                                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-100 to-white py-2 leading-tight cursor-pointer hover:text-orange-300 transition-colors"
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                            >
                                {punjabSlides[activeSlide].title}
                            </h1>

                            <div className="bg-orange-900/40 p-6 rounded-2xl border-l-4 border-orange-400 backdrop-blur-sm">
                                <Quote className="w-8 h-8 text-orange-400 mb-4 opacity-50" />
                                <p className="text-xl text-orange-100 italic leading-relaxed font-light">
                                    "{punjabSlides[activeSlide].quote}"
                                </p>
                            </div>

                            <p className="text-lg text-orange-100/90 font-light leading-relaxed">
                                {punjabSlides[activeSlide].description}
                            </p>

                            <button
                                onClick={() => navigate(punjabSlides[activeSlide].route)}
                                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-full hover:from-orange-700 hover:to-red-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest text-sm"
                            >
                                Visit Punjab
                            </button>
                        </div>

                        {/* Right Image Card - Slideshow Style */}
                        <div className="relative h-[500px] w-full lg:w-[90%] mx-auto hidden lg:block animate-in slide-in-from-right duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-[3rem] transform rotate-6 blur-xl"></div>
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => navigate(punjabSlides[activeSlide].route)}>
                                <img
                                    key={activeSlide} // Key forces re-mount for animation
                                    src={punjabSlides[activeSlide].image}
                                    alt={punjabSlides[activeSlide].title}
                                    className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
                                    style={{ objectPosition: "center" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    {(() => {
                                        const ActiveIcon = punjabSlides[activeSlide].icon;
                                        return <ActiveIcon className="w-10 h-10 text-orange-200" />;
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section - Food & Room */}
                <div className="relative z-20 bg-orange-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden border border-orange-500/20 shadow-2xl bg-orange-900/20">
                            {/* Room Card */}
                            <div className="relative h-[400px] group overflow-hidden">
                                <img src={haveliImg} alt="Punjab Farm Stay" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-3 mb-2 text-yellow-400"><Wheat className="w-6 h-6" /><span className="uppercase tracking-widest text-sm font-bold">Pind Experience</span></div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Desi Farm Stays</h3>
                                    <p className="text-orange-100/80">Experience the heart of Punjab with a stay in a traditional Haveli or Farmhouse surrounded by lush fields.</p>
                                </div>
                            </div>
                            {/* Food Card */}
                            <div className="relative h-[400px] group overflow-hidden border-t lg:border-t-0 lg:border-l border-orange-500/20 bg-black">
                                <img src={foodImg} alt="Punjabi Thali" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-3 mb-2 text-yellow-400"><Utensils className="w-6 h-6" /><span className="uppercase tracking-widest text-sm font-bold">Punjab Da Swad</span></div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Amritsari Kulcha & Lassi</h3>
                                    <p className="text-orange-100/80">Relish authentic Sarson da Saag, Makki di Roti, and a tall glass of creamy Lassi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <div className="relative z-20 bg-orange-950 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="p-8 bg-gradient-to-r from-orange-800 to-red-800 rounded-3xl border border-orange-500/40 text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-2 text-white">Seek Blessings at Golden Temple</h3>
                        <p className="text-orange-200/80 mb-6 text-sm">Join us for a spiritual journey to the land of five rivers.</p>
                        <button
                            onClick={() => navigate('/booking?package=Punjab%20Pilgrimage')}
                            className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest"
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

export default PunjabTempleDetails;
