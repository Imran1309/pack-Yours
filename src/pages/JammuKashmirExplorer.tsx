
import { ArrowLeft, Mountain, Umbrella, Building2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mountains
import jkGulmarg from "@/assets/manali_snow_mountains.png"; // Proxy: Manali for Gulmarg
import jkApharwat from "@/assets/manali_snow_mountains_1765985791682.png"; // Proxy: Manali variation
import jkSonamarg from "@/assets/himachal.jpg"; // Proxy: Himachal

// Temples
import jkVaishno from "@/assets/kashmir_temple.png";
import jkAmarnath from "@/assets/cave.png"; // Proxy: Cave
import jkShankaracharya from "@/assets/shakaracharya.png"; // Corrected asset name (spelling shakaracharya in list)

// Spots
import jkDalLake from "@/assets/kashmir_dal_lake.png"; // Corrected
import jkMughal from "@/assets/ooty_botanical_garden.png"; // Proxy: Garden
import jkPahalgam from "@/assets/manali_old_manali.jpg"; // Proxy

// Resorts & Others
import jkResort from "@/assets/kashmirroom.png"; // Corrected
import jkRogan from "@/assets/kashmir_wazwan.png"; // Corrected
import jkDumAloo from "@/assets/kashmirfood.png"; // Proxy
import jkKahwa from "@/assets/nilgiri_tea_cup.jpg"; // Proxy: Tea

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

const JammuKashmirExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-yellow-500/30">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={jkDalLake} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/destination")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-yellow-500 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-yellow-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-yellow-600 font-serif">
                            JAMMU & KASHMIR
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-yellow-100/80 uppercase border-y border-yellow-500/30 py-4 px-12">
                        Paradise on Earth
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-yellow-500 to-transparent" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* Mountains Section */}
                <section>
                    <SectionTitle title="Majestic Peaks" subtitle="Touch the sky" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={jkGulmarg} title="Gulmarg" desc="World's highest ski lift and snow-covered slopes." icon={Mountain} />
                        <PlaceCard image={jkApharwat} title="Apharwat Peak" desc="Breathtaking views from the top of the gondola ride." icon={Mountain} />
                        <PlaceCard image={jkSonamarg} title="Sonamarg" desc="The 'Meadow of Gold' offering majestic glacial views." icon={Mountain} />
                    </div>
                </section>

                {/* Temples Section */}
                <section>
                    <SectionTitle title="Divine Abodes" subtitle="Pilgrimage of a lifetime" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={jkVaishno} title="Vaishno Devi" desc="A sacred trek to the holy shrine in Trikuta Hills." icon={Building2} />
                        <PlaceCard image={jkAmarnath} title="Amarnath Cave" desc="The holy cave shrine of Lord Shiva in the Himalayas." icon={Building2} />
                        <PlaceCard image={jkShankaracharya} title="Shankaracharya" desc="Ancient temple overlooking the city of Srinagar." icon={Building2} />
                    </div>
                </section>

                {/* Spots Section (Beaches replaced by Spots as J&K has no beaches but beautiful lakes/gardens) */}
                <section>
                    <SectionTitle title="Scenic Wonders" subtitle="Valleys, Lakes, and Gardens" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={jkDalLake} title="Dal Lake" desc="Sail on a Shikara in the jewel of Srinagar." icon={Umbrella} />
                        <PlaceCard image={jkMughal} title="Mughal Gardens" desc="Walk through the royal grandeur of Nishat and Shalimar." icon={Umbrella} />
                        <PlaceCard image={jkPahalgam} title="Pahalgam" desc="Lush meadows and pine forests of the Betaab Valley." icon={Umbrella} />
                    </div>
                </section>

                {/* Resorts & Food Section - Luxury Redefined */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Royal Hospitality</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Stay in palaces & taste the Wazwan</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={jkResort} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Heritage Palaces</h3>
                                        <p className="text-gray-300">Live like royalty in converted palace hotels with lake views.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={jkDumAloo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Dum Aloo</h4>
                                            <p className="text-gray-400">Potatoes cooked in a rich, spicy yogurt gravy.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={jkRogan} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="Non Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Non-Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Wazwan Feast</h4>
                                            <p className="text-gray-400">The ultimate multi-course meal featuring Rogan Josh.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={jkKahwa} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Sip & Relax</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Kahwa Time</h4>
                                            <p className="text-gray-400">Enjoy traditional saffron tea by the lakeside.</p>
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

export default JammuKashmirExplorer;
