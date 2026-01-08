import { ArrowLeft, Landmark, Building2, Trees, Star, Sun, Umbrella } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Image Imports
import upHero from "@/assets/up.jpg";

// Spiritual Heritage
import kashiImg from "@/assets/kashi.jpg";
import ayodhyaImg from "@/assets/ram janmabhoomi.jpg";
import vrindavanImg from "@/assets/banke bihari.jpg";

// Mughal Heritage
import tajMahalImg from "@/assets/taj-mahal.jpg";
import agraFortImg from "@/assets/agra fort.jpg";
import fatehpurSikriImg from "@/assets/Fatehpur-Sikri.jpg";

// Natural & Modern
import dudhwaImg from "@/assets/dudhwa park.jpg";
import gomtiImg from "@/assets/gomti river.jpg";
import noidaImg from "@/assets/nodia.jpg";

// Resorts & Food
import resortImg from "@/assets/itc-mughal.jpg";
import vegImg from "@/assets/up veg.jpg";
import nonVegImg from "@/assets/up non-veg.jpg";
import picnicImg from "@/assets/as picnic.jpg";

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

const UttarPradeshExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <img
                        src={upHero}
                        alt="Uttar Pradesh"
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
                    <div className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600 font-serif uppercase">
                        Uttar Pradesh
                    </div>
                </nav>

                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-5xl animate-fade-in-up">
                        <h1 className="text-7xl md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-8 font-serif leading-none tracking-tight drop-shadow-2xl uppercase">
                            Heart of India
                            <span className="block text-3xl md:text-5xl text-orange-500 font-light tracking-[0.5em] mt-4 font-sans italic">Heritage of the Heartland</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed border-l-4 border-orange-500 pl-8 text-left backdrop-blur-sm bg-black/20 p-4">
                            Where the sacred Ganges flows past eternal cities, Mughal wonders stand in timeless glory, and modern dreams take flight.
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

                {/* 1. Spiritual Heritage */}
                <section>
                    <SectionTitle title="Spiritual Roots" subtitle="The Divine Heartland" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={kashiImg}
                            title="Kashi Vishwanath"
                            desc="The heart of Varanasi, one of the oldest living cities in the world, dedicated to Lord Shiva."
                            icon={Landmark}
                        />
                        <PlaceCard
                            image={ayodhyaImg}
                            title="Ram Janmabhoomi"
                            desc="The sacred birthplace of Lord Rama, a symbol of faith and architectural brilliance."
                            icon={Star}
                        />
                        <PlaceCard
                            image={vrindavanImg}
                            title="Banke Bihari"
                            desc="Experience the divine love of Lord Krishna in the vibrant and soulful town of Vrindavan."
                            icon={Sun}
                        />
                    </div>
                </section>

                {/* 2. Mughal Heritage */}
                <section>
                    <SectionTitle title="Mughal Splendor" subtitle="Architectural Wonders" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={tajMahalImg}
                            title="Taj Mahal"
                            desc="A UNESCO World Heritage site and one of the Seven Wonders of the World, the ultimate symbol of love."
                            icon={Building2}
                        />
                        <PlaceCard
                            image={agraFortImg}
                            title="Agra Fort"
                            desc="The powerful 16th-century Mughal fortress, once the main residence of the emperors."
                            icon={Landmark}
                        />
                        <PlaceCard
                            image={fatehpurSikriImg}
                            title="Fatehpur Sikri"
                            desc="The stunning red sandstone city, a fusion of Persian and Indian architectural styles."
                            icon={Building2}
                        />
                    </div>
                </section>

                {/* 3. Natural & Modern Spots */}
                <section>
                    <SectionTitle title="Natural & Modern" subtitle="Progress meets Nature" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={dudhwaImg}
                            title="Dudhwa National Park"
                            desc="Lush forests and wetlands on the Indo-Nepal border, home to tigers and swamp deer."
                            icon={Trees}
                        />
                        <PlaceCard
                            image={gomtiImg}
                            title="Gomti Riverfront"
                            desc="Lucknow's modern lung, a beautifully landscaped urban space along the sacred river."
                            icon={Sun}
                        />
                        <PlaceCard
                            image={noidaImg}
                            title="Noida Skyline"
                            desc="The economic pulse of UP, featuring soaring skyscrapers and futuristic infrastructure."
                            icon={Building2}
                        />
                    </div>
                </section>

                {/* Resorts & Food Section - Redesigned to Puducherry Style */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4 tracking-tight">Royal Hospitality</h2>
                            <p className="text-xl text-orange-400 font-light tracking-[0.2em] uppercase">Elite Stays & Awadhi Flavors</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="ITC Mughal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Star className="text-orange-500 fill-orange-500" size={24} />
                                            <Star className="text-orange-500 fill-orange-500" size={24} />
                                            <Star className="text-orange-500 fill-orange-500" size={24} />
                                            <Star className="text-orange-500 fill-orange-500" size={24} />
                                            <Star className="text-orange-500 fill-orange-500" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">ITC Mughal, Agra</h3>
                                        <p className="text-gray-300 text-lg">Experience the legendary hospitality of Mughal emperors in a modern sanctuary of luxury.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 min-w-[128px] rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={vegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Lucknowi Thali" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-green-500/30" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Traditional Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Lucknowi Thali</h4>
                                            <p className="text-gray-400">A royal spread of kebabs, biryanis, and curries from the kitchen of Nawabs.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 min-w-[128px] rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={nonVegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Tunday Kababi" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-red-500/30" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Mughlai Special</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Tunday Kababi</h4>
                                            <p className="text-gray-400">Legendary melt-in-the-mouth kebabs featuring a secret blend of 160 spices.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 min-w-[128px] rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={picnicImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Ghatside Picnic" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Umbrella className="text-orange-500 w-4 h-4" />
                                                <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Outdoor Experience</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Ghatside Picnic</h4>
                                            <p className="text-gray-400">Enjoy a peaceful meal by the banks of the sacred Ganges as life unfolds around you.</p>
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

export default UttarPradeshExplorer;
