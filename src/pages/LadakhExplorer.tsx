import { ArrowLeft, Building2, Mountain, Snowflake, Star, Umbrella, Tent } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Image Imports
// Image Imports
import ladakhHero from "@/assets/Zanskar-Valley.jpg";

// Using real assets where available, proxies otherwise
import khardungLa from "@/assets/khardung la.jpg"; // Proxy
import changLa from "@/assets/changla-pass.jpg"; // Proxy
import pangongTso from "@/assets/Pangong-Tso.jpg"; // Real

// Historical Sites
import lehPalace from "@/assets/leh palace.jpg"; // Proxy
import thikseyMonastery from "@/assets/thiksey-monastery.jpg"; // Proxy
import hemisMonastery from "@/assets/hemis monastery.jpg"; // Proxy

// Famous Spots
import nubraValley from "@/assets/Nubra-Valley.jpg"; // Real
import magneticHill from "@/assets/magnetic hill.jpeg"; // Proxy
import zanskarValley from "@/assets/Zanskar-Valley.jpg"; // Real

// Resorts & Food - using generic placeholders
import ladakhResort from "@/assets/lak resort.jpg"; // Proxy
import ladakhVeg from "@/assets/lak veg.jpg"; // Proxy
import ladakhNonVeg from "@/assets/lak non veg.jpg"; // Proxy
import ladakhPicnic from "@/assets/lak pic.jpg"; // Proxy

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
        <img src={image} alt={title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

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
        <div className="absolute top-1/2 left-1/4 w-1/4 h-[1px] bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
        <div className="absolute top-1/2 right-1/4 w-1/4 h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight font-serif">
            {title}
        </h2>
        <p className="text-cyan-400 text-xl font-light tracking-[0.2em] uppercase">{subtitle}</p>
    </div>
);

const LadakhExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <img
                        src={ladakhHero}
                        alt="Ladakh Landscape"
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
                    <div className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-serif">
                        LADAKH
                    </div>
                </nav>

                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-5xl animate-fade-in-up">
                        <h1 className="text-8xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-8 font-serif leading-none tracking-tight drop-shadow-2xl">
                            LADAKH
                            <span className="block text-4xl md:text-6xl text-cyan-500 font-light tracking-[0.5em] mt-4 font-sans">LAND OF PASSES</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed border-l-4 border-cyan-500 pl-8 text-left">
                            Where the sky meets the earth, and mountains touch the heavens. Experience the pristine beauty of the Himalayas.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
                    <p className="text-cyan-500 text-xs tracking-widest uppercase opacity-70">Scroll to Explore</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* 1. Majestic Peaks */}
                <section>
                    <SectionTitle title="Majestic Peaks" subtitle="High Altitude Passes" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={khardungLa}
                            title="Khardung La"
                            desc="One of the world's highest motorable passes at 5,359 meters."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={changLa}
                            title="Chang La"
                            desc="Gateway to Pangong, standing tall at 5,360 meters."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={pangongTso}
                            title="Pangong Tso"
                            desc="The mesmerizing blue lake that changes colors throughout the day."
                            icon={Snowflake}
                        />
                    </div>
                </section>

                {/* 2. Historical Heritage */}
                <section>
                    <SectionTitle title="Historical Heritage" subtitle="Monasteries & Palaces" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={lehPalace}
                            title="Leh Palace"
                            desc="The 17th-century royal palace overlooking Leh town."
                            icon={Building2}
                        />
                        <PlaceCard
                            image={thikseyMonastery}
                            title="Thiksey Monastery"
                            desc="A stunning 12-story monastery resembling Potala Palace."
                            icon={Building2}
                        />
                        <PlaceCard
                            image={hemisMonastery}
                            title="Hemis Monastery"
                            desc="The largest and wealthiest monastery in Ladakh."
                            icon={Star}
                        />
                    </div>
                </section>

                {/* 3. Famous Spots */}
                <section>
                    <SectionTitle title="Famous Spots" subtitle="Natural Wonders" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={nubraValley}
                            title="Nubra Valley"
                            desc="The valley of flowers with double-humped Bactrian camels."
                            icon={Tent}
                        />
                        <PlaceCard
                            image={magneticHill}
                            title="Magnetic Hill"
                            desc="Witness the mysterious gravitational anomaly defying physics."
                            icon={Star}
                        />
                        <PlaceCard
                            image={zanskarValley}
                            title="Zanskar Valley"
                            desc="Remote valley famous for the frozen Chadar Trek."
                            icon={Snowflake}
                        />
                    </div>
                </section>

                {/* Resort & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Mountain Stays & Cuisine</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Curated experiences in the Himalayas</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={ladakhResort} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-cyan-400 fill-cyan-400" size={24} />
                                            <Star className="text-cyan-400 fill-cyan-400" size={24} />
                                            <Star className="text-cyan-400 fill-cyan-400" size={24} />
                                            <Star className="text-cyan-400 fill-cyan-400" size={24} />
                                            <Star className="text-cyan-400 fill-cyan-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Mountain Retreats</h3>
                                        <p className="text-gray-300">Experience luxury amidst the Himalayas with breathtaking views.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={ladakhVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Thukpa</h4>
                                            <p className="text-gray-400">Hot noodle soup perfect for high altitude chill.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={ladakhNonVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Local Delicacy</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Skyu</h4>
                                            <p className="text-gray-400">Traditional Ladakhi pasta stew with meat and vegetables.</p>
                                        </div>
                                    </div>

                                    {/* Own Food / Picnic */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={ladakhPicnic} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Picnic" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Pangong Lake View</h4>
                                            <p className="text-gray-400">Enjoy a serene picnic by the changing colors of the lake.</p>
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

export default LadakhExplorer;
