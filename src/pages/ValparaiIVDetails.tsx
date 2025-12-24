import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CloudRain, Mountain, Camera, Sunrise, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Using a placeholder for now, as generation failed/rate limited. Ideally this should be Valparai specific.
import valparaiHero from "@/assets/darj_tea_estate.jpg";

import aliyarDam from "@/assets/aliyar_dam.png";

const ValparaiIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Valparai",
            subtitle: "Pollution Free Heaven",
            image: valparaiHero,
            quote: "Where the tea gardens touch the sky."
        },
        {
            title: "Aliyar Dam",
            subtitle: "Scenic Reservoir",
            image: aliyarDam,
            quote: "Serenity by the waters."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-white pb-20">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[120px] animate-pulse"></div>
                </div>
            </div>

            <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all group border border-white/10"
                >
                    <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Hero / Main Package Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Text Content */}
                    <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in order-2 lg:order-1">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 mb-2 leading-tight"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Valparai Nature
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-green-500 pl-4 mt-4">
                                Misty Hills & Hairpin Bends
                            </p>
                        </div>

                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            Explore the pollution-free paradise of Valparai. Famous for its 40 hairpin bends, majestic tea estates, and spotting Nilgiri Tahr. A perfect getaway for nature lovers.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-green-400">
                                    <Mountain className="w-6 h-6" />
                                    <span className="font-bold text-lg">40 Hairpin Bends</span>
                                </div>
                                <p className="text-sm text-gray-400">Thrilling drive through the Anamalai mountains.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                    <CloudRain className="w-6 h-6" />
                                    <span className="font-bold text-lg">Sholayar Dam</span>
                                </div>
                                <p className="text-sm text-gray-400">Visit the second deepest dam in Asia.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-yellow-400">
                                    <Camera className="w-6 h-6" />
                                    <span className="font-bold text-lg">Wildlife Spotting</span>
                                </div>
                                <p className="text-sm text-gray-400">Spot Lion-tailed macaques and Nilgiri Tahr.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-orange-400">
                                    <Sunrise className="w-6 h-6" />
                                    <span className="font-bold text-lg">Nallamudi View</span>
                                </div>
                                <p className="text-sm text-gray-400">Breathtaking sunrise view point over the valleys.</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking?package=Valparai%20Nature')}
                            className="w-full py-5 bg-gradient-to-r from-green-600 to-teal-600 hover:shadow-green-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <MapPin className="w-6 h-6" />
                            Book This Trip
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[500px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
                        <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 p-6">
                                        <h3 className="text-4xl font-bold text-white mb-2">{slide.title}</h3>
                                        <p className="text-green-400 text-lg italic">{slide.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ValparaiIVDetails;
