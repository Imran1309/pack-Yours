
import { ArrowLeft, Mountain, CloudSun, Music, MapPin, Tent, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ==========================================
// 1. IMAGE IMPORTS
// ==========================================
import arunachalHero from "@/assets/arunachal_hero.jpg";

// Mountains
import kangtoImg from "@/assets/kangto.jpg";
import gorichenImg from "@/assets/gorichen.jpg";
import nyegiImg from "@/assets/nyegi_kangsang.jpg";

// Scenic Spots
import tawangImg from "@/assets/tawang_monastery.jpg";
import ziroImg from "@/assets/ziro_valley.jpg";
import selaImg from "@/assets/sela_pass.jpg";

// Party/Vibe Spots
import ziroFestImg from "@/assets/ziro_festival.jpg";
import cafeSuburbiaImg from "@/assets/cafe_suburbia.jpg";
import tawangMarketImg from "@/assets/tawang_market.jpg";

// Resort & Food
import resortImg from "@/assets/donyi_polo_resort.jpg";
import vegImg from "@/assets/pika_pila.jpg";
import nonVegImg from "@/assets/lukter.jpg";
import picnicImg from "@/assets/sangti_picnic.jpg";

// ==========================================
// 2. COMPONENTS
// ==========================================

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[450px] shadow-2xl cursor-pointer border border-white/10 hover:border-orange-400/50 transition-all duration-700">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 z-20">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-500/20 backdrop-blur-md rounded-full border border-orange-500/30">
                        <Icon className="text-orange-400" size={24} />
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
        <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-400 to-orange-200 drop-shadow-sm mb-6 font-serif tracking-tight">
            {title}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6" />
        <p className="text-orange-100/60 text-xl font-light tracking-[0.3em] uppercase">{subtitle}</p>
    </div>
);

const ArunachalExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0502] text-white selection:bg-orange-500/30 font-sans">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={arunachalHero} className="w-full h-full object-cover animate-scale-slow" alt="Arunachal Landscape" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0a0502]" />
                </div>

                <div className="absolute top-8 left-8 z-50">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/30 backdrop-blur-xl p-4 rounded-full hover:bg-orange-600/80 transition-all text-white border border-white/10 group duration-500 hover:scale-110"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-orange-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in relative overflow-hidden">
                        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-b from-transparent via-orange-500/20 to-transparent animate-spin-slow opacity-30" />
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-orange-100 to-red-800 font-serif drop-shadow-2xl">
                            ARUNACHAL
                        </h1>
                    </div>
                    <p className="mt-10 text-2xl md:text-3xl font-light tracking-[0.4em] animate-fade-in-up delay-200 text-orange-100/90 uppercase border-y border-orange-500/20 py-4 px-16 backdrop-blur-sm">
                        Land of Dawn-Lit Mountains
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-40 space-y-48">

                {/* --- Mountains Section --- */}
                <section>
                    <SectionTitle title="Majestic Peaks" subtitle="Guardians of the East" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={kangtoImg}
                            title="Kangto Peak"
                            desc="The highest peak in Arunachal, standing tall at 7,060 meters."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={gorichenImg}
                            title="Gorichen Peak"
                            desc="A technical climbing challenge revered by local Monpa tribes."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={nyegiImg}
                            title="Nyegi Kangsang"
                            desc="A sacred mountain believed to be the abode of local deities."
                            icon={CloudSun}
                        />
                    </div>
                </section>

                {/* --- Scenic Spots Section --- */}
                <section>
                    <SectionTitle title="Scenic Wonders" subtitle="Valleys & Passes" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={tawangImg}
                            title="Tawang Monastery"
                            desc="India's largest monastery perched at 10,000 ft with stunning views."
                            icon={MapPin}
                        />
                        <PlaceCard
                            image={ziroImg}
                            title="Ziro Valley"
                            desc="A UNESCO World Heritage site candidate famous for its pine hills."
                            icon={Tent}
                        />
                        <PlaceCard
                            image={selaImg}
                            title="Sela Pass"
                            desc="A high-altitude mountain pass covered in snow year-round."
                            icon={Mountain}
                        />
                    </div>
                </section>

                {/* --- Party/Vibe Spots Section --- */}
                <section>
                    <SectionTitle title="Vibrant Vibes" subtitle="Festivals & Chill" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={ziroFestImg}
                            title="Ziro Festival"
                            desc="India's coolest outdoor music festival set in the scenic Ziro Valley."
                            icon={Music}
                        />
                        <PlaceCard
                            image={cafeSuburbiaImg}
                            title="Cafe Suburbia"
                            desc="Itanagar's favorite hangout spot for art, music, and great coffee."
                            icon={Music}
                        />
                        <PlaceCard
                            image={tawangMarketImg}
                            title="Tawang Nights"
                            desc="Experience the buzz of the local market with street food and warmth."
                            icon={Star}
                        />
                    </div>
                </section>

                {/* --- Resort & Food Section --- */}
                <section className="relative rounded-[4rem] overflow-hidden border border-orange-500/10 shadow-2xl bg-[#0f0805]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-12 md:p-20">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Tribal Hospitality</h2>
                            <p className="text-xl text-orange-200/60 font-light tracking-wide font-sans">Eco Stays & Organic Feasts</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                            {/* Resort Card */}
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                                <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="text-orange-400 fill-orange-400 drop-shadow-lg" size={28} />
                                            ))}
                                        </div>
                                        <h3 className="text-5xl text-white font-serif font-bold mb-4">Donyi Polo Resort</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            "Where Culture Meets Luxury" - Experience serenity near Itanagar.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-10">
                                {/* Veg */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-white/5 hover:bg-white/10 transition-all duration-500 hover:border-orange-500/30 hover:scale-[1.02] cursor-pointer">
                                    <div className="h-40 w-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                                        <img src={vegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Veg Food" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                                            <span className="text-green-400 text-sm font-bold tracking-[0.2em] uppercase">Vegetarian</span>
                                        </div>
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Pika Pila</h4>
                                        <p className="text-gray-400 font-light text-lg">A traditional pickle made with bamboo shoots and pork fat (adapted veg version).</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Lukter</h4>
                                        <p className="text-gray-400 font-light text-lg">Cooked dry meat with chilli flakes, bringing the heat of the mountains.</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Sangti Valley</h4>
                                        <p className="text-gray-400 font-light text-lg">Spot black-necked cranes while enjoying a riverside picnic.</p>
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

export default ArunachalExplorer;
