
import { ArrowLeft, Mountain, Feather, Music, MapPin, Tent, Star, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ==========================================
// 1. IMAGE IMPORTS
// ==========================================
import nagalandHero from "@/assets/nagaland_hero.jpg";

// Culture
import kisamaImg from "@/assets/kisama_village.jpg";
import cemeteryImg from "@/assets/kohima_cemetery.jpg";
import khonomaImg from "@/assets/khonoma_village.jpg";

// Nature
import dzukouImg from "@/assets/dzukou_valley.jpg";
import japfuImg from "@/assets/japfu_peak.jpg";
import shilloiImg from "@/assets/shilloi_lake.jpg";

// Party/Vibe Spots
import hornbillImg from "@/assets/hornbill_concert.jpg";
import cloud9Img from "@/assets/cloud9_cafe.jpg";
import musingsImg from "@/assets/musings_cafe.jpg";

// Resort & Food
import resortImg from "@/assets/niathu_resort.jpg";
import vegImg from "@/assets/hinkejvu.jpg";
import nonVegImg from "@/assets/smoked_pork.jpg";
import picnicImg from "@/assets/triple_falls.jpg";

// ==========================================
// 2. COMPONENTS
// ==========================================

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[450px] shadow-2xl cursor-pointer border border-white/10 hover:border-red-500/50 transition-all duration-700">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 z-20">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-red-600/20 backdrop-blur-md rounded-full border border-red-500/30">
                        <Icon className="text-red-500" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white font-serif tracking-wide drop-shadow-lg">{title}</h3>
                </div>
                <p className="text-gray-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    </div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="text-center mb-20 relative">
        <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-red-400 drop-shadow-sm mb-6 font-serif tracking-tight">
            {title}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-6" />
        <p className="text-red-200/60 text-xl font-light tracking-[0.3em] uppercase">{subtitle}</p>
    </div>
);

const NagalandExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f0a0a] text-white selection:bg-red-500/30 font-sans">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={nagalandHero} className="w-full h-full object-cover animate-scale-slow" alt="Nagaland Landscape" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0f0a0a]" />
                </div>

                <div className="absolute top-8 left-8 z-50">
                    <button
                        onClick={() => navigate("/destination")}
                        className="bg-black/30 backdrop-blur-xl p-4 rounded-full hover:bg-red-600/80 transition-all text-white border border-white/10 group duration-500 hover:scale-110"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-red-500/30 p-12 backdrop-blur-sm bg-black/30 rounded-full animate-fade-in relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30 animate-pulse-slow" />
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-red-100 to-red-900 font-serif drop-shadow-2xl">
                            NAGALAND
                        </h1>
                    </div>
                    <p className="mt-10 text-2xl md:text-3xl font-light tracking-[0.4em] animate-fade-in-up delay-200 text-red-100/90 uppercase border-y border-red-500/20 py-4 px-16 backdrop-blur-sm">
                        Land of Festivals
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-40 space-y-48">

                {/* --- Culture Section --- */}
                <section>
                    <SectionTitle title="Warrior Heritage" subtitle="History & Traditions" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={kisamaImg}
                            title="Kisama Village"
                            desc="The heritage village designed to preserve and showcase Naga tribal culture."
                            icon={Feather}
                        />
                        <PlaceCard
                            image={cemeteryImg}
                            title="War Cemetery"
                            desc="A historic WWII site dedicated to the soldiers of the Battle of Kohima."
                            icon={MapPin}
                        />
                        <PlaceCard
                            image={khonomaImg}
                            title="Khonoma Village"
                            desc="Asia's first green village, known for its conservation and bravery."
                            icon={Mountain}
                        />
                    </div>
                </section>

                {/* --- Nature Section --- */}
                <section>
                    <SectionTitle title="Untamed Beauty" subtitle="Valleys & Peaks" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={dzukouImg}
                            title="Dzukou Valley"
                            desc="A stunning valley of flowers located at the border of Nagaland and Manipur."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={japfuImg}
                            title="Japfu Peak"
                            desc="The second highest peak in Nagaland offering breathtaking sunrise views."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={shilloiImg}
                            title="Shilloi Lake"
                            desc="A beautiful foot-shaped lake surrounded by pine forests."
                            icon={Tent}
                        />
                    </div>
                </section>

                {/* --- Party/Vibe Section --- */}
                <section>
                    <SectionTitle title="Hornbill Nights" subtitle="Music & Cafes" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={hornbillImg}
                            title="Hornbill Concert"
                            desc="The biggest rock festival in India during the Hornbill Festival."
                            icon={Music}
                        />
                        <PlaceCard
                            image={cloud9Img}
                            title="Cloud 9 Cafe"
                            desc="A popular spot in Kohima for live music and great ambiance."
                            icon={Music}
                        />
                        <PlaceCard
                            image={musingsImg}
                            title="Musings Cafe"
                            desc="A cozy literary cafe perfect for unwinding with a book and coffee."
                            icon={Flame}
                        />
                    </div>
                </section>

                {/* --- Resort & Food Section --- */}
                <section className="relative rounded-[4rem] overflow-hidden border border-red-500/10 shadow-2xl bg-[#0f0505]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10" />

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-12 md:p-20">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Naga Hospitality</h2>
                            <p className="text-xl text-red-200/60 font-light tracking-wide font-sans">Bamboo Stays & Smoked Flavors</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                            {/* Resort Card */}
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                                <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="text-red-500 fill-red-500 drop-shadow-lg" size={28} />
                                            ))}
                                        </div>
                                        <h3 className="text-5xl text-white font-serif font-bold mb-4">Niathu Resort</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            "Luxury in the Hills" - A premium getaway with traditional architecture in Dimapur.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-10">
                                {/* Veg */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-white/5 hover:bg-white/10 transition-all duration-500 hover:border-green-500/30 hover:scale-[1.02] cursor-pointer">
                                    <div className="h-40 w-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                                        <img src={vegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Veg Food" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                                            <span className="text-green-400 text-sm font-bold tracking-[0.2em] uppercase">Vegetarian</span>
                                        </div>
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Hinkejvu</h4>
                                        <p className="text-gray-400 font-light text-lg">A simple and flavorful stew made with colocasia, shredded cabbage leaves and dry mustard leaves.</p>
                                    </div>
                                </div>

                                {/* Non-Veg */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-white/5 hover:bg-white/10 transition-all duration-500 hover:border-red-500/30 hover:scale-[1.02] cursor-pointer">
                                    <div className="h-40 w-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                                        <img src={nonVegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Non Veg Food" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                                            <span className="text-red-400 text-sm font-bold tracking-[0.2em] uppercase">Signature</span>
                                        </div>
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Smoked Pork</h4>
                                        <p className="text-gray-400 font-light text-lg">The most iconic Naga dish, cooked with bamboo shoots and raja mircha (king chili).</p>
                                    </div>
                                </div>

                                {/* Own Food */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-white/5 hover:bg-white/10 transition-all duration-500 hover:border-blue-500/30 hover:scale-[1.02] cursor-pointer">
                                    <div className="h-40 w-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                                        <img src={picnicImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Own Food" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                                            <span className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase">Picnic</span>
                                        </div>
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Triple Falls</h4>
                                        <p className="text-gray-400 font-light text-lg">A stunning three-tiered waterfall, perfect for a secluded picnic.</p>
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

export default NagalandExplorer;
