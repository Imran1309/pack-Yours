

import { ArrowLeft, Waves, Music, Heart, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Image Imports
// Image Imports
import heroImg from "@/assets/goa.jpg";
import bagaImg from "@/assets/goa_beach_party_night_1765976164714.png";
import calanguteImg from "@/assets/mahe_beach.png";
import palolemImg from "@/assets/palolem.jpg";

import titosImg from "@/assets/titos_lane_party.jpg";
import clubCubanaImg from "@/assets/party .jpeg"; // It exists. If fails, I will remove space.
import lpkImg from "@/assets/goa_candle_light_dinner.png";

import resortImg from "@/assets/goa_resort_pool.png";

import vegFood from "@/assets/mumbai_pav_bhaji_1765971112475.png";
import nonVegFood from "@/assets/goa_seafood_platter.png";
import ownFood from "@/assets/mumbai_street_food_combo_1765970609478.png";

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-pink-500/50 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-pink-500/20 backdrop-blur-sm rounded-full">
                        <Icon className="text-pink-400" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white font-serif tracking-wide">{title}</h3>
                </div>
                <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-light leading-relaxed">{desc}</p>
            </div>
        </div>
    </div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="text-center mb-16 relative">
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-100 to-pink-200 drop-shadow-sm mb-6 font-serif">
            {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-6" />
        <p className="text-gray-400 text-xl font-light tracking-widest uppercase">{subtitle}</p>
    </div>
);

const GoaExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a0505] via-[#2a0808] to-[#0f0505] text-white selection:bg-pink-500/30 overflow-x-hidden relative">

            {/* Ambient Vibe Glows (Pure Color) */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-pink-900/20 rounded-full blur-[150px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
            </div>

            {/* Content Container - Relative to sit above background */}
            <div className="relative z-10">


                {/* Hero Section */}
                <div className="relative h-screen w-full overflow-hidden z-10">
                    <div className="absolute inset-0">
                        <img src={heroImg} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#1a0505]" />
                    </div>

                    <div className="absolute top-8 left-8 z-20">
                        <button
                            onClick={() => navigate("/destination")}
                            className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-pink-600 transition-all text-white border border-white/10 group duration-300"
                        >
                            <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                        {/* Replaced Title with Vibe Quote */}
                        <div className="space-y-6 animate-fade-in-up">
                            <Heart className="w-16 h-16 text-pink-400 mx-auto fill-pink-400/20 drop-shadow-lg" />
                            <p className="text-4xl md:text-6xl font-serif font-light italic tracking-wide leading-tight drop-shadow-2xl">
                                "Fall in love with<br />
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200">
                                    the vibes
                                </span>"
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                    {/* Beaches Section */}
                    <section>
                        <SectionTitle title="Sun-Kissed Shores" subtitle="Where the ocean meets your heart" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <PlaceCard image={bagaImg} title="Baga Beach" desc="Vibrant nightlife & endless energy." icon={Waves} />
                            <PlaceCard image={calanguteImg} title="Calangute" desc="The Queen of Beaches, golden & grand." icon={Waves} />
                            <PlaceCard image={palolemImg} title="Palolem" desc="Silent shores & crescent sunsets." icon={Waves} />
                        </div>
                    </section>

                    {/* Party Section */}
                    <section>
                        <SectionTitle title="Electric Nights" subtitle="Dance under the stars" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <PlaceCard image={titosImg} title="Tito's Lane" desc="The legendary pulse of Goa's party scene." icon={Music} />
                            <PlaceCard image={clubCubanaImg} title="Club Cubana" desc="A nightclub in the sky." icon={Sparkles} />
                            <PlaceCard image={lpkImg} title="LPK Waterfront" desc="Love Passion Karma – by the river." icon={Heart} />
                        </div>
                    </section>

                    {/* Resorts & Food Section Layout from Karnataka */}
                    <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#2e0c0c] to-[#1a0505]">
                        <div className="relative z-10 p-16">
                            <div className="text-center mb-20">
                                <h2 className="text-6xl font-serif font-bold text-white mb-4">Luxury & Flavors</h2>
                                <p className="text-xl text-gray-400 font-light tracking-wide">Romantic stays & coastal delights</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                                {/* Resorts */}
                                <div className="group space-y-8 cursor-pointer">
                                    <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                        <img src={resortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            </div>
                                            <h3 className="text-4xl text-white font-serif font-bold mb-2">Marari Luxury</h3>
                                            <p className="text-gray-300">Experience world-class hospitality by the sea.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Food Menu */}
                                <div className="space-y-8 flex flex-col justify-center">
                                    <div className="space-y-6">

                                        {/* Veg */}
                                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                            <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                                <img src={vegFood} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                                    <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                                </div>
                                                <h4 className="text-3xl font-serif font-bold text-white mb-2">Goan Thali</h4>
                                                <p className="text-gray-400">Authentic vegetarian coastal flavors.</p>
                                            </div>
                                        </div>

                                        {/* Non-Veg */}
                                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                            <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                                <img src={nonVegFood} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Seafood" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                                    <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Seafood</span>
                                                </div>
                                                <h4 className="text-3xl font-serif font-bold text-white mb-2">Fresh Catch</h4>
                                                <p className="text-gray-400">Spicy curries and grilled delights.</p>
                                            </div>
                                        </div>

                                        {/* Own Food */}
                                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                            <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                                <img src={ownFood} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Picnic" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                    <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                                </div>
                                                <h4 className="text-3xl font-serif font-bold text-white mb-2">Picnic Spots</h4>
                                                <p className="text-gray-400">Perfect secluded spots for your own basket.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default GoaExplorer;
