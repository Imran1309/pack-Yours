import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Star, MapPin, Gem, Crown, Sparkles } from "lucide-react";
import jaipurHero from "../assets/jaipur_wedding.png";
import rajasthanImg from "../assets/Rajasthan.png";
import udaipurImg from "../assets/udaipur.png";
import luxuryHotelImg from "../assets/ramoji_sitara_hotel_luxury_1765973972127.png";
import samodePalaceImg from "../assets/samode_palace.jpg";
import rambaghPalaceImg from "../assets/rambagh_palace.png";
import alilaFortImg from "../assets/alila_fort.png";

const JaipurWeddingDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const venues = [
        {
            name: "Rambagh Palace",
            desc: "The 'Jewel of Jaipur', a former residence of the Maharaja, offering unmatched luxury.",
            image: rambaghPalaceImg,
            rating: "5.0",
            features: ["Royal Gardens", "Ballrooms", "Heritage Suites"]
        },
        {
            name: "Samode Palace",
            desc: "Exquisite Indo-Saracenic architecture with mirror work and painted ceilings.",
            image: samodePalaceImg,
            rating: "4.9",
            features: ["Sheesh Mahal", "Courtyards", "Hilltop View"]
        },
        {
            name: "Alila Fort Bishangarh",
            desc: "A 230-year-old warrior fort converted into a luxury resort.",
            image: alilaFortImg,
            rating: "4.8",
            features: ["Historic Fort", "Dungeons to Dining", "360° Views"]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500 selection:text-white pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <img src={jaipurHero} alt="Jaipur Royal Wedding" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl animate-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600/30 backdrop-blur-md border border-pink-500/30 mb-6">
                        <Crown className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-bold text-pink-200 uppercase tracking-widest">Royal Destination</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-100 to-amber-200 drop-shadow-xl"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Jaipur
                    </h1>
                    <p className="text-2xl md:text-3xl text-pink-100 font-light tracking-wide mb-2 italic">
                        The Pink City
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed max-w-2xl border-l-4 border-pink-500 pl-4 mt-6">
                        Renowned for its heritage and grandeur, ideal for a royal celebration with traditional flair.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 mt-16 space-y-24">

                {/* Introduction / Why Jaipur */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white flex items-center gap-3">
                            <Sparkles className="w-8 h-8 text-yellow-400" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                A Fairytale Beginning
                            </span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Jaipur offers a wedding experience like no other. From elephant processions to fireworks over palace domes, every moment is steeped in royalty.
                            Exchange vows in centuries-old courtyards and dine under the stars in the company of kings.
                        </p>
                        <div className="flex gap-4">
                            <div className="p-4 rounded-xl bg-pink-900/20 border border-pink-500/20 text-center">
                                <h4 className="text-2xl font-bold text-pink-400">Royalty</h4>
                                <p className="text-sm text-gray-400">Heritage</p>
                            </div>
                            <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 text-center">
                                <h4 className="text-2xl font-bold text-purple-400">Culture</h4>
                                <p className="text-sm text-gray-400">Tradition</p>
                            </div>
                            <div className="p-4 rounded-xl bg-amber-900/20 border border-amber-500/20 text-center">
                                <h4 className="text-2xl font-bold text-amber-400">Luxury</h4>
                                <p className="text-sm text-gray-400">Grandeur</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                        <img src={jaipurHero} alt="Jaipur Palace" className="w-full h-full object-cover scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent mix-blend-overlay"></div>
                    </div>
                </section>

                {/* Venues Section */}
                <section>
                    <div className="text-center mb-16">
                        <span className="text-pink-400 font-bold tracking-widest uppercase mb-2 block">Premium Venues</span>
                        <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'serif' }}>Where Dreams Come True</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {venues.map((venue, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                        <span className="text-xs font-bold">{venue.rating}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">{venue.name}</h3>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {venue.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {venue.features.map((feature, fIdx) => (
                                            <span key={fIdx} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => navigate('/booking?package=Jaipur%20Royal%20Wedding')}
                                        className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-pink-900/50 transition-all"
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="pb-10 text-center">
                    <p className="text-gray-500 text-sm">Experience the Pink City in its full glory.</p>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default JaipurWeddingDetails;
