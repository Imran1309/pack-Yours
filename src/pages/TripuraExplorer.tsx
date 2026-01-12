
import { ArrowLeft, Castle, Trees, Music, MapPin, Star, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ==========================================
// 1. IMAGE IMPORTS
// ==========================================
import tripuraHero from "@/assets/tripura_hero.jpg";

// Royal Heritage
import ujjayantaImg from "@/assets/ujjayanta_palace.jpg";
import neermahalImg from "@/assets/neermahal.jpg";
import tripuraSundariImg from "@/assets/tripura_sundari.jpg";

// Natural Beauty
import sepahijalaImg from "@/assets/sepahijala_wildlife.jpg";
import jampuiImg from "@/assets/jampui_hills.jpg";
import dumboorImg from "@/assets/dumboor_lake.jpg";

// Party Spots
import cityCentreImg from "@/assets/city_centre_agartala.jpg";
import club99Img from "@/assets/club_99.jpg";
import frespressoImg from "@/assets/cafe_frespresso.jpg";

// Resort & Food
import resortImg from "@/assets/ginger_agartala.jpg";
import vegImg from "@/assets/mui_borok.jpg";
import nonVegImg from "@/assets/wahan_mosdeng.jpg";
import picnicImg from "@/assets/rudrasagar_lake.jpg";

// ==========================================
// 2. COMPONENTS
// ==========================================

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[450px] shadow-2xl cursor-pointer border border-white/10 hover:border-purple-500/50 transition-all duration-700">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 z-20">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-600/20 backdrop-blur-md rounded-full border border-purple-500/30">
                        <Icon className="text-purple-400" size={24} />
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
        <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-400 to-purple-200 drop-shadow-sm mb-6 font-serif tracking-tight">
            {title}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
        <p className="text-purple-100/60 text-xl font-light tracking-[0.3em] uppercase">{subtitle}</p>
    </div>
);

const TripuraExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#1a0a1a] text-white selection:bg-purple-500/30 font-sans">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={tripuraHero} className="w-full h-full object-cover animate-scale-slow" alt="Tripura Landscape" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#1a0a1a]" />
                </div>

                <div className="absolute top-8 left-8 z-50">
                    <button
                        onClick={() => navigate("/destination")}
                        className="bg-black/30 backdrop-blur-xl p-4 rounded-full hover:bg-purple-600/80 transition-all text-white border border-white/10 group duration-500 hover:scale-110"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-purple-500/30 p-12 backdrop-blur-sm bg-black/30 rounded-full animate-fade-in relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent animate-pulse-slow" />
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-800 font-serif drop-shadow-2xl">
                            TRIPURA
                        </h1>
                    </div>
                    <p className="mt-10 text-2xl md:text-3xl font-light tracking-[0.4em] animate-fade-in-up delay-200 text-purple-100/90 uppercase border-y border-purple-500/20 py-4 px-16 backdrop-blur-sm">
                        Land of Diversity
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-40 space-y-48">

                {/* --- Royal Heritage Section --- */}
                <section>
                    <SectionTitle title="Royal Heritage" subtitle="Palaces & Temples" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={ujjayantaImg}
                            title="Ujjayanta Palace"
                            desc="A majestic royal palace now serving as the state museum."
                            icon={Castle}
                        />
                        <PlaceCard
                            image={neermahalImg}
                            title="Neermahal"
                            desc="The 'Water Palace' built in the middle of Rudrasagar Lake."
                            icon={Crown}
                        />
                        <PlaceCard
                            image={tripuraSundariImg}
                            title="Tripura Sundari"
                            desc="One of the 51 Shakti Peethas, a revered Hindu temple."
                            icon={Castle}
                        />
                    </div>
                </section>

                {/* --- Natural Beauty Section --- */}
                <section>
                    <SectionTitle title="Natural Beauty" subtitle="Wildlife & Hills" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={sepahijalaImg}
                            title="Sepahijala Wildlife"
                            desc="A biodiversity hotspot with clouded leopards and spectacled monkeys."
                            icon={Trees}
                        />
                        <PlaceCard
                            image={jampuiImg}
                            title="Jampui Hills"
                            desc="The 'Land of Eternal Spring' with orange orchards and scenic views."
                            icon={Trees}
                        />
                        <PlaceCard
                            image={dumboorImg}
                            title="Dumboor Lake"
                            desc="A picturesque lake surrounded by hills, perfect for boating."
                            icon={Trees}
                        />
                    </div>
                </section>

                {/* --- Urban Vibes Section --- */}
                <section>
                    <SectionTitle title="Urban Pulse" subtitle="Agartala Nightlife" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={cityCentreImg}
                            title="City Centre"
                            desc="The main shopping and entertainment hub of Agartala."
                            icon={Music}
                        />
                        <PlaceCard
                            image={club99Img}
                            title="Club 99"
                            desc="A popular nightclub with DJ nights and dance floors."
                            icon={Music}
                        />
                        <PlaceCard
                            image={frespressoImg}
                            title="Cafe Frespresso"
                            desc="A trendy cafe offering coffee, food, and live music."
                            icon={MapPin}
                        />
                    </div>
                </section>

                {/* --- Resort & Food Section --- */}
                <section className="relative rounded-[4rem] overflow-hidden border border-purple-500/10 shadow-2xl bg-[#1a0a1a]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-12 md:p-20">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Tribal Luxury</h2>
                            <p className="text-xl text-purple-200/60 font-light tracking-wide font-sans">Heritage Stays & Tribal Delicacies</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                            {/* Resort Card */}
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                                <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="text-purple-400 fill-purple-400 drop-shadow-lg" size={28} />
                                            ))}
                                        </div>
                                        <h3 className="text-5xl text-white font-serif font-bold mb-4">Ginger Agartala</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            "Smart Comfort" - A modern hotel offering quality stays in the capital.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-10">
                                {/* Veg */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-white/5 hover:bg-white/10 transition-all duration-500 hover:border-green-500/30 hover:scale-[1.02] cursor-pointer">
                                    <div className="h-40 w-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                                        <img src={vegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Veg Food" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                                            <span className="text-green-400 text-sm font-bold tracking-[0.2em] uppercase">Vegetarian</span>
                                        </div>
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Mui Borok</h4>
                                        <p className="text-gray-400 font-light text-lg">A traditional tribal vegetable stew with bamboo shoots.</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Wahan Mosdeng</h4>
                                        <p className="text-gray-400 font-light text-lg">Spicy pork curry cooked with black sesame, a tribal specialty.</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Rudrasagar Lake</h4>
                                        <p className="text-gray-400 font-light text-lg">A scenic lake perfect for picnics with views of Neermahal Palace.</p>
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

export default TripuraExplorer;
