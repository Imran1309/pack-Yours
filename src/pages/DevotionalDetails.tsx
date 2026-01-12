import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Star, Landmark, Users, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import diviImg from "@/assets/divi.jpg";
import familyImg from "@/assets/familytemple.jpg";
import seasonalImg from "@/assets/seasonal_yatra.jpg";
import tanjoreImg from "@/assets/tanjore_temple_new.jpg";
import nagoreImg from "@/assets/nagore_dargah.jpg";
import ervadiImg from "@/assets/ervadi_dargah.png";
import velankanniImg from "@/assets/velankanni_church.jpg";

const DevotionalDetails = () => {
    const navigate = useNavigate();

    const categories = [
        {
            id: "temple",
            title: "Divine Temples",
            description: "Spiritual journeys to India's sacred and historic temples.",
            icon: Landmark,
            color: "from-orange-500 to-red-600",
            image: diviImg
        },
        {
            id: "family",
            title: "Family Pilgrimage",
            description: "Blessed vacations for the entire family.",
            icon: Users,
            color: "from-blue-400 to-indigo-600",
            image: familyImg
        },
        {
            id: "seasonal",
            title: "Seasonal Yatra",
            description: "Pilgrimages perfect for the current auspicious season.",
            icon: Sun,
            color: "from-green-400 to-emerald-600",
            image: seasonalImg
        },

    ];

    const [currentBg, setCurrentBg] = useState(0);

    const backgrounds = [
        tanjoreImg, // Tanjore
        nagoreImg, // Nagore
        ervadiImg, // Ervadi
        velankanniImg, // Velankanni
        // "Nano Banana" image was requested but not found. Placeholder if needed.
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white relative">
            <Navbar />

            {/* Background Slideshow */}
            <div className="fixed inset-0 z-0">
                {backgrounds.map((bg, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                        style={{
                            backgroundImage: `url(${bg})`,
                            opacity: currentBg === index ? 1 : 0
                        }}
                    />
                ))}
                <div className="absolute inset-0 bg-black/70"></div> {/* Dark Overlay */}
            </div>

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="flex items-center gap-6 mb-16">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-all group"
                        >
                            <ArrowLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 drop-shadow-lg py-2 leading-normal" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Devotional Journeys
                            </h1>
                            <p className="text-xl text-gray-400 mt-2 font-light tracking-wider">Experience peace and divinity</p>
                        </div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {categories.map((cat, index) => (
                            <div
                                key={cat.id}
                                onClick={() => {
                                    if (cat.id === 'popular') {
                                        navigate(`/destinations?type=Most%20Popular&category=Devotional%20Trip`);
                                    } else if (cat.id === 'temple') {
                                        navigate(`/temple-packages`);
                                    } else if (cat.id === 'seasonal') {
                                        navigate(`/destinations?type=Seasonal&category=Devotional%20Trip`);
                                    } else if (cat.id === 'family') {
                                        navigate(`/destinations?type=Family&category=Devotional%20Trip`);
                                    } else {
                                        navigate(`/booking?package=${encodeURIComponent("Devotional - " + cat.title)}`);
                                    }
                                }}
                                className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                            >
                                {/* Background Image */}
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className={`absolute inset-0 w-full h-full object-cover ${cat.id === 'temple' ? 'object-left-top' : 'object-top'} transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0`}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <cat.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h2 className="text-4xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                        {cat.title}
                                    </h2>

                                    <p className="text-gray-300 text-lg mb-8 font-light line-clamp-2 group-hover:text-white transition-colors">
                                        {cat.description}
                                    </p>

                                    <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${cat.color}`}>
                                            Explore Now
                                        </span>
                                        <div className={`h-[2px] w-12 bg-gradient-to-r ${cat.color} group-hover:w-24 transition-all duration-500`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main >

            <Footer />
        </div >
    );
};

export default DevotionalDetails;
