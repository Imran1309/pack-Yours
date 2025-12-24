import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mountain, Snowflake, Utensils, Home, Tent, Flame, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";

import Snowfall from "@/components/Snowfall";
import manaliImg from "@/assets/manali_snow_mountains.png";
import manaliFoodImg from "@/assets/manali_food.png";
import manaliRoomImg from "@/assets/manali_snow_resort.png";
import snowDriftImg from "@/assets/snow_drift_footer.png";

const ManaliDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500 selection:text-white relative">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Background Atmosphere & Snow */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <Snowfall />
                    <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse"></div>
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
                                <Mountain className="w-4 h-4 text-indigo-300" />
                                <span className="text-sm font-medium tracking-wider uppercase text-indigo-200">
                                    Valley of Gods
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white mb-6 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Manali
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Mountain className="w-5 h-5 text-white" />
                                <span className="tracking-widest uppercase text-sm">Himachal Pradesh, India</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Nestled in the Himalayas, Manali offers a perfect blend of peace and adventure. From snow-covered Solang Valley to the spiritual vibes of Hadimba Temple.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Snowflake className="w-8 h-8 text-sky-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Solang Valley</h3>
                                <p className="text-sm text-gray-400">Paragliding & Skiing.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Tent className="w-8 h-8 text-green-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Camping</h3>
                                <p className="text-sm text-gray-400">Riverside & Mountain camps.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Utensils className="w-8 h-8 text-yellow-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Siddu</h3>
                                <p className="text-sm text-gray-400">Local steamed bread delicacy.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Flame className="w-8 h-8 text-orange-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Old Manali</h3>
                                <p className="text-sm text-gray-400">Cafes & Vibes.</p>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div
                            onClick={() => navigate('/booking?package=Manali%20Snow%20Adventure')}
                            className="bg-gradient-to-br from-gray-800 to-black border border-white/20 rounded-3xl p-8 cursor-pointer hover:border-white/40 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Snow Resort Escape</h3>
                                    <p className="text-gray-400">Luxury amidst the pine forests and snow peaks.</p>
                                </div>
                                <Home className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><Coffee className="w-4 h-4" /> Hot Chocolate</span>
                                <span className="flex items-center gap-1"><Snowflake className="w-4 h-4" /> Snow Views</span>
                                <span className="px-3 py-1 bg-white text-black text-xs font-bold rounded-full ml-auto">MOST POPULAR</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">

                        {/* Hero Image */}
                        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={manaliImg}
                                alt="Manali Snow Mountains"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold mb-2">Himalayan Magic</h3>
                                <p className="text-gray-300 font-light max-w-md">
                                    Where the mountains touch the sky.
                                </p>
                            </div>
                        </div>

                        {/* Visual Sections for Food & Resorts */}
                        <div className="space-y-6">

                            {/* Food Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Manali%20Food%20Tour')}>
                                <img src={manaliFoodImg} alt="Manali Siddu" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Utensils className="text-green-400" /> Himachali Cuisine</h3>
                                    <p className="text-sm text-gray-200">Authentic Siddu, Dham, and Trout Fish.</p>
                                </div>
                            </div>

                            {/* Resort Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Manali%20Resort%20Stay')}>
                                <img src={manaliRoomImg} alt="Manali Snow Resort" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Home className="text-indigo-400" /> Cozy Snow Retreats</h3>
                                    <p className="text-sm text-gray-200">Warm cottages with private balconies and heaters.</p>
                                </div>
                            </div>

                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => navigate('/booking?package=Manali%20Adventure')}
                                className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-indigo-900/50 uppercase tracking-widest text-sm"
                            >
                                Book Your Mountain Escape
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

export default ManaliDetails;
