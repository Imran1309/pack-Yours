
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Camera, Utensils, Music, Film, Bus, Hotel, Bed } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Assets
import gatewayImg from "@/assets/mumbai_gateway_full_view_1765970435408.png";
import marineDriveImg from "@/assets/mumbai_marine_drive_ride_1765970506836.png";
import filmCityImg from "@/assets/mumbai_film_city_tour_1765970555024.png";

// Food
import vadaPavImg from "@/assets/mumbai_vada_pav_close_1765971065308.png";
import pavBhajiImg from "@/assets/mumbai_pav_bhaji_1765971112475.png";
import kebabsImg from "@/assets/mumbai_chicken_kebabs_1765971162080.png";
// import streetFoodImg from "@/assets/mumbai_street_food_combo_1765970609478.png"; // Fallback/General

import sandwichImg from "@/assets/mumbai_bombay_sandwich_special_1767287330443.png";
import fishFryImg from "@/assets/mumbai_fish_fry_crispy_1767287350331.png";
import platterImg from "@/assets/mumbai_kebabs_platter_mix_1767287367503.png";

// Rooms
import dormImg from "@/assets/mumbai_hostel_dorm_1765971217665.png";
import standardRoomImg from "@/assets/mumbai_hotel_room_standard_1765971267672.png";
import premiumRoomImg from "@/assets/mumbai_premium_room_sea_view_1765971309015.png";

const MumbaiIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Gateway of India",
            subtitle: "The Iconic Landmark",
            image: gatewayImg,
            quote: "The City of Dreams welcomes you."
        },
        {
            title: "Marine Drive",
            subtitle: "The Queen's Necklace",
            image: marineDriveImg,
            quote: "City lights and sea breeze."
        },
        {
            title: "Film City",
            subtitle: "Bollywood Tour",
            image: filmCityImg,
            quote: "Lights, Camera, Action!"
        }
    ];

    // Using new distinct images
    // Using new distinct images
    const foodItems = [
        { name: "Vada Pav", type: "Veg", image: vadaPavImg },
        { name: "Pav Bhaji", type: "Veg", image: pavBhajiImg },
        { name: "Bombay Sandwich", type: "Veg", image: sandwichImg },
        { name: "Chicken Tikka", type: "Non-Veg", image: kebabsImg },
        { name: "Kebabs Platter", type: "Non-Veg", image: platterImg },
        { name: "Fish Fry", type: "Non-Veg", image: fishFryImg },
    ];

    // New Rooms Data
    const roomTypes = [
        {
            name: "Student Dorms",
            desc: "Budget-friendly, clean, & social.",
            image: dormImg,
            price: "Budget"
        },
        {
            name: "Standard AC",
            desc: "Comfortable rooms with city view.",
            image: standardRoomImg,
            price: "Comfort"
        },
        {
            name: "Premium Sea View",
            desc: "Luxury stay overlooking Marine Drive.",
            image: premiumRoomImg,
            price: "Luxury"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white pb-20">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-950 to-black"></div>
                {/* City Lights Effect */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
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
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 mb-2 leading-tight"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Mumbai Dreams
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-blue-500 pl-4 mt-4">
                                The City That Never Sleeps
                            </p>
                        </div>

                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            Experience the pulse of India's commercial capital. From historical landmarks to Bollywood glamour, Mumbai offers an electrifying industrial visit experience.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Gateway Feature */}
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors col-span-1 sm:col-span-2">
                                <div className="flex items-center gap-3 mb-2 text-yellow-400">
                                    <MapPin className="w-6 h-6" />
                                    <span className="font-bold text-lg">Gateway of India</span>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">Visit the monumental arch overlooking the Arabian Sea. A perfect spot for group photos.</p>
                                <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg">
                                    <img src={gatewayImg} alt="Gateway of India Full View" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                    <Bus className="w-6 h-6" />
                                    <span className="font-bold text-lg">Marine Drive Ride</span>
                                </div>
                                <p className="text-sm text-gray-400">Enjoy a scenic drive along the Queen's Necklace.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-pink-400">
                                    <Film className="w-6 h-6" />
                                    <span className="font-bold text-lg">Film City</span>
                                </div>
                                <p className="text-sm text-gray-400">Explore places famous among students and Bollywood fans.</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking?package=Mumbai%20Dreams')}
                            className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-blue-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <Music className="w-6 h-6" />
                            Book This City Trip
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[600px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
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
                                        <p className="text-blue-300 text-lg italic">{slide.quote}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Food Section - Veg & Non-Veg Combo */}
                <section className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-md mb-6">
                            <Utensils className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-bold text-blue-300 uppercase tracking-widest">Mumbai Masala</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Famous Street Food Combo</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Relish the famous Mumbai street food. We offer a mix of Veg and Non-Veg delights.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {foodItems.map((item, idx) => (
                            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer h-48 shadow-lg border border-white/5 hover:border-blue-500/50 transition-all duration-300">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                <div className="absolute bottom-0 left-0 p-4 w-full">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block ${item.type === 'Veg' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}`}>
                                        {item.type}
                                    </span>
                                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">{item.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Accommodation - Standard */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-indigo-500/20 rounded-2xl">
                            <Hotel className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Choose Your Stay</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {roomTypes.map((room, idx) => (
                            <div key={idx} className="group relative rounded-3xl overflow-hidden h-96 border border-white/10 shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full z-10 border border-white/20">
                                    {room.price}
                                </div>
                                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{room.desc}</p>
                                    <div className="flex items-center gap-2 text-indigo-300 text-xs uppercase tracking-wider font-bold">
                                        <Bed className="w-4 h-4" />
                                        <span>Available Now</span>
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

export default MumbaiIVDetails;
