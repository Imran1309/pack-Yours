import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Star, MapPin, Droplets, Sun, Fish } from "lucide-react";
import heroImg from "../assets/lakshadweep_wedding.png";
import beachPartyImg from "../assets/goa_beach_party_night_1765976164714.png"; // Placeholder for Bangaram night view if needed

const LakshadweepWeddingDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const venues = [
        {
            name: "Bangaram Island Resort",
            location: "Bangaram Atoll",
            desc: "The only resort on this uninhabited island, offering an exclusive private island wedding experience. Surrounded by phosphorescent plankton and coral reefs.",
            image: heroImg,
            rating: "5.0",
            features: ["Private Island", "Lagoon Views", "Bioluminescence"]
        },
        {
            name: "Agatti Island Beach Resort",
            location: "Agatti Island",
            desc: "Known for its stunning coral reefs and turquoise lagoons. A perfect blend of natural beauty and island hospitality for your special day.",
            image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800", // Standard tropical placeholder
            rating: "4.8",
            features: ["Coral Reefs", "Glass Bottom Boats", "Beachfront Cottages"]
        }
    ];

    return (
        <div className="min-h-screen bg-teal-950 text-white font-sans selection:bg-teal-500 selection:text-white pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <img src={heroImg} alt="Lakshadweep Wedding" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-900/20 to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl animate-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600/30 backdrop-blur-md border border-teal-500/30 mb-6">
                        <Fish className="w-5 h-5 text-teal-300" />
                        <span className="text-sm font-bold text-teal-100 uppercase tracking-widest">Coral Paradise</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-cyan-200 drop-shadow-xl"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Lakshadweep
                    </h1>
                    <p className="text-xl md:text-2xl text-teal-100 font-light tracking-wide mb-2 italic">
                        100,000 Islands of Romance
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 mt-16 space-y-24">

                {/* Introduction */}
                <section className="text-center max-w-3xl mx-auto">
                    <p className="text-xl text-teal-100 leading-relaxed font-light">
                        Discover the untouched beauty of India's coral islands. A wedding in Lakshadweep is a celebration of pristine nature,
                        where the ocean is your witness and the white sands your aisle.
                    </p>
                </section>

                {/* Venues Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'serif' }}>Lagoon Venues</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {venues.map((venue, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-2">
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
                                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors" style={{ fontFamily: 'serif' }}>{venue.name}</h3>
                                    <p className="text-teal-100/70 text-sm mb-6 leading-relaxed">
                                        {venue.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {venue.features.map((feature, fIdx) => (
                                            <span key={fIdx} className="text-xs font-medium px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-200">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => navigate(`/booking?package=${encodeURIComponent(venue.name)}`)}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-teal-900/50 transition-all uppercase tracking-widest text-sm"
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="pb-10 text-center">
                    <p className="text-teal-200/50 text-sm">Where time stands still.</p>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default LakshadweepWeddingDetails;
