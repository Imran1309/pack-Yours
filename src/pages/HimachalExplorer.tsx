
import { ArrowLeft, Mountain, Wind, MapPin, Coffee, Snowflake, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ==========================================
// 1. IMAGE IMPORTS
// ==========================================
import himachalHero from "@/assets/himachal_hero.jpg";

// Majestic Peaks
import kinnaurImg from "@/assets/kinnaur_kailash.jpg";
import deoTibbaImg from "@/assets/deo_tibba.jpg";
import triundImg from "@/assets/triund.jpg";

// Adventure Hubs
import birImg from "@/assets/bir_billing.jpg";
import solangImg from "@/assets/solang_valley.jpg";
import spitiImg from "@/assets/spiti_valley.jpg";

// Colonial Towns
import shimlaImg from "@/assets/shimla_ridge.jpg";
import dalhousieImg from "@/assets/dalhousie.jpg";
import kasauliImg from "@/assets/kasauli.jpg";

// Resort & Food
import resortImg from "@/assets/wildflower_hall.jpg";
import vegImg from "@/assets/siddu.jpg";
import nonVegImg from "@/assets/chha_gosht.jpg";
import picnicImg from "@/assets/beas_river.jpg";

// ==========================================
// 2. COMPONENTS
// ==========================================

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[450px] shadow-2xl cursor-pointer border border-white/10 hover:border-cyan-400/50 transition-all duration-700">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 z-20">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-cyan-500/20 backdrop-blur-md rounded-full border border-cyan-500/30">
                        <Icon className="text-cyan-400" size={24} />
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
        <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-400 to-cyan-200 drop-shadow-sm mb-6 font-serif tracking-tight">
            {title}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6" />
        <p className="text-cyan-100/60 text-xl font-light tracking-[0.3em] uppercase">{subtitle}</p>
    </div>
);

const HimachalExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#061e26] text-white selection:bg-cyan-500/30 font-sans">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={himachalHero} className="w-full h-full object-cover animate-scale-slow" alt="Himachal Landscape" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#061e26]" />
                </div>

                <div className="absolute top-8 left-8 z-50">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/30 backdrop-blur-xl p-4 rounded-full hover:bg-cyan-600/80 transition-all text-white border border-white/10 group duration-500 hover:scale-110"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-cyan-500/30 p-12 backdrop-blur-sm bg-black/30 rounded-full animate-fade-in relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent animate-pulse-slow" />
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-cyan-800 font-serif drop-shadow-2xl">
                            HIMACHAL
                        </h1>
                    </div>
                    <p className="mt-10 text-2xl md:text-3xl font-light tracking-[0.4em] animate-fade-in-up delay-200 text-cyan-100/90 uppercase border-y border-cyan-500/20 py-4 px-16 backdrop-blur-sm">
                        Land of Gods
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-40 space-y-48">

                {/* --- Majestic Peaks Section --- */}
                <section>
                    <SectionTitle title="Majestic Peaks" subtitle="Himalayan Giants" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={kinnaurImg}
                            title="Kinnaur Kailash"
                            desc="A sacred peak believed to be the abode of Lord Shiva."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={deoTibbaImg}
                            title="Deo Tibba"
                            desc="A magnificent peak offering challenging treks and stunning views."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={triundImg}
                            title="Triund"
                            desc="A popular trekking spot known for its panoramic views of the Dhauladhar range."
                            icon={Mountain}
                        />
                    </div>
                </section>

                {/* --- Adventure Hubs Section --- */}
                <section>
                    <SectionTitle title="Adventure Awaits" subtitle="Thrill & Chill" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={birImg}
                            title="Bir Billing"
                            desc="The paragliding capital of India, offering world-class aerial adventures."
                            icon={Wind}
                        />
                        <PlaceCard
                            image={solangImg}
                            title="Solang Valley"
                            desc="A paradise for skiing in winter and zorbing/paragliding in summer."
                            icon={Snowflake}
                        />
                        <PlaceCard
                            image={spitiImg}
                            title="Spiti Valley"
                            desc="A rugged mountain desert perfect for off-road expeditions and monastery visits."
                            icon={MapPin}
                        />
                    </div>
                </section>

                {/* --- Colonial Towns Section --- */}
                <section>
                    <SectionTitle title="Colonial Charm" subtitle="Heritage & Hills" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={shimlaImg}
                            title="Shimla"
                            desc="The Queen of Hills, famous for its colonial architecture and the Ridge."
                            icon={Coffee}
                        />
                        <PlaceCard
                            image={dalhousieImg}
                            title="Dalhousie"
                            desc="A quiet hill station with old-world charm and pine-clad valleys."
                            icon={MapPin}
                        />
                        <PlaceCard
                            image={kasauliImg}
                            title="Kasauli"
                            desc="A serene cantonment town known for its Gilbert Trail and Christ Church."
                            icon={MapPin}
                        />
                    </div>
                </section>

                {/* --- Resort & Food Section --- */}
                <section className="relative rounded-[4rem] overflow-hidden border border-cyan-500/10 shadow-2xl bg-[#061e26]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10" />

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-12 md:p-20">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Himalayan Luxury</h2>
                            <p className="text-xl text-cyan-200/60 font-light tracking-wide font-sans">Opulent Stays & Pahadi Flavors</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                            {/* Resort Card */}
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                                <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="text-cyan-400 fill-cyan-400 drop-shadow-lg" size={28} />
                                            ))}
                                        </div>
                                        <h3 className="text-5xl text-white font-serif font-bold mb-4">Wildflower Hall</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            "Oberoi in the Himalayas" - A fairytale luxury resort near Shimla offering colonial elegance.
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Siddu</h4>
                                        <p className="text-gray-400 font-light text-lg">Steamed wheat buns filled with poppy seeds/walnuts, served with ghee.</p>
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
                                            <span className="text-red-400 text-sm font-bold tracking-[0.2em] uppercase">Specialty</span>
                                        </div>
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Chha Gosht</h4>
                                        <p className="text-gray-400 font-light text-lg">A rich lamb curry cooked in yogurt and gram flour gravy.</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Beas River Bank</h4>
                                        <p className="text-gray-400 font-light text-lg">Enjoy a scenic riverside picnic with the sound of flowing water.</p>
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

export default HimachalExplorer;
