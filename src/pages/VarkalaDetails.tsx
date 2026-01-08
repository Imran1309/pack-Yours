import { useNavigate } from "react-router-dom";
import { ArrowLeft, Utensils, Bed, Wifi, Sun, MapPin, Coffee, Star, Waves } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import varkalaImg from "@/assets/kerala_varkala.png";

const VarkalaDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
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
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-4 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Varkala
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-5 h-5 text-orange-500" />
                                <span className="tracking-widest uppercase text-sm">Trivandrum, Kerala</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Where red cliffs meet the endless Arabian Sea. Varkala is a geological wonder offering stunning sunsets, pristine beaches, and a laid-back vibe that captivates every traveler.
                            </p>
                        </div>

                        {/* Food Section */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                                    <Utensils className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Cliff-side Dining</h2>
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-300">
                                    Enjoy fresh seafood and continental cuisines at cafes perched on the cliff edge, offering panoramic views of the ocean.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Fresh Seafood Catch</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-orange-400">
                                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                        <span>Sunset Cafe Vibes</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rooms Section */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-yellow-500/20 text-yellow-400 rounded-xl">
                                    <Bed className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Stay Options</h2>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Budget aka Beach Cottages */}
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-yellow-300">Beach Cottages</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li className="flex items-center gap-2"><Waves className="w-4 h-4" /> Near the Shore</li>
                                        <li className="flex items-center gap-2"><Wifi className="w-4 h-4" /> Rustic Charm</li>
                                        <li>Starting from ₹2,999</li>
                                    </ul>
                                </div>

                                {/* Luxury aka Cliff Resorts */}
                                <div className="p-4 rounded-xl bg-gradient-to-br from-orange-900/40 to-black/40 border border-orange-500/30">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg mb-2 text-orange-400">Cliff Top Resorts</h3>
                                        <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        <li className="flex items-center gap-2"><Sun className="w-4 h-4 text-yellow-400" /> Sunset Views</li>
                                        <li className="flex items-center gap-2"><Utensils className="w-4 h-4 text-blue-400" /> Premium Breakfast</li>
                                        <li>Starting from ₹6,499</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">
                        {/* Hero Image Card */}
                        <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                            <img
                                src={varkalaImg}
                                alt="Varkala Cliff"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <span className="px-3 py-1 bg-orange-500 text-black font-bold text-xs rounded-full uppercase tracking-wider mb-2 inline-block">Must Visit</span>
                                <h3 className="text-2xl font-bold">The Red Cliffs & Golden Sands</h3>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-3xl border border-orange-500/20 text-center">
                            <h3 className="text-xl font-bold mb-4">Experience the Vibe</h3>
                            <button
                                onClick={() => navigate('/booking?package=Varkala%20Beach%20Trip')}
                                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-orange-400 transition-colors shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest"
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

export default VarkalaDetails;
