import { useNavigate } from "react-router-dom";
import { ArrowLeft, Crown, Waves, Utensils, Home, Sunset, Camera, Palmtree, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

import WaterWaves from "@/components/WaterWaves";
import udaipurImg from "@/assets/udaipur.png";
import udaipurFoodImg from "@/assets/udaipur_thali.png";
import udaipurRoomImg from "@/assets/udaipur_lake_dinner.png";
import royalDecorImg from "@/assets/jaipur_wedding.png"; // Reusing for Royal Wedding Decor vibe
import weddingResortImg from "@/assets/rambagh_palace.png"; // Reusing palace image for Resort vibe

const UdaipurDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-950 via-blue-950 to-slate-900 text-white font-sans selection:bg-sky-500 selection:text-white relative">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <WaterWaves />
                {/* Background Atmosphere */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-sky-900/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
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
                                <Crown className="w-4 h-4 text-sky-300" />
                                <span className="text-sm font-medium tracking-wider uppercase text-sky-200">
                                    City of Lakes
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-500 mb-6 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Udaipur
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Waves className="w-5 h-5 text-sky-500" />
                                <span className="tracking-widest uppercase text-sm">Rajasthan, India</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Immerse yourself in the royal grandeur of Udaipur. Famous for its lavish palaces, shimmering lakes, and romantic sunsets. A destination that defines heritage luxury.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Crown className="w-8 h-8 text-yellow-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">City Palace</h3>
                                <p className="text-sm text-gray-400">Architectural Marvel.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Waves className="w-8 h-8 text-sky-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Lake Pichola</h3>
                                <p className="text-sm text-gray-400">Boat rides & Jag Mandir.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Utensils className="w-8 h-8 text-orange-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Rajasthani Thali</h3>
                                <p className="text-sm text-gray-400">Dal Baati Churma.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Sunset className="w-8 h-8 text-pink-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Sajjangarh</h3>
                                <p className="text-sm text-gray-400">Monsoon Palace Sunset.</p>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div
                            onClick={() => navigate('/booking?package=Udaipur%20Royal%20Package')}
                            className="bg-gradient-to-br from-sky-900/40 to-black border border-sky-500/30 rounded-3xl p-8 cursor-pointer hover:border-sky-500/60 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Heritage Palace Stay</h3>
                                    <p className="text-sky-200">Live like royalty in converted palace hotels.</p>
                                </div>
                                <Home className="w-10 h-10 text-sky-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><Crown className="w-4 h-4" /> Butler Service</span>
                                <span className="flex items-center gap-1"><Waves className="w-4 h-4" /> Lake Views</span>
                                <span className="px-3 py-1 bg-sky-500 text-black text-xs font-bold rounded-full ml-auto">ROYAL</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">

                        {/* Hero Image */}
                        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={udaipurImg}
                                alt="Udaipur City Palace"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold mb-2">Venice of the East</h3>
                                <p className="text-gray-300 font-light max-w-md">
                                    The white city reflecting in the turquoise waters of Lake Pichola.
                                </p>
                            </div>
                        </div>

                        {/* Visual Sections for Food & Resorts */}
                        <div className="space-y-6">

                            {/* Food Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Udaipur%20Food%20Walk')}>
                                <img src={udaipurFoodImg} alt="Rajasthani Thali" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Utensils className="text-yellow-400" /> Royal Feast</h3>
                                    <p className="text-sm text-gray-200">Authentic Rajasthani Thali & Sweets.</p>
                                </div>
                            </div>

                            {/* Resort Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Udaipur%20Lake%20Dinner')}>
                                <img src={udaipurRoomImg} alt="Lake Dinner" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Home className="text-sky-400" /> Romantic Evenings</h3>
                                    <p className="text-sm text-gray-200">Candlelight dinner on boat & Heritage stays.</p>
                                </div>
                            </div>

                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => navigate('/booking?package=Udaipur%20Honeymoon')}
                                className="w-full py-5 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-sky-900/50 uppercase tracking-widest text-sm"
                            >
                                Experience Royalty
                            </button>
                        </div>

                    </div>
                </div>
                {/* Royal Wedding Section */}
                <div className="container mx-auto mt-16 relative z-10 mb-20 animate-in slide-in-from-bottom duration-700 delay-300">
                    <div className="border-t border-white/10 pt-12">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-500 inline-block" style={{ fontFamily: 'serif' }}>
                                Royal Wedding Services
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Decor Section */}
                            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors group">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={royalDecorImg} alt="Royal Wedding Decor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-2xl font-bold text-white">Royal Mandap & Decor</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        Experience the grandeur of a Maharaja-style wedding. Our expert decorators create mesmerizing floral mandaps, crystal chandeliers, and traditional Rajasthani motifs.
                                    </p>
                                    <ul className="grid grid-cols-2 gap-3 text-sm text-gray-400">
                                        <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Floral Canopies</li>
                                        <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Vintage Props</li>
                                        <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Royal Seating</li>
                                        <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Sangeet Stages</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Resorts Section */}
                            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors group">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={weddingResortImg} alt="Wedding Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-2xl font-bold text-white">Luxury Palace Resorts</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        Host your functions at Udaipur's finest heritage hotels. Exclusive bookings for ceremonies with lake views and royal hospitality.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center bg-black/20 p-3 rounded-xl border border-white/5 hover:border-amber-500/30 transition-colors">
                                            <span className="font-medium text-white">The Leela Palace</span>
                                            <span className="text-xs text-amber-400 font-bold px-2 py-1 bg-amber-900/30 rounded">5 STAR</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-black/20 p-3 rounded-xl border border-white/5 hover:border-amber-500/30 transition-colors">
                                            <span className="font-medium text-white">Taj Lake Palace</span>
                                            <span className="text-xs text-amber-400 font-bold px-2 py-1 bg-amber-900/30 rounded">HERITAGE</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-black/20 p-3 rounded-xl border border-white/5 hover:border-amber-500/30 transition-colors">
                                            <span className="font-medium text-white">Oberoi Udaivilas</span>
                                            <span className="text-xs text-amber-400 font-bold px-2 py-1 bg-amber-900/30 rounded">ROYAL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default UdaipurDetails;
