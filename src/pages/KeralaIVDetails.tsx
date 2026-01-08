import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flame, Utensils, Bus, Hotel, Music, Castle, Palmtree, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import munnarImg from "@/assets/munnar.jpg";
import vagamonImg from "@/assets/vagmon.jpg";
import varkalaImg from "@/assets/kerala_varkala.png";
import kochiImg from "@/assets/kerala_kochi.png";
import athirapallyImg from "@/assets/bg-falls.jpg";

// Generated Images (simulated paths - in real app, these would be the actual generated file paths or assets)
// Generated Images (simulated paths - in real app, these would be the actual generated file paths or assets)
import woodenRoomImg from "@/assets/kerala_wooden_cottage_room_1765903789299.png";
import resortImg from "@/assets/vagamon_hotel_resort_1765904309254.png";
import poolImg from "@/assets/kerala_luxury_resort_pool_1765903822627.png"; // Keeping this if needed, or use for 'resort' context
import sadyaImg from "@/assets/kerala_sadya_feast_1765903853238.png";
import parottaImg from "@/assets/kerala_parotta_curry_1765903887963.png";
import fishFryImg from "@/assets/kerala_karimeen_pollichathu_1765904283596.png";
import appamImg from "@/assets/kerala_appam_stew_1765903924976.png";

// Using the imported assets directly instead of URLs
const woodenCottageUrl = woodenRoomImg;
const resortUrl = resortImg; // Using the new Vagamon hotel image for the resort
const normalRoomUrl = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop";

const sadyaUrl = sadyaImg;
const parottaUrl = parottaImg;
const fishFryUrl = fishFryImg;


const KeralaIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);
    const [foodSlide, setFoodSlide] = useState(0);

    const slides = [
        {
            title: "Munnar",
            subtitle: "Misty Hills Party",
            image: munnarImg,
            quote: "Dance above the clouds."
        },
        {
            title: "Vagamon",
            subtitle: "Pine Forest Camp",
            image: vagamonImg,
            quote: "Bonfire nights under the stars."
        },
        {
            title: "Varkala",
            subtitle: "Cliffside Vibes",
            image: varkalaImg,
            quote: "Sunset jams by the beach."
        },
        {
            title: "Kochi",
            subtitle: "City Lights & Marine Drive",
            image: kochiImg,
            quote: "Urban beats and neon streets."
        },
        {
            title: "Athirapally",
            subtitle: "Nature's Fury",
            image: athirapallyImg,
            quote: "The Niagara of India."
        }
    ];

    const foodItems = [
        {
            name: "Kerala Sadya",
            desc: "25+ Dishes on Banana Leaf",
            image: sadyaUrl
        },
        {
            name: "Parotta & Beef/Chicken",
            desc: "The State Dish of Emotion",
            image: parottaUrl
        },
        {
            name: "Karimeen Pollichathu",
            desc: "Pearl Spot Fish in Banana Leaf",
            image: fishFryUrl
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
            setFoodSlide((prev) => (prev + 1) % foodItems.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500 selection:text-white pb-20">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
                {/* Subtle animated background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>
            </div>

            <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all group border border-white/10"
                >
                    <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Hero / Main Package Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Text Content */}
                    <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in order-2 lg:order-1">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 mb-2 leading-tight"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Kerala Ultimate IV
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-rose-500 pl-4 mt-4">
                                All eyes looku your trip
                            </p>
                        </div>

                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            Experience the ultimate college trip with full-on party vibes. From mist-covered hills to sun-kissed cliffs, we've got the perfect itinerary for your squad.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-rose-400">
                                    <Bus className="w-6 h-6" />
                                    <span className="font-bold text-lg">Party On Wheels</span>
                                </div>
                                <p className="text-sm text-gray-400">Luxury Bus with Full DJ Set, Pub Lighting & Premium Audio System. Dance while you travel.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-orange-400">
                                    <Flame className="w-6 h-6" />
                                    <span className="font-bold text-lg">Night Campfire</span>
                                </div>
                                <p className="text-sm text-gray-400">Bonfire nights with lush green surroundings, music and dance under the open sky.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-green-400">
                                    <Utensils className="w-6 h-6" />
                                    <span className="font-bold text-lg">Premium Food Plan</span>
                                </div>
                                <p className="text-sm text-gray-400">2x Veg & Rest Non-Veg Buffet. Authentic Kerala dishes mixed with continental favorites.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-blue-400">
                                    <Hotel className="w-6 h-6" />
                                    <span className="font-bold text-lg">Budget Luxury</span>
                                </div>
                                <p className="text-sm text-gray-400">Neat & Clean Rooms with View Points. Options for Resorts and Wooden Cottages.</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking?package=Kerala%20Ultimate%20IV')}
                            className="w-full py-5 bg-gradient-to-r from-rose-600 to-purple-600 hover:shadow-rose-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <Music className="w-6 h-6" />
                            Book This Party Trip
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[500px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
                        <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 p-6">
                                        <h3 className="text-4xl font-bold text-white mb-2">{slide.title}</h3>
                                        <p className="text-rose-400 text-lg italic">{slide.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Accommodations Section */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <Castle className="w-8 h-8 text-amber-400" />
                        <h2 className="text-3xl font-bold text-white">Premium Stays</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Normal Room */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg">
                            <img src={normalRoomUrl} alt="Standard Luxury Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-1">Standard Luxury</h3>
                                <p className="text-gray-300 text-sm">Clean, spacious rooms with hill views.</p>
                            </div>
                        </div>

                        {/* Wooden Cottage */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border-2 border-amber-500/50 shadow-2xl transform md:-translate-y-4">
                            <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full z-10">POPULAR</div>
                            <img src={woodenCottageUrl} alt="Wooden Cottage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-1">Wooden Cottages</h3>
                                <p className="text-gray-300 text-sm">Cozy wooden aesthetic amidst nature.</p>
                            </div>
                        </div>

                        {/* Resort */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg">
                            <img src={resortUrl} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-1">Premium Resorts</h3>
                                <p className="text-gray-300 text-sm">Swimming pools & campfire areas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Food Section - Rectangular Slideshow */}
                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 md:p-16 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <Utensils className="w-8 h-8 text-green-400" />
                                <h2 className="text-4xl font-bold text-white leading-tight">Authentic Kerala <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Food Experience</span></h2>
                            </div>
                            <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">
                                Don't just visit Kerala, taste it. From the grand 26-dish Sadya on a banana leaf to the spicy street-style Parotta & Beef, your taste buds are in for a ride.
                            </p>

                            <div className="flex flex-col gap-4">
                                {foodItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-4 rounded-xl cursor-pointer transition-all border ${foodSlide === idx ? 'bg-white/10 border-green-500/50' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                                        onClick={() => setFoodSlide(idx)}
                                    >
                                        <h4 className={`font-bold ${foodSlide === idx ? 'text-green-400' : 'text-gray-400'}`}>{item.name}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[400px] md:h-auto min-h-[500px]">
                            {foodItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-opacity duration-700 ${foodSlide === idx ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent md:bg-gradient-to-l"></div>
                                </div>
                            ))}

                            <div className="absolute bottom-6 right-6 flex gap-2">
                                {foodItems.map((_, idx) => (
                                    <div key={idx} className={`w-2 h-2 rounded-full transition-all ${foodSlide === idx ? 'w-8 bg-green-500' : 'bg-white/50'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default KeralaIVDetails;
