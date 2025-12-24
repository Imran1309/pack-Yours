import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Mountain, CloudFog, Coffee, Star, MapPin } from "lucide-react";
import heroImg from "../assets/coorg_misty_plantation_1765904860516.png";
import resortImg from "../assets/coorg_resort_pool.jpg";
import estateImg from "../assets/coorg_coffee_hills.png";

const CoorgWeddingDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const venues = [
        {
            name: "The Tamara Coorg",
            location: "Kabbinakad Estate",
            desc: "A luxury resort nestled in a 180-acre organic coffee plantation. Experience a wedding surrounded by lush greenery, waterfalls, and the aroma of fresh coffee.",
            image: estateImg,
            rating: "4.9",
            features: ["Coffee Plantation", "Waterfall View", "Luxury Cottages"]
        },
        {
            name: "Evolve Back Chikkana Halli",
            location: "Siddapura",
            desc: "Step back in time to the gentleman planter's life. A heritage luxury resort with Kodava style architecture, private pools, and lily ponds.",
            image: resortImg,
            rating: "5.0",
            features: ["Heritage Architecture", "Private Pools", "Ayurvedic Spa"]
        }
    ];

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <img src={heroImg} alt="Coorg Wedding" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/30 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl animate-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/80 backdrop-blur-sm border border-emerald-500/30 mb-6 shadow-lg">
                        <CloudFog className="w-5 h-5 text-emerald-300" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Scotland of India</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 text-white drop-shadow-lg"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Coorg Weddings
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-200 font-light tracking-wide mb-2 italic">
                        Vows amidst the mist and coffee hills.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 mt-16 space-y-24">

                {/* Introduction */}
                <section className="text-center max-w-3xl mx-auto">
                    <p className="text-xl text-stone-700 leading-relaxed font-light">
                        Celebrate your love in the verdant hills of Coorg. From heritage plantation stays to luxurious nature resorts, discover the perfect backdrop for your intimate mountain wedding.
                    </p>
                </section>

                {/* Venues Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6" style={{ fontFamily: 'serif' }}>Plantation Venues</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto"></div>
                        <p className="mt-4 text-stone-500">Exclusive estates for a romantic getaway.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {venues.map((venue, idx) => (
                            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-stone-100 group">
                                <div className="h-[400px] overflow-hidden relative">
                                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                        <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                                        <span className="text-xs font-bold text-stone-800">{venue.rating}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                        <MapPin className="w-4 h-4 text-stone-700" />
                                        <span className="text-sm font-bold text-stone-800">{venue.location}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-3xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors" style={{ fontFamily: 'serif' }}>{venue.name}</h3>
                                    <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                                        {venue.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {venue.features.map((feature, fIdx) => (
                                            <span key={fIdx} className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => navigate(`/booking?package=${encodeURIComponent(venue.name)}`)}
                                        className="w-full py-4 rounded-xl bg-emerald-900 text-white font-bold hover:bg-emerald-800 transition-all uppercase tracking-widest text-sm shadow-lg shadow-emerald-200"
                                    >
                                        Inquire Availability
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="pb-10 text-center">
                    <p className="text-stone-400 text-sm">Experience the serenity of nature.</p>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default CoorgWeddingDetails;
