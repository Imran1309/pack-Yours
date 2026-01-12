
import { ArrowLeft, Building2, Star, Waves, Church, Flower } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Spiritual (Temples/Ashrams)
import pyAuroville from "@/assets/auroville_matrimandir.png";
import pyAshram from "@/assets/pondicherry_church.png"; // Proxy
import pyTemple from "@/assets/temple_drums_bg.png"; // Proxy

// Beaches
import pyParadise from "@/assets/bg-falls.jpg"; // Proxy
import pyRock from "@/assets/andaman_wedding_beach.png"; // Proxy for beach
import pySerenity from "@/assets/cavelossim.png"; // Proxy

// Colonial/City
import pyFrench from "@/assets/pondicherry_church.png"; // Proxy
import pyWar from "@/assets/bg-city.jpg"; // Proxy
import pyChurch from "@/assets/pondicherry_church.png";

// Resorts & Food
import pyResort from "@/assets/andaman_resort_room.png"; // Proxy
import pyVeg from "@/assets/punjabfood.png"; // Proxy
import pyNonVeg from "@/assets/andaman_seafood.png"; // Proxy
import pyOwn from "@/assets/ooty_botanical_garden.png"; // Proxy

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-cyan-500/20 backdrop-blur-sm rounded-full">
                        <Icon className="text-cyan-400" size={24} />
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
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200 drop-shadow-sm mb-6 font-serif">
            {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6" />
        <p className="text-gray-400 text-xl font-light tracking-widest uppercase">{subtitle}</p>
    </div>
);

const PuducherryExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={pyRock} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/destination")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-cyan-500 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-cyan-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-cyan-600 font-serif">
                            PUDUCHERRY
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-cyan-100/80 uppercase border-y border-cyan-500/30 py-4 px-12">
                        The French Riviera of the East
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-cyan-500 to-transparent" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* Spiritual Section */}
                <section>
                    <SectionTitle title="Spiritual Sanctums" subtitle="Find inner peace" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={pyAuroville} title="Auroville" desc="The city of dawn, featuring the golden Matrimandir." icon={Flower} />
                        <PlaceCard image={pyAshram} title="Sri Aurobindo Ashram" desc="A place of calm and deep meditation." icon={Flower} />
                        <PlaceCard image={pyTemple} title="Manakula Vinayagar" desc="An ancient temple dedicated to Lord Ganesha." icon={Building2} />
                    </div>
                </section>

                {/* Beaches Section */}
                <section>
                    <SectionTitle title="Golden Sands" subtitle="Sun, Sea, and Serenity" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={pyParadise} title="Paradise Beach" desc="Accessible only by boat, a true island paradise." icon={Waves} />
                        <PlaceCard image={pyRock} title="Promenade Beach" desc="The heart of the city, perfect for evening walks." icon={Waves} />
                        <PlaceCard image={pySerenity} title="Serenity Beach" desc="Famous for surfing and golden sunrises." icon={Waves} />
                    </div>
                </section>

                {/* Colonial Section */}
                <section>
                    <SectionTitle title="Colonial Charm" subtitle="A walk through history" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={pyFrench} title="White Town" desc="Vibrant yellow streets with French colonial architecture." icon={Building2} />
                        <PlaceCard image={pyWar} title="War Memorial" desc="Honoring the soldiers of the First World War." icon={Building2} />
                        <PlaceCard image={pyChurch} title="Sacred Heart Basilica" desc="Gothic architecture with rare stained glass panels." icon={Church} />
                    </div>
                </section>

                {/* Resorts & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">French & Creole Flavors</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Heritage stays & fusion cuisine</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={pyResort} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-cyan-400 fill-cyan-400" size={24} />
                                            <Star className="text-cyan-400 fill-cyan-400" size={24} />
                                            <Star className="text-cyan-400 fill-cyan-400" size={24} />
                                            <Star className="text-cyan-400 fill-cyan-400" size={24} />
                                            <Star className="text-cyan-400 fill-cyan-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Colonial Heritage Stays</h3>
                                        <p className="text-gray-300">Experience grandeur in restored French mansions.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={pyVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-7 h-7 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">French/Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Cafe Delights</h4>
                                            <p className="text-gray-400">Freshly baked croissants, quiches, and ratatouille.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={pyNonVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="Non Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Creole/Seafood</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Seafood Platter</h4>
                                            <p className="text-gray-400">Fresh catch from the Bay of Bengal, cooked with French flair.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={pyOwn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Beach Picnic</h4>
                                            <p className="text-gray-400">Enjoy your own treats by the soothing waves.</p>
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

export default PuducherryExplorer;
