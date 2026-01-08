import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mountain, Cloud, Utensils, Home, Compass, Flower2, Sunrise } from "lucide-react";
import Navbar from "@/components/Navbar";

import Snowfall from "@/components/Snowfall";
import sikkimImg from "@/assets/sikkim.jpg";
import sikkimFoodImg from "@/assets/sikkim_momo.png";
import sikkimRoomImg from "@/assets/sikkim_mountain_room.png";
import snowDriftImg from "@/assets/snow_drift_footer.png";

const SikkimDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-white relative">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <Snowfall />
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
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
                                <Mountain className="w-4 h-4 text-emerald-300" />
                                <span className="text-sm font-medium tracking-wider uppercase text-emerald-200">
                                    Organic Himalayan State
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-6 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Sikkim
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Compass className="w-5 h-5 text-emerald-500" />
                                <span className="tracking-widest uppercase text-sm">North East India</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Discover the mystical land of Sikkim. Home to Kanchenjunga, ancient monasteries, and vibrant rhododendron valleys. A peaceful retreat into nature's lap.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Cloud className="w-8 h-8 text-white mb-3" />
                                <h3 className="font-bold text-lg mb-1">Nathula Pass</h3>
                                <p className="text-sm text-gray-400">Old Silk Route border.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Mountain className="w-8 h-8 text-emerald-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Kanchenjunga</h3>
                                <p className="text-sm text-gray-400">World's 3rd highest peak.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Utensils className="w-8 h-8 text-orange-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Momos & Thukpa</h3>
                                <p className="text-sm text-gray-400">Himalayan comforts.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Flower2 className="w-8 h-8 text-pink-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Yumthang Valley</h3>
                                <p className="text-sm text-gray-400">Valley of Flowers.</p>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div
                            onClick={() => navigate('/booking?package=Sikkim%20Himalayan%20Tour')}
                            className="bg-gradient-to-br from-emerald-900/40 to-black border border-emerald-500/30 rounded-3xl p-8 cursor-pointer hover:border-emerald-500/60 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Mountain Retreat</h3>
                                    <p className="text-emerald-200">Boutique stays with direct Kanchenjunga views.</p>
                                </div>
                                <Home className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><Sunrise className="w-4 h-4" /> Sunrise Views</span>
                                <span className="flex items-center gap-1"><Utensils className="w-4 h-4" /> Organic Food</span>
                                <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full ml-auto">NATURE</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">

                        {/* Hero Image */}
                        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={sikkimImg}
                                alt="Sikkim Kanchenjunga"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold mb-2">Himalayan Paradise</h3>
                                <p className="text-gray-300 font-light max-w-md">
                                    Witness the majestic sunrise over Kanchenjunga.
                                </p>
                            </div>
                        </div>

                        {/* Visual Sections for Food & Resorts */}
                        <div className="space-y-6">

                            {/* Food Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Sikkim%20Food%20Experience')}>
                                <img src={sikkimFoodImg} alt="Sikkim Momos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Utensils className="text-red-400" /> Himalayan Flavors</h3>
                                    <p className="text-sm text-gray-200">Steaming hot Momos with spicy chutney & Thukpa.</p>
                                </div>
                            </div>

                            {/* Resort Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Sikkim%20Homestay')}>
                                <img src={sikkimRoomImg} alt="Mountain View Room" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Home className="text-emerald-400" /> Mountain View Rooms</h3>
                                    <p className="text-sm text-gray-200">Cozy rooms with prayer flags and snow peak views.</p>
                                </div>
                            </div>

                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => navigate('/booking?package=Sikkim%20Adventure')}
                                className="w-full py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-emerald-900/50 uppercase tracking-widest text-sm"
                            >
                                Explore North East
                            </button>
                        </div>

                    </div>
                </div>

                {/* Snow Footer */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">
                    <img src={snowDriftImg} alt="" className="w-full object-cover h-24 md:h-32 opacity-90 mix-blend-screen" />
                </div>
            </main>


        </div>
    );
};

export default SikkimDetails;
