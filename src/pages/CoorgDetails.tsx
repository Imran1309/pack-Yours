import { useNavigate } from "react-router-dom";
import { ArrowLeft, Coffee, Mountain, CloudRain, MapPin, Tent, Camera, Trees, Utensils, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coorgImg from "@/assets/coorg_coffee_hills.png";
import coorgPoolImg from "@/assets/coorg_resort_pool.jpg";
import coorgCottageImg from "@/assets/coorg_cottage.jpg";

const CoorgDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-950 via-emerald-950 to-teal-950 text-white font-sans selection:bg-green-500 selection:text-white relative">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
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
                                <Trees className="w-4 h-4 text-green-300" />
                                <span className="text-sm font-medium tracking-wider uppercase text-green-200">
                                    Scotland of India
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-6 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Coorg
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-5 h-5 text-green-500" />
                                <span className="tracking-widest uppercase text-sm">Karnataka, India</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Wake up to the aroma of fresh coffee in the misty hills of Coorg. Famous for its lush green plantations, cascading waterfalls, and warrior hospitality. A perfect escape into nature's lap.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Coffee className="w-8 h-8 text-brown-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Coffee Trails</h3>
                                <p className="text-sm text-gray-400">Bean to cup experience.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <CloudRain className="w-8 h-8 text-blue-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Abbey Falls</h3>
                                <p className="text-sm text-gray-400">Spectacular waterfalls.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Mountain className="w-8 h-8 text-emerald-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Raja's Seat</h3>
                                <p className="text-sm text-gray-400">Sunset viewpoints.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Utensils className="w-8 h-8 text-orange-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Kodava Cuisine</h3>
                                <p className="text-sm text-gray-400">Pandi Curry & Akki Roti.</p>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div
                            onClick={() => navigate('/booking?package=Coorg%20Plantation%20Stay')}
                            className="bg-gradient-to-br from-green-900/40 to-black border border-green-500/30 rounded-3xl p-8 cursor-pointer hover:border-green-500/60 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Luxury Plantation Stay</h3>
                                    <p className="text-green-200">Stay amidst 100-acre coffee estates.</p>
                                </div>
                                <Home className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><Tent className="w-4 h-4" /> Glamping</span>
                                <span className="flex items-center gap-1"><Camera className="w-4 h-4" /> Nature Walk</span>
                                <span className="px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-full ml-auto">ECO-STAY</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">

                        {/* Hero Image */}
                        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={coorgImg}
                                alt="Coorg Hills"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold mb-2">Misty Mornings</h3>
                                <p className="text-gray-300 font-light max-w-md">
                                    Experience the magic of Coorg's sunrise from the hilltops.
                                </p>
                            </div>
                        </div>

                        {/* Sections for Food & Resorts (using placeholders/icons for layout if specialized images missing) */}


                        {/* Visual Sections for Food & Resorts */}
                        <div className="space-y-6">

                            {/* Resorts Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Coorg%20Luxury%20Resort')}>
                                <img src={coorgPoolImg} alt="Coorg Resort Pool" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Home className="text-blue-400" /> Premium Resorts</h3>
                                    <p className="text-sm text-gray-200">Infinity pools overlooking the valley & luxury cottages.</p>
                                </div>
                            </div>

                            {/* Plantation Stay Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Coorg%20Plantation%20Cottage')}>
                                <img src={coorgCottageImg} alt="Coorg Wooden Cottage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Coffee className="text-brown-400" /> Plantation Stays</h3>
                                    <p className="text-sm text-gray-200">Stay in wooden cottages amidst coffee estates.</p>
                                </div>
                            </div>

                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => navigate('/booking?package=Coorg%20Weekend%20Getaway')}
                                className="w-full py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-green-900/50 uppercase tracking-widest text-sm"
                            >
                                Plan Your Coorg Trip
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CoorgDetails;
