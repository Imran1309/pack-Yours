import { ArrowLeft, Mountain, Droplets, TreePine, Landmark, Star, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Image Imports
import jharkhandHero from "@/assets/Tourism-in-Jharkhand.jpg";
// Using proxy images for other sections
// Using proxy images for other sections
import dassam from "@/assets/dassam falls.jpg"; // Authentic Dassam Falls
import jonsongFalls from "@/assets/Vantawng Falls,.jpg"; // Proxy for Jonsong Falls (File missing)
import rockGarden from "@/assets/Rock Garden,.jpeg"; // Authentic Rock Garden
import baidyanath from "@/assets/baidyanath tem.jpg"; // Authentic Baidyanath
import betlaNational from "@/assets/sepahijala_wildlife.jpg"; // Authentic Betla (Sepahijala)
import jagannath from "@/assets/jagannath tem.jpg"; // Authentic Jagannath
import pahari from "@/assets/Pahari Mandir,.jpg"; // Authentic Pahari Mandir
import runchiLake from "@/assets/runchi lake.jpg"; // Authentic Ranchi Lake
import resort from "@/assets/jar-res.jpg"; // Authentic Resort
import vegFood from "@/assets/jar-veg.jpg"; // Authentic Veg
import nonVegFood from "@/assets/jar-non.jpg"; // Authentic Non-Veg
import picnicFood from "@/assets/pic-hari.jpg"; // Authentic Picnic

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-emerald-500/50 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-emerald-500/20 backdrop-blur-sm rounded-full">
                        <Icon className="text-emerald-400" size={24} />
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
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-green-100 to-emerald-200 drop-shadow-sm mb-6 font-serif">
            {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-6" />
        <p className="text-gray-400 text-xl font-light tracking-widest uppercase">{subtitle}</p>
    </div>
);

const JharkhandExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#051a0a] text-white selection:bg-emerald-500/30">

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={jharkhandHero} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#051a0a]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/destination")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-emerald-600 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-emerald-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-emerald-100 to-emerald-700 font-serif">
                            JHARKHAND
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-emerald-100/80 uppercase border-y border-emerald-500/30 py-4 px-12">
                        Land of Forests
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* Famous Temples Section */}
                <section>
                    <SectionTitle title="Famous Temples" subtitle="Sacred spiritual destinations" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={baidyanath} title="Baidyanath Temple" desc="One of the twelve Jyotirlingas, a major pilgrimage site in Deoghar." icon={Landmark} />
                        <PlaceCard image={jagannath} title="Jagannath Temple" desc="Ancient temple dedicated to Lord Jagannath in Ranchi with stunning architecture." icon={Landmark} />
                        <PlaceCard image={pahari} title="Pahari Mandir" desc="Hilltop temple offering panoramic views of Ranchi city." icon={Landmark} />
                    </div>
                </section>

                {/* Famous Places Section */}
                <section>
                    <SectionTitle title="Famous Places" subtitle="Iconic landmarks & attractions" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={dassam} title="Dassam Falls" desc="A stunning 44-meter waterfall perfect for picnics and photography." icon={Droplets} />
                        <PlaceCard image={betlaNational} title="Betla National Park" desc="Home to tigers, elephants, and diverse wildlife in the Palamu region." icon={TreePine} />
                        <PlaceCard image={rockGarden} title="Rock Garden" desc="Beautiful landscaped garden with rock formations and waterfalls in Ranchi." icon={Mountain} />
                    </div>
                </section>

                {/* Party Spots Section */}
                <section>
                    <SectionTitle title="Party Spots" subtitle="Nightlife & entertainment" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={resort} title="Nucleus Mall" desc="Premier shopping and entertainment destination with restaurants and cafes." icon={Star} />
                        <PlaceCard image={jharkhandHero} title="City Centre Mall" desc="Modern mall with dining, shopping, and entertainment options." icon={Star} />
                        <PlaceCard image={runchiLake} title="Ranchi Lake" desc="Scenic lakeside spot perfect for evening hangouts and picnics." icon={Star} />
                    </div>
                </section>

                {/* Resorts & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#0c2e1a] to-[#051a0a]">
                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Tribal Hospitality</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Authentic stays & traditional cuisine</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resort} alt="Jharkhand Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Eco Resorts</h3>
                                        <p className="text-gray-300">Experience nature's tranquility in eco-friendly forest resorts.</p>
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
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Dhuska</h4>
                                            <p className="text-gray-400">Traditional rice pancakes served with spicy potato curry.</p>
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
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Mutton Curry</h4>
                                            <p className="text-gray-400">Tribal-style mutton cooked with aromatic spices and herbs.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={picnicFood} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Waterfall Picnic</h4>
                                            <p className="text-gray-400">Enjoy homemade meals by the scenic waterfalls.</p>
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

export default JharkhandExplorer;
