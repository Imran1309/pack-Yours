import { ArrowLeft, Building2, Mountain, Trees, Star, Umbrella, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Image Imports - Using specific images for each location
// Hero section
// Hero section
import mpHero from "@/assets/khajuraho.jpg"; // Using Khajuraho as hero (check if real, if not fallback to ujjain)

// Cultural Heritage
import khajuraho from "@/assets/khajuraho.jpg";
import sanchi from "@/assets/sanchi stupa.jpg";
import gwaliorFort from "@/assets/gwalior-fort.jpg";

// Natural Wonders
import pachmarhi from "@/assets/pachmarhi.jpg";
import kanhaNationalPark from "@/assets/kanha.jpg";
import marbleRocks from "@/assets/marble-rock.jpg";

// Famous Spots
import ujjain from "@/assets/ujjain.jpg";
import orchha from "@/assets/orchha.jpg";
import mandu from "@/assets/mandu.jpg";

// Resorts & Food
import mpResort from "@/assets/mp resorts.jpg";
import mpVeg from "@/assets/mp veg.jpg";
import mpNonVeg from "@/assets/mp non veg.jpg";
import mpPicnic from "@/assets/picnic maha.jpg";

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-orange-500/50 transition-all duration-500">
        <img src={image} alt={title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

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
        <div className="absolute top-1/2 left-1/4 w-1/4 h-[1px] bg-gradient-to-l from-orange-500/50 to-transparent"></div>
        <div className="absolute top-1/2 right-1/4 w-1/4 h-[1px] bg-gradient-to-r from-orange-500/50 to-transparent"></div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight font-serif">
            {title}
        </h2>
        <p className="text-orange-400 text-xl font-light tracking-[0.2em] uppercase">{subtitle}</p>
    </div>
);

const MadhyaPradeshExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <img
                        src={mpHero}
                        alt="Madhya Pradesh"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                    <button
                        onClick={() => navigate('/destination')}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 group border border-white/10"
                    >
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium tracking-wide">Back to India</span>
                    </button>
                    <div className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600 font-serif">
                        MADHYA PRADESH
                    </div>
                </nav>

                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-5xl animate-fade-in-up">
                        <h1 className="text-7xl md:text-[9rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-8 font-serif leading-none tracking-tight drop-shadow-2xl">
                            MADHYA PRADESH
                            <span className="block text-4xl md:text-6xl text-orange-500 font-light tracking-[0.5em] mt-4 font-sans">HEART OF INDIA</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed border-l-4 border-orange-500 pl-8 text-left">
                            Where ancient temples meet pristine forests, and history whispers through majestic forts. Discover the soul of India.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
                    <p className="text-orange-500 text-xs tracking-widest uppercase opacity-70">Scroll to Explore</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* 1. Cultural Heritage */}
                <section>
                    <SectionTitle title="Cultural Heritage" subtitle="Ancient Temples & Forts" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={khajuraho}
                            title="Khajuraho"
                            desc="UNESCO World Heritage Site famous for stunning temple architecture and intricate sculptures."
                            icon={Landmark}
                        />
                        <PlaceCard
                            image={sanchi}
                            title="Sanchi Stupa"
                            desc="Ancient Buddhist monument dating back to 3rd century BCE, a symbol of peace."
                            icon={Landmark}
                        />
                        <PlaceCard
                            image={gwaliorFort}
                            title="Gwalior Fort"
                            desc="Magnificent hilltop fortress known as the 'Gibraltar of India'."
                            icon={Building2}
                        />
                    </div>
                </section>

                {/* 2. Natural Wonders */}
                <section>
                    <SectionTitle title="Natural Wonders" subtitle="Forests & Landscapes" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={pachmarhi}
                            title="Pachmarhi"
                            desc="Hill station known as 'Satpura Ki Rani' with waterfalls and caves."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={kanhaNationalPark}
                            title="Kanha National Park"
                            desc="One of India's finest tiger reserves and inspiration for The Jungle Book."
                            icon={Trees}
                        />
                        <PlaceCard
                            image={marbleRocks}
                            title="Marble Rocks"
                            desc="Stunning white marble cliffs along the Narmada River at Bhedaghat."
                            icon={Mountain}
                        />
                    </div>
                </section>

                {/* 3. Famous Spots */}
                <section>
                    <SectionTitle title="Famous Spots" subtitle="Spiritual & Historical" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={ujjain}
                            title="Ujjain"
                            desc="Sacred city home to Mahakaleshwar Jyotirlinga, one of the 12 Jyotirlingas."
                            icon={Star}
                        />
                        <PlaceCard
                            image={orchha}
                            title="Orchha"
                            desc="Medieval town with magnificent palaces and temples along the Betwa River."
                            icon={Building2}
                        />
                        <PlaceCard
                            image={mandu}
                            title="Mandu"
                            desc="Ruined city of joy with Afghan architecture and romantic legends."
                            icon={Landmark}
                        />
                    </div>
                </section>

                {/* Resort & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Heritage Stays & Cuisine</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Authentic experiences in the Heart of India</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={mpResort} alt="Heritage Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Heritage Palaces</h3>
                                        <p className="text-gray-300">Experience royal hospitality in converted palaces and heritage properties.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={mpVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Poha</h4>
                                            <p className="text-gray-400">Indori specialty - flattened rice with spices and sev.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={mpNonVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Royal Flavor</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Rogan Josh</h4>
                                            <p className="text-gray-400">Rich aromatic mutton curry with traditional spices.</p>
                                        </div>
                                    </div>

                                    {/* Own Food / Picnic */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={mpPicnic} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Picnic" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Forest Picnic</h4>
                                            <p className="text-gray-400">Enjoy nature's serenity in the lush forests of Pachmarhi.</p>
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

export default MadhyaPradeshExplorer;
