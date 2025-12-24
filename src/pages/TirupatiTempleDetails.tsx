import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sun, Users, Calendar, Clock, Star, Info, ShieldCheck, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import tirupatiImg from "@/assets/tirupati_temple.png";
import ticketImg from "@/assets/vip_darshan_ticket.png";

const TirupatiTempleDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-stone-950 text-white font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden pt-20">
                {/* Hero Section - Full View */}
                <div className="relative w-full min-h-screen flex items-center justify-center">
                    <img
                        src={tirupatiImg}
                        alt="Tirupati Balaji Temple"
                        className="fixed inset-0 w-full h-full object-cover object-top z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/20 z-10"></div>

                    <div className="absolute bottom-10 left-0 w-full p-8 md:p-16 z-20">
                        <div className="container mx-auto">
                            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-200 mb-6 drop-shadow-2xl" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Tirumala Tirupati
                            </h1>
                            <div className="bg-black/40 p-6 rounded-2xl backdrop-blur-md border-l-4 border-yellow-500 max-w-3xl">
                                <p className="text-2xl md:text-3xl text-stone-100 font-light italic leading-relaxed drop-shadow-lg mb-2">
                                    "Om Namo Venkatesaya"
                                </p>
                                <p className="text-lg text-yellow-200/90">
                                    The Kali Yuga Vaikuntha. Where a single glimpse of the Lord wipes away a lifetime of sins.
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

                        {/* VIP Access Card & A-Z Package */}
                        <div className="bg-stone-900/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-8 mb-16 shadow-[0_0_50px_rgba(234,179,8,0.15)] flex flex-col md:flex-row items-center gap-10 transform hover:scale-[1.01] transition-transform duration-300">
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-yellow-400 mb-2 flex items-center gap-2">
                                        <Star className="fill-yellow-400 text-yellow-400" /> Executive A-Z Package
                                    </h2>
                                    <h3 className="text-xl text-white font-medium">Skip the Rush. Experience the Divine.</h3>
                                </div>

                                <div className="space-y-4 text-stone-300 text-lg leading-relaxed">
                                    <p>
                                        Tirumala is the most visited holy place in the world. The "Rush" here is legendary.
                                        Don't let the waiting tire you out.
                                    </p>
                                    <p>
                                        Our <strong>A-Z Trip Booking</strong> handles everything:
                                    </p>
                                </div>

                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <ShieldCheck className="w-5 h-5 text-green-400" /> <span><strong>VIP Break Darshan (SED):</strong> Guaranteed entry in 1-2 hours.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <ShieldCheck className="w-5 h-5 text-green-400" /> <span><strong>Private Transport & Stay:</strong> Luxury AC accommodation.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-stone-200">
                                        <ShieldCheck className="w-5 h-5 text-green-400" /> <span><strong>Laddu Prasadam:</strong> Pre-arranged collection.</span>
                                    </li>
                                </ul>

                                <button onClick={() => navigate('/booking?package=Tirupati%20VIP')} className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform w-full md:w-auto uppercase tracking-widest flex items-center justify-center gap-2">
                                    <span>🎫</span> Get VIP Ticket
                                </button>
                            </div>

                            {/* Ticket Image */}
                            <div className="w-full md:w-1/3 flex justify-center perspective-1000">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-yellow-500/30 blur-2xl rounded-full group-hover:bg-yellow-500/50 transition-colors duration-500"></div>
                                    <img
                                        src={ticketImg}
                                        alt="Tirupati VIP Ticket"
                                        className="relative w-full max-w-sm rounded-xl shadow-2xl transform rotate-6 group-hover:rotate-0 transition-all duration-500 border border-white/10"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Crowd & Darshan Guide: Normal vs Seasonal */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* Normal Days */}
                            <div className="bg-stone-900 rounded-3xl p-8 border border-white/5 hover:border-green-500/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <Sun className="text-green-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Normal Days</h3>
                                        <p className="text-stone-400 text-sm">Weekdays (Tue-Wed)</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-stone-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Free Darshan:</strong> 8 - 12 Hours Wait.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Special Entry (Rs.300):</strong> 3 - 4 Hours Wait.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                        <span><strong>Crowd:</strong> Constant flow. 60,000 to 70,000 pilgrims daily. Manageable with patience.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Seasonal / Festivals */}
                            <div className="bg-stone-900 rounded-3xl p-8 border border-white/5 hover:border-orange-500/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                                        <Calendar className="text-orange-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Seasonal & Festivals</h3>
                                        <p className="text-stone-400 text-sm">Brahmotsavam, Vaikunta Ekadasi</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-stone-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Free Darshan:</strong> 24 - 48 Hours Wait (Vaikuntam Q Complex).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Crowd:</strong> Extreme Rush. 1 Lakh+ pilgrims. Walking space is limited.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Star className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                        <span><strong>Recommendation:</strong> Do NOT visit without a valid pre-booked ticket. VIP packages sell out 3 months in advance.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer text */}
                        <div className="text-center text-stone-400 text-sm">
                            <Quote className="w-8 h-8 text-stone-600 mx-auto mb-4" />
                            <p className="italic text-lg text-stone-300 mb-2">"If you surrender to Him, He will take care of everything."</p>
                            <p>Facilities for Hair Tonsuring (Mottai) and Angapradakshinam are available near the temple complex.</p>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TirupatiTempleDetails;
