import { ArrowLeft, Landmark, Building2, Trees, Star, Sun, Umbrella, Waves, GlassWater } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Image Imports
import biharHero from "@/assets/bihar.jpg";
import mahabodhiImg from "@/assets/br_mahabodhi.jpg";
import vishnupadImg from "@/assets/br_vishnupad.jpg";
import mahavirMandirImg from "@/assets/br_mahavir.jpg";
import nalandaImg from "@/assets/br_nalanda.jpg";
import sherShahTombImg from "@/assets/br_shershah.jpg";
import vikramshilaImg from "@/assets/br_vikramshila.jpg";
import funtasiaImg from "@/assets/br_ecopark.jpg"; // Fallback to Eco Park if download failed
import ecoParkImg from "@/assets/br_ecopark.jpg";
import revolvingRestImg from "@/assets/br_maurya.jpg"; // Fallback to Maurya if download failed
import resortImg from "@/assets/br_maurya.jpg";
import vegImg from "@/assets/br_litti.jpg";
import nonVegImg from "@/assets/br_champaran.jpg";
import picnicImg from "@/assets/br_ecopark.jpg";

const PlaceCard = ({ image, title, desc, icon: Icon, colorClass = "orange" }: { image: string, title: string, desc: string, icon: any, colorClass?: string }) => {
    const colorStyles: Record<string, string> = {
        orange: "border-orange-500/50 text-orange-400 bg-orange-500/20",
        terracotta: "border-orange-700/50 text-orange-600 bg-orange-700/20",
        gold: "border-yellow-500/50 text-yellow-400 bg-yellow-500/20",
        cyan: "border-cyan-500/50 text-cyan-400 bg-cyan-500/20",
    };

    return (
        <div className={`relative group overflow-hidden rounded-3xl h-[450px] shadow-2xl cursor-pointer border border-white/10 hover:${colorStyles[colorClass].split(' ')[0]} transition-all duration-500`}>
            <img src={image} alt={title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 ${colorStyles[colorClass].split(' ').slice(2).join(' ')} backdrop-blur-sm rounded-full`}>
                            <Icon className={colorStyles[colorClass].split(' ')[1]} size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-white font-serif tracking-wide">{title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-light leading-relaxed">{desc}</p>
                </div>
            </div>
        </div>
    );
};

const SectionTitle = ({ title, subtitle, color = "orange" }: { title: string, subtitle: string, color?: string }) => {
    const gradientClasses: Record<string, string> = {
        orange: "from-orange-500/50 text-orange-400",
        terracotta: "from-orange-800/50 text-orange-700",
        gold: "from-yellow-500/50 text-yellow-500",
        cyan: "from-cyan-500/50 text-cyan-400",
    };

    return (
        <div className="text-center mb-16 relative">
            <div className={`absolute top-1/2 left-1/4 w-1/4 h-[1px] bg-gradient-to-l ${gradientClasses[color]} to-transparent`}></div>
            <div className={`absolute top-1/2 right-1/4 w-1/4 h-[1px] bg-gradient-to-r ${gradientClasses[color]} to-transparent`}></div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight font-serif uppercase">
                {title}
            </h2>
            <p className={`${gradientClasses[color].split(' ')[1]} text-xl font-light tracking-[0.2em] uppercase`}>{subtitle}</p>
        </div>
    );
};

const BiharExplorer = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500/30">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <img
                        src={biharHero}
                        alt="Bihar"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                    {/* Artistic noise/texture overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
                </div>

                <nav className="absolute top-0 w-full p-8 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                    <button
                        onClick={() => navigate('/states')}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 group border border-white/10"
                    >
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium tracking-wide">Explore India</span>
                    </button>
                    <div className="text-3xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600 font-serif uppercase">
                        Bihar
                    </div>
                </nav>

                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-6xl animate-fade-in-up">
                        <h1 className="text-7xl md:text-[9rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-orange-100 to-orange-400 mb-8 font-serif leading-none tracking-tighter drop-shadow-2xl uppercase">
                            Ancient<br />Enlightenment
                            <span className="block text-3xl md:text-5xl text-yellow-500 font-light tracking-[0.4em] mt-6 font-sans italic lowercase">the cradle of civilizations</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed border-l-4 border-orange-600 pl-10 text-left backdrop-blur-sm bg-black/30 p-8 rounded-r-2xl border-white/5">
                            From the Bodhi Tree of Gaya to the ruins of Nalanda, journey through the land where history was written in gold and wisdom flowed eternal.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
                    <div className="w-[2px] h-20 bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
                    <p className="text-orange-500 text-xs tracking-[0.3em] uppercase opacity-80 font-bold">Discover Bihar</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-32 space-y-48">

                {/* 1. Sacred Temples */}
                <section>
                    <SectionTitle title="Sacred Bihar" subtitle="Spiritual Epicenter of India" color="gold" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard
                            image={mahabodhiImg}
                            title="Mahabodhi Temple"
                            desc="The UNESCO World Heritage site where Siddhartha Gautama attained enlightenment and became the Buddha."
                            icon={Sun}
                            colorClass="gold"
                        />
                        <PlaceCard
                            image={vishnupadImg}
                            title="Vishnupad Temple"
                            desc="An ancient temple in Gaya dedicated to Lord Vishnu, featuring a 40cm footprint of the deity."
                            icon={Landmark}
                            colorClass="gold"
                        />
                        <PlaceCard
                            image={mahavirMandirImg}
                            title="Mahavir Mandir"
                            desc="One of the holiest Hanuman temples in North India, located in the heart of Patna near the historic railway station."
                            icon={Star}
                            colorClass="gold"
                        />
                    </div>
                </section>

                {/* 2. Historical Sites */}
                <section>
                    <SectionTitle title="Historical Roots" subtitle="Echoes of Ancient Wisdom" color="terracotta" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard
                            image={nalandaImg}
                            title="Nalanda University"
                            desc="The ruins of one of the world's first great residential universities, a beacon of learning for centuries."
                            icon={Building2}
                            colorClass="terracotta"
                        />
                        <PlaceCard
                            image={sherShahTombImg}
                            title="Sher Shah Suri Tomb"
                            desc="An Indo-Islamic architectural marvel standing tall in the middle of an artificial lake in Sasaram."
                            icon={Landmark}
                            colorClass="terracotta"
                        />
                        <PlaceCard
                            image={vikramshilaImg}
                            title="Vikramshila Ruins"
                            desc="Established by King Dharmapala, this ancient university was once a premier center of Buddhist education."
                            icon={Building2}
                            colorClass="terracotta"
                        />
                    </div>
                </section>

                {/* 3. Modern Hangouts & Party Spots */}
                <section>
                    <SectionTitle title="Vibrant Bihar" subtitle="Modern Life & Recreation" color="cyan" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <PlaceCard
                            image={funtasiaImg}
                            title="Funtasia Island"
                            desc="Bihar's premier water park featuring thrilling slides, wave pools, and a perfect getaway for family and friends."
                            icon={Waves}
                            colorClass="cyan"
                        />
                        <PlaceCard
                            image={ecoParkImg}
                            title="Eco Park"
                            desc="Rajdhani Vatika, a lush green expanse in Patna perfect for boating, jogging, and peaceful group hangouts."
                            icon={Trees}
                            colorClass="cyan"
                        />
                        <PlaceCard
                            image={revolvingRestImg}
                            title="Revolving Restaurant"
                            desc="Dine with a 360-degree panoramic view of Patna's skyline atop the Biscomaun Tower at Pind Balluchi."
                            icon={GlassWater}
                            colorClass="cyan"
                        />
                    </div>
                </section>

                {/* Resorts & Food Section */}
                <section className="relative rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-[#121212] to-[#050505]">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-900/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 p-20">
                        <div className="text-center mb-24">
                            <h2 className="text-6xl font-serif font-bold text-white mb-6 tracking-tight">Bihar Hospitality</h2>
                            <p className="text-xl text-orange-500 font-light tracking-[0.3em] uppercase">Elegance meets Tradition</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                            {/* Resorts */}
                            <div className="group space-y-10 cursor-pointer">
                                <div className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                                    <img src={resortImg} alt="Hotel Maurya" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black via-black/80 to-transparent">
                                        <div className="flex items-center gap-3 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="text-yellow-500 fill-yellow-500" size={24} />
                                            ))}
                                        </div>
                                        <h3 className="text-5xl text-white font-serif font-bold mb-4">Hotel Maurya, Patna</h3>
                                        <p className="text-gray-300 text-xl font-light leading-relaxed">Defining luxury in the capital city for decades, where world-class comfort meets Bihari warmth.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Food Menu */}
                            <div className="space-y-10 flex flex-col justify-center">
                                <div className="space-y-8">

                                    {/* Veg */}
                                    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] flex items-center gap-10 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-40 w-40 min-w-[160px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                            <img src={vegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Litti Chokha" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                                <span className="text-green-400 text-sm font-black tracking-widest uppercase">Iconic Vegetarian</span>
                                            </div>
                                            <h4 className="text-4xl font-serif font-bold text-white mb-3">Litti Chokha</h4>
                                            <p className="text-gray-400 text-lg leading-relaxed">The pride of Bihar—roasted wheat balls served with mashed spiced eggplant and dollops of pure ghee.</p>
                                        </div>
                                    </div>

                                    {/* Non-Veg */}
                                    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] flex items-center gap-10 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-40 w-40 min-w-[160px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                            <img src={nonVegImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Champaran Meat" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                                <span className="text-red-400 text-sm font-black tracking-widest uppercase">Bihari Specialty</span>
                                            </div>
                                            <h4 className="text-4xl font-serif font-bold text-white mb-3">Champaran Meat</h4>
                                            <p className="text-gray-400 text-lg leading-relaxed">Legendary Ahuna mutton slow-cooked in earthen pots with whole garlic cloves and secret rural spices.</p>
                                        </div>
                                    </div>

                                    {/* Own Food */}
                                    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] flex items-center gap-10 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="h-40 w-40 min-w-[160px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                            <img src={picnicImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Eco Picnic" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <Umbrella className="text-orange-500 w-5 h-5 shadow-lg" />
                                                <span className="text-orange-400 text-sm font-black tracking-widest uppercase">Outdoor Freedom</span>
                                            </div>
                                            <h4 className="text-4xl font-serif font-bold text-white mb-3">Eco Picnic</h4>
                                            <p className="text-gray-400 text-lg leading-relaxed">Bring your own delicacies and enjoy an open-air feast amidst the lush gardens of Patna's Eco Park.</p>
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

export default BiharExplorer;
