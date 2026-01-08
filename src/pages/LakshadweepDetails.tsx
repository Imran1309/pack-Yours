import { useNavigate } from "react-router-dom";
import { ArrowLeft, Anchor, Sun, Fish, MapPin, Ship, Camera, Palmtree, Utensils, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import lakshImg from "@/assets/laksh.png";
import lakshFoodImg from "@/assets/lakshadweep_food.png";
import lakshResortImg from "@/assets/lakshadweep_resort_cottage.png";

const LakshadweepDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-950 via-cyan-950 to-blue-950 text-white font-sans selection:bg-teal-500 selection:text-white relative">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>

                {/* Back Button */}
                <div className="container mx-auto mb-12 relative z-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Destinations</span>
                    </button>
                </div>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

                    {/* Left Column: Content */}
                    <div className="space-y-12 animate-in slide-in-from-left duration-700">

                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                                <Palmtree className="w-4 h-4 text-teal-300" />
                                <span className="text-sm font-medium tracking-wider uppercase text-teal-200">
                                    Coral Island Paradise
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-6 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Lakshadweep
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-5 h-5 text-teal-500" />
                                <span className="tracking-widest uppercase text-sm">India's Coral Islands</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Explore the untouched beauty of Lakshadweep. A cluster of 36 islands known for their sun-kissed beaches and lush green landscapes. A diver's dream and a honeymooner's paradise.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Anchor className="w-8 h-8 text-blue-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Agatti Island</h3>
                                <p className="text-sm text-gray-400">Gateway to the archipelago.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Fish className="w-8 h-8 text-orange-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Coral Reefs</h3>
                                <p className="text-sm text-gray-400">World-class snorkeling.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Ship className="w-8 h-8 text-teal-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Bangaram</h3>
                                <p className="text-sm text-gray-400">The jewel of Lakshadweep.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Utensils className="w-8 h-8 text-yellow-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Tuna & Coconut</h3>
                                <p className="text-sm text-gray-400">Unique local flavors.</p>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div
                            onClick={() => navigate('/booking?package=Lakshadweep%20Water%20Villa')}
                            className="bg-gradient-to-br from-teal-900/40 to-black border border-teal-500/30 rounded-3xl p-8 cursor-pointer hover:border-teal-500/60 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Lagoon Water Villa</h3>
                                    <p className="text-teal-200">Exclusive stay over the crystal clear lagoon.</p>
                                </div>
                                <Home className="w-10 h-10 text-teal-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><Sun className="w-4 h-4" /> Private Deck</span>
                                <span className="flex items-center gap-1"><Camera className="w-4 h-4" /> Glass Floor</span>
                                <span className="px-3 py-1 bg-teal-500 text-black text-xs font-bold rounded-full ml-auto">LUXURY</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">

                        {/* Hero Image */}
                        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={lakshImg}
                                alt="Lakshadweep Aerial"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold mb-2">Agatti Island</h3>
                                <p className="text-gray-300 font-light max-w-md">
                                    Witness the breathtaking aerial view of the airstrip on the ocean.
                                </p>
                            </div>
                        </div>

                        {/* Visual Sections for Food & Resorts */}
                        <div className="space-y-6">

                            {/* Food Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Lakshadweep%20Coastal%20Cuisine')}>
                                <img src={lakshFoodImg} alt="Lakshadweep Cuisine" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Utensils className="text-green-400" /> Coastal Delicacies</h3>
                                    <p className="text-sm text-gray-200">Fresh Tuna Curry, Coconut Rice & Fried Fish.</p>
                                </div>
                            </div>

                            {/* Resort Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Lakshadweep%20Eco%20Cottage')}>
                                <img src={lakshResortImg} alt="Eco Friendly Cottage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Home className="text-teal-400" /> Island Cottages</h3>
                                    <p className="text-sm text-gray-200">Eco-friendly stay steps away from the turquoise ocean.</p>
                                </div>
                            </div>

                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => navigate('/booking?package=Lakshadweep%20Honeymoon%20Package')}
                                className="w-full py-5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-teal-900/50 uppercase tracking-widest text-sm"
                            >
                                Book Your Tropical Getaway
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LakshadweepDetails;
