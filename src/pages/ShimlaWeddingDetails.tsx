import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Mountain, Snowflake, Music, Hotel, Star, MapPin } from "lucide-react";
import heroImg from "../assets/manali_snow_mountains.png"; // Using existing snow image for now
import shimlaWildflowerImg from "../assets/shimla_wildflower_hall_wedding.jpg";
import shimlaNatureViewImg from "../assets/shimla_nature_wedding_view.png";

const ShimlaWeddingDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const venues = [
        {
            name: "Wildflower Hall",
            location: "Chharabra, Shimla",
            desc: "A fairytale luxury resort in the Himalayas. Exchange vows amidst pine forests with panoramic snow-capped mountain views. Former residence of Lord Kitchener.",
            image: shimlaWildflowerImg,
            rating: "5.0",
            features: ["Colonial Heritage", "Himalayan View", "Luxury Spa"]
        },
        {
            name: "Nature Wedding View",
            location: "Summer Hill",
            desc: "A magical forest wedding setting under the canopy of tall deodar trees. Perfect for a bohemian or rustic themed wedding with nature as your backdrop.",
            image: shimlaNatureViewImg,
            rating: "4.8",
            features: ["Forest Setting", "Nature Vibe", "Private & Secluded"]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <img src={heroImg} alt="Shimla Wedding" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-slate-50/90"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/30 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl animate-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 mb-6 shadow-lg">
                        <Snowflake className="w-5 h-5 text-sky-500" />
                        <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Winter Wonderland</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 text-slate-800 drop-shadow-sm"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Shimla Wedding
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-700 font-light tracking-wide mb-2 italic">
                        Romance in the Queen of Hills.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 mt-16 space-y-24">

                {/* Introduction */}
                <section className="text-center max-w-3xl mx-auto">
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        From heritage colonial charm to enchanting pine forests, Shimla offers a timeless and romantic setting for your dream mountain wedding.
                    </p>
                </section>

                {/* Venues Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'serif' }}>Wedding Venues</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto"></div>
                        <p className="mt-4 text-slate-500">Handpicked locations for your special day.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {venues.map((venue, idx) => (
                            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                                <div className="h-[400px] overflow-hidden relative">
                                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                        <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                                        <span className="text-xs font-bold text-slate-800">{venue.rating}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                        <MapPin className="w-4 h-4 text-slate-700" />
                                        <span className="text-sm font-bold text-slate-800">{venue.location}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-3xl font-bold text-slate-800 mb-3" style={{ fontFamily: 'serif' }}>{venue.name}</h3>
                                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                        {venue.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {venue.features.map((feature, fIdx) => (
                                            <span key={fIdx} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => navigate(`/booking?package=${encodeURIComponent(venue.name)}`)}
                                        className="w-full py-4 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-all uppercase tracking-widest text-sm shadow-lg shadow-slate-200"
                                    >
                                        Request Quote
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="pb-10 text-center">
                    <p className="text-slate-400 text-sm">Create memories in the heart of the Himalayas.</p>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default ShimlaWeddingDetails;
