import { useNavigate } from "react-router-dom";
import { ArrowLeft, Waves, Users, Calendar, Clock, Star, Info, ShieldCheck, Gem, Flame } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import tiruchendurImg from "@/assets/tiruchendur_temple.png";
import ticketImg from "@/assets/vip_darshan_ticket.png";

const ThiruchendurDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-stone-950 text-white font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden pt-20">
                {/* Hero Section - Full View */}
                <div className="relative w-full min-h-screen flex items-center justify-center">
                    <img
                        src={tiruchendurImg}
                        alt="Thiruchendur Murugan Temple"
                        className="fixed inset-0 w-full h-full object-cover object-top z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/20 z-10"></div>

                    <div className="absolute bottom-10 left-0 w-full p-8 md:p-16 z-20">
                        <div className="container mx-auto">
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white mb-4 drop-shadow-xl" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Thiruchendur Murugan
                            </h1>
                            <div className="bg-black/40 p-6 rounded-2xl backdrop-blur-md border-l-4 border-cyan-500 max-w-3xl">
                                <p className="text-xl md:text-2xl text-cyan-50 font-light drop-shadow-md">
                                    The only Arupadaiveedu situated on the seashore. Where the roaring waves bow down to Lord Senthil Andavar.
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

                        {/* Special Yatra: Soorasamharam & VIP Access */}
                        <div className="bg-stone-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-16 shadow-[0_0_60px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center gap-10 transform hover:scale-[1.01] transition-transform duration-300">
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
                                        <Waves className="fill-cyan-400 text-cyan-400 animate-pulse" /> Special Sea Shore Yatra
                                    </h2>
                                    <h3 className="text-xl text-white font-medium">Victory over Surapadman</h3>
                                </div>

                                <p className="text-stone-300 text-lg leading-relaxed">
                                    Experience the spiritual power of the <strong>Nazhikkinaru</strong> (sacred well) and the holy sea bath. Thiruchendur is famous for its <strong>Vibhuti Prasadam</strong> packed in paneer leaves. Skip the long queues for the 'Viswaroopa Darshan' with our expert guidance.
                                </p>

                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <ShieldCheck className="w-5 h-5 text-green-400" /> <span><strong>Special Darshan Ticket:</strong> Pre-booked Rs. 100/250 entry.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <Gem className="w-5 h-5 text-cyan-400" /> <span><strong>Abhishekam Access:</strong> Watch the divine alankaram up close.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <Star className="w-5 h-5 text-yellow-400" /> <span><strong>A-Z Guide:</strong> Accommodation near the temple beach.</span>
                                    </li>
                                </ul>

                                <button onClick={() => navigate('/booking?package=Thiruchendur%20Yatra')} className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform w-full md:w-auto uppercase tracking-widest flex items-center justify-center gap-2">
                                    <span>🌊</span> Book Yatra
                                </button>
                            </div>

                            {/* Ticket Image */}
                            <div className="w-full md:w-1/3 flex justify-center perspective-1000">
                                <div className="relative group p-2 bg-gradient-to-br from-cyan-900 to-black rounded-2xl border border-cyan-500/30">
                                    <img
                                        src={ticketImg}
                                        alt="Special Darshan Ticket"
                                        className="w-full max-w-sm rounded-xl shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Crowd & Festival Guide */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* Normal Days */}
                            <div className="bg-stone-900 rounded-3xl p-8 border border-white/5 hover:border-green-500/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <Calendar className="text-green-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Normal Days</h3>
                                        <p className="text-stone-400 text-sm">Weekdays</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-stone-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Darshan Time:</strong> 1 - 2 Hours.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Crowd:</strong> Moderate. The sea breeze makes waiting pleasant.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Best Time:</strong> Early morning 5 AM for Viswaroopa Darshan.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Soorasamharam Festival */}
                            <div className="bg-stone-900 rounded-3xl p-8 border border-white/5 hover:border-red-500/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                                        <Flame className="text-red-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Soorasamharam</h3>
                                        <p className="text-stone-400 text-sm">Skanda Sashti (Oct-Nov)</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-stone-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                                        <span><strong>Darshan Time:</strong> 10 - 12 Hours.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                                        <span><strong>Crowd:</strong> Massive (5-10 Lakhs).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Star className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                                        <span><strong>Event:</strong> The re-enactment of the battle on the seashore is a MUST watch. Pre-booking stay is vital.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer text */}
                        <div className="text-center text-stone-500 text-sm">
                            <p>Don't forget to take the holy dip in the sea before entering the temple.</p>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ThiruchendurDetails;
