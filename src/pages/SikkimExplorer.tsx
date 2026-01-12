
import { ArrowLeft, Mountain, MapPin, Camera, Star, Utensils, Cloud, Snowflake } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ==========================================
// 1. IMAGE IMPORTS
// ==========================================
import sikkimHero from "@/assets/sikkim_hero.jpg";

// Mountains
import kanchenjungaImg from "@/assets/kanchenjunga.jpg";
import pandimImg from "@/assets/pandim.jpg";
import kabruImg from "@/assets/kabru.jpg";

// Culture
import rumtekImg from "@/assets/rumtek.jpg";
import chamImg from "@/assets/cham_dance.jpg";
import thangkaImg from "@/assets/thangka.jpg";

// Spots
import tsomgoImg from "@/assets/tsomgo.jpg";
import nathulaImg from "@/assets/nathula.jpg";
import gurudongmarImg from "@/assets/gurudongmar.jpg";

// Resort & Food
import resortImg from "@/assets/mayfair_resort.jpg";
import vegImg from "@/assets/momos.jpg";
import nonVegImg from "@/assets/thukpa.jpg";
import picnicImg from "@/assets/picnic_sikkim.jpg";

// ==========================================
// 2. COMPONENTS
// ==========================================

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[450px] shadow-2xl cursor-pointer border border-white/10 hover:border-amber-400/50 transition-all duration-700">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 z-20">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-500/30">
                        <Icon className="text-amber-400" size={24} />
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
        <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 drop-shadow-sm mb-6 font-serif tracking-tight">
            {title}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6" />
        <p className="text-amber-100/60 text-xl font-light tracking-[0.3em] uppercase">{subtitle}</p>
    </div>
);

const SikkimExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-500/30 font-sans">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={sikkimHero} className="w-full h-full object-cover animate-scale-slow" alt="Sikkim Landscape" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
                </div>

                <div className="absolute top-8 left-8 z-50">
                    <button
                        onClick={() => navigate("/destination")}
                        className="bg-black/30 backdrop-blur-xl p-4 rounded-full hover:bg-amber-600/80 transition-all text-white border border-white/10 group duration-500 hover:scale-110"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border-2 border-amber-500/20 p-12 backdrop-blur-sm bg-black/10 rounded-full animate-fade-in relative">
                        <div className="absolute inset-0 rounded-full border border-amber-500/10 animate-ping-slow" />
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-700 font-serif drop-shadow-2xl">
                            SIKKIM
                        </h1>
                    </div>
                    <p className="mt-10 text-2xl md:text-3xl font-light tracking-[0.4em] animate-fade-in-up delay-200 text-amber-100/90 uppercase border-y border-amber-500/20 py-4 px-16 backdrop-blur-sm">
                        Mystical Himalayan Kingdom
                    </p>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-amber-500 to-transparent" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-40 space-y-48">

                {/* --- Mountains Section --- */}
                <section>
                    <SectionTitle title="Majestic Peaks" subtitle="Guardians of the Sky" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={kanchenjungaImg}
                            title="Mt. Kanchenjunga"
                            desc="The third highest mountain in the world, revered as a guardian deity."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={pandimImg}
                            title="Mt. Pandim"
                            desc="A sacred peak offering breathtaking views from Dzongri."
                            icon={Snowflake}
                        />
                        <PlaceCard
                            image={kabruImg}
                            title="Mt. Kabru"
                            desc="A ridge of peaks on the border of India and Nepal, towering over 7000m."
                            icon={Cloud}
                        />
                    </div>
                </section>

                {/* --- Culture Section --- */}
                <section>
                    <SectionTitle title="Rich Heritage" subtitle="Monasteries & Traditions" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={rumtekImg}
                            title="Rumtek Monastery"
                            desc="The seat of the Karmapa Lama, showcasing exquisite Tibetan architecture."
                            icon={Star}
                        />
                        <PlaceCard
                            image={chamImg}
                            title="Cham Dance"
                            desc="Vibrant masked dances performed by monks during festivals."
                            icon={Camera}
                        />
                        <PlaceCard
                            image={thangkaImg}
                            title="Thangka Art"
                            desc="Intricate Buddhist paintings on cotton or silk appliqué."
                            icon={Utensils} // Using Utensils simply as a distinct icon, could be Palette but Lucide map
                        />
                    </div>
                </section>

                {/* --- Tourist Spots Section --- */}
                <section>
                    <SectionTitle title="Scenic Wonders" subtitle="Lakes & Passes" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={tsomgoImg}
                            title="Tsomgo Lake"
                            desc="A glacial lake that changes color with the seasons."
                            icon={MapPin}
                        />
                        <PlaceCard
                            image={nathulaImg}
                            title="Nathula Pass"
                            desc="A mountain pass on the Indo-China border at 14,140ft."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={gurudongmarImg}
                            title="Gurudongmar Lake"
                            desc="One of the highest lakes in the world, sacred to both Buddhists and Sikhs."
                            icon={Snowflake}
                        />
                    </div>
                </section>

                {/* --- Resort & Food Section --- */}
                <section className="relative rounded-[4rem] overflow-hidden border border-amber-500/10 shadow-2xl bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-12 md:p-20">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Himalayan Hospitality</h2>
                            <p className="text-xl text-amber-200/60 font-light tracking-wide font-sans">Luxury Stays & Alpine Delicacies</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                            {/* Resort Card */}
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-purple-600 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                                <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="text-amber-400 fill-amber-400 drop-shadow-lg" size={28} />
                                            ))}
                                        </div>
                                        <h3 className="text-5xl text-white font-serif font-bold mb-4">Mayfair Spa Resort</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            Experience colonial architecture and award-winning hospitality amidst ancient forests.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-10">
                                {/* Veg */}
                                <div className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-white/5 hover:bg-white/10 transition-all duration-500 hover:border-amber-500/30 hover:scale-[1.02] cursor-pointer">
                                    <div className="h-40 w-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                                        <img src={vegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Veg Food" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                                            <span className="text-green-400 text-sm font-bold tracking-[0.2em] uppercase">Vegetarian</span>
                                        </div>
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Sikkimese Momos</h4>
                                        <p className="text-gray-400 font-light text-lg">Steamed dumplings filled with fresh alpine vegetables and cottage cheese.</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Tibetan Thukpa</h4>
                                        <p className="text-gray-400 font-light text-lg">Hot noodle soup with tender meat chunks, perfect for chilly evenings.</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Seven Sisters Waterfall</h4>
                                        <p className="text-gray-400 font-light text-lg">Bring your own picnic basket and enjoy lunch by the cascading waters.</p>
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

export default SikkimExplorer;
