import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Star, Coffee, Utensils, Hotel, ArrowLeft } from "lucide-react";
const agraImg = "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80";
import agraPethaImg from "../assets/agra_petha.jpg";

const AgraDetails = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hotels = [
        {
            name: "The Oberoi Amarvilas",
            rating: "5.0",
            price: "Premium",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
            desc: "Unrivaled luxury with direct views of the Taj Mahal from every room."
        },
        {
            name: "Taj Hotel & Convention Centre",
            rating: "4.8",
            price: "Luxury",
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
            desc: "Modern luxury near the Taj Mahal with rooftop infinity pool."
        },
        {
            name: "ITC Mughal",
            rating: "4.7",
            price: "Deluxe",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
            desc: "A tribute to Mughal architecture and royal hospitality."
        }
    ];

    const foodItems = [
        {
            name: "Agra Petha",
            type: "Veg (Famous)",
            desc: "The world-famous soft candy made from ash gourd, a must-try in Agra.",
            image: agraPethaImg
        },
        {
            name: "Bedai & Jalebi",
            type: "Veg (Breakfast)",
            desc: "Crispy fried bread served with spicy potato curry and sweet jalebi.",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
        },
        {
            name: "Mughlai Chicken/Mutton",
            type: "Non-Veg",
            desc: "Rich, creamy curries inspired by the royal kitchens of the Mughal Empire.",
            image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500 selection:text-white pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[80vh] w-full overflow-hidden">
                <img src={agraImg} alt="Taj Mahal Night View" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                    <span className="text-yellow-400 font-bold tracking-widest uppercase mb-4 block animate-fade-in">The Monument of Love</span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-white to-rose-200 drop-shadow-lg"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Agra
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                        Witness the eternal beauty of the Taj Mahal and immerse yourself in the romance of the Mughal era.
                    </p>

                    {/* Highlighted Quote */}
                    <div className="mt-8 inline-block animate-bounce-slow">
                        <div className="bg-gradient-to-r from-rose-600 to-pink-600 px-8 py-4 rounded-2xl shadow-2xl border border-rose-400/50 backdrop-blur-md transform hover:scale-105 transition-all cursor-default">
                            <p className="text-white font-extrabold text-2xl md:text-3xl tracking-wide drop-shadow-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                "60kg Tajmahal Yanaka Yanaka"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 mt-16 space-y-24">

                {/* Introduction */}
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-rose-400">Where Love Lives Forever</h2>
                    <p className="text-gray-300 text-lg leading-loose">
                        Agra is not just a city; it's a testament to undying love. Home to the Taj Mahal, one of the Seven Wonders of the World,
                        it offers a perfect romantic getaway. Explore the grandeur of Agra Fort, stroll through the Mehtab Bagh at sunset,
                        and savor the legendary Mughal cuisine.
                    </p>
                </section>

                {/* Hotels Section */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <Hotel className="w-10 h-10 text-yellow-400" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Luxury Stays</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {hotels.map((hotel, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="text-sm font-bold">{hotel.rating}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 text-rose-100">{hotel.name}</h3>
                                    <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-3">{hotel.price}</p>
                                    <p className="text-gray-400 text-sm">{hotel.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Food Section */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <Utensils className="w-10 h-10 text-rose-400" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Famous Cuisine</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {foodItems.map((item, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group">
                                <div className="h-48 overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${item.type.includes('Non-Veg') ? 'bg-red-900/50 text-red-300' : 'bg-green-900/50 text-green-300'}`}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
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

export default AgraDetails;
