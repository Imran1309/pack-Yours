import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Star, MapPin, Waves, Sun, Palmtree } from "lucide-react";
import heroImg from "../assets/andaman_wedding_beach.png"; // Placeholder
import tajCoveImg from "../assets/taj_fishermans_cove.jpg";

const ChennaiWeddingDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const venues = [
        {
            name: "Marina Beach Open Air",
            location: "Marina Beach, Chennai",
            desc: "A spectacular wedding venue right on the sands of the world's second-longest urban beach. Experience the magic of the Bay of Bengal.",
            image: heroImg,
            rating: "4.8",
            features: ["Beachfront", "Sunset View", "Large Capacity"]
        },
        {
            name: "Taj Fishermans Cove",
            location: "Covelong Beach (Near Chennai)",
            desc: "Built on the ramparts of an old Dutch Fort, Taj Fisherman's Cove Resort & Spa offers a soulful and tranquil ambiance.",
            image: tajCoveImg, // Updated with real image
            rating: "5.0",
            features: ["Luxury Resort", "Private Beach", "Historic"]
        }
    ];

    return (
        <div className="min-h-screen bg-orange-950 text-white font-sans selection:bg-orange-500 selection:text-white pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <img src={heroImg} alt="Chennai Wedding" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-orange-900/20 to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl animate-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/30 backdrop-blur-md border border-orange-500/30 mb-6">
                        <Waves className="w-5 h-5 text-orange-300" />
                        <span className="text-sm font-bold text-orange-100 uppercase tracking-widest">City & Sea</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-white to-yellow-200 drop-shadow-xl"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Chennai Weddings
                    </h1>
                    <p className="text-xl md:text-2xl text-orange-100 font-light tracking-wide mb-2 italic">
                        Heritage. Culture. Coastal Charm.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 mt-16 space-y-24">

                {/* Introduction */}
                <section className="text-center max-w-3xl mx-auto">
                    <p className="text-xl text-orange-100 leading-relaxed font-light">
                        Celebrate your union in Chennai, where tradition meets the sea. Form the bustling Marina to the serene resorts of ECR, find your perfect venue.
                    </p>
                </section>

                {/* Venues Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'serif' }}>Popular Venues</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {venues.map((venue, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
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
                                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors" style={{ fontFamily: 'serif' }}>{venue.name}</h3>
                                    <p className="text-orange-100/70 text-sm mb-6 leading-relaxed">
                                        {venue.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {venue.features.map((feature, fIdx) => (
                                            <span key={fIdx} className="text-xs font-medium px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-200">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => navigate(`/booking?package=${encodeURIComponent(venue.name)}`)}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold hover:shadow-lg hover:shadow-orange-900/50 transition-all uppercase tracking-widest text-sm"
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="pb-10 text-center">
                    <p className="text-orange-200/50 text-sm">Experience the warmth of Chennai.</p>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default ChennaiWeddingDetails;
