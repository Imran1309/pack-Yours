import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Landmark, Users, Calendar, Utensils, Bed, Quote, Sparkles, Mountain, Crown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Imported Images
import sabarimalaViewRoomImg from "@/assets/sabarimala_room.png";
import sadhyaImg from "@/assets/kerala_sadhya.png";
import padmanabhaswamyImg from "@/assets/padmanabhaswamy.png";
import sabarimalaCloseImg from "@/assets/sabarimala_close.png";
import guruvayurImg from "@/assets/guruvayur.png";

const KeralaTempleDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const keralaTempleSlides = [
        {
            title: "Sabarimala",
            subtitle: "The Abode of Ayyappa",
            image: sabarimalaCloseImg,
            icon: Mountain,
            description: "Journey through the Periyar Tiger Reserve to reach the sacred shrine of Lord Ayyappa. Climb the holy 18 steps and chant 'Swamiye Saranam Ayyappa' for spiritual liberation.",
            quote: "Swamiye Saranam Ayyappa - Surrender to the Divine Will.",
            route: "/booking?package=Sabarimala%20Yatra"
        },
        {
            title: "Padmanabhaswamy",
            subtitle: "The Wealthiest Shrine",
            image: padmanabhaswamyImg,
            icon: Crown,
            description: "Witness the grandeur of the world's richest temple in Thiruvananthapuram. Dedicated to Lord Vishnu reclining on Anantha, this architectural marvel is a blend of Kerala and Dravidian styles.",
            quote: "In the infinity of Anantha, find eternal peace.",
            route: "/booking?package=Padmanabhaswamy%20Darshan"
        },
        {
            title: "Guruvayur",
            subtitle: "Bhuloka Vaikunta",
            image: guruvayurImg,
            icon: Sparkles,
            description: "Known as the dwelling of Lord Krishna on Earth. Experience the divine bliss and witness the famous elephant sanctuary nearby. A major pilgrimage destination for weddings and 'Thulabharam'.",
            quote: "Where the Lord of the Universe waits with open arms.",
            route: "/booking?package=Guruvayur%20Darshan"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % keralaTempleSlides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-amber-950 text-white font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden">

                {/* Background Slideshow */}
                {keralaTempleSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                    >
                        {/* Vignette & Overlay */}
                        <div className="absolute inset-0 bg-amber-950/80 z-10 transition-colors duration-1000"></div>
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
                                    {keralaTempleSlides[activeSlide].subtitle}
                                </span>
                            </div>

                            <h1
                                onClick={() => navigate(keralaTempleSlides[activeSlide].route)}
                                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-100 to-white py-2 leading-tight cursor-pointer hover:text-orange-400 transition-colors"
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                            >
                                {keralaTempleSlides[activeSlide].title}
                            </h1>

                            <div className="bg-amber-900/40 p-6 rounded-2xl border-l-4 border-orange-500 backdrop-blur-sm">
                                <Quote className="w-8 h-8 text-orange-500 mb-4 opacity-50" />
                                <p className="text-xl text-orange-100 italic leading-relaxed font-light">
                                    "{keralaTempleSlides[activeSlide].quote}"
                                </p>
                            </div>

                            <p className="text-lg text-orange-100/80 font-light leading-relaxed">
                                {keralaTempleSlides[activeSlide].description}
                            </p>

                            <button
                                onClick={() => navigate(keralaTempleSlides[activeSlide].route)}
                                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-full hover:from-orange-700 hover:to-red-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest text-sm"
                            >
                                Explore this Temple
                            </button>
                        </div>

                        {/* Right Image Card - Slideshow Style */}
                        <div className="relative h-[500px] w-full lg:w-[90%] mx-auto hidden lg:block animate-in slide-in-from-right duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-[3rem] transform rotate-6 blur-xl"></div>
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => navigate(keralaTempleSlides[activeSlide].route)}>
                                <img
                                    key={activeSlide} // Key forces re-mount for animation
                                    src={keralaTempleSlides[activeSlide].image}
                                    alt={keralaTempleSlides[activeSlide].title}
                                    className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    {(() => {
                                        const ActiveIcon = keralaTempleSlides[activeSlide].icon;
                                        return <ActiveIcon className="w-10 h-10 text-orange-200" />;
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Sections (Experience & Booking) */}
                <div className="relative z-20 bg-amber-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20">
                    <div className="container mx-auto space-y-24">

                        {/* Section 2: Accommodation & Food */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Rooms with View */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-orange-200 flex items-center gap-3">
                                    <Bed className="w-8 h-8 text-orange-500" /> Temple View Stays
                                </h2>
                                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg border border-orange-500/20 group">
                                    <img src={sabarimalaViewRoomImg} alt="Room with Temple View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                                        <p className="text-white font-medium">Wake up to the divine darshan of the Golden Roof.</p>
                                    </div>
                                </div>
                                <div className="bg-amber-900/10 p-6 rounded-2xl border border-orange-500/10">
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Sanitised AC/Non-AC Rooms</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Hot Water & 24/7 Service</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Proximity to Pamba & Sannidhanam</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Traditional Food */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-orange-200 flex items-center gap-3">
                                    <Utensils className="w-8 h-8 text-orange-500" /> Divine Feast
                                </h2>
                                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg border border-orange-500/20 group">
                                    <img src={sadhyaImg} alt="Kerala Sadhya" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                                        <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full mb-2 inline-block">Pure Vegetarian</span>
                                        <p className="text-white font-medium">Authentic "Own State" Kerala Food.</p>
                                    </div>
                                </div>
                                <div className="bg-amber-900/10 p-6 rounded-2xl border border-orange-500/10">
                                    <p className="text-gray-300 italic mb-4">"Satvik food prepared with purity and devotion."</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>Traditional Banana Leaf Service</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>Nutritious & Hygienic Meals</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Booking Section */}
                        <div className="p-8 bg-gradient-to-r from-orange-900/60 to-red-900/60 rounded-3xl border border-orange-500/40 text-center max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold mb-2 text-white">Start Your Spiritual Journey</h3>
                            <p className="text-orange-200/80 mb-6 text-sm">Book your slots now for the upcoming pilgrimage season.</p>
                            <button
                                onClick={() => navigate('/booking?package=Sabarimala%20Yatra')}
                                className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest"
                            >
                                Propitiate the Divine
                            </button>
                        </div>

                    </div>
                </div>

            </main>

            <Footer />
        </div >
    );
};

export default KeralaTempleDetails;
