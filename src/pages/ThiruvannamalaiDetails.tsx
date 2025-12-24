import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flame, Users, Calendar, Clock, Star, Info, Mountain, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import thiruvannaImg from "@/assets/thiruvannamalai_temple.png";
import deepamImg from "@/assets/thirvanmalaideepm.png";

const ThiruvannamalaiDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-stone-950 text-white font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden pt-20">
                {/* Hero Section - Full View */}
                <div className="relative w-full min-h-screen flex items-center justify-center">
                    <img
                        src={thiruvannaImg}
                        alt="Arulmigu Arunachaleswarar Temple"
                        className="fixed inset-0 w-full h-full object-cover object-top z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/20 z-10"></div>

                    <div className="absolute bottom-10 left-0 w-full p-8 md:p-16 z-20">
                        <div className="container mx-auto">
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 mb-4 drop-shadow-xl" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Thiruvannamalai
                            </h1>
                            <p className="text-xl md:text-2xl text-stone-100 max-w-2xl font-light drop-shadow-md bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                The Agni Sthalam. Where Lord Shiva manifests as the element of Fire. Home to the sacred Arunachala Mountain.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-24 left-8 bg-black/40 hover:bg-black/60 p-3 rounded-full backdrop-blur-md transition-all group z-50 text-white border border-white/20"
                    >
                        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Content Section */}
                <div className="relative z-20 bg-stone-950 min-h-screen rounded-t-[3rem] -mt-20 border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

                        {/* A-Z Trip & Deepam Feature Card */}
                        <div className="bg-stone-900/90 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 mb-16 shadow-[0_0_60px_rgba(249,115,22,0.15)] flex flex-col md:flex-row items-center gap-10 transform hover:scale-[1.01] transition-transform duration-300">
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h2 className="text-4xl font-bold text-orange-500 mb-2 flex items-center gap-3">
                                        <Flame className="fill-orange-500 text-orange-500 w-8 h-8 md:w-10 md:h-10 animate-pulse" /> Karthigai Deepam
                                    </h2>
                                    <h3 className="text-xl text-white font-medium">The Divine Beacon of Arunachala</h3>
                                </div>

                                <p className="text-stone-300 text-lg leading-relaxed">
                                    Witness the magnificent <strong>Maha Deepam</strong> lit atop the holy mountain. This cosmic pillar of fire represents Shiva as the light of consciousness. Our <strong>A-Z Trip Guidance</strong> ensures you experience this massive festival without the hassle.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <Mountain className="w-5 h-5 text-orange-400" /> <span><strong>Full Show:</strong> Prime viewing spots for Deepam & Temple Lighting.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <ShieldCheck className="w-5 h-5 text-green-400" /> <span><strong>A-Z Guidance:</strong> Accommodation, Food, & Special Entry handled interactively.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <Star className="w-5 h-5 text-yellow-400" /> <span><strong>Girivalam:</strong> Guided 14km circumambulation.</span>
                                    </li>
                                </ul>

                                <button onClick={() => navigate('/booking?package=Thiruvannamalai%20Deepam')} className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform w-full md:w-auto uppercase tracking-widest flex items-center justify-center gap-2">
                                    <span>🔥</span> Book Deepam Trip
                                </button>
                            </div>

                            {/* Deepam Image (Replacing Ticket Image) */}
                            <div className="w-full md:w-1/3 flex justify-center perspective-1000">
                                <div className="relative group p-2 bg-gradient-to-br from-orange-500 to-transparent rounded-2xl">
                                    <img
                                        src={deepamImg}
                                        alt="Karthigai Deepam on Arunachala Hill"
                                        className="w-full max-w-sm rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
                                </div>
                            </div>
                        </div>

                        {/* Pilgrim Guide: Normal vs Deepam */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* Normal Days */}
                            <div className="bg-stone-900/50 rounded-3xl p-8 border border-white/5 hover:border-green-500/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <Calendar className="text-green-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Normal Days / Pournami</h3>
                                        <p className="text-stone-400 text-sm">Full Moon Girivalam</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-stone-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Darshan Time:</strong> 1 - 2 Hours.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Crowd:</strong> High during Pournami (Full Moon), Moderate otherwise.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Deepam Festival */}
                            <div className="bg-stone-900/50 rounded-3xl p-8 border border-white/5 hover:border-orange-500/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                                        <Flame className="text-orange-400 w-6 h-6 animate-pulse" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Karthigai Deepam</h3>
                                        <p className="text-stone-400 text-sm">The Festival of Light</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-stone-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Darshan Time:</strong> 15 - 20 Hours (Without Planning).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Crowd:</strong> Massive (25+ Lakhs). The entire town becomes a sea of humanity.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Note:</strong> Book accommodations months in advance. Our A-Z package includes confirmed stay and darshan.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center text-stone-500 text-sm">
                            <p>All devotees are requested to respect the sanctity of the Girivalam path.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ThiruvannamalaiDetails;
