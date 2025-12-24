import { useNavigate } from "react-router-dom";
import { ArrowLeft, Cloud, Mountain, Sunset, MapPin, Coffee, Camera, Snowflake, TreePine, Home, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kodaikanalLakeImg from "@/assets/kodaikanal_lake.png";
import pineForestImg from "@/assets/kodaikanal_pine_forest.png";
import resortViewImg from "@/assets/kodaikanal_resort_view.png";

const KodaikanalDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-950 via-purple-950 to-indigo-950 text-white font-sans selection:bg-pink-500 selection:text-white relative">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Background Atmosphere & Hearts */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

                    {/* Floating Hearts */}
                    {[...Array(15)].map((_, i) => (
                        <Heart
                            key={i}
                            className={`absolute text-red-500/60 animate-fall`}
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 30 + 10}px`,
                                height: `${Math.random() * 30 + 10}px`,
                                animationDuration: `${Math.random() * 10 + 10}s`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                            fill="currentColor"
                        />
                    ))}
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
                                <Snowflake className="w-4 h-4 text-purple-300" />
                                <span className="text-sm font-medium tracking-wider uppercase text-purple-200">
                                    Princess of Hill Stations
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Kodaikanal
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-5 h-5 text-purple-500" />
                                <span className="tracking-widest uppercase text-sm">Tamil Nadu, India</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Nestled in the rolling hills of the Palani Hills, Kodaikanal is a misty paradise offering a perfect respite from the heat. Famous for its star-shaped lake, pine forests, and homemade chocolates, it's a place where romance meets nature.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <TreePine className="w-8 h-8 text-green-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Pine Forests</h3>
                                <p className="text-sm text-gray-400">Walk through cinematic trails.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Cloud className="w-8 h-8 text-blue-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Misty Views</h3>
                                <p className="text-sm text-gray-400">Coaker's Walk & Pillar Rocks.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Mountain className="w-8 h-8 text-purple-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Trekking</h3>
                                <p className="text-sm text-gray-400">Adventure in the hills.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Coffee className="w-8 h-8 text-orange-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Chocolates</h3>
                                <p className="text-sm text-gray-400">Famous homemade delights.</p>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div
                            onClick={() => navigate('/booking?package=Kodaikanal%20Lake%20View%20Stay')}
                            className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30 rounded-3xl p-8 cursor-pointer hover:border-purple-500/60 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Lake View Cottages</h3>
                                    <p className="text-purple-200">Wake up to the serene view of Kodai Lake.</p>
                                </div>
                                <Home className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><Camera className="w-4 h-4" /> Scenic Spots</span>
                                <span className="flex items-center gap-1"><Sunset className="w-4 h-4" /> Bonfire Night</span>
                                <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full ml-auto">TRENDING</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">

                        {/* Hero Image - Lake */}
                        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={kodaikanalLakeImg}
                                alt="Kodaikanal Lake"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold mb-2">The Iconic Lake</h3>
                                <p className="text-gray-300 font-light max-w-md">
                                    Enjoy boating in the star-shaped lake surrounded by lush greenery. The heart of Kodaikanal.
                                </p>
                            </div>
                        </div>

                        {/* Secondary Image - Pine Forest */}
                        <div className="relative h-[300px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={pineForestImg}
                                alt="Pine Forest"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-2xl font-bold mb-1">Pine Forest Walk</h3>
                                <p className="text-gray-300 font-light text-sm">
                                    Get lost in the cinematic beauty of tall pine trees.
                                </p>
                            </div>
                        </div>

                        {/* Secondary Image - Resort View */}
                        <div className="relative h-[300px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={resortViewImg}
                                alt="Resort View"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-2xl font-bold mb-1">Luxury Stay</h3>
                                <p className="text-gray-300 font-light text-sm">
                                    Premium resorts with breathtaking valley views.
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => navigate('/booking?package=Kodaikanal%20Complete%20Tour')}
                                className="w-full py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-purple-900/50 uppercase tracking-widest text-sm"
                            >
                                Book Your Trip Now
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default KodaikanalDetails;
