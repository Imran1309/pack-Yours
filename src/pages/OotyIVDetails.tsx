
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Cloud, Utensils, Hotel, Train, Flower, Factory, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Assets
import teaGardenImg from "@/assets/coorg_misty_plantation_1765904860516.png"; // Perfect for Ooty
import doubleMeetha from "@/assets/double_ka_meetha_hyderabad_1765973872834.png"; // Placeholder for Chocolates
import vegFood from "@/assets/mumbai_vada_pav_close_1765971065308.png";
import cottageImg from "@/assets/coorg_cottage.jpg";
import southNonVeg from "@/assets/south_indian_nonveg_feast_1765904961097.png";
import southVeg from "@/assets/mysore_masala_dosa_veg_1765905247257.png";
import ootyHero from "@/assets/ooty.jpg";
import gardenImg from "@/assets/ooty_botanical_garden.png";
import biryaniImg from "@/assets/bangalore_donne_biryani_1765905195089.png";
import trainImg from "@/assets/ooty_toy_train_final.jpg";
import teaImg from "@/assets/nilgiri_tea_cup.jpg";
import valleyImg from "@/assets/ooty_tea_estate_valley.jpg";

const OotyIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Tea Gardens",
            subtitle: "Emerald Carpets",
            image: ootyHero,
            quote: "A sip of nature."
        },

        {
            title: "Botanical Garden",
            subtitle: "Floral Paradise",
            image: gardenImg,
            quote: "Colors of the hills."
        },
        {
            title: "Tea Estate Valley",
            subtitle: "Lush Greenery",
            image: valleyImg,
            quote: "Nature's own carpet."
        }
    ];

    const foodItems = [
        { name: "Homemade Chocolates", type: "Veg", image: doubleMeetha, desc: "Assorted dark, milk & nut chocolates." },
        { name: "Ooty Varkey", type: "Veg", image: doubleMeetha, desc: "Crispy local puff pastry." },
        { name: "Nilgiri Tea", type: "Veg", image: valleyImg, desc: "Fresh brewed aromatic tea." },
        { name: "Chicken Chettinad", type: "Non-Veg", image: southNonVeg, desc: "Spicy south indian curry." },
        { name: "Kerala Parotta", type: "Veg", image: southVeg, desc: "Flaky layered bread." },
        { name: "Vegetable Biryani", type: "Veg", image: biryaniImg, desc: "Fresh garden vegetable rice." },
    ];

    const spots = [
        { name: "Tea Factory", desc: "Process of tea making.", icon: <Factory className="w-5 h-5 text-gray-400" /> },
        { name: "Doddabetta Peak", desc: "Highest point in Nilgiris.", icon: <Cloud className="w-5 h-5 text-cyan-400" /> },
        { name: "Ooty Lake", desc: "Boating & Cycling.", icon: <MapPin className="w-5 h-5 text-blue-400" /> },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-white pb-20">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-slate-900 to-black"></div>
                {/* Fog texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/foggy-birds.png')] opacity-10"></div>
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
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 mb-4 leading-tight"
                                style={{ fontFamily: "'Great Vibes', cursive", lineHeight: "1.3" }}>
                                Ooty chill
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-green-500 pl-4 mt-4">
                                Queen of Hill Stations
                            </p>
                        </div>

                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            Mist-covered mountains, sprawling tea estates, and the charm of colonial architecture. Ooty is the perfect serene getaway.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors col-span-1 sm:col-span-2">
                                <div className="flex items-center gap-3 mb-4 text-green-400">
                                    <Train className="w-6 h-6" />
                                    <span className="font-bold text-lg">Must Visit</span>
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
                            onClick={() => navigate('/booking?package=Ooty%20Chill')}
                            className="w-full py-5 bg-gradient-to-r from-green-600 to-teal-600 hover:shadow-green-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <Cloud className="w-6 h-6" />
                            Book Hill Trip
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[500px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
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
                                        <p className="text-green-300 text-lg italic">{slide.quote}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Food Section */}
                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 backdrop-blur-md mb-6">
                            <Utensils className="w-4 h-4 text-pink-400" />
                            <span className="text-sm font-bold text-pink-300 uppercase tracking-widest">LOCAL DELIGHTS</span>
                        </div>
                        <h2 className="text-5xl font-bold text-white mb-2 font-serif">Chocolates & Spices</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto italic">
                            Don't leave without tasting the famous homemade chocolates.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {foodItems.map((item, idx) => (
                            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer h-48 shadow-lg border border-white/5 hover:border-pink-500/50 transition-all duration-300">
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
                        <div className="p-3 bg-amber-500/20 rounded-2xl">
                            <Hotel className="w-6 h-6 text-amber-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Hilltop Stays</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Luxury */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg cursor-pointer">
                            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Luxury</div>
                            <img src={"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200"} alt="Heritage Bungalow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Colonial Bungalows</h3>
                                <p className="text-gray-300">Stay in British-era heritage cottages.</p>
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="group relative rounded-3xl overflow-hidden h-80 border border-white/10 shadow-lg cursor-pointer">
                            <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Budget</div>
                            <img src={cottageImg} alt="Budget Homestay" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Homestays</h3>
                                <p className="text-gray-300">Warm hospitality & homemade food.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default OotyIVDetails;
