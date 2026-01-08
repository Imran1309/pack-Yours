import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flame, Users, Calendar, Clock, Star, Info, Mountain, Footprints, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sabarimalaImg from "@/assets/sabarimala_close.png";
import ticketImg from "@/assets/vip_darshan_ticket.png";

const SabarimalaDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-stone-950 text-white font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden pt-20">
                {/* Hero Section - Full View */}
                <div className="relative w-full min-h-screen flex items-center justify-center">
                    <img
                        src={sabarimalaImg}
                        alt="Sabarimala Ayyappa Temple"
                        className="fixed inset-0 w-full h-full object-cover object-top z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20 z-10"></div>

                    <div className="absolute bottom-10 left-0 w-full p-8 md:p-16 z-20">
                        <div className="container mx-auto">
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-white mb-4 drop-shadow-xl" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Sabarimala Yatra
                            </h1>
                            <div className="bg-black/50 p-6 rounded-2xl backdrop-blur-md border-l-4 border-orange-500 max-w-3xl">
                                <p className="text-2xl md:text-3xl text-stone-100 font-light italic leading-relaxed drop-shadow-lg mb-2">
                                    "Swamiye Saranam Ayyappa"
                                </p>
                                <p className="text-lg text-orange-100">
                                    The divine trek through the Tiger Reserve to the abode of Dharma Sastha. A journey of discipline, devotion, and surrender.
                                </p>
                            </div>
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

                        {/* A-Z Package & Booking */}
                        <div className="bg-stone-900/90 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 mb-16 shadow-[0_0_50px_rgba(249,115,22,0.15)] flex flex-col md:flex-row items-center gap-10 transform hover:scale-[1.01] transition-transform duration-300">
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-orange-500 mb-2 flex items-center gap-2">
                                        <Footprints className="fill-orange-500 text-orange-500" /> Grand Seasonal Yatra
                                    </h2>
                                    <h3 className="text-xl text-white font-medium">The Holy Path (Peruvezhi) & Virtual Q</h3>
                                </div>

                                <p className="text-stone-300 text-lg leading-relaxed">
                                    Experience the traditional <strong>Erumeli Petta Thullal</strong> and the trek through the sacred forest. We manage your <strong>Virtual Q Booking</strong>, Irumudi Kettu preparation, and accommodation at Pamba/Sannidhanam.
                                </p>

                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <ShieldCheck className="w-5 h-5 text-green-400" /> <span><strong>Virtual Q Pass:</strong> Guaranteed slot booking.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <Mountain className="w-5 h-5 text-orange-400" /> <span><strong>Dolly Service:</strong> Available for elderly pilgrims.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <Star className="w-5 h-5 text-yellow-400" /> <span><strong>Ghee Abhishekam:</strong> Arranged upon arrival.</span>
                                    </li>
                                </ul>

                                <button onClick={() => navigate('/booking?package=Sabarimala%20Yatra')} className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform w-full md:w-auto uppercase tracking-widest flex items-center justify-center gap-2">
                                    <span>🎟️</span> Book Yatra
                                </button>
                            </div>

                            {/* Ticket/Booking Visual */}
                            <div className="w-full md:w-1/3 flex justify-center perspective-1000">
                                <div className="relative group p-2 bg-gradient-to-tr from-black to-orange-900 rounded-2xl border border-orange-500/30">
                                    <img
                                        src={ticketImg}
                                        alt="Sabarimala Virtual Q Ticket"
                                        className="w-full max-w-sm rounded-xl shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                        BOOKING OPEN
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Crowd & Season Guide */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* Monthly Puja (Normal) */}
                            <div className="bg-stone-900 rounded-3xl p-8 border border-white/5 hover:border-green-500/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <Calendar className="text-green-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Monthly Poojas</h3>
                                        <p className="text-stone-400 text-sm">First 5 Days of Malayalam Month</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-stone-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Darshan Time:</strong> 2 - 4 Hours.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Crowd:</strong> Moderate. Best for families and elderly.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Weather:</strong> Pleasant, less humid.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Mandala Season (Peak) */}
                            <div className="bg-stone-900 rounded-3xl p-8 border border-white/5 hover:border-orange-500/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                                        <Flame className="text-orange-400 w-6 h-6 animate-pulse" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Mandala & Makaravilakku</h3>
                                        <p className="text-stone-400 text-sm">Nov 17 - Jan 20 (Seasonal Yatra)</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-stone-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Darshan Time:</strong> 12 - 18 Hours (Pathinettam Padi Queue).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Crowd:</strong> Extreme (Millions). The temple is open 24/7 virtually closer to Makaravilakku.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Star className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Requirement:</strong> Virtual Q booking is MANDATORY. Irumudi Kettu is required to step on the 18 holy steps.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer text */}
                        <div className="text-center text-stone-500 text-sm">
                            <p>Traditional forest path (45km) and Pamba path (5km) options available. Please observe the 41-day Vratam discipline.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SabarimalaDetails;
