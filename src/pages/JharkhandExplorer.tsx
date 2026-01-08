import { ArrowLeft, Trees, Mountain, Building2, Star, Waves, Flower } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ==========================================
// 1. IMAGE IMPORTS
// ==========================================
import jhHeroSafe from "@/assets/jaharkand.jpg"; // Main Hero

// Placeholders (Local Assets)
import templePlaceholder from "@/assets/tn_temple.png";
import naturePlaceholder from "@/assets/tn_mountain.png";
import cityPlaceholder from "@/assets/br_ecopark.jpg";
import resortPlaceholder from "@/assets/tn_resort.jpg";
import foodPlaceholder from "@/assets/br_litti.jpg";

// ==========================================
// 2. SECTION SPECIFIC IMAGE MAPPINGS
// ==========================================

// --- Spiritual / Temples ---
const baidyanathImg = templePlaceholder;
const jagannathImg = templePlaceholder;
const sunTempleImg = templePlaceholder;

// --- Nature / Wilderness ---
const dassamImg = naturePlaceholder;
const betlaImg = naturePlaceholder;
const patratuImg = jhHeroSafe; // Using distinct image for Patratu (Hero)

// --- City / Urban ---
const jubileeImg = cityPlaceholder;
const nucleusImg = cityPlaceholder;
const ranchiLakeImg = naturePlaceholder;

// --- Resorts & Food ---
const resortImg = resortPlaceholder;
const vegImg = foodPlaceholder;
const nonVegImg = foodPlaceholder;
const picnicImg = naturePlaceholder;


// ==========================================
// 3. COMPONENTS
// ==========================================

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

const JharkhandExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={patratuImg} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-cyan-500 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-cyan-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-cyan-600 font-serif">
                            JHARKHAND
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-cyan-100/80 uppercase border-y border-cyan-500/30 py-4 px-12">
                        The Land of Forests
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-cyan-500 to-transparent" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* ========================================== */}
                {/* 4. SECTIONS */}
                {/* ========================================== */}

                {/* --- Spiritual Section --- */}
                <section>
                    <SectionTitle title="Spiritual Sanctums" subtitle="Ancient Divinity" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={baidyanathImg} title="Baidyanath Dham" desc="A hallowed Jyotirlinga shrine in Deoghar." icon={Flower} />
                        <PlaceCard image={jagannathImg} title="Jagannath Temple" desc="An architectural marvel in Ranchi, mimicking Puri." icon={Flower} />
                        <PlaceCard image={sunTempleImg} title="Sun Temple" desc="Designed like a chariot with 18 wheels." icon={Building2} />
                    </div>
                </section>

                {/* --- Nature Section --- */}
                <section>
                    <SectionTitle title="Wilderness Calls" subtitle="Waterfalls & Valleys" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={dassamImg} title="Dassam Falls" desc="Witness the Kanchi River plunge from 144 feet." icon={Waves} />
                        <PlaceCard image={betlaImg} title="Betla National Park" desc="Home to tigers, elephants, and rich flora." icon={Trees} />
                        <PlaceCard image={patratuImg} title="Patratu Valley" desc="Mesmerizing zig-zag roads and breathtaking views." icon={Mountain} />
                    </div>
                </section>

                {/* --- City Section --- */}
                <section>
                    <SectionTitle title="Urban Beats" subtitle="City Life & Leisure" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={jubileeImg} title="Jubilee Park" desc="Jamshedpur's iconic park with fountains and lights." icon={Trees} />
                        <PlaceCard image={nucleusImg} title="Nucleus Mall" desc="Ranchi's premier shopping and entertainment hub." icon={Building2} />
                        <PlaceCard image={ranchiLakeImg} title="Ranchi Lake" desc="A serene getaway offering boating and scenic views." icon={Waves} />
                    </div>
                </section>

                {/* --- Resorts & Food Section --- */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Tribal Flavors & Luxury</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Authentic tastes & premium stays</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="text-cyan-400 fill-cyan-400" size={24} />
                                            ))}
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Radisson Blu</h3>
                                        <p className="text-gray-300">Experience world-class luxury in the heart of Ranchi.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={vegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-7 h-7 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Local Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Dhuska</h4>
                                            <p className="text-gray-400">Deep-fried rice and lentil snack served with curry.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={nonVegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Signature</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Handi Mutton</h4>
                                            <p className="text-gray-400">Slow-cooked mutton in earthen pots.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={picnicImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Lakeside Picnic</h4>
                                            <p className="text-gray-400">Enjoy homemade meals by the serene lakes.</p>
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

export default JharkhandExplorer;
