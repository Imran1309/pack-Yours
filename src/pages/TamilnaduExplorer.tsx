
import { ArrowLeft, Mountain, Umbrella, Building2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mountains
import tnMountain from "@/assets/tn_mountain.png";
import tnKodai from "@/assets/tn_kodai.png";
import tnYercaud from "@/assets/tn_yercaud.png";

// Beaches
import tnBeach from "@/assets/tn_beach.png";
import tnDhanushkodi from "@/assets/tn_dhanushkodi.png";
import tnBeach2 from "@/assets/tn_mahabalipuram.jpg";

// Temples
import tnTemple from "@/assets/tn_temple.png";
import tnTemple2 from "@/assets/tn_meenakshi.jpg";
import tnTemple3 from "@/assets/tn_rameswaram.jpg";

// Resorts & Others
import tnResort from "@/assets/tn_resort.jpg";

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-yellow-500/50 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-500/20 backdrop-blur-sm rounded-full">
                        <Icon className="text-yellow-400" size={24} />
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
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-sm mb-6 font-serif">
            {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
        <p className="text-gray-400 text-xl font-light tracking-widest uppercase">{subtitle}</p>
    </div>
);

const TamilnaduExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-yellow-500/30">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={tnMountain} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-yellow-500 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-yellow-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-8xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-yellow-600 font-serif">
                            TAMIL NADU
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-yellow-100/80 uppercase border-y border-yellow-500/30 py-4 px-12">
                        The Soul of South India
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-yellow-500 to-transparent" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* Mountains Section */}
                <section>
                    <SectionTitle title="Misty Highness" subtitle="Retreat to the hills" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={tnMountain} title="Nilgiris" desc="Experience the chilling breeze and endless tea gardens." icon={Mountain} />
                        <PlaceCard image={tnKodai} title="Kodaikanal" desc="Row your boat in the star-shaped lake amidst the fog." icon={Mountain} />
                        <PlaceCard image={tnYercaud} title="Yercaud" desc="A hidden gem nestled in the Shevaroy Hills." icon={Mountain} />
                    </div>
                </section>

                {/* Beaches Section */}
                <section>
                    <SectionTitle title="Azure Shores" subtitle="Where land meets the sea" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={tnBeach} title="Marina Beach" desc="Witness the golden sunrise at the world's second longest urban beach." icon={Umbrella} />
                        <PlaceCard image={tnDhanushkodi} title="Dhanushkodi" desc="Walk on the edge of India at this mystical ghost town." icon={Umbrella} />
                        <PlaceCard image={tnBeach2} title="Mahabalipuram" desc="Explore ancient stone temples by the roaring ocean." icon={Umbrella} />
                    </div>
                </section>

                {/* Temples Section */}
                <section>
                    <SectionTitle title="Sacred Sanctums" subtitle="Architectural marvels of ages past" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={tnTemple} title="Thanjavur" desc="Marvel at the shadowless Vimana of the Great Living Chola Temple." icon={Building2} />
                        <PlaceCard image={tnTemple2} title="Meenakshi" desc="Get lost in the vibrant corridors of Madurai's iconic temple." icon={Building2} />
                        <PlaceCard image={tnTemple3} title="Rameswaram" desc="Walk through the longest corridor in the world." icon={Building2} />
                    </div>
                </section>

                {/* Resorts & Food Section - Luxury Redefined */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Indulge in Luxury</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">World-class stays & authentic flavors</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={tnResort} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Tamil Nadu Resorts</h3>
                                        <p className="text-gray-300">Unwind in the lap of nature with 5-star amenities.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={tnTemple} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-7 h-7 rounded-full border-2 border-green-500 flex items-center justify-center mx-auto mb-2 bg-black/50 backdrop-blur-sm"></div>
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Traditional Feast</h4>
                                            <p className="text-gray-400">Authentic Idli, Dosa, Pongal served on endless banana leaves.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={tnTemple} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="Non Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Non-Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Chettinad Spice</h4>
                                            <p className="text-gray-400">Fiery curries and aromatic biryanis from the heart of Chettinad.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={tnMountain} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Bring Your Own</h4>
                                            <p className="text-gray-400">Scenic spots crafted for your perfect family picnic.</p>
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

export default TamilnaduExplorer;
