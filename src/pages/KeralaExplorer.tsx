
import { ArrowLeft, Mountain, Umbrella, Building2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mountains
import klMunnar from "@/assets/kl_munnar.jpg";
import klWayanad from "@/assets/kl_wayanad.jpg";
import klVagamon from "@/assets/kl_vagamon.jpg";

// Beaches
import klVarkala from "@/assets/kl_varkala.jpg";
import klKovalam from "@/assets/kl_kovalam.jpg";
import klMarari from "@/assets/kl_marari.jpg";

// Temples
import klPadmanabha from "@/assets/kl_padmanabhaswamy.jpg";
import klGuruvayur from "@/assets/kl_guruvayur.jpg";
import klTrissur from "@/assets/kl_trissur.jpg";

// Resorts & Food
import klHouseboat from "@/assets/kl_houseboat.jpg";
import klSadya from "@/assets/kl_sadya.jpg";
import klFish from "@/assets/kl_fish.jpg";


const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-green-500/50 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-500/20 backdrop-blur-sm rounded-full">
                        <Icon className="text-green-400" size={24} />
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
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-yellow-200 to-green-200 drop-shadow-sm mb-6 font-serif">
            {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-6" />
        <p className="text-gray-400 text-xl font-light tracking-widest uppercase">{subtitle}</p>
    </div>
);

const KeralaExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#051a05] text-white selection:bg-green-500/30">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={klMunnar} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#051a05]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-green-600 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-green-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-8xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-green-600 font-serif">
                            KERALA
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-green-100/80 uppercase border-y border-green-500/30 py-4 px-12">
                        God's Own Country
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* Mountains Section */}
                <section>
                    <SectionTitle title="Misty Hills" subtitle="Where tea gardens kiss the clouds" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={klMunnar} title="Munnar" desc="Endless tea plantations and misty rolling hills." icon={Mountain} />
                        <PlaceCard image={klWayanad} title="Wayanad" desc="Caves, waterfalls, and spice plantations await." icon={Mountain} />
                        <PlaceCard image={klVagamon} title="Vagamon" desc="Pine forests and green meadows for peace seekers." icon={Mountain} />
                    </div>
                </section>

                {/* Beaches Section */}
                <section>
                    <SectionTitle title="Tropical Shores" subtitle="Sun, sand, and serenity" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={klVarkala} title="Varkala" desc="Stunning cliffs overlooking the Arabian Sea." icon={Umbrella} />
                        <PlaceCard image={klKovalam} title="Kovalam" desc="Iconic lighthouse beach with crescent shorelines." icon={Umbrella} />
                        <PlaceCard image={klMarari} title="Marari" desc="A quiet, undeveloped beach for total relaxation." icon={Umbrella} />
                    </div>
                </section>

                {/* Temples Section */}
                <section>
                    <SectionTitle title="Spiritual Bliss" subtitle="Ancient shrines and divine architecture" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={klPadmanabha} title="Padmanabhaswamy" desc="The wealthiest temple in the world with gold-plated glory." icon={Building2} />
                        <PlaceCard image={klGuruvayur} title="Guruvayur" desc="The dwelling of Lord Krishna, Dwarka of the South." icon={Building2} />
                        <PlaceCard image={klTrissur} title="Vadakkunnathan" desc="Classic Kerala style architecture dedicated to Shiva." icon={Building2} />
                    </div>
                </section>

                {/* Resorts & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#0c2e0c] to-[#051a05]">
                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Backwater Luxury</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Houseboats & authentic culinary delights</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={klHouseboat} alt="Houseboat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Houseboat Stays</h3>
                                        <p className="text-gray-300">Float through the tranquil backwaters of Alleppey.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={klSadya} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Sadya" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Kerala Sadya</h4>
                                            <p className="text-gray-400">A grand feast served on a banana leaf.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={klFish} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Fish" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Non-Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Karimeen Pollichathu</h4>
                                            <p className="text-gray-400">Pearl Spot fish marinated and grilled in banana leaf.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={klMunnar} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Bring Your Own</h4>
                                            <p className="text-gray-400">Scenic spots crafted for your perfect family picnic.</p>
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

export default KeralaExplorer;
