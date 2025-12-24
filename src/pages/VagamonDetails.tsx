import { useNavigate } from "react-router-dom";
import { ArrowLeft, Utensils, Bed, Wifi, Wind, MapPin, Coffee, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import resortVagImg from "@/assets/resortvag.jpg";

const VagamonDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-white">
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
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-4 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Vagamon
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-5 h-5 text-green-500" />
                                <span className="tracking-widest uppercase text-sm">Idukki District, Kerala</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Escape to the rolling meadows and pine forests of Vagamon. A place where the mist plays hide and seek with the hills. We offer a curated experience that brings you closer to nature without compromising on comfort.
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
                                    Relish the authentic flavors of the hills. Our specialized kitchen serves dishes made from locally sourced fresh spices and ingredients.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 text-green-400">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Pure Veg Delights</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-red-400">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <span>Spicy Non-Veg Specials</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-gray-400">
                                    <Coffee className="w-4 h-4" />
                                    <span>Includes complimentary morning tea & evening snacks</span>
                                </div>
                            </div>
                        </div>

                        {/* Rooms Section */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                                    <Bed className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Stay Options</h2>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Budget */}
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-blue-300">Budget Friendly</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li className="flex items-center gap-2"><Wind className="w-4 h-4" /> Non-AC Rooms</li>
                                        <li className="flex items-center gap-2"><Wifi className="w-4 h-4" /> Free Wi-Fi</li>
                                        <li>Starting from ₹1,499</li>
                                    </ul>
                                </div>

                                {/* Luxury */}
                                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-black/40 border border-purple-500/30">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg mb-2 text-amber-400">Luxury Resorts</h3>
                                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        <li className="flex items-center gap-2"><Wind className="w-4 h-4 text-blue-400" /> Premium AC Rooms</li>
                                        <li className="flex items-center gap-2"><Utensils className="w-4 h-4 text-orange-400" /> Breakfast Included</li>
                                        <li>Starting from ₹4,999</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">
                        {/* Hero Image Card */}
                        <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                            <img
                                src={resortVagImg}
                                alt="Misty Meadows Resort"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <span className="px-3 py-1 bg-green-500 text-black font-bold text-xs rounded-full uppercase tracking-wider mb-2 inline-block">Featured</span>
                                <h3 className="text-2xl font-bold">Misty Meadows Resort</h3>
                            </div>
                        </div>

                        {/* Special Resort Highlight */}
                        <div className="relative h-[300px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/10 group">
                            <img
                                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
                                alt="Special Resort"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-amber-400 mb-2">Special Honeymoon Cottage</h3>
                                <p className="text-sm text-gray-300">Private balcony with valley view, candlelight dinner setup, and flower decoration.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-green-900/40 to-teal-900/40 rounded-3xl border border-green-500/20 text-center">
                            <h3 className="text-xl font-bold mb-4">Plan Your Perfect Getaway</h3>
                            <button
                                onClick={() => navigate('/booking?package=Vagamon%20Special%20Trip')}
                                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-green-400 transition-colors shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest"
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

export default VagamonDetails;
