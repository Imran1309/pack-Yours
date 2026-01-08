
import { ArrowLeft, Cloud, CloudRain, Music, MapPin, Coffee, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ==========================================
// 1. IMAGE IMPORTS
// ==========================================
import meghalayaHero from "@/assets/meghalaya_hero.jpg";

// Scotland of East
import umiamImg from "@/assets/umiam.jpg";
import shillongPeakImg from "@/assets/shillong_peak.jpg";
import wardsLakeImg from "@/assets/wards_lake.jpg";

// Cherrapunji
import nohkalikaiImg from "@/assets/nohkalikai.jpg";
import rootBridgeImg from "@/assets/root_bridge.jpg";
import mawsmaiImg from "@/assets/mawsmai_cave.jpg";

// Party Spots
import cafeShillongImg from "@/assets/cafe_shillong.jpg";
import eveningClubImg from "@/assets/evening_club.jpg";
import ml05Img from "@/assets/ml05_cafe.jpg";

// Resort & Food
import resortImg from "@/assets/ri_kynjai.jpg";
import vegImg from "@/assets/bamboo_curry.jpg";
import nonVegImg from "@/assets/jadoh.jpg";
import picnicImg from "@/assets/dawki_picnic.jpg";

// ==========================================
// 2. COMPONENTS
// ==========================================

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[450px] shadow-2xl cursor-pointer border border-white/10 hover:border-emerald-400/50 transition-all duration-700">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 z-20">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-500/20 backdrop-blur-md rounded-full border border-emerald-500/30">
                        <Icon className="text-emerald-400" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white font-serif tracking-wide drop-shadow-lg">{title}</h3>
                </div>
                <p className="text-gray-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    </div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="text-center mb-20 relative">
        <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-400 to-emerald-200 drop-shadow-sm mb-6 font-serif tracking-tight">
            {title}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-6" />
        <p className="text-emerald-100/60 text-xl font-light tracking-[0.3em] uppercase">{subtitle}</p>
    </div>
);

const MeghalayaExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#020605] text-white selection:bg-emerald-500/30 font-sans">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={meghalayaHero} className="w-full h-full object-cover animate-scale-slow" alt="Meghalaya Landscape" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#020605]" />
                </div>

                <div className="absolute top-8 left-8 z-50">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/30 backdrop-blur-xl p-4 rounded-full hover:bg-emerald-600/80 transition-all text-white border border-white/10 group duration-500 hover:scale-110"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-emerald-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in relative overflow-hidden">
                        <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer" />
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-emerald-100 to-teal-800 font-serif drop-shadow-2xl">
                            MEGHALAYA
                        </h1>
                    </div>
                    <p className="mt-10 text-2xl md:text-3xl font-light tracking-[0.4em] animate-fade-in-up delay-200 text-emerald-100/90 uppercase border-y border-emerald-500/20 py-4 px-16 backdrop-blur-sm">
                        Scotland of the East
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-40 space-y-48">

                {/* --- Scotland of East Section --- */}
                <section>
                    <SectionTitle title="Shillong's Charm" subtitle="Hills, Pine and Lakes" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={umiamImg}
                            title="Umiam Lake"
                            desc="A mesmerizing man-made reservoir surrounded by lush green hills."
                            icon={Cloud}
                        />
                        <PlaceCard
                            image={shillongPeakImg}
                            title="Shillong Peak"
                            desc="The highest point in Shillong offering panoramic views of the city."
                            icon={MapPin}
                        />
                        <PlaceCard
                            image={wardsLakeImg}
                            title="Ward's Lake"
                            desc="A colonial-era horseshoe-shaped lake with a wooden bridge and garden."
                            icon={Cloud}
                        />
                    </div>
                </section>

                {/* --- Cherrapunji Section --- */}
                <section>
                    <SectionTitle title="Wettest Land" subtitle="Rain, Roots & Falls" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={nohkalikaiImg}
                            title="Nohkalikai Falls"
                            desc="Safety plunging from 1115 ft, it is the tallest plunge waterfall in India."
                            icon={CloudRain}
                        />
                        <PlaceCard
                            image={rootBridgeImg}
                            title="Living Root Bridges"
                            desc="Bio-engineering marvels grown from the roots of rubber trees."
                            icon={MapPin}
                        />
                        <PlaceCard
                            image={mawsmaiImg}
                            title="Mawsmai Cave"
                            desc="A stunning limestone cave system illuminated for exploration."
                            icon={Cloud}
                        />
                    </div>
                </section>

                {/* --- Party Spots Section --- */}
                <section>
                    <SectionTitle title="Rock Capital" subtitle="Nightlife & Vibe" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={cafeShillongImg}
                            title="Dylan's Cafe"
                            desc="A tribute to Bob Dylan, serving great food and live music vibes."
                            icon={Music}
                        />
                        <PlaceCard
                            image={eveningClubImg}
                            title="The Evening Club"
                            desc="One of the oldest and most happening spots for live jazz and blues."
                            icon={Music}
                        />
                        <PlaceCard
                            image={ml05Img}
                            title="ML 05 Cafe"
                            desc="A biker-themed cafe located amidst pine forests, perfect for chill evenings."
                            icon={Coffee}
                        />
                    </div>
                </section>

                {/* --- Resort & Food Section --- */}
                <section className="relative rounded-[4rem] overflow-hidden border border-emerald-500/10 shadow-2xl bg-[#080d0b]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-12 md:p-20">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Khasi Hospitality</h2>
                            <p className="text-xl text-emerald-200/60 font-light tracking-wide font-sans">Heritage Stays & Local Feasts</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                            {/* Resort Card */}
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                                <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="text-emerald-400 fill-emerald-400 drop-shadow-lg" size={28} />
                                            ))}
                                        </div>
                                        <h3 className="text-5xl text-white font-serif font-bold mb-4">Ri Kynjai</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            "Serenity by the Lake" - Traditional Khasi architecture overlooking Umiam Lake.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-10">
                                {/* Veg */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-white/5 hover:bg-white/10 transition-all duration-500 hover:border-emerald-500/30 hover:scale-[1.02] cursor-pointer">
                                    <div className="h-40 w-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                                        <img src={vegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Veg Food" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                                            <span className="text-green-400 text-sm font-bold tracking-[0.2em] uppercase">Vegetarian</span>
                                        </div>
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Bamboo Shoots Curry</h4>
                                        <p className="text-gray-400 font-light text-lg">A tangy and spicy curry made with fermented bamboo shoots.</p>
                                    </div>
                                </div>

                                {/* Non-Veg */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-white/5 hover:bg-white/10 transition-all duration-500 hover:border-red-500/30 hover:scale-[1.02] cursor-pointer">
                                    <div className="h-40 w-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                                        <img src={nonVegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Non Veg Food" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                                            <span className="text-red-400 text-sm font-bold tracking-[0.2em] uppercase">Signature</span>
                                        </div>
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Jadoh</h4>
                                        <p className="text-gray-400 font-light text-lg">Rice cooked with meat stock and spices, a Khasi staple.</p>
                                    </div>
                                </div>

                                {/* Own Food */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-white/5 hover:bg-white/10 transition-all duration-500 hover:border-blue-500/30 hover:scale-[1.02] cursor-pointer">
                                    <div className="h-40 w-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                                        <img src={picnicImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Own Food" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                                            <span className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase">Picnic</span>
                                        </div>
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Dawki River Bank</h4>
                                        <p className="text-gray-400 font-light text-lg">Enjoy a meal by the crystal clear waters of the Umngot River.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default MeghalayaExplorer;
