import { ArrowLeft, Anchor, Waves, Compass, Shell, Star, Umbrella, Navigation, Palmtree } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Image Imports
import andamanHero from "@/assets/An.jpg";

// Authenticated Direct Image URLs (Wikimedia Commons & High-Quality Sources)
const radhanagar = "https://upload.wikimedia.org/wikipedia/commons/2/21/Radhanagar_Beach%2C_Havelock_Island%2C_Andaman.jpg";
const elephant = "https://upload.wikimedia.org/wikipedia/commons/2/22/Elephant_beach%2C_Havelock_Island.jpg";
const rossSmith = "https://upload.wikimedia.org/wikipedia/commons/2/29/Ross_and_Smith_island%2C_Andaman_Nicobar_island.jpg";

const portBlair = "https://upload.wikimedia.org/wikipedia/commons/e/ec/The_cellular_jail_at_Port_Blair.jpg";
const havelock = "https://upload.wikimedia.org/wikipedia/commons/5/59/Havelock_Island_distant_view.jpg";
const neil = "https://upload.wikimedia.org/wikipedia/commons/e/ed/Natural_Bridge%2C_Neil_Island%2C_Andaman%2C_India.JPG";

const scuba = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Scuba_diving_Andaman.jpg";
const seaWalk = "https://upload.wikimedia.org/wikipedia/commons/1/1d/Seawalk_Andaman.jpg";
const kayaking = "https://upload.wikimedia.org/wikipedia/commons/1/1e/Mangroves_in_Andaman.jpg";

const resort = "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80";
const andamanVeg = "https://upload.wikimedia.org/wikipedia/commons/e/ee/Chicken_Coconut_Curry.jpg";
const andamanNonVeg = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Seafood_platter_2.jpg";
const andamanPicnic = "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80";

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

const AndamanExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <img
                        src={andamanHero}
                        alt="Andaman & Nicobar"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                </div>

                <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                    <button
                        onClick={() => navigate('/states')}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 group border border-white/10"
                    >
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium tracking-wide">Back to India</span>
                    </button>
                    <div className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-serif uppercase">
                        Andaman & Nicobar
                    </div>
                </nav>

                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-5xl animate-fade-in-up">
                        <h1 className="text-7xl md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-8 font-serif leading-none tracking-tight drop-shadow-2xl uppercase">
                            Andaman
                            <span className="block text-3xl md:text-5xl text-cyan-500 font-light tracking-[0.5em] mt-4 font-sans">Oceanic Paradise</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed border-l-4 border-cyan-500 pl-8 text-left">
                            An emerald archipelago where turquoise waters meet pristine white sands, and hidden worlds await beneath the waves.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
                    <p className="text-cyan-500 text-xs tracking-widest uppercase opacity-70">Scroll to Dive In</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* 1. Famous Beaches */}
                <section>
                    <SectionTitle title="Pristine Beaches" subtitle="Sun-Kissed Horizons" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={radhanagar}
                            title="Radhanagar Beach"
                            desc="Voted one of the best beaches in Asia, famous for its mesmerizing sunsets and vast shoreline."
                            icon={Waves}
                        />
                        <PlaceCard
                            image={elephant}
                            title="Elephant Beach"
                            desc="A hub for water sports with vibrant coral reefs just a short distance from the shore."
                            icon={Shell}
                        />
                        <PlaceCard
                            image={rossSmith}
                            title="Ross & Smith Islands"
                            desc="Unique twin islands connected by a natural sandbar that emerges during low tide."
                            icon={Compass}
                        />
                    </div>
                </section>

                {/* 2. Major Hubs */}
                <section>
                    <SectionTitle title="Major Hubs" subtitle="Island Gateways" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={portBlair}
                            title="Port Blair"
                            desc="The historic capital, gateway to the islands and home to the iconic Cellular Jail."
                            icon={Navigation}
                        />
                        <PlaceCard
                            image={havelock}
                            title="Havelock Island"
                            desc="Swaraj Dweep, the heart of Andaman's tourism known for world-class diving."
                            icon={Palmtree}
                        />
                        <PlaceCard
                            image={neil}
                            title="Neil Island"
                            desc="Shaheed Dweep, a tranquil retreat famous for its laid-back vibe and lush agriculture."
                            icon={Anchor}
                        />
                    </div>
                </section>

                {/* 3. Nature & Adventure Sports */}
                <section>
                    <SectionTitle title="Nature & Adventure" subtitle="Thrills Above & Below" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlaceCard
                            image={scuba}
                            title="Scuba Diving"
                            desc="Explore the vibrant marine life and coral gardens of the Andaman Sea."
                            icon={Waves}
                        />
                        <PlaceCard
                            image={seaWalk}
                            title="Sea Walk"
                            desc="A unique experience of walking on the sea floor surrounded by colorful fish."
                            icon={Star}
                        />
                        <PlaceCard
                            image={kayaking}
                            title="Mangrove Kayaking"
                            desc="Navigate through the serene and mysterious mangrove forests of Mayabunder."
                            icon={Compass}
                        />
                    </div>
                </section>

                {/* Resort & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-12">
                    <SectionTitle title="Island Luxury & Cuisines" subtitle="Tropical Indulgence" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
                        {/* Resort */}
                        <div className="lg:col-span-8 relative group overflow-hidden rounded-3xl h-full cursor-pointer">
                            <img src={resort} alt="Island Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 flex flex-col justify-end p-8">
                                <h3 className="text-4xl font-bold text-white font-serif mb-2">Oceanfront Resorts</h3>
                                <p className="text-gray-300 text-lg">Indulge in eco-luxury at world-class resorts like Taj Exotica on Radhanagar Beach.</p>
                            </div>
                        </div>

                        {/* Food Grid */}
                        <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                            {/* Veg */}
                            <div className="relative flex-1 group overflow-hidden rounded-3xl cursor-pointer">
                                <img src={andamanVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-7 h-7 rounded-full border-2 border-green-500 flex items-center justify-center mx-auto mb-2 bg-black/50 backdrop-blur-sm">
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-serif">Coconut Curry</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Non-Veg */}
                            <div className="relative flex-1 group overflow-hidden rounded-3xl cursor-pointer">
                                <img src={andamanNonVeg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non Veg Food" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-7 h-7 rounded-full border-2 border-red-500 flex items-center justify-center mx-auto mb-2 bg-black/50 backdrop-blur-sm">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-serif">Seafood Platter</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Own Food / Picnic */}
                            <div className="relative flex-1 group overflow-hidden rounded-3xl cursor-pointer">
                                <img src={andamanPicnic} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-7 h-7 rounded-full border-2 border-cyan-500 flex items-center justify-center mx-auto mb-2 bg-black/50 backdrop-blur-sm">
                                            <Umbrella className="text-cyan-500 w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-serif">Beach Picnic</h3>
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

export default AndamanExplorer;
