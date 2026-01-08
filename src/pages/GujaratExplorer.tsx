
import { ArrowLeft, Mountain, Umbrella, Building2, Star, Trees } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Image Imports
import gjPlacesHero from "@/assets/gj_places_hero.png";


// Cultural & Spiritual
const gjSomnathReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Somnath_Temple%2C_Gujarat.jpg/1200px-Somnath_Temple%2C_Gujarat.jpg";
const gjDwarkaReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dwarkadhish_Temple%2C_Dwarka%2C_Gujarat.JPG/1200px-Dwarkadhish_Temple%2C_Dwarka%2C_Gujarat.JPG";
const gjRaniKiVavReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Rani_ki_vav_02.jpg/1200px-Rani_ki_vav_02.jpg";

// Natural & Wildlife
const gjGirReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Asiatic_Lions_in_Gir_National_Park.jpg/1200px-Asiatic_Lions_in_Gir_National_Park.jpg";
const gjRannReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Great_Rann_of_Kutch_Salt_Flats.jpg/1200px-Great_Rann_of_Kutch_Salt_Flats.jpg";
const gjSaputaraReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lake_Saputara.jpg/1200px-Lake_Saputara.jpg";

// Modern Marvels
const gjStatueReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Statue_Of_Unity_2020.jpg/1200px-Statue_Of_Unity_2020.jpg";
const gjRiverfrontReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sabarmati_Riverfront%2C_Ahmedabad.jpg/1200px-Sabarmati_Riverfront%2C_Ahmedabad.jpg";
const gjScienceReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Gujarat_science_city5.jpg/1200px-Gujarat_science_city5.jpg";

// Resorts & Food
const gjResortReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kutch_White_Rann_Tents_%288335851293%29.jpg/1200px-Kutch_White_Rann_Tents_%288335851293%29.jpg";
const gjVegReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dhokla_thali.jpg/1200px-Dhokla_thali.jpg";
const gjNonVegReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Lal_Maas.jpg/1200px-Lal_Maas.jpg";
const gjOwnReal = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sabarmati_Riverfront%2C_Ahmedabad.jpg/1200px-Sabarmati_Riverfront%2C_Ahmedabad.jpg";

const PlaceCard = ({ image, title, desc, icon: Icon }: { image: string, title: string, desc: string, icon: any }) => (
    <div className="relative group overflow-hidden rounded-3xl h-[400px] shadow-2xl cursor-pointer border border-white/10 hover:border-orange-500/50 transition-all duration-500">
        <img src={image} alt={title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-500/20 backdrop-blur-sm rounded-full">
                        <Icon className="text-orange-400" size={24} />
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
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 drop-shadow-sm mb-6 font-serif">
            {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6" />
        <p className="text-gray-400 text-xl font-light tracking-widest uppercase">{subtitle}</p>
    </div>
);

const GujaratExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 relative">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-[#0a0a0a] to-[#0a0a0a] -z-10" />
            <div
                className="fixed inset-0 bg-cover bg-center opacity-20 mixed-blend-overlay -z-10 pointer-events-none"
                style={{ backgroundImage: `url(${gjPlacesHero})` }}
            />

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={gjPlacesHero} className="w-full h-full object-cover animate-scale-slow" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
                </div>

                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate("/states")}
                        className="bg-black/20 backdrop-blur-md p-4 rounded-full hover:bg-orange-500 transition-all text-white border border-white/10 group duration-300"
                    >
                        <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                    <div className="border border-orange-500/30 p-12 backdrop-blur-sm bg-black/20 rounded-full animate-fade-in">
                        <h1 className="text-7xl md:text-9xl font-black mb-2 animate-fade-in-up tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-orange-100 to-orange-600 font-serif">
                            GUJARAT
                        </h1>
                    </div>
                    <p className="mt-8 text-2xl md:text-3xl font-light tracking-[0.3em] animate-fade-in-up delay-100 text-orange-100/80 uppercase border-y border-orange-500/30 py-4 px-12">
                        Jewel of the West
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-orange-500 to-transparent" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">

                {/* Cultural & Spiritual Section */}
                <section>
                    <SectionTitle title="Divine Heritage" subtitle="Mystical Temples & History" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={gjSomnathReal} title="Somnath" desc="The first Jyotirlinga, the eternal shrine." icon={Building2} />
                        <PlaceCard image={gjDwarkaReal} title="Dwarka" desc="The ancient kingdom of Lord Krishna." icon={Building2} />
                        <PlaceCard image={gjRaniKiVavReal} title="Rani Ki Vav" desc="An intricate stepwell and UNESCO World Heritage site." icon={Building2} />
                    </div>
                </section>

                {/* Natural & Wildlife Section */}
                <section>
                    <SectionTitle title="Wild & Free" subtitle="Nature's Untold Stories" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={gjGirReal} title="Gir National Park" desc="The only home of the majestic Asiatic Lions." icon={Trees} />
                        <PlaceCard image={gjRannReal} title="Rann of Kutch" desc="The vast white desert under the moonlit sky." icon={Mountain} />
                        <PlaceCard image={gjSaputaraReal} title="Saputara" desc="A picturesque hill station in the Dang forest." icon={Mountain} />
                    </div>
                </section>

                {/* Modern Marvels & Entertainment Section */}
                <section>
                    <SectionTitle title="Modern Wonders" subtitle="Future Meets Tradition" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard image={gjStatueReal} title="Statue of Unity" desc="The world's tallest statue, a tribute to Sardar Patel." icon={Building2} />
                        <PlaceCard image={gjRiverfrontReal} title="Sabarmati Riverfront" desc="A beautiful promenade in the heart of Ahmedabad." icon={Umbrella} />
                        <PlaceCard image={gjScienceReal} title="Science City" desc="Explore the wonders of science and robotics." icon={Star} />
                    </div>
                </section>

                {/* Resorts & Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-16">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-serif font-bold text-white mb-4">Royal Hospitality</h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">Heritage stays & flavors of Gujarat</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Resorts */}
                            <div className="group space-y-8 cursor-pointer">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={gjResortReal} alt="Luxury Resort" referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                            <Star className="text-orange-400 fill-orange-400" size={24} />
                                        </div>
                                        <h3 className="text-4xl text-white font-serif font-bold mb-2">Rann Utsav Tents</h3>
                                        <p className="text-gray-300">Luxury tent city experience in the white desert.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-8 flex flex-col justify-center">
                                <div className="space-y-6">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={gjVegReal} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-7 h-7 rounded-full border-2 border-green-500 flex items-center justify-center bg-black/50 backdrop-blur-sm"></div>
                                                <span className="text-green-400 text-sm font-bold tracking-widest uppercase">Pure Veg</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Kathiyawadi Thali</h4>
                                            <p className="text-gray-400">Spicy & tangy flavors including Dhokla, Thepla, and Sev Tameta.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={gjNonVegReal} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Non Veg Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Coastal Delights</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Patra Ni Machhi</h4>
                                            <p className="text-gray-400">Parsi-style steamed fish wrapped in banana leaves.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl flex items-center gap-8 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                            <img src={gjOwnReal} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Own Food" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Picnic</span>
                                            </div>
                                            <h4 className="text-3xl font-serif font-bold text-white mb-2">Riverfront Picnic</h4>
                                            <p className="text-gray-400">Enjoy evening snacks by the serene Sabarmati river.</p>
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

export default GujaratExplorer;
