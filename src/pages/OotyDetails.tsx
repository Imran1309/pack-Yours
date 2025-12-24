import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flower2, Mountain, Train, MapPin, Ticket, Camera, CloudFog, Utensils, Home, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ootyLakeImg from "@/assets/ooty_lake_boat_house.png";
import botanicalGardenImg from "@/assets/ooty_botanical_garden.png";
import toyTrainImg from "@/assets/ooty_toy_train.png";
import resortViewImg from "@/assets/ooty_resort_view.png";

const OotyDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-950 via-rose-950 to-purple-950 text-white font-sans selection:bg-pink-500 selection:text-white relative">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Background Atmosphere & Hearts */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

                    {/* Floating Hearts */}
                    {[...Array(50)].map((_, i) => (
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
                                <CloudFog className="w-4 h-4 text-teal-300" />
                                <span className="text-sm font-medium tracking-wider uppercase text-teal-200">
                                    Queen of Hill Stations
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Ooty
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-5 h-5 text-teal-500" />
                                <span className="tracking-widest uppercase text-sm">Tamil Nadu, India</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Welcome to Ooty, the Queen of Hill Stations. Famous for its heritage train rides, sprawling botanical gardens, and the misty Doddabetta Peak. Experience the charm of colonial-era bungalows and homemade chocolates.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Flower2 className="w-8 h-8 text-pink-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Botanical Garden</h3>
                                <p className="text-sm text-gray-400">Exotic flora & glass house.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Train className="w-8 h-8 text-orange-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Toy Train</h3>
                                <p className="text-sm text-gray-400">UNESCO Heritage ride.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Mountain className="w-8 h-8 text-purple-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Doddabetta</h3>
                                <p className="text-sm text-gray-400">Highest peak panoramic views.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Utensils className="w-8 h-8 text-yellow-400 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Chocolates & Tea</h3>
                                <p className="text-sm text-gray-400">Taste local delicacies.</p>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div
                            onClick={() => navigate('/booking?package=Ooty%20Heritage%20Stay')}
                            className="bg-gradient-to-br from-teal-900/40 to-black border border-teal-500/30 rounded-3xl p-8 cursor-pointer hover:border-teal-500/60 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Heritage Bungalow Stay</h3>
                                    <p className="text-teal-200">Relive the colonial charm in a luxury bungalow.</p>
                                </div>
                                <Home className="w-10 h-10 text-teal-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><Ticket className="w-4 h-4" /> Toy Train Tickets</span>
                                <span className="flex items-center gap-1"><Camera className="w-4 h-4" /> Sightseeing</span>
                                <span className="px-3 py-1 bg-teal-500 text-black text-xs font-bold rounded-full ml-auto">POPULAR</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Images */}
                    <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-200">

                        {/* Hero Image - Lake/Boat House */}
                        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={ootyLakeImg}
                                alt="Ooty Lake"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold mb-2">Ooty Boat House</h3>
                                <p className="text-gray-300 font-light max-w-md">
                                    Serene boating experience in the heart of the Nilgiris.
                                </p>
                            </div>
                        </div>

                        {/* Secondary Image - Botanical Garden */}
                        <div className="relative h-[300px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={botanicalGardenImg}
                                alt="Botanical Garden"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-2xl font-bold mb-1">Botanical Gardens</h3>
                                <p className="text-gray-300 font-light text-sm">
                                    Walk among thousands of exotic flower species.
                                </p>
                            </div>
                        </div>

                        {/* Secondary Image - Toy Train */}
                        <div className="relative h-[300px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            <img
                                src={toyTrainImg}
                                alt="Toy Train"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-2xl font-bold mb-1">Nilgiri Mountain Railway</h3>
                                <p className="text-gray-300 font-light text-sm">
                                    A journey through the clouds on a heritage steam train.
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
                                <h3 className="text-2xl font-bold mb-1">Colonial Stays</h3>
                                <p className="text-gray-300 font-light text-sm">
                                    Experience luxury in heritage resorts.
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => navigate('/booking?package=Ooty%20Summer%20Festival')}
                                className="w-full py-5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-teal-900/50 uppercase tracking-widest text-sm"
                            >
                                Plan Your Ooty Trip
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OotyDetails;
