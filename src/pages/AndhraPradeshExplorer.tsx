
import { ArrowLeft, Landmark, Star, Mountain, Umbrella } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Image Imports - Andhra Pradesh
import andhraHero from "@/assets/andhara.jpg"; // Andhra Pradesh Hero

// Temples - Using proxy images (can be replaced with authentic AP images later)
import tirupati from "@/assets/tirupati.jpg"; // Tirupati Balaji
import kanakaDurga from "@/assets/kanaka durga.jpg"; // Kanaka Durga Temple
import simhachalam from "@/assets/simhachalam-temple.jpg"; // Simhachalam Temple

// Beaches - Using proxy images
import vizagBeach from "@/assets/rk-beach.jpg"; // Visakhapatnam Beach
import bheemunipatnam from "@/assets/Bheemili_beach.jpg"; // Bheemunipatnam Beach
import mypadu from "@/assets/mypadu beach.jpg"; // Mypadu Beach

// Mountains - Using proxy images
import araku from "@/assets/araku-valley.jpg"; // Araku Valley
import horsley from "@/assets/horsley-hills.jpg"; // Horsley Hills
import lambasingi from "@/assets/lambasingi hill.jpg"; // Lambasingi

// Food - Using available food images
import vegFood from "@/assets/ka veg food.jpg"; // Andhra Thali/Pesarattu
import nonVegFood from "@/assets/ka non veg food.jpg"; // Andhra Biryani
import ownFood from "@/assets/ka picinic.jpg"; // Pulihora

// Resort
import resort from "@/assets/ka resorts.jpg"; // Luxury Resort

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-yellow-500/50 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-500/20 backdrop-blur-sm rounded-full">
                        <Icon className="text-yellow-400" size={24} />
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
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-sm mb-6 font-serif">
            {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
        <p className="text-gray-400 text-xl font-light tracking-widest uppercase">{subtitle}</p>
    </div>
);

const AndhraPradeshExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-yellow-500/30">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={andhraHero} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-yellow-500 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-yellow-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-8xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-yellow-600 font-serif">
                            ANDHRA PRADESH
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-yellow-100/80 uppercase border-y border-yellow-500/30 py-4 px-12">
                        Land of Spices & Spirituality
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-yellow-500 to-transparent" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* Temples Section */}
                <section>
                    <SectionTitle title="Divine Heritage" subtitle="Sacred Temples of Faith" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={tirupati} title="Tirupati Balaji" desc="World's richest temple, abode of Lord Venkateswara." icon={Landmark} />
                        <PlaceCard image={kanakaDurga} title="Kanaka Durga" desc="Vijayawada's iconic hilltop shrine of Goddess Durga." icon={Landmark} />
                        <PlaceCard image={simhachalam} title="Simhachalam" desc="Ancient Vaishnavite temple near Visakhapatnam." icon={Landmark} />
                    </div>
                </section>

                {/* Beaches Section */}
                <section>
                    <SectionTitle title="Coastal Gems" subtitle="Sun, Sand and Serenity" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={vizagBeach} title="RK Beach" desc="Visakhapatnam's pride, a bustling coastal paradise." icon={Umbrella} />
                        <PlaceCard image={bheemunipatnam} title="Bheemunipatnam" desc="Historic beach with Dutch colonial heritage." icon={Umbrella} />
                        <PlaceCard image={mypadu} title="Mypadu Beach" desc="Serene and pristine coastline near Nellore." icon={Umbrella} />
                    </div>
                </section>

                {/* Mountains Section */}
                <section>
                    <SectionTitle title="Hill Retreats" subtitle="Misty Mountains & Valleys" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={araku} title="Araku Valley" desc="Coffee plantations and tribal culture in the hills." icon={Mountain} />
                        <PlaceCard image={horsley} title="Horsley Hills" desc="Cool climate hill station with stunning views." icon={Mountain} />
                        <PlaceCard image={lambasingi} title="Lambasingi" desc="Kashmir of Andhra Pradesh, known for frost." icon={Mountain} />
                    </div>
                </section>

                {/* Resorts & Food Section - Luxury Redefined */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Indulge in Luxury</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">World-class stays & authentic Andhra flavors</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resort} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Luxury Resorts</h3>
                                        <p className="text-gray-300">Premium hospitality in the heart of Andhra Pradesh.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={vegFood} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Andhra Thali</h4>
                                            <p className="text-gray-400">Traditional vegetarian feast with authentic spices.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={nonVegFood} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non-Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Non-Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Andhra Biryani</h4>
                                            <p className="text-gray-400">Spicy and aromatic biryani with authentic flavors.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={ownFood} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Your Choice</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Pulihora</h4>
                                            <p className="text-gray-400">Tangy tamarind rice, a beloved Andhra staple.</p>
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

export default AndhraPradeshExplorer;
