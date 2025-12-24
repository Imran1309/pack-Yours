import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

// Devotional Image Assets
import keralatempleImg from "@/assets/keralatemple.jpg";
import kashmirTempleImg from "@/assets/kashmir_temple.png";
import tamilNaduTempleImg from "@/assets/tamilnadu_temple.jpg";
import apTempleImg from "@/assets/ap_tirumala.png";

import templeDrumsBg from "@/assets/temple_drums_bg.png";

const TemplePackages = () => {
    const navigate = useNavigate();

    const templeDestinations = [
        {
            name: "Kerala",
            image: keralatempleImg,
            description: "Padmanabhaswamy & Sabarimala",
            route: "/destinations/kerala-temple"
        },
        {
            name: "Tamil Nadu",
            image: tamilNaduTempleImg,
            description: "Meenakshi Temple & Rameswaram",
            route: "/destinations/tamilnadu-temple"
        },
        {
            name: "Andhra Pradesh",
            image: apTempleImg,
            description: "Tirupati Balaji & Srisailam",
            route: "/destinations/andhra-temple"
        },
        {
            name: "Kashmir",
            image: kashmirTempleImg,
            description: "Amarnath & Vaishno Devi",
            route: "/destinations/kashmir-temple"
        },
        {
            name: "Punjab",
            image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80",
            description: "Golden Temple & Wagah Border",
            route: "/destinations/punjab-temple"
        }
    ];

    return (
        <div className="min-h-screen bg-amber-950 text-white font-sans selection:bg-orange-500 selection:text-white relative">
            <Navbar />

            {/* Folk Drums Background Texture */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <img src={templeDrumsBg} alt="Background Pattern" className="w-full h-full object-cover" />
            </div>

            <main className="pt-36 pb-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
                {/* Ambient Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[150px] animate-pulse duration-7000"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-yellow-600/10 rounded-full blur-[150px] animate-pulse delay-1000 duration-10000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/img.png')] opacity-30 animate-[spin_60s_linear_infinite]"></div>
                </div>

                <div className="relative z-10 container mx-auto">
                    {/* Header */}
                    <div className="flex items-center gap-6 mb-12">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-all group"
                        >
                            <ArrowLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 drop-shadow-lg py-2 leading-normal" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Divine Journeys
                            </h1>
                            <p className="text-xl text-gray-400 mt-2 font-light tracking-wider">Sacred Pilgrimages & Spiritual Retreats</p>
                        </div>
                    </div>

                    {/* Destinations Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {templeDestinations.map((dest) => (
                            <div
                                key={dest.name}
                                onClick={() => navigate(dest.route)}
                                className="group relative h-[450px] rounded-[1.5rem] overflow-hidden cursor-pointer border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                            >
                                {/* Background Image */}
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-500">
                                        <MapPin className="w-7 h-7 text-white" />
                                    </div>

                                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-200 group-hover:to-yellow-200 transition-all">
                                        {dest.name}
                                    </h2>

                                    <p className="text-gray-300 text-lg mb-8 font-light line-clamp-2">
                                        {dest.description}
                                    </p>

                                    <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
                                        <span className="text-orange-400 group-hover:text-white transition-colors">
                                            View Details
                                        </span>
                                        <div className="h-[2px] w-12 bg-orange-500 group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TemplePackages;
