import { useNavigate } from "react-router-dom";
import { ArrowLeft, Utensils, Bed, Wifi, Anchor, MapPin, Building, Star, Store } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kochiImg from "@/assets/kerala_kochi.png";

const KochiDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-white">
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
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Kochi
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-5 h-5 text-cyan-500" />
                                <span className="tracking-widest uppercase text-sm">Ernakulam, Kerala</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                The Queen of the Arabian Sea. A perfect blend of old-world colonial charm and modern city life. Explore historical Fort Kochi, bustling Marine Drive, and the vibrant culture of this port city.
                            </p>
                        </div>

                        {/* Highlights Section */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
                                    <Anchor className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">City Highlights</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
                                    <span>Vypin Beach</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">2</div>
                                    <span>Lulu Mall</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">3</div>
                                    <span>Marine Drive Ride</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">4</div>
                                    <span>Fort Kochi</span>
                                </div>
                            </div>
                        </div>

                        {/* Rooms Section */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-xl">
                                    <Bed className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Stay Options</h2>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Budget aka City Hotels */}
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-cyan-300">City Hotels</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li className="flex items-center gap-2"><Building className="w-4 h-4" /> Near LULU Mall</li>
                                        <li className="flex items-center gap-2"><Wifi className="w-4 h-4" /> Modern Amenities</li>
                                        <li>Starting from ₹2,499</li>
                                    </ul>
                                </div>

                                {/* Luxury aka Heritage Stay */}
                                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-900/40 to-black/40 border border-cyan-500/30">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg mb-2 text-cyan-400">Heritage Hotels</h3>
                                        <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        <li className="flex items-center gap-2"><Store className="w-4 h-4 text-yellow-400" /> Fort Kochi Charm</li>
                                        <li className="flex items-center gap-2"><Utensils className="w-4 h-4 text-purple-400" /> Fusion Dining</li>
                                        <li>Starting from ₹5,499</li>
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
                                src={kochiImg}
                                alt="Kochi Collage"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="px-3 py-1 bg-cyan-500 text-black font-bold text-xs rounded-full uppercase tracking-wider mb-2 inline-block">Urban & Historic</span>
                                <h3 className="text-2xl font-bold">Fishing Nets & City Lights</h3>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-3xl border border-cyan-500/20 text-center">
                            <h3 className="text-xl font-bold mb-4">Explore the City</h3>
                            <button
                                onClick={() => navigate('/booking?package=Kochi%20City%20Tour')}
                                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest"
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

export default KochiDetails;
