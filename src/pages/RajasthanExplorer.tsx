

import { ArrowLeft, Building2, Trees, Mountain, Star, Umbrella } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Image Imports
import rjHero from "@/assets/Rajasthan.png";

// Divine & Spiritual
import rjBrahma from "@/assets/brahma temple.jpg";
import rjKarni from "@/assets/karni mata.jpg";
import rjDilwara from "@/assets/dilwara temple.jpg"; // Using for Dilwara Temples

// Cultural & Royal Hubs
import rjAmber from "@/assets/amber fort.jpg";
import rjCityPalace from "@/assets/city palace raj.jpg";
import rjHawa from "@/assets/Hawa Mahal.jpg";

// Nature & Unique
import rjTiger from "@/assets/ranthambore.jpg";
import rjThar from "@/assets/thar-desert1.jpg";
import rjNakki from "@/assets/mount abu.jpg";

// Resorts & Food
import rjUmaid from "@/assets/rj resorts.jpg";
import rjDalBaati from "@/assets/rj veg.jpg"; // Veg
import rjLaalMaas from "@/assets/rj non veg.jpg"; // Non-Veg
import rjPicnic from "@/assets/rj picnic.jpg"; // Own Food

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
        <div className="absolute top-1/2 left-1/4 w-1/4 h-[1px] bg-gradient-to-l from-yellow-500/50 to-transparent"></div>
        <div className="absolute top-1/2 right-1/4 w-1/4 h-[1px] bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight font-serif">
            {title}
        </h2>
        <p className="text-yellow-400 text-xl font-light tracking-[0.2em] uppercase">{subtitle}</p>
    </div>
);

const RajasthanExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <img
                        src={rjHero}
                        alt="Rajasthan Royal Heritage"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                    <button
                        onClick={() => navigate('/states')}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 group border border-white/10"
                    >
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium tracking-wide">Back to India</span>
                    </button>
                    <div className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 font-serif">
                        RAJASTHAN
                    </div>
                </nav>

                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-5xl animate-fade-in-up">
                        <h1 className="text-8xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-8 font-serif leading-none tracking-tight drop-shadow-2xl">
                            ROYAL
                            <span className="block text-4xl md:text-6xl text-yellow-500 font-light tracking-[0.5em] mt-4 font-sans">HERITAGE</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed border-l-4 border-yellow-500 pl-8 text-left">
                            Land of Kings, majestic forts, and golden deserts. Experience the grandeur of India's royal past.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-yellow-500 to-transparent"></div>
                    <p className="text-yellow-500 text-xs tracking-widest uppercase opacity-70">Scroll to Explore</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* 1. Divine & Spiritual */}
                <section>
                    <SectionTitle title="Divine Sanctity" subtitle="Temples & Shrines" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={rjBrahma}
                            title="Brahma Temple"
                            desc="The rare and ancient temple of Lord Brahma in Pushkar."
                            icon={Building2}
                        />
                        <PlaceCard
                            image={rjKarni}
                            title="Karni Mata"
                            desc="The unique Rat Temple of Deshnoke, revered by locals."
                            icon={Building2}
                        />
                        <PlaceCard
                            image={rjDilwara}
                            title="Dilwara Temples"
                            desc="Exquisite marble Jain temples of Mount Abu."
                            icon={Star}
                        />
                    </div>
                </section>

                {/* 2. Cultural & Royal Hubs */}
                <section>
                    <SectionTitle title="Royal Legacy" subtitle="Forts & Palaces" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={rjAmber}
                            title="Amber Fort"
                            desc="The majestic hilltop fortress of Jaipur."
                            icon={Building2}
                        />
                        <PlaceCard
                            image={rjCityPalace}
                            title="City Palace"
                            desc="A magnificent complex overlooking Lake Pichola."
                            icon={Building2}
                        />
                        <PlaceCard
                            image={rjHawa}
                            title="Hawa Mahal"
                            desc="The Palace of Winds with its intricate honeycomb façade."
                            icon={Building2}
                        />
                    </div>
                </section>

                {/* 3. Natural & Unique */}
                <section>
                    <SectionTitle title="Nature's Canvas" subtitle="Deserts & Wildlife" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={rjThar}
                            title="Thar Desert"
                            desc="Golden sand dunes and camel safaris in Jaisalmer."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={rjTiger}
                            title="Ranthambore"
                            desc="The royal hunting grounds, home to the Bengal Tiger."
                            icon={Trees}
                        />
                        <PlaceCard
                            image={rjNakki}
                            title="Mount Abu"
                            desc="The only hill station of Rajasthan, featuring Nakki Lake."
                            icon={Mountain}
                        />
                    </div>
                </section>

                {/* Resort & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-12">
                    <SectionTitle title="Royal Feast & Stay" subtitle="Curated Experiences" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
                        {/* Resort */}
                        <div className="lg:col-span-8 relative group overflow-hidden rounded-3xl h-full cursor-pointer">
                            <img src={rjUmaid} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 flex flex-col justify-end p-8">
                                <h3 className="text-4xl font-bold text-white font-serif mb-2">Heritage Stays</h3>
                                <p className="text-gray-300 text-lg">Live like a Maharaja in converted palace hotels.</p>
                            </div>
                        </div>

                        {/* Food Grid */}
                        <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                            {/* Veg */}
                            <div className="relative flex-1 group overflow-hidden rounded-3xl cursor-pointer">
                                <img src={rjDalBaati} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-7 h-7 rounded-full border-2 border-green-500 flex items-center justify-center mx-auto mb-2 bg-black/50 backdrop-blur-sm">
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-serif">Dal Baati Churma</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Non-Veg */}
                            <div className="relative flex-1 group overflow-hidden rounded-3xl cursor-pointer">
                                <img src={rjLaalMaas} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non Veg Food" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-7 h-7 rounded-full border-2 border-red-500 flex items-center justify-center mx-auto mb-2 bg-black/50 backdrop-blur-sm">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-serif">Laal Maas</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Own Food / Picnic */}
                            <div className="relative flex-1 group overflow-hidden rounded-3xl cursor-pointer">
                                <img src={rjPicnic} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center mx-auto mb-2 bg-black/50 backdrop-blur-sm">
                                            <Umbrella className="text-yellow-500 w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-serif">Lake Picnic</h3>
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
