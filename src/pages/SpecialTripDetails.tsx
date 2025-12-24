import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Camera, Sun, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Assets (Proxies used since generation failed, replace with real assets later)
import indiaHero from "../assets/india (1).jpg"; // General India cover
import delhiImg from "../assets/mumbai_gateway_full_view_1765970435408.png"; // Proxy for India Gate
import jaipurImg from "../assets/ramoji_film_city_entrance_1765973648093.png"; // Proxy for Palace/Fort
import agraImg from "../assets/india (1).jpg"; // Re-using India, typically Taj Mahal

const SpecialTripDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const triangleCities = [
        {
            name: "Delhi",
            title: "Capital Heritage",
            desc: "Explore the Red Fort, India Gate, and the bustling streets of Chandni Chowk.",
            image: delhiImg,
            color: "from-orange-500"
        },
        {
            name: "Agra",
            title: "Symbol of Love",
            desc: "Witness the breathtaking Taj Mahal at sunrise and the majestic Agra Fort.",
            image: agraImg,
            color: "from-white" // using white/neutral to bridge colors
        },
        {
            name: "Jaipur",
            title: "The Pink City",
            desc: "Discover Hawa Mahal, Amber Fort, and royal Rajasthani hospitality.",
            image: jaipurImg,
            color: "from-green-500"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10"></div>
                <img src={indiaHero} alt="Golden Triangle" className="w-full h-full object-cover" />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
                    <div className="flex items-center gap-2 mb-4 bg-yellow-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-yellow-500/50">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-yellow-200 uppercase tracking-widest text-sm font-bold">Premium Special Edition</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-200 to-yellow-500 drop-shadow-2xl"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Golden Triangle
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 tracking-widest font-light uppercase border-t border-b border-white/20 py-4">
                        Delhi • Agra • Jaipur
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-30">
                <div className="flex items-center mb-12">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-all group border border-white/10"
                    >
                        <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <span className="ml-4 text-xl font-light text-gray-300">Back to All Plans</span>
                </div>

                <div className="space-y-32">
                    {triangleCities.map((city, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className={`absolute inset-0 bg-gradient-to-r ${city.color} to-transparent opacity-20 blur-3xl rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-1000`}></div>
                                <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={city.image} alt={city.name} className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <h3 className="absolute bottom-8 left-8 text-8xl font-bold text-white/10 select-none z-0">{city.name}</h3>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                    <MapPin className="w-4 h-4 text-yellow-500" />
                                    <span className="text-sm text-gray-400 uppercase tracking-wider">Day {idx * 2 + 1} - {idx * 2 + 2}</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">{city.title}</h2>
                                <p className="text-xl text-gray-300 leading-relaxed font-light">{city.desc}</p>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <Camera className="w-6 h-6 text-yellow-500 mb-2" />
                                        <p className="text-sm text-gray-400">Sightseeing</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <Sun className="w-6 h-6 text-orange-500 mb-2" />
                                        <p className="text-sm text-gray-400">Cultural Dive</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 mb-20 text-center bg-gradient-to-b from-white/5 to-transparent rounded-[3rem] p-16 border border-white/5">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready for the Golden Triangle?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">This special package includes luxury stays, guided tours, and comfortable travel across all three cities.</p>
                    <button onClick={() => navigate('/booking')} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-yellow-500/20 transition-all transform hover:-translate-y-1">
                        Book Special Trip
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SpecialTripDetails;
