import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flame, Utensils, Bus, Hotel, Music, Castle, MapPin, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Imported Images
import bangalorePalaceImg from "@/assets/bangalore_palace_architecture_1765904886253.png";
import mysorePalaceImg from "@/assets/mysore_palace_illuminated_1765904833927.png";
import coorgImg from "@/assets/coorg_misty_plantation_1765904860516.png";
import luxuryResortImg from "@/assets/karnataka_luxury_resort_room_1765904909269.png";
import cleanRoomImg from "@/assets/karnataka_budget_clean_room_1765904934971.png";
import donneBiryaniImg from "@/assets/bangalore_donne_biryani_1765905195089.png";
import bisiBeleBathImg from "@/assets/karnataka_bisi_bele_bath_1765905216161.png";
import masalaDosaImg from "@/assets/mysore_masala_dosa_veg_1765905247257.png";
import nonVegFeastImg from "@/assets/south_indian_nonveg_feast_1765904961097.png";

// Placeholder for Veg
const vegMealUrl = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=60";

const BangaloreIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);
    const [foodSlide, setFoodSlide] = useState(0);

    const slides = [
        {
            title: "Bangalore",
            subtitle: "The Garden City & Tech Hub",
            image: bangalorePalaceImg,
            quote: "Where tradition meets technology."
        },
        {
            title: "Mysore",
            subtitle: "City of Palaces",
            image: mysorePalaceImg,
            quote: "Royalty in every corner."
        },
        {
            title: "Coorg",
            subtitle: "Scotland of India",
            image: coorgImg,
            quote: "Lost in the misty coffee hills."
        }
    ];

    const foodItems = [
        {
            name: "Donne Biryani",
            desc: "Aromatic green biryani in eco-cups.",
            image: donneBiryaniImg
        },
        {
            name: "Bisi Bele Bath",
            desc: "Spicy & soul-comforting rice lentil dish.",
            image: bisiBeleBathImg
        },
        {
            name: "Benne Masala Dosa",
            desc: "Crispy butter dosa, a Bangalore classic.",
            image: masalaDosaImg
        },
        {
            name: "Royal Non-Veg Feast",
            desc: "Grand feast with chicken & fish.",
            image: nonVegFeastImg
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
                <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
                {/* Subtle animated background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
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
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 mb-2 leading-tight"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Karnataka Royal IV
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-amber-500 pl-4 mt-4">
                                Experience Royalty & Nature
                            </p>
                        </div>

                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            From the tech capital to royal palaces and misty coffee plantations. This trip offers the perfect blend of learning, luxury, and leisure for your college gang.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-amber-400">
                                    <Castle className="w-6 h-6" />
                                    <span className="font-bold text-lg">Royal Palaces</span>
                                </div>
                                <p className="text-sm text-gray-400">Visit Mysore Palace & Bangalore Palace. Witness grand architecture.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-emerald-400">
                                    <Coffee className="w-6 h-6" />
                                    <span className="font-bold text-lg">Coorg Nature</span>
                                </div>
                                <p className="text-sm text-gray-400">Stay amidst coffee plantations. Trekking and campfire in the hills.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-rose-400">
                                    <Utensils className="w-6 h-6" />
                                    <span className="font-bold text-lg">Feast Like Kings</span>
                                </div>
                                <p className="text-sm text-gray-400">4x Non-Veg & 2x Veg Meals. Unlimited buffet with local delicacies.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-blue-400">
                                    <Hotel className="w-6 h-6" />
                                    <span className="font-bold text-lg">Premium Stays</span>
                                </div>
                                <p className="text-sm text-gray-400">Luxury Resorts & Clean Budget Rooms options available.</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking?package=Karnataka%20Royal%20IV')}
                            className="w-full py-5 bg-gradient-to-r from-amber-600 to-rose-600 hover:shadow-amber-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <Music className="w-6 h-6" />
                            Book This Royal Trip
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[500px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-rose-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
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
                                        <p className="text-amber-400 text-lg italic">{slide.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Accommodations Section */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <Hotel className="w-8 h-8 text-amber-400" />
                        <h2 className="text-3xl font-bold text-white">Accommodation Types</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Luxury Resort */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border-2 border-amber-500/50 shadow-2xl">
                            <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full z-10">PREMIUM</div>
                            <img src={luxuryResortImg} alt="Luxury Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-1">Luxury Resort</h3>
                                <p className="text-gray-300 text-sm">Spacious rooms with glass views of nature.</p>
                            </div>
                        </div>

                        {/* Normal Clean Room */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg">
                            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">BUDGET</div>
                            <img src={cleanRoomImg} alt="Budget Friendly Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-1">Budget Friendly</h3>
                                <p className="text-gray-300 text-sm">Neat & Clean rooms for a comfortable stay.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Food Section - Rectangular Slideshow */}
                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 md:p-16 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <Utensils className="w-8 h-8 text-amber-500" />
                                <h2 className="text-4xl font-bold text-white leading-tight">Royal Karnataka <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Culinary Delight</span></h2>
                            </div>
                            <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">
                                Savor the authentic flavors of Karnataka. From the legendary Donne Biryani to the soulful Bisi Bele Bath and crispy Benne Dosa.
                            </p>

                            <div className="flex flex-col gap-4">
                                {foodItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-4 rounded-xl cursor-pointer transition-all border ${foodSlide === idx ? 'bg-white/10 border-amber-500/50' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                                        onClick={() => setFoodSlide(idx)}
                                    >
                                        <h4 className={`font-bold ${foodSlide === idx ? 'text-amber-400' : 'text-gray-400'}`}>{item.name}</h4>
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
                                    <div key={idx} className={`w-2 h-2 rounded-full transition-all ${foodSlide === idx ? 'w-8 bg-amber-500' : 'bg-white/50'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-10 md:p-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for the Royal Experience?</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">Explore Bangalore, Mysore and Coorg with the best amenities and food. Don't simply visit, live the moment.</p>
                    <button
                        onClick={() => navigate('/booking?package=Karnataka%20Royal%20IV')}
                        className="px-10 py-4 bg-white text-black font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
                    >
                        Book Now
                    </button>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default BangaloreIVDetails;
