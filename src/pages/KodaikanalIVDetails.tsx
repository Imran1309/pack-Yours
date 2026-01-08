
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flame, Utensils, Bus, Hotel, Music, Mountain, Trees, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Assets
import gunaCaveImg from "@/assets/kodaikanal_guna_cave_1765969425172.png";
import pineForestImg from "@/assets/kodaikanal_pine_forest.png";
import lakeImg from "@/assets/kodaikanal_lake.png";
import woodCottageImg from "@/assets/kodaikanal_wood_cottages_1765969453439.png";
import campTentImg from "@/assets/kodaikanal_camp_tents_1765969483017.png";
import luxuryResortImg from "@/assets/kodaikanal_resort_view.png";

// Food Assets
import vegDosaImg from "@/assets/mysore_masala_dosa_veg_1765905247257.png";
import vegSadhyaImg from "@/assets/kerala_sadhya.png";
import nonvegFeastImg from "@/assets/south_indian_nonveg_feast_1765904961097.png";
import parottaImg from "@/assets/kerala_parotta_curry_1765903887963.png";
import fishImg from "@/assets/kerala_karimeen_pollichathu_1765904283596.png";
import biryaniImg from "@/assets/bangalore_donne_biryani_1765905195089.png";
import seafoodImg from "@/assets/goa_seafood_platter.png";
import grillImg from "@/assets/kashmir_wazwan.png";

const KodaikanalIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Guna Cave",
            subtitle: "The Devil's Kitchen",
            image: gunaCaveImg,
            quote: "Manithar unarthukola ithu manitha kadhal alla"
        },
        {
            title: "Pine Forest",
            subtitle: "Walk Among Giants",
            image: pineForestImg,
            quote: "Lost in the woods, found in the moment."
        },
        {
            title: "Kodai Lake",
            subtitle: "Misty Waters",
            image: lakeImg,
            quote: "Reflections of serenity."
        }
    ];

    const foodItems = [
        // 2 Veg
        { name: "Hill Station Dosa", type: "Veg", image: vegDosaImg },
        { name: "Grand Veg Feast", type: "Veg", image: vegSadhyaImg },
        // 6 Non-Veg
        { name: "Chettinad Feast", type: "Non-Veg", image: nonvegFeastImg },
        { name: "Parotta & Salna", type: "Non-Veg", image: parottaImg },
        { name: "Spicy Fish Fry", type: "Non-Veg", image: fishImg },
        { name: "Donne Biryani", type: "Non-Veg", image: biryaniImg },
        { name: "Seafood Platter", type: "Non-Veg", image: seafoodImg },
        { name: "Hillside Grill", type: "Non-Veg", image: grillImg },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black"></div>
                {/* Mist Effect */}
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Clouds_over_the_Atlantic_Ocean.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay animate-slow-zoom"></div>
            </div>

            <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all group border border-white/10"
                >
                    <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Hero Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">

                    {/* Text Content */}
                    <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in order-2 lg:order-1">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-2 leading-tight"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Kodaikanal Escape
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-purple-500 pl-4 mt-4">
                                Princess of Hill Stations
                            </p>
                        </div>

                        {/* EMPHASIZED QUOTE - USER REQUEST */}
                        <div className="bg-purple-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-md relative overflow-hidden group hover:bg-purple-900/40 transition-colors">
                            <Quote className="absolute top-4 left-4 w-12 h-12 text-purple-500/20" />
                            <p className="text-3xl md:text-3xl font-bold text-center text-purple-200 italic leading-relaxed font-serif relative z-10 drop-shadow-lg">
                                "Manithar unarthukola ithu manitha kadhal alla"
                            </p>
                            <p className="text-center text-purple-400 mt-4 text-sm uppercase tracking-widest">- Gunaa</p>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-green-400">
                                    <Trees className="w-6 h-6" />
                                    <span className="font-bold text-lg">Pine Forests</span>
                                </div>
                                <p className="text-sm text-gray-400">Walk through the majestic pine forests, a perfect spot for photography and tranquility.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-red-400">
                                    <Mountain className="w-6 h-6" />
                                    <span className="font-bold text-lg">Guna Cave</span>
                                </div>
                                <p className="text-sm text-gray-400">Explore the mysterious Devil's Kitchen, where history and nature entwine.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-orange-400">
                                    <Flame className="w-6 h-6" />
                                    <span className="font-bold text-lg">Campfire Nights</span>
                                </div>
                                <p className="text-sm text-gray-400">Warm up by the fire under the starlit sky with music and friends.</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking?package=Kodaikanal%20Escape')}
                            className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-purple-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <Music className="w-6 h-6" />
                            Book This Trip
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[600px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
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
                                        <p className="text-purple-300 text-lg italic">{slide.quote}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Accommodations Section - 3 Types */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <Hotel className="w-8 h-8 text-amber-400" />
                        <h2 className="text-3xl font-bold text-white">Choose Your Stay</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Type 1: Cottage */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border-2 border-amber-500/50 shadow-2xl transform md:-translate-y-4">
                            <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full z-10">BESTSELLER</div>
                            <img src={woodCottageImg} alt="Wooden Cottage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-1">Wooden Cottages</h3>
                                <p className="text-gray-300 text-sm">Vibe with nature in cozy wooden stays.</p>
                            </div>
                        </div>

                        {/* Type 2: Camping */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg">
                            <img src={campTentImg} alt="Camping Tents" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-1">Adventure Camping</h3>
                                <p className="text-gray-300 text-sm">Stay in tents under the open sky.</p>
                            </div>
                        </div>

                        {/* Type 3: Resort */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg">
                            <img src={luxuryResortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-1">Valley View Resort</h3>
                                <p className="text-gray-300 text-sm">Comfort and luxury with stunning views.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Food Section - 2 Veg + 6 Non-Veg */}
                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-md mb-6">
                            <Utensils className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-bold text-purple-300 uppercase tracking-widest">Gastronomic Delight</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Feast in the Hills</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            From crispy dosas to spicy non-veg feasts, we have it all covered.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {foodItems.map((item, idx) => (
                            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer h-48 sm:h-64 shadow-lg border border-white/5 hover:border-purple-500/50 transition-all duration-300">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                <div className="absolute bottom-0 left-0 p-4 w-full">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block ${item.type === 'Veg' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}`}>
                                        {item.type}
                                    </span>
                                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-purple-300 transition-colors">{item.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default KodaikanalIVDetails;
