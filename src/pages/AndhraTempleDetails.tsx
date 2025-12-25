import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Quote, Sparkles, Mountain, Crown, Sun, Bed, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Imported Images
import tirumalaImg from "@/assets/ap_tirumala.png";
import srisailamImg from "@/assets/ap_srisailam.png";
import kanakaDurgaImg from "@/assets/ap_kanaka_durga.png";

// New External Assets for Specific Requests
import sImg from "@/assets/s.jpg"; // Simhachalam
import apResortImg from "@/assets/apresorts.jpeg"; // Nature Resort
import apFoodImg from "@/assets/Apfood.jpg"; // Authentic Andhra Thali

const AndhraTempleDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const andhraTempleSlides = [
        {
            title: "Tirumala Venkateswara",
            subtitle: "The Kali Yuga Vaikuntha",
            image: tirumalaImg,
            icon: Crown,
            description: "Visit the richest and most visited holy place in the world. The seven hills of Tirumala are said to represent the seven hoods of Adisesha. Seek the blessings of Lord Venkateswara.",
            quote: "Govinda... Govinda... In Your name, we find our salvation.",
            route: "/booking?package=Tirupati%20Darshan"
        },
        {
            title: "Srisailam Mallikarjuna",
            subtitle: "The Shakti Peetha & Jyotirlinga",
            image: srisailamImg,
            icon: Mountain,
            description: "Located in the Nallamala hills, this is a rare distinct temple where both a Jyotirlinga (Lord Mallikarjuna) and a Shakti Peetha (Goddess Bhramaramba) exist together.",
            quote: "Where Shiva and Shakti unite to bless the cosmos.",
            route: "/booking?package=Srisailam%20Yatra"
        },
        {
            title: "Kanaka Durga",
            subtitle: "The Goddess of Power",
            image: kanakaDurgaImg,
            icon: Sun,
            description: "Perched on the Indrakeeladri hill overlooking the Krishna river in Vijayawada. Goddess Kanaka Durga is the presiding deity who killed the demon Mahishasura.",
            quote: "Bow to the Mother who protects the universe with Her power.",
            route: "/booking?package=Vijayawada%20Temple%20Tour"
        },
        {
            title: "Simhachalam",
            subtitle: "The Lion Lord",
            image: sImg,
            icon: Sparkles,
            description: "Dedicated to Lord Varaha Narasimha, an avatar of Vishnu. The deity is always covered in sandalwood paste (Chandan) and appears in his true form only during Akshaya Tritiya.",
            quote: "The protector of devotees, the Lion who destroys evil.",
            route: "/booking?package=Simhachalam%20Darshan"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % andhraTempleSlides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-amber-950 text-white font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden">

                {/* Background Slideshow */}
                {andhraTempleSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                    >
                        {/* Vignette & Overlay */}
                        <div className="absolute inset-0 bg-amber-950/80 z-10 transition-colors duration-1000"></div>
                        {/* Background Image - Scale effect */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className={`w-full h-full object-cover blur-sm transform transition-transform duration-[10s] ease-linear ${index === activeSlide ? "scale-110" : "scale-100"}`}
                        />
                    </div>
                ))}

                {/* Content Overlay */}
                <div className="relative z-20 pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">

                    {/* Back Button */}
                    <div className="absolute top-28 left-4 lg:left-8 z-50">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all group flex items-center gap-2"
                        >
                            <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Text Content */}
                        <div className="space-y-8 animate-in slide-in-from-left duration-700">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 backdrop-blur-md">
                                <span className="animate-pulse w-2 h-2 rounded-full bg-orange-500"></span>
                                <span className="text-sm font-medium tracking-wider uppercase text-orange-400">
                                    {andhraTempleSlides[activeSlide].subtitle}
                                </span>
                            </div>

                            <h1
                                onClick={() => navigate(andhraTempleSlides[activeSlide].route)}
                                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-100 to-white py-2 leading-tight cursor-pointer hover:text-orange-400 transition-colors"
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                            >
                                {andhraTempleSlides[activeSlide].title}
                            </h1>

                            <div className="bg-amber-900/40 p-6 rounded-2xl border-l-4 border-orange-500 backdrop-blur-sm">
                                <Quote className="w-8 h-8 text-orange-500 mb-4 opacity-50" />
                                <p className="text-xl text-orange-100 italic leading-relaxed font-light">
                                    "{andhraTempleSlides[activeSlide].quote}"
                                </p>
                            </div>

                            <p className="text-lg text-orange-100/80 font-light leading-relaxed">
                                {andhraTempleSlides[activeSlide].description}
                            </p>

                            <button
                                onClick={() => navigate(andhraTempleSlides[activeSlide].route)}
                                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-full hover:from-orange-700 hover:to-red-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest text-sm"
                            >
                                Explore this Temple
                            </button>
                        </div>

                        {/* Right Image Card - Slideshow Style */}
                        <div className="relative h-[500px] w-full lg:w-[90%] mx-auto hidden lg:block animate-in slide-in-from-right duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-[3rem] transform rotate-6 blur-xl"></div>
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => navigate(andhraTempleSlides[activeSlide].route)}>
                                <img
                                    key={activeSlide} // Key forces re-mount for animation
                                    src={andhraTempleSlides[activeSlide].image}
                                    alt={andhraTempleSlides[activeSlide].title}
                                    className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    {(() => {
                                        const ActiveIcon = andhraTempleSlides[activeSlide].icon;
                                        return <ActiveIcon className="w-10 h-10 text-orange-200" />;
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section - Food & Room */}
                <div className="relative z-20 bg-amber-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden border border-orange-500/20 shadow-2xl bg-amber-900/30">
                            {/* Room Card */}
                            <div className="relative h-[400px] group overflow-hidden">
                                <img src={apResortImg} alt="AP Resorts" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-3 mb-2 text-yellow-400"><Bed className="w-6 h-6" /><span className="uppercase tracking-widest text-sm font-bold">AP Tourism Stays</span></div>
                                    <h3 className="text-3xl font-bold text-white mb-2">AP Resorts</h3>
                                    <p className="text-orange-100/80">Experience scenic hilltop stays at APTDC Haritha Resorts in Tirumala, Srisailam, and Araku Valley.</p>
                                </div>
                            </div>
                            {/* Food Card */}
                            <div className="relative h-[400px] group overflow-hidden border-t lg:border-t-0 lg:border-l border-orange-500/20">
                                <img src={apFoodImg} alt="Andhra Food" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-3 mb-2 text-yellow-400"><Utensils className="w-6 h-6" /><span className="uppercase tracking-widest text-sm font-bold">Andhra Food</span></div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Spicy & Satvik</h3>
                                    <p className="text-orange-100/80">Savor specialities like Pesarattu Upma, Gongura Rice, Pulihora, and the world-famous Tirupati Laddu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <div className="relative z-20 bg-amber-950 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="p-8 bg-gradient-to-r from-orange-900/60 to-red-900/60 rounded-3xl border border-orange-500/40 text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-2 text-white">Start Your Spiritual Journey</h3>
                        <p className="text-orange-200/80 mb-6 text-sm">Book your slots now for the upcoming pilgrimage season.</p>
                        <button
                            onClick={() => navigate('/booking?package=Andhra%20Pradesh%20Pilgrimage')}
                            className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest"
                        >
                            Propitiate the Divine
                        </button>
                    </div>
                </div>

            </main >

            <Footer />
        </div >
    );
};

export default AndhraTempleDetails;
