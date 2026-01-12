
import { ArrowLeft, Mountain, Music, Landmark, BookOpen, Star, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ==========================================
// 1. IMAGE IMPORTS
// ==========================================
// ==========================================
// 1. IMAGE IMPORTS
// ==========================================
import wbHero from "@/assets/west_bengal_hero.jpg";

// Misty Hills
import tigerHillImg from "@/assets/tiger_hill.jpg";
import deoloImg from "@/assets/deolo_hill.jpg";
import dowHillImg from "@/assets/dow_hill.jpg";

// Culture & Spiritual
import victoriaImg from "@/assets/victoria_memorial.jpg";
import dakshineswarImg from "@/assets/dakshineswar_temple.jpg";
import shantiniketanImg from "@/assets/shantiniketan.jpg";

// Party Spots
import parkStreetImg from "@/assets/park_street.jpg";
import someplaceImg from "@/assets/someplace_else.jpg";
import olypubImg from "@/assets/olypub.jpg";

// Resort & Food
import resortImg from "@/assets/glenburn_tea_estate.jpg";
import vegImg from "@/assets/aloo_posto.jpg";
import nonVegImg from "@/assets/kosha_mangsho.jpg";
import picnicImg from "@/assets/maidan_picnic.jpg";

// ==========================================
// 2. COMPONENTS
// ==========================================

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[450px] shadow-2xl cursor-pointer border border-white/10 hover:border-orange-500/50 transition-all duration-700">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 z-20">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-600/20 backdrop-blur-md rounded-full border border-orange-500/30">
                        <Icon className="text-orange-500" size={24} />
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
        <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-red-500 to-orange-200 drop-shadow-sm mb-6 font-serif tracking-tight">
            {title}
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-6" />
        <p className="text-orange-100/60 text-xl font-light tracking-[0.3em] uppercase">{subtitle}</p>
    </div>
);

const WestBengalExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#1a0505] text-white selection:bg-orange-500/30 font-sans">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={wbHero} className="w-full h-full object-cover animate-scale-slow" alt="West Bengal Heritage" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#1a0505]" />
                </div>

                <div className="absolute top-8 left-8 z-50">
                    <button
                        onClick={() => navigate("/destination")}
                        className="bg-black/30 backdrop-blur-xl p-4 rounded-full hover:bg-orange-600/80 transition-all text-white border border-white/10 group duration-500 hover:scale-110"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-orange-500/30 p-12 backdrop-blur-sm bg-black/30 rounded-full animate-fade-in relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 animate-pulse-slow" />
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-orange-100 to-red-800 font-serif drop-shadow-2xl">
                            WEST BENGAL
                        </h1>
                    </div>
                    <p className="mt-10 text-2xl md:text-3xl font-light tracking-[0.4em] animate-fade-in-up delay-200 text-orange-100/90 uppercase border-y border-orange-500/20 py-4 px-16 backdrop-blur-sm">
                        Soul of Bengal
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-40 space-y-48">

                {/* --- Misty Hills Section --- */}
                <section>
                    <SectionTitle title="Misty Heights" subtitle="Hills of the North" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={tigerHillImg}
                            title="Tiger Hill"
                            desc="Witness the majestic sunrise over Kanchenjunga from Darjeeling's highest point."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={deoloImg}
                            title="Deolo Hill"
                            desc="The highest point in Kalimpong offering panoramic views of the Teesta Valley."
                            icon={Mountain}
                        />
                        <PlaceCard
                            image={dowHillImg}
                            title="Dow Hill"
                            desc="A serene yet mysterious destination in Kurseong, famous for its pine forests."
                            icon={Mountain}
                        />
                    </div>
                </section>

                {/* --- Culture & Spiritual Section --- */}
                <section>
                    <SectionTitle title="Cultural Soul" subtitle="Heritage & Faith" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={victoriaImg}
                            title="Victoria Memorial"
                            desc="An iconic marble building in Kolkata dedicated to the memory of Queen Victoria."
                            icon={Landmark}
                        />
                        <PlaceCard
                            image={dakshineswarImg}
                            title="Dakshineswar"
                            desc="A famous Kali temple on the banks of Hooghly, associated with Ramakrishna Paramahansa."
                            icon={Landmark}
                        />
                        <PlaceCard
                            image={shantiniketanImg}
                            title="Shantiniketan"
                            desc="The abode of peace founded by Rabindranath Tagore, a UNESCO World Heritage site."
                            icon={BookOpen}
                        />
                    </div>
                </section>

                {/* --- Party Spots Section --- */}
                <section>
                    <SectionTitle title="City of Joy" subtitle="Nightlife & Vibes" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PlaceCard
                            image={parkStreetImg}
                            title="Park Street"
                            desc="The heartbeat of Kolkata's nightlife, lined with historic pubs and restaurants."
                            icon={Music}
                        />
                        <PlaceCard
                            image={someplaceImg}
                            title="Someplace Else"
                            desc="A legendary pub in The Park Hotel known for its live rock music."
                            icon={Music}
                        />
                        <PlaceCard
                            image={olypubImg}
                            title="Olypub"
                            desc="A nostalgic watering hole on Park Street, famous for cheap drinks and beef steak."
                            icon={Coffee}
                        />
                    </div>
                </section>

                {/* --- Resort & Food Section --- */}
                <section className="relative rounded-[4rem] overflow-hidden border border-orange-500/10 shadow-2xl bg-[#1a0505]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10" />

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-12 md:p-20">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Rajbari Royalty</h2>
                            <p className="text-xl text-orange-200/60 font-light tracking-wide font-sans">Tea Estates & Bengali Feasts</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                            {/* Resort Card */}
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                                <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="text-orange-400 fill-orange-400 drop-shadow-lg" size={28} />
                                            ))}
                                        </div>
                                        <h3 className="text-5xl text-white font-serif font-bold mb-4">Glenburn Tea Estate</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            "Heaven in Darjeeling" - A colonial-era planter's bungalow overlooking the Kanchenjunga.
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Aloo Posto</h4>
                                        <p className="text-gray-400 font-light text-lg">A classic Bengali comfort food made of potatoes cooked in a poppy seed paste.</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Kosha Mangsho</h4>
                                        <p className="text-gray-400 font-light text-lg">Slow-cooked mutton curry with rich spices, best enjoyed with luchi or paratha.</p>
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
                                        <h4 className="text-4xl font-serif font-bold text-white mb-2">Maidan</h4>
                                        <p className="text-gray-400 font-light text-lg">The vast "lungs of Kolkata", perfect for winter picnics under the sun.</p>
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

export default WestBengalExplorer;
