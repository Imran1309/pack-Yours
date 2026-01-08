
import { ArrowLeft, Landmark, History, Star, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Image Imports
import delhiHero from "@/assets/delhi.jpg"; // Hero Image
import redFort from "@/assets/red fort.jpg"; // Red Fort
import indiaGate from "@/assets/india-gate.jpg"; // India Gate
import qutubMinar from "@/assets/qutub.jpg"; // Qutub Minar
import lotusTemple from "@/assets/lotus.jpg"; // Lotus Temple
import akshardham from "@/assets/akshardham.jpg"; // Akshardham Temple

import choleBhature from "@/assets/veg delhi.jpg"; // Chole Bhature
import butterChicken from "@/assets/non veg delhi.jpg"; // Butter Chicken
import picnicSpot from "@/assets/own delhi.jpg"; // Lodhi Gardens / Picnic

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-amber-500/50 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-amber-600/20 backdrop-blur-sm rounded-full border border-amber-500/30">
                        <Icon className="text-amber-500" size={24} />
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
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-100 to-amber-200 drop-shadow-sm mb-6 font-serif">
            {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6" />
        <p className="text-gray-400 text-xl font-light tracking-widest uppercase">{subtitle}</p>
    </div>
);

const DelhiExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#1a0505] text-white selection:bg-amber-500/30 overflow-x-hidden relative">

            {/* Background Texture */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-amber-900/40 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-red-900/40 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <div className="relative h-screen w-full overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={delhiHero} className="w-full h-full object-cover animate-scale-slow" alt="Delhi" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#1a0505]" />
                    </div>

                    <div className="absolute top-8 left-8 z-20">
                        <button
                            onClick={() => navigate("/states")}
                            className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-amber-700 transition-all text-white border border-white/10 group duration-300"
                        >
                            <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                        <div className="border-y-2 border-amber-500/50 py-8 px-12 backdrop-blur-sm bg-black/10 animate-fade-in-up">
                            <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-800 font-serif">
                                DELHI
                            </h1>
                            <p className="text-2xl md:text-3xl font-light tracking-[0.4em] text-amber-100/90 uppercase mt-4">
                                The Heart of India
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                    {/* Temples Section */}
                    <section>
                        <SectionTitle title="Spiritual Splendour" subtitle="Sanctuaries of Peace and Art" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <PlaceCard image={akshardham} title="Akshardham" desc="A timeless tribute to Indian culture and spirituality." icon={Landmark} />
                            <PlaceCard image={lotusTemple} title="Lotus Temple" desc="A architectural marvel open to all faiths." icon={Landmark} />
                        </div>
                    </section>

                    {/* Monumental Circuit */}
                    <section>
                        <SectionTitle title="Monumental Legacy" subtitle="Echoes of Empires Past" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <PlaceCard image={indiaGate} title="India Gate" desc="A war memorial standing tall in the heart of the city." icon={Crown} />
                            <PlaceCard image={qutubMinar} title="Qutub Minar" desc="The soaring tower of victory." icon={History} />
                            <PlaceCard image={redFort} title="Red Fort" desc="The historic fort of Mughal emperors." icon={Crown} />
                        </div>
                    </section>

                    {/* Food Section - Layout from Karnataka */}
                    <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#2e0c0c] to-[#1a0505]">
                        <div className="relative z-10 p-16">
                            <div className="text-center mb-20">
                                <h2 className="text-6xl font-serif font-bold text-white mb-4">Capital Flavours</h2>
                                <p className="text-xl text-gray-400 font-light tracking-wide">From Street Food to Royal Feasts</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                                {/* Featured Experience */}
                                <div className="group space-y-8 cursor-pointer">
                                    <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                        <img src={picnicSpot} alt="Lodhi Gardens" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Star className="text-amber-400 fill-amber-400" size={24} />
                                                <Star className="text-amber-400 fill-amber-400" size={24} />
                                                <Star className="text-amber-400 fill-amber-400" size={24} />
                                                <Star className="text-amber-400 fill-amber-400" size={24} />
                                                <Star className="text-amber-400 fill-amber-400" size={24} />
                                            </div>
                                            <h3 className="text-4xl text-white font-serif font-bold mb-2">Lodhi Gardens</h3>
                                            <p className="text-gray-300">The perfect winter picnic spot amidst history.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Food Menu */}
                                <div className="space-y-8 flex flex-col justify-center">
                                    <div className="space-y-6">

                                        {/* Veg */}
                                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                            <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                                <img src={choleBhature} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                                    <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                                </div>
                                                <h4 className="text-3xl font-serif font-bold text-white mb-2">Chole Bhature</h4>
                                                <p className="text-gray-400">Spicy chickpeas with fluffy fried bread.</p>
                                            </div>
                                        </div>

                                        {/* Non-Veg */}
                                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                            <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                                <img src={butterChicken} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non-Veg" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                                    <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Non-Veg</span>
                                                </div>
                                                <h4 className="text-3xl font-serif font-bold text-white mb-2">Butter Chicken</h4>
                                                <p className="text-gray-400">Creamy, rich tomato curry with tender chicken.</p>
                                            </div>
                                        </div>

                                        {/* Own Food */}
                                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                            <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                                <img src={picnicSpot} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Picnic" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                    <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                                </div>
                                                <h4 className="text-3xl font-serif font-bold text-white mb-2">Sunder Nursery</h4>
                                                <p className="text-gray-400">Bring your own basket for a day in nature.</p>
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

export default DelhiExplorer;
