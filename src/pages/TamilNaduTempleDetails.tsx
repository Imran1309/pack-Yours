import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Quote, Sparkles, Building2, Crown, Sun, Landmark, Bed, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Imported Generated Images
import muruganImg from "@/assets/tn_murugan.png";
import tanjoreImg from "@/assets/tn_tanjore.png";
import maduraiImg from "@/assets/tn_madurai.png";
import trichyImg from "@/assets/tn_trichy.png";
import nagoreImg from "@/assets/tn_nagore.png";
import velankanniImg from "@/assets/tn_velankanni.png";
import roomImg from "@/assets/tn_room.png";
import foodImg from "@/assets/tn_food.png";
import rameswaramImg from "@/assets/tn_rameswaram_corridor.png";
import ticketImg from "@/assets/vip_darshan_ticket.png";

const TamilNaduTempleDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const templeSlides = [
        {
            title: "Sri Muthumalai Murugan",
            subtitle: "The Golden Sentinel",
            image: muruganImg,
            icon: Crown,
            description: "Witness the world's tallest Murugan statue, a towering beacon of golden divinity rising from the green hills of Salem. A majestic tribute to the Tamil God.",
            quote: "Stand tall in your faith, and the universe will bow to your devotion.",
            route: "/booking?package=Salem%20Murugan"
        },
        {
            title: "Brihadeeswarar Temple",
            subtitle: "The Granite Marvel",
            image: tanjoreImg,
            icon: Building2,
            description: "A UNESCO World Heritage site, this 1000-year-old architectural wonder stands as a testament to the Chola dynasty's devotion and engineering genius. The shadow of the Vimana never falls on the ground.",
            quote: "Stone by stone, faith was built to last an eternity.",
            route: "/booking?package=Tanjore%20Big%20Temple"
        },
        {
            title: "Meenakshi Amman",
            subtitle: "The City of Temples",
            image: maduraiImg,
            icon: Landmark,
            description: "Walk through the thousand-pillared halls and gaze up at the towering gopurams adorned with thousands of vibrant sculptures in the heart of Madurai.",
            quote: "In the heart of Madurai, the Goddess reigns supreme.",
            route: "/booking?package=Madurai%20Meenakshi"
        },
        {
            title: "Srirangam Temple",
            subtitle: "The Vaikunta on Earth",
            image: trichyImg,
            icon: Sparkles,
            description: "The largest functioning Hindu temple in the world. Lose yourself in the seven enclosures of devotion dedicated to Lord Ranganatha in Trichy.",
            quote: "Lose yourself in the seven enclosures of devotion.",
            route: "/booking?package=Trichy%20Srirangam"
        },
        {
            title: "Ramanathaswamy",
            subtitle: "The Sacred Corridor",
            image: rameswaramImg,
            icon: Sun,
            description: "Home to one of the 12 Jyotirlingas. Walk through the world's longest corridor with over 1200 massive pillars and bathe in the 22 holy wells for salvation.",
            quote: "Walk the longest corridor to find the path to salvation.",
            route: "/booking?package=Rameswaram"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % templeSlides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-stone-950 text-white font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden">
                {/* Background Slideshow */}
                {templeSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                    >
                        {/* Vignette & Overlay */}
                        <div className="absolute inset-0 bg-stone-950/80 z-10 transition-colors duration-1000"></div>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className={`w-full h-full object-cover blur-sm transform transition-transform duration-[10000ms] ease-linear ${index === activeSlide ? "scale-110" : "scale-100"}`}
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
                                    {templeSlides[activeSlide].subtitle}
                                </span>
                            </div>

                            <h1
                                onClick={() => navigate(templeSlides[activeSlide].route)}
                                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-100 to-white py-2 leading-tight cursor-pointer hover:text-orange-400 transition-colors"
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                            >
                                {templeSlides[activeSlide].title}
                            </h1>

                            <div className="bg-stone-900/40 p-6 rounded-2xl border-l-4 border-orange-500 backdrop-blur-sm">
                                <Quote className="w-8 h-8 text-orange-500 mb-4 opacity-50" />
                                <p className="text-xl text-stone-200 italic leading-relaxed font-light">
                                    "{templeSlides[activeSlide].quote}"
                                </p>
                            </div>

                            <p className="text-lg text-stone-300 font-light leading-relaxed">
                                {templeSlides[activeSlide].description}
                            </p>

                            <button
                                onClick={() => navigate(templeSlides[activeSlide].route)}
                                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-full hover:from-orange-700 hover:to-red-700 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest text-sm"
                            >
                                Explore this Temple
                            </button>
                        </div>

                        {/* Right Image Card - Slideshow Style */}
                        <div className="relative h-[500px] w-full lg:w-[90%] mx-auto hidden lg:block animate-in slide-in-from-right duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-[3rem] transform rotate-6 blur-xl"></div>
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => navigate(templeSlides[activeSlide].route)}>
                                <img
                                    key={activeSlide} // Key forces re-mount for animation
                                    src={templeSlides[activeSlide].image}
                                    alt={templeSlides[activeSlide].title}
                                    className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    {(() => {
                                        const ActiveIcon = templeSlides[activeSlide].icon;
                                        return <ActiveIcon className="w-10 h-10 text-orange-200" />;
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* VIP Access Section */}
                <div className="relative z-20 py-12 px-4 sm:px-6 lg:px-8 bg-stone-900 border-t border-stone-800">
                    <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 bg-stone-950/50 p-8 rounded-3xl border border-orange-500/20 shadow-[0_0_30px_rgba(234,88,12,0.1)]">
                        <div className="flex-1 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-200 via-amber-400 to-orange-200" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Avoid the Rush - VIP Darshan
                            </h2>
                            <p className="text-orange-100/80 text-lg leading-relaxed">
                                Experience divinity without the wait. Get exclusive A-Z trip booking with our special VIP Darshan Ticket. Priority access, special pooja, and a seamless spiritual journey await you.
                            </p>
                            <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-700 text-white font-bold rounded-full hover:from-orange-500 hover:to-red-600 transition-all shadow-lg transform hover:scale-105 duration-200 uppercase tracking-widest flex items-center gap-2">
                                <span className="text-xl">🎟️</span> Book VIP Ticket
                            </button>
                        </div>
                        <div className="flex-1 relative group cursor-pointer perspective-1000 flex justify-center">
                            <div className="absolute inset-0 bg-yellow-500/10 blur-3xl animate-pulse"></div>
                            <img
                                src={ticketImg}
                                alt="VIP Darshan Ticket"
                                className="relative w-full max-w-sm mx-auto transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-110 drop-shadow-2xl rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Additional Sections (Harmony & Experience) - Kept accessible below fold */}
                <div className="relative z-20 bg-stone-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-800">
                    <div className="container mx-auto space-y-24">

                        {/* Harmony Section */}
                        <div>
                            <h2 className="text-4xl font-bold text-center text-orange-100 mb-12" style={{ fontFamily: "'Great Vibes', cursive" }}>Harmony in Divinity</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group relative h-[350px] rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-stone-800" onClick={() => navigate('/booking?package=Nagore%20Dargah')}>
                                    <img src={nagoreImg} alt="Nagore Dargah" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-8">
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Nagore Dargah</h3>
                                        <p className="text-stone-300">Symbol of Religious Harmony</p>
                                    </div>
                                </div>
                                <div className="group relative h-[350px] rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-stone-800" onClick={() => navigate('/booking?package=Velankanni%20Church')}>
                                    <img src={velankanniImg} alt="Velankanni Church" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-8">
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Velankanni Basilica</h3>
                                        <p className="text-stone-300">The Lourdes of the East</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden border border-stone-800 shadow-2xl bg-stone-900">
                            <div className="relative h-[400px] group overflow-hidden">
                                <img src={roomImg} alt="Temple View Room" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-3 mb-2 text-orange-400"><Bed className="w-6 h-6" /><span className="uppercase tracking-widest text-sm font-bold">Premium Stays</span></div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Temple View Suites</h3>
                                </div>
                            </div>
                            <div className="relative h-[400px] group overflow-hidden border-t lg:border-t-0 lg:border-l border-stone-800">
                                <img src={foodImg} alt="Traditional Food" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-3 mb-2 text-orange-400"><Utensils className="w-6 h-6" /><span className="uppercase tracking-widest text-sm font-bold">Culinary Heritage</span></div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Traditional Feast</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default TamilNaduTempleDetails;
