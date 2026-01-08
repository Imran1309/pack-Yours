
import { ArrowLeft, Mountain, Umbrella, Building2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Image Imports (Placeholders from existing assets)
// Ideally replace these with: ka_coorg.jpg, ka_chikmagalur.jpg, etc.
// Image Imports (Proxies using suitable existing assets)
import kaMysore from "@/assets/mysore.jpg";
import kaCoorg from "@/assets/tn_mountain.png"; // Lush green mountain
import kaChikmagalur from "@/assets/tn_kodai.png"; // Misty hill station
import kaKudremukh from "@/assets/tn_yercaud.png"; // Hills

import kaGokarna from "@/assets/tn_beach.png"; // Scenic beach
import kaMalpe from "@/assets/An.jpg"; // Island vibe for St Mary's
import kaMurudeshwarBeach from "@/assets/tn_dhanushkodi.png"; // Coastal view

import kaHampi from "@/assets/tn_mahabalipuram.jpg"; // Proxy: Stone Chariot
import kaChamundi from "@/assets/mysore.jpg"; // Proxy: Mysore City/Palace for Chamundi
import kaMurudeshwarTemple from "@/assets/tn_temple.png"; // Proxy: Generic Temple

import kaJungleResort from "@/assets/kl_wayanad.jpg"; // Resort (Wayanad Forest)
import kaDosa from "@/assets/kl_sadya.jpg"; // Food
import kaFish from "@/assets/kl_fish.jpg"; // Food
import kaPicnic from "@/assets/bg-falls.jpg"; // Falls for picnic

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-amber-500/50 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-amber-500/20 backdrop-blur-sm rounded-full">
                        <Icon className="text-amber-400" size={24} />
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
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 drop-shadow-sm mb-6 font-serif">
            {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6" />
        <p className="text-gray-400 text-xl font-light tracking-widest uppercase">{subtitle}</p>
    </div>
);

const KarnatakaExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#1a0505] text-white selection:bg-amber-500/30">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={kaMysore} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#1a0505]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-amber-600 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-amber-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-700 font-serif">
                            KARNATAKA
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-amber-100/80 uppercase border-y border-amber-500/30 py-4 px-12">
                        One State, Many Worlds
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* Mountains Section */}
                <section>
                    <SectionTitle title="Western Ghats" subtitle="Misty peaks and coffee trails" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={kaCoorg} title="Coorg" desc="The Scotland of India, famous for coffee and mist." icon={Mountain} />
                        <PlaceCard image={kaChikmagalur} title="Chikmagalur" desc="Lush green hills and the highest peak, Mullayanagiri." icon={Mountain} />
                        <PlaceCard image={kaKudremukh} title="Kudremukh" desc="A trekker's paradise with unique horse-faced peaks." icon={Mountain} />
                    </div>
                </section>

                {/* Beaches Section */}
                <section>
                    <SectionTitle title="Coastal Charms" subtitle="Serene beaches and sacred shores" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={kaGokarna} title="Gokarna" desc="Om-shaped beach meeting spiritual vibes." icon={Umbrella} />
                        <PlaceCard image={kaMalpe} title="Malpe" desc="Home to St. Mary's Island and columnar basalt rocks." icon={Umbrella} />
                        <PlaceCard image={kaMurudeshwarBeach} title="Murudeshwar" desc="Golden sands under the gaze of Lord Shiva." icon={Umbrella} />
                    </div>
                </section>

                {/* Temples Section */}
                <section>
                    <SectionTitle title="Divine Heritage" subtitle="Architectural marvels of the past" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={kaHampi} title="Hampi" desc="The forgotten empire of ruins and stone chariots." icon={Building2} />
                        <PlaceCard image={kaChamundi} title="Chamundeshwari" desc="The guardian deity of Mysore atop the hills." icon={Building2} />
                        <PlaceCard image={kaMurudeshwarTemple} title="Murudeshwar Temple" desc="World's second tallest Shiva statue." icon={Building2} />
                    </div>
                </section>

                {/* Resorts & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#2e0c0c] to-[#1a0505]">
                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Royal Hospitality</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Jungle stays & spicy delights</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={kaJungleResort} alt="Jungle Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Jungle Lodges</h3>
                                        <p className="text-gray-300">Stay amidst the wild in Kabini or Bandipur.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={kaDosa} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Dosa" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Mysore Masala Dosa</h4>
                                            <p className="text-gray-400">Crispy crepe with red chutney and potato.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={kaFish} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Fish" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Non-Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Kori Rotti / Fish Curry</h4>
                                            <p className="text-gray-400">Spicy Mangalorean delicacies.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={kaPicnic} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Riverside Picnic</h4>
                                            <p className="text-gray-400">Enjoy your own food at Cauvery Nisargadhama.</p>
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

export default KarnatakaExplorer;
