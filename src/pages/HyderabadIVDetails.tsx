
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Film, Utensils, Hotel, Camera, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Assets
import charminarImg from "@/assets/hyderabad_charminar_iconic_1765973529606.png";
import ramojiImg from "@/assets/ramoji_film_city_entrance_1765973648093.png";
import biryaniImg from "@/assets/mandi_biryani_hyderabad_1765973745689.png";
import sweetImg from "@/assets/double_ka_meetha_hyderabad_1765973872834.png";
import sitaraHotelImg from "@/assets/ramoji_sitara_hotel_luxury_1765973972127.png";

// Reusing some assets for variety in food/rooms
import dosaImg from "@/assets/mysore_masala_dosa_veg_1765905247257.png";
import nonvegFeast from "@/assets/south_indian_nonveg_feast_1765904961097.png";
import normalRoom from "@/assets/mumbai_hotel_room_standard_1765971267672.png";

import osmaniaImg from "@/assets/osmania_biscuits_1767330825977.png";

const HyderabadIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Ramoji Film City",
            subtitle: "World's Largest Film City",
            image: ramojiImg,
            quote: "Where dreams turn into reel reality."
        },
        {
            title: "Charminar",
            subtitle: "Symbol of Hyderabad",
            image: charminarImg,
            quote: "Echoes of the Qutb Shahi dynasty."
        },
        {
            title: "Hussain Sagar",
            subtitle: "Heart of the City",
            image: "https://images.unsplash.com/photo-1572455044327-7348c1be7267?w=1200",
            quote: "Serenity amidst the bustle."
        }
    ];

    const foodItems = [
        { name: "Hyderabadi Mandi", type: "Non-Veg", image: biryaniImg },
        { name: "Chicken 65", type: "Non-Veg", image: nonvegFeast },
        { name: "Mutton Haleem", type: "Non-Veg", image: biryaniImg },
        { name: "Double Ka Meetha", type: "Veg", image: sweetImg },
        { name: "Mirchi Ka Salan", type: "Veg", image: dosaImg },
        { name: "Osmania Biscuits", type: "Veg", image: osmaniaImg },
    ];

    const roomTypes = [
        {
            name: "Sitara Luxury Hotel",
            desc: "Stay inside Ramoji Film City like a star.",
            image: sitaraHotelImg,
            price: "Premium"
        },
        {
            name: "Tara Comfort Hotel",
            desc: "Comfortable stay within the film city complex.",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
            price: "Standard"
        },
        {
            name: "City Center Dorms",
            desc: "Budget stay near Charminar for groups.",
            image: normalRoom,
            price: "Budget"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white pb-20">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-orange-950/30 to-black"></div>
                {/* Vintage Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
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
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 mb-2 leading-tight"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Royal Hyderabad
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-orange-500 pl-4 mt-4">
                                City of Pearls & Biryani
                            </p>
                        </div>

                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            Explore the grand blend of history and modernity. From the streets of Old City to the magical world of Ramoji Film City.
                        </p>

                        <div className="bg-orange-900/20 p-6 rounded-2xl border border-orange-500/30 backdrop-blur-md">
                            <div className="flex items-start gap-4">
                                <Film className="w-12 h-12 text-orange-400 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Ramoji Film City Special</h3>
                                    <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-2 drop-shadow-lg italic">
                                        "Ramji Ramoji Premji"
                                    </p>
                                    <p className="text-gray-300 text-sm italic">
                                        "Experience the magic of cinema in the world's largest integrated film city."
                                    </p>
                                    <ul className="mt-3 space-y-1 text-sm text-gray-400">
                                        <li>✨ Guided Studio Tour</li>
                                        <li>✨ Live Stunt Shows</li>
                                        <li>✨ Movie Magic Park</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-yellow-400">
                                    <MapPin className="w-6 h-6" />
                                    <span className="font-bold text-lg">Historic Old City</span>
                                </div>
                                <p className="text-sm text-gray-400">Walk through centuries of history at Charminar & Mecca Masjid.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-blue-400">
                                    <Utensils className="w-6 h-6" />
                                    <span className="font-bold text-lg">Food Walk</span>
                                </div>
                                <p className="text-sm text-gray-400">Taste the legendary Hyderabadi Biryani & Irani Chai.</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking?package=Hyderabad%20Royal')}
                            className="w-full py-5 bg-gradient-to-r from-orange-600 to-amber-600 hover:shadow-orange-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <Camera className="w-6 h-6" />
                            Book This Royal Trip
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[600px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
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
                                        <p className="text-orange-300 text-lg italic">{slide.quote}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Food Section */}
                <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[3rem] p-8 md:p-12 mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 backdrop-blur-md mb-6">
                            <Utensils className="w-4 h-4 text-orange-400" />
                            <span className="text-sm font-bold text-orange-300 uppercase tracking-widest">Nizami Zaiqa</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Royal Feast</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            From the spicy salan to the sweet double ka meetha, enjoy a true Nizami banquet.
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
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stays Section */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-yellow-500/20 rounded-2xl">
                            <Hotel className="w-6 h-6 text-yellow-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Stays at Film City</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {roomTypes.map((room, idx) => (
                            <div key={idx} className="group relative rounded-3xl overflow-hidden h-96 border border-white/10 shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                                    {room.price}
                                </div>
                                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{room.desc}</p>
                                    <div className="flex items-center gap-2 text-orange-300 text-xs uppercase tracking-wider font-bold">
                                        <Star className="w-4 h-4" />
                                        <span>Top Rated</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default HyderabadIVDetails;
