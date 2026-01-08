import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Star, MapPin, Waves, Music, GlassWater, Sun } from "lucide-react";
import heroImg from "../assets/goa_beach_wedding_setup.jpg";
import beachImg from "../assets/agonda.png";
import resortImg from "../assets/goa_resort_pool.png";
import palolemImg from "../assets/palolem.jpg";
import titosImg from "../assets/titos_lane_party.jpg";

const GoaWeddingDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const partyVenues = [
        {
            name: "Tito's Lane Party Venue",
            location: "Baga Beach",
            desc: "The ultimate destination for a wedding that doubles as the wildest party of your life. Open-air decks, world-class DJs, and neon-lit vibes.",
            image: titosImg,
            rating: "4.9",
            features: ["Nightlife", "Live DJ", "Open Bar"]
        },
        {
            name: "Antares Beach Club",
            location: "Vagator",
            desc: "Perched on a cliff with stunning ocean views, offering a sophisticated party atmosphere with gourmet dining and sunset cocktails.",
            image: resortImg,
            rating: "4.7",
            features: ["Cliff View", "Gourmet Food", "Sunset Party"]
        }
    ];

    const beachVenues = [
        {
            name: "Palolem Beach Resort",
            location: "Palolem",
            desc: "Exchange vows on the pristine white sands of Palolem. A serene and picturesque setting for a romantic beach wedding.",
            image: palolemImg,
            rating: "4.8",
            features: ["White Sand", "Private Huts", "Calm Waters"]
        },
        {
            name: "Agonda White Sands",
            location: "Agonda",
            desc: "A quieter, more intimate beach location for couples seeking privacy and natural beauty away from the crowds.",
            image: beachImg,
            rating: "4.6",
            features: ["Privacy", "Eco-friendly", "Scenic"]
        }
    ];

    return (
        <div className="min-h-screen bg-fuchsia-950 text-white font-sans selection:bg-fuchsia-500 selection:text-white pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <img src={heroImg} alt="Goa Wedding Party" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-950 via-fuchsia-900/10 to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl animate-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-600/60 backdrop-blur-md border border-fuchsia-500/30 mb-6">
                        <Music className="w-5 h-5 text-white" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Party & Beach</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 text-fuchsia-300 drop-shadow-2xl"
                        style={{ fontFamily: "'Great Vibes', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        Goa Wedding Bash
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-medium tracking-wide mb-2 italic drop-shadow-lg">
                        Sun, Sand, and the Celebration of a Lifetime.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 mt-16 space-y-24">

                {/* Introduction */}
                <section className="text-center max-w-3xl mx-auto">
                    <p className="text-xl text-fuchsia-100 leading-relaxed font-light">
                        From sun-kissed vows on the beach to electrifying after-parties, Goa offers the perfect blend of romance and celebration.
                    </p>
                </section>

                {/* Party Places Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'serif' }}>Party Venues</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mx-auto"></div>
                        <p className="mt-4 text-fuchsia-200/60">For couples who want to dance the night away.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {partyVenues.map((venue, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2">
                                <div className="h-[500px] overflow-hidden relative">
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
                                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors" style={{ fontFamily: 'serif' }}>{venue.name}</h3>
                                    <p className="text-fuchsia-100/70 text-sm mb-6 leading-relaxed">
                                        {venue.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {venue.features.map((feature, fIdx) => (
                                            <span key={fIdx} className="text-xs font-medium px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-200">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => navigate(`/booking?package=${encodeURIComponent(venue.name)}`)}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-fuchsia-900/50 transition-all uppercase tracking-widest text-sm"
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Beach Places Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'serif' }}>Beach Side Venues</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
                        <p className="mt-4 text-cyan-200/60">Serene locations for a romantic beach wedding.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {beachVenues.map((venue, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2">
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
                                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors" style={{ fontFamily: 'serif' }}>{venue.name}</h3>
                                    <p className="text-cyan-100/70 text-sm mb-6 leading-relaxed">
                                        {venue.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {venue.features.map((feature, fIdx) => (
                                            <span key={fIdx} className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-200">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => navigate(`/booking?package=${encodeURIComponent(venue.name)}`)}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-900/50 transition-all uppercase tracking-widest text-sm"
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="pb-10 text-center">
                    <p className="text-fuchsia-200/50 text-sm">Experience the thrill of a Goa wedding.</p>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default GoaWeddingDetails;
