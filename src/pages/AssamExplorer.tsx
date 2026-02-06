import { ArrowLeft, Building2, Mountain, Trees, Star, Umbrella, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Image Imports - Using specific images for each location
// Hero section
import assamHero from "@/assets/assam.jpg";

// Famous Mountains (3 mountains)
import haflongHill from "@/assets/haflong.jpg";
import karbiAnglong from "@/assets/karbi anglong.jpg";
import nilachalHill from "@/assets/Nilachal Bandharban.jpg";

// Cities & Towns (3 places)
import guwahati from "@/assets/Guwahati.jpg";
import majuli from "@/assets/majuli.jpg";
import sivasagar from "@/assets/sivasagar.jpg";

// Nature & Culture Spots (3 spots)
import kaziranga from "@/assets/kaziranga.jpg";
import kamakhya from "@/assets/kamakhya.jpg";
import manas from "@/assets/Manas national park.jpg";

// Resorts & Food
import assamResort from "@/assets/as resorts.jpg";
import assamVeg from "@/assets/as veg.jpg";
import assamNonVeg from "@/assets/as non veg.jpg";
import assamPicnic from "@/assets/as_picnic.jpg";

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-teal-500/50 transition-all duration-500">
        <img src={image} alt={title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-teal-500/20 backdrop-blur-sm rounded-full">
                        <Icon className="text-teal-400" size={24} />
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
        <div className="absolute top-1/2 left-1/4 w-1/4 h-[1px] bg-gradient-to-l from-teal-500/50 to-transparent"></div>
        <div className="absolute top-1/2 right-1/4 w-1/4 h-[1px] bg-gradient-to-r from-teal-500/50 to-transparent"></div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight font-serif">
            {title}
        </h2>
        <p className="text-teal-400 text-xl font-light tracking-[0.2em] uppercase">{subtitle}</p>
    </div>
);

const AssamExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-teal-500/30">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <img
                        src={assamHero}
                        alt="Assam"
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
                    <div className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600 font-serif">
                        ASSAM
                    </div>
                </nav>

                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-5xl animate-fade-in-up">
                        <h1 className="text-7xl md:text-[9rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-8 font-serif leading-none tracking-tight drop-shadow-2xl">
                            ASSAM
                            <span className="block text-4xl md:text-6xl text-teal-500 font-light tracking-[0.5em] mt-4 font-sans">LAND OF RED RIVER & BLUE HILLS</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed border-l-4 border-teal-500 pl-8 text-left">
                            Where mighty Brahmaputra flows through lush tea gardens, and ancient temples stand guard over pristine wildlife sanctuaries.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-teal-500 to-transparent"></div>
                    <p className="text-teal-500 text-xs tracking-widest uppercase opacity-70">Scroll to Explore</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* 1. Famous Mountains */}
                <section>
                    <SectionTitle title="Famous Mountains" subtitle="Hill Stations & Peaks" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={haflongHill}
                            title="Haflong Hill"
                            desc="Known as the 'Scotland of the East', this picturesque hill station offers breathtaking views."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={karbiAnglong}
                            title="Karbi Anglong Hills"
                            desc="Pristine hill ranges home to diverse tribal cultures and stunning natural beauty."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={nilachalHill}
                            title="Nilachal Hill"
                            desc="Sacred hilltop in Guwahati, home to the famous Kamakhya Temple."
                            icon={Mountain}
                        />
                    </div>
                </section>

                {/* 2. Cities & Towns Places */}
                <section>
                    <SectionTitle title="Cities & Towns" subtitle="Urban & Cultural Hubs" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={guwahati}
                            title="Guwahati"
                            desc="Gateway to Northeast India, a vibrant city on the banks of Brahmaputra."
                            icon={Building2}
                        />
                        <PlaceCard
                            image={majuli}
                            title="Majuli"
                            desc="World's largest river island, a cultural hotspot with ancient monasteries."
                            icon={Landmark}
                        />
                        <PlaceCard
                            image={sivasagar}
                            title="Sivasagar"
                            desc="Historical capital of the Ahom Kingdom with magnificent monuments and tanks."
                            icon={Building2}
                        />
                    </div>
                </section>

                {/* 3. Nature & Culture Spots */}
                <section>
                    <SectionTitle title="Nature & Culture" subtitle="Wildlife & Heritage" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={kaziranga}
                            title="Kaziranga National Park"
                            desc="UNESCO World Heritage Site, home to two-thirds of the world's one-horned rhinos."
                            icon={Trees}
                        />
                        <PlaceCard
                            image={kamakhya}
                            title="Kamakhya Temple"
                            desc="Ancient Shakti Peeth, one of the most revered pilgrimage sites in India."
                            icon={Star}
                        />
                        <PlaceCard
                            image={manas}
                            title="Manas National Park"
                            desc="UNESCO World Heritage Site, a tiger reserve with incredible biodiversity."
                            icon={Trees}
                        />
                    </div>
                </section>

                {/* Resort & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Tea Estate Stays & Cuisine</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Authentic experiences in the Land of Red River</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={assamResort} alt="Tea Estate Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-teal-400 fill-teal-400" size={24} />
                                            <Star className="text-teal-400 fill-teal-400" size={24} />
                                            <Star className="text-teal-400 fill-teal-400" size={24} />
                                            <Star className="text-teal-400 fill-teal-400" size={24} />
                                            <Star className="text-teal-400 fill-teal-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Tea Estate Resorts</h3>
                                        <p className="text-gray-300">Experience tranquility amidst sprawling tea gardens and colonial-era bungalows.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={assamVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Assamese Thali</h4>
                                            <p className="text-gray-400">Traditional platter with khar, pitika, and seasonal greens.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={assamNonVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Local Delicacy</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Masor Tenga</h4>
                                            <p className="text-gray-400">Tangy fish curry with tomatoes and elephant apple.</p>
                                        </div>
                                    </div>

                                    {/* Own Food / Picnic */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={assamPicnic} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Picnic" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Tea Garden Picnic</h4>
                                            <p className="text-gray-400">Relax amidst lush tea estates with scenic valley views.</p>
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

export default AssamExplorer;
