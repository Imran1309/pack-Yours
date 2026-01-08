
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Music, Utensils, Hotel, Tent, PartyPopper, Beer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Assets
import goaPartyImg from "@/assets/goa_beach_party_night_1765976164714.png";
import seafoodImg from "@/assets/goa_seafood_platter.png";
import fishFryImg from "@/assets/kerala_karimeen_pollichathu_1765904283596.png";
import vegFeastImg from "@/assets/kerala_sadhya.png"; // Reusing as generic veg feast
import pavBhajiImg from "@/assets/mumbai_pav_bhaji_1765971112475.png"; // Beach snacks
import kebabsImg from "@/assets/mumbai_chicken_kebabs_1765971162080.png";
import waterSportsImg from "@/assets/goa_water_sports_flyboard.png";

// Rooms
import resortImg from "@/assets/mumbai_premium_room_sea_view_1765971309015.png"; // Reusing sea view room
import dormImg from "@/assets/mumbai_hostel_dorm_1765971217665.png"; // Reusing dorm

const GoaIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Electric Nightlife",
            subtitle: "Party all night",
            image: goaPartyImg,
            quote: "Sleep is for the weak, party is for the pros."
        },
        {
            title: "Beach Vibes",
            subtitle: "Sun, Sand & Sea",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200", // Placeholder for general beach
            quote: "Salt in the air, sand in my hair."
        },
        {
            title: "Water Sports",
            subtitle: "Adrenaline Rush",
            image: waterSportsImg,
            quote: "Ride the waves."
        }
    ];

    const foodItems = [
        { name: "Goan Fish Curry", type: "Non-Veg", image: seafoodImg },
        { name: "Prawns Fry", type: "Non-Veg", image: fishFryImg },
        { name: "Chicken Xacuti", type: "Non-Veg", image: kebabsImg },
        { name: "Veg Vindaloo", type: "Veg", image: vegFeastImg },
        { name: "Beach Pav Bhaji", type: "Veg", image: pavBhajiImg },
        { name: "Mushroom Xacuti", type: "Veg", image: vegFeastImg },
    ];

    const partyPlaces = [
        { name: "Tito's Lane", desc: "The heart of Baga nightlife.", icon: <Music className="w-5 h-5 text-pink-400" /> },
        { name: "Curlies", desc: "Legendary beach shack parties.", icon: <Beer className="w-5 h-5 text-yellow-400" /> },
        { name: "Thalassa", desc: "Sunset vibes & greek style.", icon: <PartyPopper className="w-5 h-5 text-purple-400" /> },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500 selection:text-white pb-20">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black to-black"></div>
                {/* Neon texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
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
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4 py-2 leading-relaxed"
                                style={{ fontFamily: "'Great Vibes', cursive", lineHeight: "1.4" }}>
                                Goa Party Vibes
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-pink-500 pl-4 mt-4">
                                Live. Party. Repeat.
                            </p>
                        </div>

                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            The ultimate college escape. Sun-kissed beaches during the day, neon-lit parties at night. Experience the susegad life with your squad.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors col-span-1 sm:col-span-2">
                                <div className="flex items-center gap-3 mb-4 text-cyan-400">
                                    <Music className="w-6 h-6" />
                                    <span className="font-bold text-lg">Top Party Spots</span>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    {partyPlaces.map((place, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                                            <div className="p-2 bg-white/10 rounded-full">{place.icon}</div>
                                            <div>
                                                <h4 className="font-bold text-white">{place.name}</h4>
                                                <p className="text-xs text-gray-400">{place.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking?package=Goa%20Party')}
                            className="w-full py-5 bg-gradient-to-r from-pink-600 to-purple-600 hover:shadow-pink-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <PartyPopper className="w-6 h-6" />
                            Book Party Trip
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[500px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
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
                                        <p className="text-pink-300 text-lg italic">{slide.quote}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Food Spot Section */}
                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-md mb-6">
                            <Utensils className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm font-bold text-yellow-300 uppercase tracking-widest">FOOD PARTNER</span>
                        </div>
                        <h2 className="text-5xl font-bold text-white mb-2 font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">The Beach Shack</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto italic">
                            "Where the sea meets the spice. Enjoy our legendary authentic Goan feasts."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {foodItems.map((item, idx) => (
                            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer h-48 shadow-lg border border-white/5 hover:border-yellow-500/50 transition-all duration-300">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 p-4 w-full">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block ${item.type === 'Veg' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}`}>
                                        {item.type}
                                    </span>
                                    <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Accommodation */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-cyan-500/20 rounded-2xl">
                            <Hotel className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Chill Stays</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Resort */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg cursor-pointer">
                            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Luxury</div>
                            <img src={resortImg} alt="Beach Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Sea View Resorts</h3>
                                <p className="text-gray-300">Wake up to the sound of waves. AC rooms with balconies.</p>
                            </div>
                        </div>

                        {/* Dorm */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg cursor-pointer">
                            <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Budget</div>
                            <img src={dormImg} alt="Party Hostel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Party Hostels</h3>
                                <p className="text-gray-300">Social vibes, bunk beds, and new friends.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default GoaIVDetails;
