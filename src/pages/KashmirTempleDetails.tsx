import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Quote, Sparkles, Mountain, CloudSnow, Sun, Bed, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Existing Kashmir Assets
import vaishnoDeviImg from "@/assets/kashmir_temple.png";
import resortImg from "@/assets/kashmirroom.png";
import foodImg from "@/assets/kashmirfood.png";

// External Placeholder for Amarnath (Lord Shiva in Snow) & Shankaracharya
import amarnathImg from "@/assets/cave.png";
import shankaracharyaImg from "@/assets/shakaracharya.png";
const KashmirTempleDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const kashmirSlides = [
        {
            title: "Mata Vaishno Devi",
            subtitle: "The Divine Call",
            image: vaishnoDeviImg,
            icon: Sparkles,
            description: "Located in the Trikuta Mountains, the holy shrine of Mata Vaishno Devi attracts millions of devotees. The journey to the Bhawan is a test of faith and endurance.",
            quote: "Jai Mata Di! May Her blessings light your path.",
            route: "/booking?package=Vaishno%20Devi%20Yatra"
        },
        {
            title: "Amarnath Cave",
            subtitle: "The Ice Lingam",
            image: amarnathImg,
            icon: CloudSnow,
            description: "One of the holiest shrines in Hinduism, dedicated to Lord Shiva. The natural ice Lingam waxes and wanes with the phases of the moon.",
            quote: "Har Har Mahadev! Witness the eternal form of Shiva.",
            route: "/booking?package=Amarnath%20Yatra"
        },
        {
            title: "Shankaracharya Temple",
            subtitle: "The Throne of Solomon",
            image: shankaracharyaImg,
            icon: Mountain,
            description: "Perched atop the Shankaracharya Hill in Srinagar, this ancient temple dedicated to Lord Shiva offers a panoramic view of the Dal Lake and the city.",
            quote: "Meditate in the serenity of the Himalayas.",
            route: "/booking?package=Kashmir%20Spiritual%20Tour"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % kashmirSlides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden">

                {/* Background Slideshow */}
                {kashmirSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                    >
                        {/* Vignette & Overlay */}
                        <div className="absolute inset-0 bg-slate-950/60 z-10 transition-colors duration-1000"></div>
                        {/* Background Image - Scale effect */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className={`w-full h-full object-cover blur-sm transform transition-transform [transition-duration:10s] ease-linear ${index === activeSlide ? "scale-110" : "scale-100"}`}
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-md">
                                <span className="animate-pulse w-2 h-2 rounded-full bg-blue-400"></span>
                                <span className="text-sm font-medium tracking-wider uppercase text-blue-200">
                                    {kashmirSlides[activeSlide].subtitle}
                                </span>
                            </div>

                            <h1
                                onClick={() => navigate(kashmirSlides[activeSlide].route)}
                                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-100 py-2 leading-tight cursor-pointer hover:text-blue-300 transition-colors"
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                            >
                                {kashmirSlides[activeSlide].title}
                            </h1>

                            <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-blue-400 backdrop-blur-sm">
                                <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />
                                <p className="text-xl text-blue-100 italic leading-relaxed font-light">
                                    "{kashmirSlides[activeSlide].quote}"
                                </p>
                            </div>

                            <p className="text-lg text-slate-200 font-light leading-relaxed">
                                {kashmirSlides[activeSlide].description}
                            </p>

                            <button
                                onClick={() => navigate(kashmirSlides[activeSlide].route)}
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest text-sm"
                            >
                                Begin Yatra
                            </button>
                        </div>

                        {/* Right Image Card - Slideshow Style */}
                        <div className="relative h-[500px] w-full lg:w-[90%] mx-auto hidden lg:block animate-in slide-in-from-right duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-[3rem] transform rotate-6 blur-xl"></div>
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => navigate(kashmirSlides[activeSlide].route)}>
                                <img
                                    key={activeSlide} // Key forces re-mount for animation
                                    src={kashmirSlides[activeSlide].image}
                                    alt={kashmirSlides[activeSlide].title}
                                    className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
                                    style={{ objectPosition: "center" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    {(() => {
                                        const ActiveIcon = kashmirSlides[activeSlide].icon;
                                        return <ActiveIcon className="w-10 h-10 text-blue-200" />;
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section - Food & Room */}
                <div className="relative z-20 bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden border border-blue-500/20 shadow-2xl bg-slate-900/30">
                            {/* Room Card */}
                            <div className="relative h-[400px] group overflow-hidden">
                                <img src={resortImg} alt="Himalayan Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-3 mb-2 text-blue-400"><Bed className="w-6 h-6" /><span className="uppercase tracking-widest text-sm font-bold">Snow View Stays</span></div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Himalayan Retreats</h3>
                                    <p className="text-blue-100/80">Stay in warm, wooden cottages with breathtaking views of snow-capped peaks and pine forests.</p>
                                </div>
                            </div>
                            {/* Food Card */}
                            <div className="relative h-[400px] group overflow-hidden border-t lg:border-t-0 lg:border-l border-blue-500/20 bg-black">
                                <img src={foodImg} alt="Kashmiri Dum Aloo" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-3 mb-2 text-blue-400"><Utensils className="w-6 h-6" /><span className="uppercase tracking-widest text-sm font-bold">Kashmiri Cuisine</span></div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Vegetarian Wazwan</h3>
                                    <p className="text-blue-100/80">Enjoy authentic Kashmiri Dum Aloo, Nadru (Lotus Stem) Yakhni, and Kahwa by the fireplace.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <div className="relative z-20 bg-slate-950 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="p-8 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 rounded-3xl border border-blue-500/40 text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-2 text-white">Journey to the Abode of Gods</h3>
                        <p className="text-blue-200/80 mb-6 text-sm">Experience divinity amidst the snow. Book your helicopter and yatra packages now.</p>
                        <button
                            onClick={() => navigate('/booking?package=Kashmir%20Pilgrimage')}
                            className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest"
                        >
                            Propitiate the Divine
                        </button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default KashmirTempleDetails;
