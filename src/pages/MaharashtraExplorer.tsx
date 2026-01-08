
import { ArrowLeft, Landmark, History, Star, Crown, Umbrella } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Image Imports - Authentic Maharashtra Images
import mumbaiHero from "@/assets/mumbai.jpg"; // Mumbai / Gateway
import gateway from "@/assets/gateway of india.jpg"; // Gateway of India
import ajanta from "@/assets/ajanta ellora.jpg"; // Ajanta Caves
import raigad from "@/assets/raigad fort.jpg"; // Raigad Fort

import siddhivinayak from "@/assets/siddhivinayak.jpg"; // Siddhivinayak Temple
import saibaba from "@/assets/shirdi sai baba.jpg"; // Shirdi Sai Baba
import trimbakeshwar from "@/assets/trimbakeshwar.jpg"; // Trimbakeshwar Temple

import alibaug from "@/assets/alibaug.jpg"; // Alibaug Beach
import tarkarli from "@/assets/tarkarli.jpg"; // Tarkarli Beach
import ganpatipule from "@/assets/ganpatipule.jpg"; // Ganpatipule Beach

import misalPav from "@/assets/veg maha.jpg"; // Misal Pav
import vadaPav from "@/assets/picnic maha.jpg"; // Vada Pav
import seafood from "@/assets/non veg maha.jpg"; // Seafood Thali

import resort from "@/assets/taj.jpg"; // Taj Mahal Palace Resort

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-orange-500/50 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-500/20 backdrop-blur-sm rounded-full">
                        <Icon className="text-orange-400" size={24} />
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
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 drop-shadow-sm mb-6 font-serif">
            {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6" />
        <p className="text-gray-400 text-xl font-light tracking-widest uppercase">{subtitle}</p>
    </div>
);

const MaharashtraExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500/30">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={mumbaiHero} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-orange-500 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-orange-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-8xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-orange-100 to-orange-600 font-serif">
                            MAHARASHTRA
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-orange-100/80 uppercase border-y border-orange-500/30 py-4 px-12">
                        Land of Warriors & Saints
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-orange-500 to-transparent" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* Temples Section */}
                <section>
                    <SectionTitle title="Divine Abodes" subtitle="Pilgrimage to Spirituality" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={siddhivinayak} title="Siddhivinayak" desc="The wish-granting Lord Ganesha temple in Mumbai." icon={Landmark} />
                        <PlaceCard image={saibaba} title="Shirdi Sai Baba" desc="The holy shrine of Sai Baba, a beacon of faith." icon={Landmark} />
                        <PlaceCard image={trimbakeshwar} title="Trimbakeshwar" desc="One of the twelve Jyotirlingas near Nashik." icon={Landmark} />
                    </div>
                </section>

                {/* Beaches Section */}
                <section>
                    <SectionTitle title="Konkan Coast" subtitle="Sun, Sand and the Sea" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={alibaug} title="Alibaug" desc="A coastal town known for its beaches and forts." icon={Umbrella} />
                        <PlaceCard image={tarkarli} title="Tarkarli" desc="Pristine white sands and clear blue waters." icon={Umbrella} />
                        <PlaceCard image={ganpatipule} title="Ganpatipule" desc="A serene beach destination with a Ganesh temple." icon={Umbrella} />
                    </div>
                </section>

                {/* Historical Section */}
                <section>
                    <SectionTitle title="Maratha Glory" subtitle="Forts and Gates of History" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={gateway} title="Gateway of India" desc="Mumbai's most iconic colonial-era monument." icon={History} />
                        <PlaceCard image={ajanta} title="Ajanta Ellora" desc="Ancient rock-cut caves celebrating Buddhist art." icon={History} />
                        <PlaceCard image={raigad} title="Raigad Fort" desc="The capital fort of Chatrapati Shivaji Maharaj." icon={Crown} />
                    </div>
                </section>

                {/* Resorts & Food Section - Luxury Redefined */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Indulge in Luxury</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">World-class stays & authentic flavors</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resort} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">The Taj Mahal Palace</h3>
                                        <p className="text-gray-300">Iconic sea-facing luxury in the heart of Mumbai.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={misalPav} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Misal Pav" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Misal Pav</h4>
                                            <p className="text-gray-400">Spicy sprouted curry topped with farsan.</p>
                                        </div>
                                    </div>

                                    {/* Veg Snack */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={vadaPav} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Vada Pav" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Vada Pav</h4>
                                            <p className="text-gray-400">The iconic Indian burger of Mumbai.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={seafood} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Seafood" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Non-Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Seafood Thali</h4>
                                            <p className="text-gray-400">Fresh catch from the Konkan coast.</p>
                                        </div>
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

export default MaharashtraExplorer;
