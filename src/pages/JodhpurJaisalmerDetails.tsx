import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Star, MapPin, Sun, Music, Shield } from "lucide-react";
import heroImg from "../assets/jodhpur_jaisalmer.png";
import rajasthanImg from "../assets/Rajasthan.png"; // Placeholder for Suryagarh if needed, or keeping it distinct
import udaipurImg from "../assets/udaipur.png"; // Placeholder for Suryagarh
import umaidBhawanImg from "../assets/umaid_bhawan.png";
import suryagarhImg from "../assets/suryagarh_jaisalmer.png";

const JodhpurJaisalmerDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const venues = [
        {
            name: "Umaid Bhawan Palace",
            location: "Jodhpur (Blue City)",
            desc: "One of the world's largest private residences, a symbol of royal heritage and luxury. Experience a wedding set amidst 26 acres of lush gardens and golden sandstone architecture.",
            image: umaidBhawanImg,
            rating: "5.0",
            features: ["Royal Residence", "Art Deco Style", "Grand Ballrooms"]
        },
        {
            name: "Suryagarh",
            location: "Jaisalmer (Golden City)",
            desc: "Your fortress in the desert. Suryagarh offers a unique blend of heritage and modern luxury, perfect for a destination wedding under the vast desert sky.",
            image: suryagarhImg,
            rating: "4.9",
            features: ["Desert Fortress", "Folk Music", "Thar Desert Views"]
        }
    ];

    const experiences = [
        {
            title: "Desert Drives",
            desc: "Explore the undulating dunes of the Thar Desert in style.",
            icon: Sun,
            color: "text-amber-500"
        },
        {
            title: "Folk Music & Dance",
            desc: "Enchanting performances by local Manganiyar musicians.",
            icon: Music,
            color: "text-rose-500"
        },
        {
            title: "Heritage Fort Tours",
            desc: "Walk through the history of Mehrangarh and Jaisalmer Fort.",
            icon: Shield,
            color: "text-blue-500"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500 selection:text-white pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <img src={heroImg} alt="Jodhpur & Jaisalmer" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl animate-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/30 backdrop-blur-md border border-amber-500/30 mb-6">
                        <Sun className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-bold text-amber-200 uppercase tracking-widest">Royal Desert Circuit</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-100 to-amber-400 drop-shadow-xl"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Jodhpur & Jaisalmer
                    </h1>
                    <p className="text-2xl md:text-3xl text-blue-200 font-light tracking-wide mb-2 italic">
                        The Blue & Golden Cities
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed max-w-2xl border-l-4 border-amber-500 pl-4 mt-6">
                        Majestic desert charm with venues providing unique experiences like desert drives and folk music.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 mt-16 space-y-24">

                {/* Introduction */}
                <section className="text-center max-w-4xl mx-auto">
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        Step into a world of <span className="text-blue-400 font-bold">Cobalt Blue</span> streets and <span className="text-amber-400 font-bold">Golden Sandstone</span> forts.
                        This circuit offers a raw, royal, and rustic charm that is perfect for couples seeking an exotic and grand wedding celebration.
                    </p>
                </section>

                {/* Venues Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'serif' }}>Legendary Venues</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {venues.map((venue, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
                                <div className="h-80 overflow-hidden relative">
                                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                        <span className="text-xs font-bold">{venue.rating}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full flex items-center gap-1">
                                        <MapPin className="w-4 h-4 text-white" />
                                        <span className="text-sm font-bold text-white">{venue.location}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'serif' }}>{venue.name}</h3>
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                        {venue.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {venue.features.map((feature, fIdx) => (
                                            <span key={fIdx} className="text-xs font-medium px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => navigate(`/booking?package=${encodeURIComponent(venue.name)}`)}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold hover:shadow-lg hover:shadow-amber-900/50 transition-all uppercase tracking-widest text-sm"
                                    >
                                        Plan Your Royal Wedding
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Signature Experiences */}
                <section className="bg-white/5 rounded-[3rem] p-8 md:p-12 border border-white/10">
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">Unforgettable Experiences</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
                                <div className={`w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4 ${exp.color}`}>
                                    <exp.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                                <p className="text-sm text-gray-400">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="pb-10 text-center">
                    <p className="text-gray-500 text-sm">Jodhpur & Jaisalmer - Where history comes alive.</p>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default JodhpurJaisalmerDetails;
