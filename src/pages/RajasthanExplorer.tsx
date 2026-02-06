

import { ArrowLeft, Building2, Trees, Mountain, Star, Umbrella } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Image Imports
import rjHero from "@/assets/Rajasthan.png";

// Divine & Spiritual
import rjBrahma from "@/assets/brahma temple.jpg"; // Corrected asset
import rjKarni from "@/assets/karni mata.jpg"; // Proxy
import rjDilwara from "@/assets/dilwara temple.jpg"; // Proxy

// Cultural & Royal Hubs
import rjAmber from "@/assets/amber fort.jpg"; // Found in list!
import rjCityPalace from "@/assets/city palace raj.jpg";
import rjHawa from "@/assets/Hawa Mahal.jpg";

// Nature & Unique
import rjTiger from "@/assets/thar-desert1.jpg"; // Found in list!
import rjThar from "@/assets/ranthambore.jpg"; // Proxy (Desert state image)
import rjNakki from "@/assets/mount abu.jpg"; // Proxy (Hill station)

// Resorts & Food
import rjUmaid from "@/assets/rj resorts.jpg"; // Proxy
import rjDalBaati from "@/assets/rj veg.jpg"; // Proxy for Veg
import rjLaalMaas from "@/assets/rj non veg.jpg"; // Proxy for Non-Veg
import rjPicnic from "@/assets/rj picnic.jpg"; // Proxy for Picnic

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-yellow-500/50 transition-all duration-500">
        <img src={image} alt={title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

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

const RajasthanExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500/30 relative">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-[#0a0a0a] to-[#0a0a0a] -z-10" />
            <div
                className="fixed inset-0 bg-cover bg-center opacity-20 mixed-blend-overlay -z-10 pointer-events-none"
                style={{ backgroundImage: `url(${rjHero})` }}
            />

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={rjHero} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/destination")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-yellow-500 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-yellow-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-yellow-600 font-serif">
                            RAJASTHAN
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-yellow-100/80 uppercase border-y border-yellow-500/30 py-4 px-12">
                        Land of Kings
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-yellow-500 to-transparent" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* 1. Divine & Spiritual */}
                <section>
                    <SectionTitle title="Divine Sanctity" subtitle="Temples & Shrines" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={rjBrahma} title="Brahma Temple" desc="The rare and ancient temple of Lord Brahma in Pushkar." icon={Building2} />
                        <PlaceCard image={rjKarni} title="Karni Mata" desc="The unique Rat Temple of Deshnoke, revered by locals." icon={Building2} />
                        <PlaceCard image={rjDilwara} title="Dilwara Temples" desc="Exquisite marble Jain temples of Mount Abu." icon={Star} />
                    </div>
                </section>

                {/* 2. Cultural & Royal Hubs */}
                <section>
                    <SectionTitle title="Royal Legacy" subtitle="Forts & Palaces" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={rjAmber} title="Amber Fort" desc="The majestic hilltop fortress of Jaipur." icon={Building2} />
                        <PlaceCard image={rjCityPalace} title="City Palace" desc="A magnificent complex overlooking Lake Pichola." icon={Building2} />
                        <PlaceCard image={rjHawa} title="Hawa Mahal" desc="The Palace of Winds with its intricate honeycomb façade." icon={Building2} />
                    </div>
                </section>

                {/* 3. Natural & Unique */}
                <section>
                    <SectionTitle title="Nature's Canvas" subtitle="Deserts & Wildlife" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={rjThar} title="Thar Desert" desc="Golden sand dunes and camel safaris in Jaisalmer." icon={Mountain} />
                        <PlaceCard image={rjTiger} title="Ranthambore" desc="The royal hunting grounds, home to the Bengal Tiger." icon={Trees} />
                        <PlaceCard image={rjNakki} title="Mount Abu" desc="The only hill station of Rajasthan, featuring Nakki Lake." icon={Mountain} />
                    </div>
                </section>

                {/* Resorts & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Royal Hospitality</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Heritage stays & flavors of Rajasthan</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={rjUmaid} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Umaid Bhawan Palace</h3>
                                        <p className="text-gray-300">Live like a Maharaja in the world's largest private residence.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={rjDalBaati} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Dal Baati Churma</h4>
                                            <p className="text-gray-400">The classic Rajasthani signature dish.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={rjLaalMaas} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Royal Flavor</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Laal Maas</h4>
                                            <p className="text-gray-400">Fiery mutton curry cooked in traditional style.</p>
                                        </div>
                                    </div>

                                    {/* Own Food / Picnic */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={rjPicnic} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Picnic" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Lake Picnic</h4>
                                            <p className="text-gray-400">Enjoy refreshments by the serene lakes.</p>
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

export default RajasthanExplorer;
