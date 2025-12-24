import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sun, Umbrella, Waves, Quote, Heart, Utensils, Bed, Wifi, Wind, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cavelossimImg from "@/assets/cavelossim.png";
import agondaImg from "@/assets/agonda.png";
import palolemImg from "@/assets/palolem.jpg";
import goaCandleLightImg from "@/assets/goa_candle_light_dinner.png";
import goaResortRoomImg from "@/assets/goa_resort_room.png";
import goaSeafoodImg from "@/assets/goa_seafood_platter.png";
import goaResortPoolImg from "@/assets/goa_resort_pool.png";

const GoaDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Cavelossim",
            subtitle: "Serene Shores",
            image: cavelossimImg,
            icon: Umbrella,
            description: "Known for its contrasting black lava rocks and white sand, Cavelossim offers a quiet retreat. Enjoy dolphin watching, clean beaches, and luxury resorts that define relaxation.",
            quote: "Where the river meets the sea, tranquility begins.",
            color: "from-yellow-400 to-orange-500"
        },
        {
            title: "Agonda",
            subtitle: "The Silent Beach",
            image: agondaImg,
            icon: Sun,
            description: "A pristine stretch of white sand where turtles nest and silence reigns. Agonda is perfect for those seeking solitude, yoga, and a break from the party scene.",
            quote: "Silence is the best music for the soul.",
            color: "from-blue-400 to-teal-500"
        },
        {
            title: "Palolem",
            subtitle: "Paradise Found",
            image: palolemImg,
            icon: Waves,
            description: "Famous for its crescent-shaped bay and calm waters. Palolem offers the perfect mix of relaxation and gentle activity with its colorful beach huts and boat trips.",
            quote: "Life is simple: Eat, Sleep, Beach, Repeat.",
            color: "from-pink-400 to-rose-600"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-950 to-purple-950 text-white font-sans selection:bg-rose-500 selection:text-white">
            <Navbar />

            {/* Ambient Romantic Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-600/20 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>
            </div>

            <main className="relative min-h-screen w-full overflow-x-hidden">
                {/* Background Slideshow */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                    </div>
                ))}

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">

                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-24 left-4 sm:left-8 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-all group z-50"
                    >
                        <ArrowLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                <span className="animate-pulse w-2 h-2 rounded-full bg-yellow-400"></span>
                                <span className="text-sm font-medium tracking-wider uppercase text-yellow-400">
                                    Discover Goa
                                </span>
                            </div>

                            <h1
                                className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-4 py-2 leading-normal"
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                            >
                                {slides[activeSlide].title}
                            </h1>

                            <h2 className={`text-3xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r ${slides[activeSlide].color}`}>
                                {slides[activeSlide].subtitle}
                            </h2>

                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                                {slides[activeSlide].description}
                            </p>

                            <div className="bg-white/5 border-l-4 border-yellow-400 p-6 rounded-r-xl backdrop-blur-md">
                                <Quote className="w-8 h-8 text-yellow-400 mb-2 opacity-50" />
                                <p className="text-xl italic text-gray-200 font-serif">
                                    "{slides[activeSlide].quote}"
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                {slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveSlide(idx)}
                                        className={`h-1 transition-all duration-300 rounded-full ${activeSlide === idx ? "w-12 bg-yellow-400" : "w-4 bg-white/30 hover:bg-white/50"}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => navigate(`/booking?package=Goa%20-%20${slides[activeSlide].title}`)}
                                className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-lg uppercase tracking-widest"
                            >
                                Book This Beach
                            </button>
                        </div>

                        {/* Image Card */}
                        <div className="hidden lg:block relative h-[600px] w-full animate-in slide-in-from-right duration-700 fade-in">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-[3rem] transform rotate-6 blur-xl"></div>
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={slides[activeSlide].image}
                                    alt={slides[activeSlide].title}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    {(() => {
                                        const ActiveIcon = slides[activeSlide].icon;
                                        return <ActiveIcon className="w-10 h-10 text-white" />;
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SCROLL DOWN INDICATOR */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                    </div>
                </div>
            </main>

            {/* EXPERIENCE SECTION */}
            <section className="py-24 bg-gradient-to-b from-transparent to-slate-950/80 px-4 sm:px-6 lg:px-8 relative z-20 backdrop-blur-sm">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500" style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Experience Luxury
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT COLUMN: AMENITIES INFO */}
                        <div className="space-y-12">

                            {/* CANDLE LIGHT DINNER */}
                            <div
                                onClick={() => navigate('/booking?package=Goa%20Candle%20Light%20Dinner')}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-pointer"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-pink-500/20 text-pink-400 rounded-xl group-hover:bg-pink-500 group-hover:text-white transition-all">
                                        <Heart className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-pink-200">Romantic Candle Light Dinner</h3>
                                </div>
                                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                                    A dreamy setup on the white sands of Goa under the stars. We create a magical ambiance with balloons, lanterns, and rose petals, perfect for celebrating love.
                                </p>
                                <div className="h-64 w-full rounded-xl overflow-hidden mb-4 border border-white/10">
                                    <img src={goaCandleLightImg} alt="Candle Light Dinner" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500"></div> Private Beach Setup</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500"></div> Customized Menu</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500"></div> Personal Butler Service</li>
                                </ul>
                            </div>

                            {/* FOOD & CUISINE */}
                            <div
                                onClick={() => navigate('/booking?package=Goa%20Coastal%20Delicacies')}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-pointer"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                                        <Utensils className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-orange-200">Coastal Delicacies</h3>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <p className="text-gray-300 font-light leading-relaxed mb-4">
                                            Savor the authentic taste of Goa with our fresh seafood platters. From spicy Vindaloo to grilled lobsters, our chefs prepare a feast for your senses.
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">Veg Options</span>
                                            <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full border border-red-500/20">Fresh Seafood</span>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                                        <img src={goaSeafoodImg} alt="Seafood" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT COLUMN: STAYS */}
                        <div className="space-y-12">

                            {/* RESORT & POOL */}
                            <div
                                onClick={() => navigate('/booking?package=Goa%20Premium%20Resort')}
                                className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10 cursor-pointer"
                            >
                                <img
                                    src={goaResortPoolImg}
                                    alt="Luxury Pool Resort"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-4 py-1 bg-yellow-500 text-black font-bold text-xs rounded-full uppercase tracking-wider">Premium Resort</span>
                                        <div className="flex text-yellow-500">
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2">Beachside Luxury</h3>
                                    <p className="text-gray-300 font-light">
                                        Stay in premium resorts with infinity pools overlooking the ocean. Experience world-class hospitality tailored for couples and families.
                                    </p>
                                </div>
                            </div>

                            {/* ROOMS */}
                            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-1 overflow-hidden">
                                <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                                    <div className="p-6 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-4 text-blue-400">
                                            <Bed className="w-6 h-6" />
                                            <h3 className="text-xl font-bold">Sea View Suites</h3>
                                        </div>
                                        <p className="text-gray-400 text-sm mb-6">
                                            Wake up to the sound of waves. Our rooms offer panoramic sea views, modern amenities, and cozy interiors for a perfect stay.
                                        </p>
                                        <ul className="space-y-2 text-xs text-gray-500 mb-6">
                                            <li className="flex items-center gap-2"><Wifi className="w-3 h-3" /> High-Speed Wifi</li>
                                            <li className="flex items-center gap-2"><Wind className="w-3 h-3" /> Air Conditioned</li>
                                            <li className="flex items-center gap-2"><Sun className="w-3 h-3" /> Private Balcony</li>
                                        </ul>
                                        <button onClick={() => navigate('/booking?package=Goa%20Premium%20Stay')} className="text-blue-400 text-sm font-bold hover:text-white transition-colors flex items-center gap-1 group-btn">
                                            Book Room <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-btn-hover:translate-x-1" />
                                        </button>
                                    </div>
                                    <div className="h-64 sm:h-auto relative">
                                        <img src={goaResortRoomImg} alt="Resort Room" className="absolute inset-0 w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="p-8 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-3xl border border-yellow-500/20 text-center backdrop-blur-md">
                                <h3 className="text-2xl font-bold mb-4 text-yellow-100">Ready for a Romantic Getaway?</h3>
                                <p className="text-gray-300 mb-6 font-light">Book your Goa package today and create unforgettable memories.</p>
                                <button
                                    onClick={() => navigate('/booking?package=Goa%20Romantic%20Getaway')}
                                    className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-lg uppercase tracking-widest text-sm"
                                >
                                    Plan My Trip
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GoaDetails;
