import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sun, Users, Calendar, Clock, Star, Info, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import palaniImg from "@/assets/palani_temple.png";
import ticketImg from "@/assets/vip_darshan_ticket.png";

const PalaniDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-stone-950 text-white font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden pt-20">
                {/* Hero Section - Full View */}
                <div className="relative w-full min-h-screen flex items-center justify-center">
                    <img
                        src={palaniImg}
                        alt="Palani Murugan Temple"
                        className="fixed inset-0 w-full h-full object-cover object-top z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/20 z-10"></div>

                    <div className="absolute bottom-10 left-0 w-full p-8 md:p-16 z-20">
                        <div className="container mx-auto">
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-200 mb-4 drop-shadow-xl" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Palani Murugan Temple
                            </h1>
                            <p className="text-xl md:text-2xl text-stone-100 max-w-2xl font-light drop-shadow-md bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                The Divine Abode of Lord Dandayudhapani Swami. A sacred hill temple where devotion meets the divine.
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

                        {/* VIP/Expert Access Card */}
                        <div className="bg-stone-900/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-8 mb-16 shadow-[0_0_50px_rgba(234,179,8,0.15)] flex flex-col md:flex-row items-center gap-8 transform hover:scale-[1.01] transition-transform duration-300">
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-yellow-400 mb-2 flex items-center gap-2">
                                        <Star className="fill-yellow-400 text-yellow-400" /> A-Z Trip Guidance
                                    </h2>
                                    <h3 className="text-xl text-white font-medium">Expert Assistance for a Crowd-Free Darshan</h3>
                                </div>

                                <p className="text-stone-300 text-lg leading-relaxed">
                                    Our experts handle everything so you can focus on divinity. Avoid the long queues and the rush. We provide <strong>Special VIP Passes</strong> that grant you priority access. From electric car pick-up to a guided, seamless darshan, we ensure your journey is peaceful and stress-free.
                                </p>

                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <ShieldCheck className="w-5 h-5 text-green-400" /> <span>Pre-booked Special Darshan Tickets</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <ShieldCheck className="w-5 h-5 text-green-400" /> <span>Dedicated Guide Support</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <ShieldCheck className="w-5 h-5 text-green-400" /> <span>Skip the General Queue</span>
                                    </li>
                                </ul>

                                <button onClick={() => navigate('/booking?package=Palani%20VIP')} className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform w-full md:w-auto uppercase tracking-widest flex items-center justify-center gap-2">
                                    <span>🎟️</span> Buy VIP Pass
                                </button>
                            </div>
                            <div className="w-full md:w-1/3 flex justify-center perspective-1000">
                                <img
                                    src={ticketImg}
                                    alt="VIP Darshan Ticket"
                                    className="w-full max-w-sm rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 border-4 border-yellow-500/20 hover:border-yellow-500/50"
                                />
                            </div>
                        </div>

                        {/* Pilgrim Guide: Normal vs Special Days */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* Normal Days */}
                            <div className="bg-stone-900/50 rounded-3xl p-8 border border-white/5 hover:border-green-500/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <Sun className="text-green-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Normal Days</h3>
                                        <p className="text-stone-400 text-sm">Weekdays & Non-Festivals</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-stone-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Darshan Time:</strong> 1 - 2 Hours (General Line)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Crowd Level:</strong> Moderate. Can move relatively freely. Good for peaceful meditation.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Tip:</strong> Early morning (5 AM - 7 AM) is the absolute best time for quick darshan.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Seasonal / Special Days */}
                            <div className="bg-stone-900/50 rounded-3xl p-8 border border-white/5 hover:border-orange-500/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                                        <Calendar className="text-orange-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Special & Seasonal Days</h3>
                                        <p className="text-stone-400 text-sm">Thaipusam, Panguni Uthiram, Sashti</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-stone-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Darshan Time:</strong> 5 - 10 Hours (Without VIP Pass)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Crowd Level:</strong> Extremely High. Lakhs of devotees carrying 'Kavadi'. Moving in the queue is slow.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Star className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Expert Advice:</strong> <em>Impossible</em> to get quick darshan without pre-booking. Use our A-Z service to bypass this rush.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer text */}
                        <div className="text-center text-stone-500 text-sm">
                            <p>Experience the divine energy of Palani Andavar. Winch and Rope Car services available for easy hill access.</p>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PalaniDetails;
