import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Mountain, Waves, Star, MapPin } from "lucide-react";

import goaVibesCardImg from "../assets/goa_beach_wedding_setup.jpg";
import mountainImg from "../assets/shimla_nature_wedding_view.png";
import natureImg from "../assets/coorg_misty_plantation_1765904860516.png";
import weddingBg from "../assets/wedding_bg.png";
import weddingHugBg from "../assets/wedding_hug_flowers.png";
import weddingWalkingBg from "../assets/wedding_walking.png";
import jaipurWeddingImg from "../assets/jaipur_wedding.png";
import jodhpurImg from "../assets/jodhpur_jaisalmer.png";

import alleppeyBoatImg from "../assets/alleppey_boat_wedding.jpg";
import chennaiImg from "../assets/andaman_wedding_beach.png";

// Fallback image if wd.jpg isn't actually importable this way (JS vs TS import)
const heroImage = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80";

const WeddingTripDetails = () => {
    const navigate = useNavigate();

    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const backgrounds = [weddingBg, weddingHugBg, weddingWalkingBg];

    useEffect(() => {
        window.scrollTo(0, 0);

        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const categories = [
        {
            title: "Special Packages",
            subtitle: "Exclusive & Premium",
            icon: Star,
            color: "text-yellow-400",
            bg: "bg-yellow-400/10",
            desc: "Curated experiences for the perfect wedding journey."
        },
        {
            title: "Popular Areas",
            subtitle: "Trending Destinations",
            icon: MapPin,
            color: "text-rose-400",
            bg: "bg-rose-400/10",
            desc: "Top rated locations loved by couples."
        },
        {
            title: "Beach & Coastal",
            subtitle: "Sun, Sand & Vows",
            icon: Waves,
            color: "text-cyan-400",
            bg: "bg-cyan-400/10",
            desc: "Romantic seaside getaways."
        },
        {
            title: "Mountain & Nature",
            subtitle: "Serene & Majestic",
            icon: Mountain,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
            desc: "Escape to the hills and lush greenery."
        }
    ];

    const specificPackages = [
        {
            category: "Special Packages",
            items: [
                { name: "Taj Mahal Agra", image: "/src/assets/agra_taj_mahal_romantic_1766064172254.png", route: "/destinations/agra" },
                { name: "Royal Palace Wedding", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800", route: "/destinations/udaipur" },
                { name: "Jodhpur & Jaisalmer", image: jodhpurImg, route: "/destinations/jodhpur-jaisalmer" },
                { name: "Jaipur Royal", image: jaipurWeddingImg, route: "/destinations/jaipur" },
            ]
        },
        {
            category: "Popular Areas",
            items: [
                { name: "Goa Vibes", image: goaVibesCardImg, route: "/destinations/goa-wedding" },
                { name: "Kerala Houseboat", image: alleppeyBoatImg, route: "/destinations/kochi-wedding" },
                { name: "Chennai Marina", image: chennaiImg, route: "/destinations/chennai-wedding" },
            ]
        },
        {
            category: "Beach & Coastal",
            items: [
                { name: "Andaman Bliss", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800", route: "/destinations/andaman" },
                { name: "Lakshadweep Coral", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800", route: "/destinations/lakshadweep" },
            ]
        },
        {
            category: "Mountain & Nature",
            items: [
                { name: "Shimla Wedding", image: mountainImg, route: "/destinations/shimla-wedding" },
                { name: "Coorg Mist", image: natureImg, route: "/destinations/coorg-wedding" },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500 selection:text-white pb-20">
            <Navbar />

            {/* Fixed Full Screen Background Slideshow */}
            <div className="fixed inset-0 z-0">
                {backgrounds.map((bg, index) => (
                    <img
                        key={index}
                        src={bg}
                        alt={`Wedding Background ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Hero Section */}
            <div className="relative h-[80vh] w-full flex flex-col justify-end z-10">
                {/* No separate image needed here as we have main background, or we keep it for effect? 
                    Let's use the main background. 
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl animate-in slide-in-from-left duration-700">
                    <span className="text-yellow-400 font-bold tracking-widest uppercase mb-4 block">Celebration of Love</span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 text-rose-300 drop-shadow-lg"
                        style={{ fontFamily: "'Great Vibes', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        Wedding Trips
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mb-4">
                        Plan the perfect destination wedding or a romantic pre-wedding getaway.
                    </p>
                    <p className="text-lg md:text-xl text-yellow-300 font-medium leading-relaxed max-w-2xl bg-black/40 p-4 rounded-lg backdrop-blur-sm border border-yellow-500/30">
                        Make your shoot with our expert if you need photographer and party dj also available here.
                    </p>
                </div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-4 mt-8 space-y-24">

                {/* Categories Grid - Quick Access */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-default">
                            <div className={`p-3 rounded-full w-fit mb-4 ${cat.bg}`}>
                                <cat.icon className={`w-6 h-6 ${cat.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{cat.title}</h3>
                            <p className="text-sm font-medium text-gray-400 mb-2">{cat.subtitle}</p>
                            <p className="text-xs text-gray-500 leading-relaxed">{cat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Sub-Pages Sections */}
                {specificPackages.map((section, idx) => (
                    <section key={idx} className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-2 bg-gradient-to-b from-rose-500 to-purple-500 rounded-full"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'serif' }}>{section.category}</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {section.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    onClick={() => navigate(item.route)}
                                    className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-lg hover:shadow-rose-900/20"
                                >
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90"></div>

                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-rose-300 transition-colors">{item.name}</h3>
                                        <div className="h-1 w-12 bg-rose-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>

                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                        <Star className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </section>
                ))}

            </main>
            <Footer />
        </div>
    );
};

export default WeddingTripDetails;
