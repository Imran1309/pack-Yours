import { useNavigate } from "react-router-dom";
import { ArrowLeft, Utensils, Anchor, Wifi, Sun, MapPin, Coffee, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import alleppeyHouseboatImg from "@/assets/alleppey_houseboat.png";
import alleppeyResortImg from "@/assets/alleppey_resort.png";

const AlleppeyDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <div className="container mx-auto mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Kerala</span>
                    </button>
                </div>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Content */}
                    <div className="space-y-12 animate-in slide-in-from-left duration-700">

                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mb-4 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Alleppey
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-5 h-5 text-blue-500" />
                                <span className="tracking-widest uppercase text-sm">Alappuzha, Kerala</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Known as the "Venice of the East," Alleppey offers a surreal experience of floating on tranquil backwaters. Drift past lush paddy fields, coconut groves, and rustling palms in our premium houseboats and lakeside resorts.
                            </p>
                        </div>

                        {/* Food Section */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl">
                                    <Utensils className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Authentic Cuisine</h2>
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-300">
                                    Savor the catch of the day! Our chefs prepare exquisite Karimeen Pollichathu (Pearl Spot Fish) and fresh seafood delicacies right on board using traditional Kerala spices.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 text-green-400">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Pure Veg Delights</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-red-400">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <span>Fresh Seafood Specials</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-gray-400">
                                    <Coffee className="w-4 h-4" />
                                    <span>Includes welcome drink & evening snacks</span>
                                </div>
                            </div>
                        </div>

                        {/* Rooms Section */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                                    <Anchor className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Stay Options</h2>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Option 1: Resort Stay */}
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-blue-300">Lakeside Resort</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li className="flex items-center gap-2"><Sun className="w-4 h-4" /> Sunrise View</li>
                                        <li className="flex items-center gap-2"><Wifi className="w-4 h-4" /> Modern Amenities</li>
                                        <li>Starting from ₹3,499</li>
                                    </ul>
                                </div>

                                {/* Option 2: Houseboat Stay */}
                                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-black/40 border border-blue-500/30">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg mb-2 text-cyan-400">Premium Houseboat</h3>
                                        <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        <li className="flex items-center gap-2"><Anchor className="w-4 h-4 text-blue-400" /> Cruising Experience</li>
                                        <li className="flex items-center gap-2"><Utensils className="w-4 h-4 text-orange-400" /> All Meals Included</li>
                                        <li>Starting from ₹7,999</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">
                        {/* Hero Image Card - Houseboat */}
                        <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                            <img
                                src={alleppeyHouseboatImg}
                                alt="Premium Houseboat"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <span className="px-3 py-1 bg-blue-500 text-white font-bold text-xs rounded-full uppercase tracking-wider mb-2 inline-block">Signature Experience</span>
                                <h3 className="text-2xl font-bold">Luxury Houseboat Cruise</h3>
                            </div>
                        </div>

                        {/* Special Resort Highlight - Backwater View */}
                        <div className="relative h-[300px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/10 group">
                            <img
                                src={alleppeyResortImg}
                                alt="Backwater Resort"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-cyan-400 mb-2">Waterfront Deck</h3>
                                <p className="text-sm text-gray-300">Wake up to the gentle splashing of water and the song of birds right at your doorstep.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-3xl border border-blue-500/20 text-center">
                            <h3 className="text-xl font-bold mb-4">Book Your Backwater Escape</h3>
                            <button
                                onClick={() => navigate('/booking?package=Alleppey%20Backwater%20Cruise')}
                                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-blue-400 transition-colors shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest"
                            >
                                Book This Trip
                            </button>
                        </div>

                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AlleppeyDetails;
