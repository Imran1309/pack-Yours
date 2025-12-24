
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Mountain, Utensils, Hotel, Tent, Snowflake, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Assets
import manaliHero from "@/assets/manali_snow_mountains_1765985791682.png";
import vegFood from "@/assets/mumbai_vada_pav_close_1765971065308.png"; // Placeholder for Siddu/Hot snack
import nonVegFood from "@/assets/mumbai_chicken_kebabs_1765971162080.png"; // Placeholder for Trout/Grill
import cottageImg from "@/assets/coorg_cottage.jpg"; // Placeholder for cottage
import budgetRoom from "@/assets/mumbai_hostel_dorm_1765971217665.png";
import rohtangImg from "@/assets/manali_rohtang_pass.jpg";
import oldManaliImg from "@/assets/manali_old_manali_street.jpg";
import sidduImg from "@/assets/manali_siddu_steamed_bun_1765987534633.png";
import troutImg from "@/assets/manali_rainbow_trout_dish_1765987749215.png";
import dhamPlaceholder from "@/assets/kerala_sadhya.png";
import chhaGoshtImg from "@/assets/kerala_parotta_curry_1765903887963.png";

const ManaliIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Solang Valley",
            subtitle: "Adventure Hub",
            image: manaliHero,
            quote: "Where the mountains touch the sky."
        },
        {
            title: "Rohtang Pass",
            subtitle: "Snow Point",
            image: rohtangImg,
            quote: "Walk in the clouds."
        },
        {
            title: "Old Manali",
            subtitle: "Hippie Vibes",
            image: oldManaliImg,
            quote: "Peace, Love, and Mountains."
        }
    ];

    const foodItems = [
        { name: "Himachali Siddu", type: "Veg", image: sidduImg, desc: "Steamed wheat bun with filling." },
        { name: "Dham", type: "Veg", image: dhamPlaceholder, desc: "Traditional festive feast." },
        { name: "Babru", type: "Veg", image: sidduImg, desc: "Black gram stuffed kachoris." },
        { name: "Rainbow Trout", type: "Non-Veg", image: troutImg, desc: "Fresh river fish fry." },
        { name: "Chha Gosht", type: "Non-Veg", image: chhaGoshtImg, desc: "Spicy lamb curry." },
        { name: "Chicken Anardana", type: "Non-Veg", image: nonVegFood, desc: "Tangy chicken dry." },
    ];

    const spots = [
        { name: "Solang Valley", desc: "Paragliding, Zorbing & Skiing.", icon: <Wind className="w-5 h-5 text-cyan-400" /> },
        { name: "Hadimba Temple", desc: "Ancient wooden temple.", icon: <MapPin className="w-5 h-5 text-orange-400" /> },
        { name: "Mall Road", desc: "Shopping & Cafes.", icon: <Utensils className="w-5 h-5 text-pink-400" /> },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-black"></div>
                {/* Snow texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10"></div>
            </div>

            <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all group border border-white/10"
                >
                    <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Hero Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">

                    {/* Text Content */}
                    <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in order-2 lg:order-1">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-white mb-4 leading-tight"
                                style={{ fontFamily: "'Great Vibes', cursive", lineHeight: "1.3" }}>
                                Manali Adventure
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-cyan-500 pl-4 mt-4">
                                Snow. Thrill. Chill.
                            </p>
                        </div>

                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            Experience the adrenaline of the Himalayas. From paragliding in Solang to cozy bonfire nights, Manali is the ultimate mountain escape.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors col-span-1 sm:col-span-2">
                                <div className="flex items-center gap-3 mb-4 text-cyan-400">
                                    <Mountain className="w-6 h-6" />
                                    <span className="font-bold text-lg">Famous IV Spots</span>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    {spots.map((place, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                                            <div className="p-2 bg-white/10 rounded-full">{place.icon}</div>
                                            <div>
                                                <h4 className="font-bold text-white">{place.name}</h4>
                                                <p className="text-xs text-gray-400">{place.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking?package=Manali%20Adventure')}
                            className="w-full py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-cyan-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <Snowflake className="w-6 h-6" />
                            Book Snow Trip
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[500px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
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
                                        <p className="text-cyan-300 text-lg italic">{slide.quote}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 backdrop-blur-md mb-6">
                            <Utensils className="w-4 h-4 text-orange-400" />
                            <span className="text-sm font-bold text-orange-300 uppercase tracking-widest">MOUNTAIN FLAVORS</span>
                        </div>
                        <h2 className="text-5xl font-bold text-white mb-2 font-serif">Pahadi Feast</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto italic">
                            Warm up with piping hot local delicacies.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {foodItems.map((item, idx) => (
                            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer h-48 shadow-lg border border-white/5 hover:border-orange-500/50 transition-all duration-300">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 p-4 w-full">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block ${item.type === 'Veg' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}`}>
                                        {item.type}
                                    </span>
                                    <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                                    <p className="text-xs text-gray-300 mt-1 hidden group-hover:block">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Accommodation */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-indigo-500/20 rounded-2xl">
                            <Hotel className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Mountain Stays</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Luxury */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg cursor-pointer">
                            <div className="absolute top-4 right-4 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Luxury</div>
                            <img src={cottageImg} alt="Luxury Cottage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Wooden Cottages</h3>
                                <p className="text-gray-300">Premium cottages with heater and valley view.</p>
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg cursor-pointer">
                            <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Budget</div>
                            <img src={budgetRoom} alt="Budget Stay" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Backpacker Hostels</h3>
                                <p className="text-gray-300">Cozy dorms, bonfires, and music.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default ManaliIVDetails;
