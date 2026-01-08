import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CloudRain, Mountain, Camera, Sunrise, MapPin, Waves, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Using placeholders initially, will replace with proper assets if available
// Mahe is a key requirement
const pondicherryHero = "/assets/auroville_matrimandir.png";
import aurovilleImg from "@/assets/auroville_matrimandir.png";
import maheBeachImg from "@/assets/mahe_beach.png";
import pondicherryImg from "@/assets/pondicherry_church.png";

const PondicherryIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Pondicherry",
            subtitle: "French Riviera of the East",
            image: pondicherryImg,
            quote: "Give time a break."
        },
        {
            title: "Mahe Beach",
            subtitle: "Serene & Beautiful",
            image: maheBeachImg, // Highlighting Mahe as requested
            quote: "Where the river meets the sea."
        },
        {
            title: "Auroville",
            subtitle: "City of Dawn",
            image: aurovilleImg,
            quote: "Human unity in diversity."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500 selection:text-white pb-20">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[120px] animate-pulse"></div>
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
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 mb-2 leading-tight"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Pondicherry Vibes
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-rose-500 pl-4 mt-4">
                                French Colonies & Mahe Beach
                            </p>
                        </div>

                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            Experience the unique blend of French colonial architecture and Indian culture. From the spiritual vibes of Auroville to the serene Mahe beachwalks, this industrial visit offers both learning and leisure.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-rose-400">
                                    <Building2 className="w-6 h-6" />
                                    <span className="font-bold text-lg">French Quarter</span>
                                </div>
                                <p className="text-sm text-gray-400">Walk through White Town's colonial heritage.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                    <Waves className="w-6 h-6" />
                                    <span className="font-bold text-lg">Mahe Beach</span>
                                </div>
                                <p className="text-sm text-gray-400">Relax at the beautiful Mahe riverside beach.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-yellow-400">
                                    <Sunrise className="w-6 h-6" />
                                    <span className="font-bold text-lg">Auroville</span>
                                </div>
                                <p className="text-sm text-gray-400">Visit the Matrimandir and sustainable city.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-purple-400">
                                    <Camera className="w-6 h-6" />
                                    <span className="font-bold text-lg">Paradise Beach</span>
                                </div>
                                <p className="text-sm text-gray-400">Boat ride to the pristine island beach.</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking?package=Pondicherry%20IV')}
                            className="w-full py-5 bg-gradient-to-r from-rose-600 to-pink-600 hover:shadow-rose-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <MapPin className="w-6 h-6" />
                            Book This Trip
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[500px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
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
                                        <p className="text-rose-400 text-lg italic">{slide.subtitle}</p>
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

export default PondicherryIVDetails;
