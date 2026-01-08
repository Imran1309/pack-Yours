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
import assamPicnic from "@/assets/as picnic.jpg";

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
                        onClick={() => navigate('/states')}
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
                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-12">
                    <SectionTitle title="Tea Estate Stays & Cuisine" subtitle="Authentic Experiences" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
                        {/* Resort */}
                        <div className="lg:col-span-8 relative group overflow-hidden rounded-3xl h-full cursor-pointer">
                            <img src={assamResort} alt="Tea Estate Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 flex flex-col justify-end p-8">
                                <h3 className="text-4xl font-bold text-white font-serif mb-2">Tea Estate Resorts</h3>
                                <p className="text-gray-300 text-lg">Experience tranquility amidst sprawling tea gardens and colonial-era bungalows.</p>
                            </div>
                        </div>

                        {/* Food Grid */}
                        <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                            {/* Veg */}
                            <div className="relative flex-1 group overflow-hidden rounded-3xl cursor-pointer">
                                <img src={assamVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-7 h-7 rounded-full border-2 border-green-500 flex items-center justify-center mx-auto mb-2 bg-black/50 backdrop-blur-sm">
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-serif">Assamese Thali</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Non-Veg */}
                            <div className="relative flex-1 group overflow-hidden rounded-3xl cursor-pointer">
                                <img src={assamNonVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non Veg Food" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-7 h-7 rounded-full border-2 border-red-500 flex items-center justify-center mx-auto mb-2 bg-black/50 backdrop-blur-sm">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-serif">Masor Tenga</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Own Food / Picnic */}
                            <div className="relative flex-1 group overflow-hidden rounded-3xl cursor-pointer">
                                <img src={assamPicnic} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-7 h-7 rounded-full border-2 border-teal-500 flex items-center justify-center mx-auto mb-2 bg-black/50 backdrop-blur-sm">
                                            <Umbrella className="text-teal-500 w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-serif">Tea Garden Picnic</h3>
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
