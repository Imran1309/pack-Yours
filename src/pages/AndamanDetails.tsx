import { useNavigate } from "react-router-dom";
import { ArrowLeft, Palmtree, Waves, Fish, MapPin, Anchor, Camera, Sun, Utensils, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import andaImg from "@/assets/anda.png";
import andamanFoodImg from "@/assets/andaman_seafood.png";
import andamanRoomImg from "@/assets/andaman_resort_room.png";

const AndamanDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-950 to-sky-950 text-white font-sans selection:bg-cyan-500 selection:text-white relative">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
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
                                <Waves className="w-4 h-4 text-cyan-300" />
                                <span className="text-sm font-medium tracking-wider uppercase text-cyan-200">
                                    Emerald Blue Paradise
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Andaman
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-5 h-5 text-cyan-500" />
                                <span className="tracking-widest uppercase text-sm">Andaman & Nicobar Islands</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Discover the pristine beauty of Andaman's Radhanagar Beach, vibrant coral reefs, and historical landmarks. From thrilling water sports to peaceful sunsets, it's a tropical haven like no other.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Palmtree className="w-8 h-8 text-green-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Havelock Island</h3>
                                <p className="text-sm text-gray-400">Radhanagar & Elephant Beach.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Fish className="w-8 h-8 text-orange-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Scuba Diving</h3>
                                <p className="text-sm text-gray-400">Explore vibrant marine life.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Anchor className="w-8 h-8 text-blue-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Cellular Jail</h3>
                                <p className="text-sm text-gray-400">Light & Sound Show.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Utensils className="w-8 h-8 text-yellow-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Sea Food</h3>
                                <p className="text-sm text-gray-400">Fresh catch of the day.</p>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div
                            onClick={() => navigate('/booking?package=Andaman%20Beach%20Resort')}
                            className="bg-gradient-to-br from-blue-900/40 to-black border border-cyan-500/30 rounded-3xl p-8 cursor-pointer hover:border-cyan-500/60 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Beachfront Private Pool Villa</h3>
                                    <p className="text-cyan-200">Luxury stay steps away from the turquoise ocean.</p>
                                </div>
                                <Home className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><Sun className="w-4 h-4" /> Sunbathing</span>
                                <span className="flex items-center gap-1"><Camera className="w-4 h-4" /> Island Hopping</span>
                                <span className="px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full ml-auto">PREMIUM</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">

                        {/* Hero Image */}
                        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={andaImg}
                                alt="Andaman Beach"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold mb-2">Radhanagar Beach</h3>
                                <p className="text-gray-300 font-light max-w-md">
                                    Voted one of the best beaches in Asia.
                                </p>
                            </div>
                        </div>

                        {/* Visual Sections for Food & Resorts */}
                        <div className="space-y-6">

                            {/* Food Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Andaman%20Seafood%20Feast')}>
                                <img src={andamanFoodImg} alt="Andaman Seafood" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Utensils className="text-orange-400" /> Island Seafood Feast</h3>
                                    <p className="text-sm text-gray-200">Fresh catch: Lobster, Crab, & Prawns by the beach.</p>
                                </div>
                            </div>

                            {/* Resort Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Andaman%20Luxury%20Stay')}>
                                <img src={andamanRoomImg} alt="Luxury Beach Resort" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Home className="text-cyan-400" /> Best Room Stay</h3>
                                    <p className="text-sm text-gray-200">Ocean view suites with private pools & modern luxury.</p>
                                </div>
                            </div>

                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => navigate('/booking?package=Andaman%20Complete%20Tour')}
                                className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-cyan-900/50 uppercase tracking-widest text-sm"
                            >
                                Book Your Island Escape
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AndamanDetails;
