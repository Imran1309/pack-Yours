import { useNavigate } from "react-router-dom";
import { ArrowLeft, Coffee, Mountain, Train, MapPin, Sunset, Camera, CloudFog, Utensils, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import darjMainImg from "@/assets/darjelling.png";
import darjTeaImg from "@/assets/darjeeling_tea.jpg";
import darjSunriseImg from "@/assets/darjeeling_sunrise.jpg";
import darjTeaEstateImg from "@/assets/darj_tea_estate.jpg";
import darjMountainViewImg from "@/assets/darj_mountain_view.jpg";

const DarjeelingDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white font-sans selection:bg-indigo-500 selection:text-white relative">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
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
                                    Queen of Hills
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 mb-6 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Darjeeling
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-5 h-5 text-indigo-500" />
                                <span className="tracking-widest uppercase text-sm">West Bengal, India</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Experience the timeless charm of Darjeeling. From the iconic Toy Train rides to the world-famous tea gardens and the breathtaking sunrise over Kanchenjunga. A colonial hill station with a soul.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Train className="w-8 h-8 text-red-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Toy Train</h3>
                                <p className="text-sm text-gray-400">UNESCO World Heritage.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Coffee className="w-8 h-8 text-green-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Tea Gardens</h3>
                                <p className="text-sm text-gray-400">Happy Valley & Glenburn.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Sunset className="w-8 h-8 text-orange-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Tiger Hill</h3>
                                <p className="text-sm text-gray-400">Sunrise over Kanchenjunga.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <CloudFog className="w-8 h-8 text-blue-300 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Batasia Loop</h3>
                                <p className="text-sm text-gray-400">Panoramic views & Memorial.</p>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div
                            onClick={() => navigate('/booking?package=Darjeeling%20Tea%20Tourism')}
                            className="bg-gradient-to-br from-indigo-900/40 to-black border border-indigo-500/30 rounded-3xl p-8 cursor-pointer hover:border-indigo-500/60 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Colonial Heritage Stay</h3>
                                    <p className="text-indigo-200">Stay in British-era bungalows with modern luxury.</p>
                                </div>
                                <Home className="w-10 h-10 text-indigo-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><Coffee className="w-4 h-4" /> Tea Tasting</span>
                                <span className="flex items-center gap-1"><Camera className="w-4 h-4" /> Vintage Charm</span>
                                <span className="px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full ml-auto">HERITAGE</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">

                        {/* Hero Image */}
                        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={darjMainImg}
                                alt="Darjeeling Landscapes"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold mb-2">Himalayan Beauty</h3>
                                <p className="text-gray-300 font-light max-w-md">
                                    Witness the breathtaking views of the Queen of the Hills.
                                </p>
                            </div>
                        </div>

                        {/* Visual Sections for Food & Resorts */}
                        <div className="space-y-6">

                            {/* Resorts Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Darjeeling%20Tea%20Estate%20Stay')}>
                                <img src={darjTeaEstateImg} alt="Darjeeling Tea Garden" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Coffee className="text-green-400" /> Tea Estate Bungalows</h3>
                                    <p className="text-sm text-gray-200">Wake up to lush green views and fresh brew.</p>
                                </div>
                            </div>

                            {/* Sunrise Card */}
                            <div className="relative h-64 rounded-2xl overflow-hidden group border border-white/10 cursor-pointer" onClick={() => navigate('/booking?package=Darjeeling%20Mountain%20View')}>
                                <img src={darjMountainViewImg} alt="Kanchenjunga Mountain View" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-1"><Mountain className="text-orange-400" /> Mountain View Rooms</h3>
                                    <p className="text-sm text-gray-200">Uninterrupted views of the snow-capped peaks.</p>
                                </div>
                            </div>

                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => navigate('/booking?package=Darjeeling%20Gateway')}
                                className="w-full py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-indigo-900/50 uppercase tracking-widest text-sm"
                            >
                                Plan Your Hill Trip
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DarjeelingDetails;
