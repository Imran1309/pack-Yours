
import { ArrowLeft, Landmark, Leaf, Mountain, MapPin, Tent, Star, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ==========================================
// 1. IMAGE IMPORTS
// ==========================================
import manipurHero from "@/assets/manipur_hero.jpg";

// Historical & Cultural
import kanglaImg from "@/assets/kangla_fort.jpg";
import imaImg from "@/assets/ima_keithel.jpg";
import inaImg from "@/assets/ina_memorial.jpg";

// Nature & Wildlife
import sangaiImg from "@/assets/keibul_lamjao.jpg";
import loktakImg from "@/assets/loktak_phumdis.jpg";
import shiruiLilyImg from "@/assets/shirui_lily.jpg";

// Hills & Valleys
import shiruiPeakImg from "@/assets/shirui_peak.jpg";
import cheiraoImg from "@/assets/cheiraoching.jpg";
import khoupumImg from "@/assets/khoupum_valley.jpg";

// Resort & Food
import resortImg from "@/assets/classic_grande.jpg";
import vegImg from "@/assets/kangshoi.jpg";
import nonVegImg from "@/assets/nga_thongba.jpg";
import picnicImg from "@/assets/singda_dam.jpg";

// ==========================================
// 2. COMPONENTS
// ==========================================

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[450px] shadow-2xl cursor-pointer border border-white/10 hover:border-yellow-400/50 transition-all duration-700">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 z-20">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-yellow-500/20 backdrop-blur-md rounded-full border border-yellow-500/30">
                        <Icon className="text-yellow-400" size={24} />
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
        <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-200 drop-shadow-sm mb-6 font-serif tracking-tight">
            {title}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
        <p className="text-yellow-100/60 text-xl font-light tracking-[0.3em] uppercase">{subtitle}</p>
    </div>
);

const ManipurExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0802] text-white selection:bg-yellow-500/30 font-sans">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={manipurHero} className="w-full h-full object-cover animate-scale-slow" alt="Manipur Landscape" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0802]" />
                </div>

                <div className="absolute top-8 left-8 z-50">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/30 backdrop-blur-xl p-4 rounded-full hover:bg-yellow-600/80 transition-all text-white border border-white/10 group duration-500 hover:scale-110"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-yellow-500/30 p-12 backdrop-blur-sm bg-black/30 rounded-full animate-fade-in relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent animate-pulse-slow" />
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-yellow-800 font-serif drop-shadow-2xl">
                            MANIPUR
                        </h1>
                    </div>
                    <p className="mt-10 text-2xl md:text-3xl font-light tracking-[0.4em] animate-fade-in-up delay-200 text-yellow-100/90 uppercase border-y border-yellow-500/20 py-4 px-16 backdrop-blur-sm">
                        Jewel of India
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-40 space-y-48">

                {/* --- Historical & Cultural Section --- */}
                <section>
                    <SectionTitle title="Ancient Kingdom" subtitle="History & Heritage" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={kanglaImg}
                            title="Kangla Fort"
                            desc="The ancient seat of Manipuri power and a symbol of its glorious history."
                            icon={Landmark}
                        />
                        <PlaceCard
                            image={imaImg}
                            title="Ima Keithel"
                            desc="The world's only all-women run market, representing maternal power."
                            icon={MapPin}
                        />
                        <PlaceCard
                            image={inaImg}
                            title="INA Memorial"
                            desc="The historic spot where the Indian Tricolour was first hoisted on Indian soil."
                            icon={Landmark}
                        />
                    </div>
                </section>

                {/* --- Nature & Wildlife Section --- */}
                <section>
                    <SectionTitle title="Floating Paradise" subtitle="Flora & Fauna" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={sangaiImg}
                            title="Keibul Lamjao"
                            desc="The world's only floating national park, home to the dancing Sangai deer."
                            icon={Leaf}
                        />
                        <PlaceCard
                            image={loktakImg}
                            title="Loktak Phumdis"
                            desc="Mesmerizing circular floating islands (phumdis) on the largest freshwater lake in NE India."
                            icon={Droplets}
                        />
                        <PlaceCard
                            image={shiruiLilyImg}
                            title="Shirui Lily"
                            desc="The rare and beautiful endemic lily that blooms only on Shirui Kashong Peak."
                            icon={Leaf}
                        />
                    </div>
                </section>

                {/* --- Hills Section --- */}
                <section>
                    <SectionTitle title="Misty Heights" subtitle="Peaks & Valleys" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={shiruiPeakImg}
                            title="Shirui Peak"
                            desc="A breathtaking peak famous for trekking and the annual Shirui Lily Festival."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={cheiraoImg}
                            title="Cheirao Ching"
                            desc="Offers a panoramic view of Imphal city and is a popular pilgrimage hike."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={khoupumImg}
                            title="Khoupum Valley"
                            desc="A picturesque valley known for its scenic dam and waterfalls."
                            icon={Tent}
                        />
                    </div>
                </section>

                {/* --- Resort & Food Section --- */}
                <section className="relative rounded-[4rem] overflow-hidden border border-yellow-500/10 shadow-2xl bg-[#0a0802]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5" />

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-12 md:p-20">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Meitei Royalty</h2>
                            <p className="text-xl text-yellow-200/60 font-light tracking-wide font-sans">Luxury Stays & Organic Delights</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                            {/* Resort Card */}
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                                <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" size={28} />
                                            ))}
                                        </div>
                                        <h3 className="text-5xl text-white font-serif font-bold mb-4">Classic Grande</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            "Opulence in Imphal" - A member of Radisson Individuals, offering world-class comfort.
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Kangshoi</h4>
                                        <p className="text-gray-400 font-light text-lg">A healthy vegetable stew cooked with dried fish or fermented soybeans (veg option available).</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Nga Thongba</h4>
                                        <p className="text-gray-400 font-light text-lg">A traditional Manipuri fish curry flavored with indigenous herbs.</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Singda Dam</h4>
                                        <p className="text-gray-400 font-light text-lg">The world's highest mud dam, offering a serene picnic spot.</p>
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

export default ManipurExplorer;
