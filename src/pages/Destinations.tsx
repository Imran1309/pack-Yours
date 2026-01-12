import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

import munnarImg from "@/assets/munnar.jpg";
import kodaikanalImg from "@/assets/kodaikanal.jpg";
import ootyImg from "@/assets/ooty.jpg";
import coorgImg from "@/assets/coorg_coffee_hills.png";
import andaImg from "@/assets/anda.png";
import lakshImg from "@/assets/laksh.png";
import darjeelingImg from "@/assets/darjelling.png";
import kashmirImg from "@/assets/kashmir_dal_lake.png";
import manaliImg from "@/assets/manali_snow_mountains.png";
import sikkimImg from "@/assets/sikkim.jpg";
import udaipurImg from "@/assets/udaipur.png";
import keralatempleImg from "@/assets/keralatemple.jpg";
import kashmirTempleImg from "@/assets/kashmir_temple.png";
import tamilNaduTempleImg from "@/assets/tamilnadu_temple.jpg";
import templeDrumsBg from "@/assets/temple_drums_bg.png";
import mumbaiHeaderImg from "@/assets/haajiali.png";
import palaniImg from "@/assets/palani_temple.png";
import thiruvannamalaiImg from "@/assets/thiruvannamalai_temple.png";
import tiruchendurImg from "@/assets/tiruchendur_temple.png";
import tirupatiImg from "@/assets/tirupati_temple.png";
import agraImg from "@/assets/agra_taj_mahal_romantic_1766064172254.png";

const Destinations = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type") || "Destinations";
    const packageCategory = searchParams.get("category") || "Package";
    const isDevotional = packageCategory === "Devotional Trip" || type === "Family";

    const allDestinations = [
        {
            name: "Kerala",
            image: packageCategory === "Devotional Trip" ? keralatempleImg : munnarImg,
            description: "God's Own Country - Munnar Tea Gardens",
            tags: ["Most Popular", "Chill Climate", "Temples"]
        },
        {
            name: "Goa",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
            description: "Beaches, Sunsets & Nightlife",
            tags: ["Most Popular"]
        },
        {
            name: "Kodaikanal",
            image: kodaikanalImg,
            description: "Princess of Hill Stations",
            tags: ["Most Popular", "Chill Climate"]
        },
        {
            name: "Ooty",
            image: ootyImg,
            description: "Queen of Hill Stations",
            tags: ["Most Popular", "Chill Climate"]
        },
        {
            name: "Coorg",
            image: coorgImg,
            description: "Scotland of India - Coffee & Hills",
            tags: ["Romantic Places", "Chill Climate"]
        },
        {
            name: "Darjeeling",
            image: darjeelingImg,
            description: "Queen of the Hills - Tea & Trains",
            tags: ["Romantic Places", "Chill Climate"]
        },
        {
            name: "Andaman",
            image: andaImg,
            description: "Emerald Blue Waters & White Sands",
            tags: ["Romantic Places"]
        },
        {
            name: "Lakshadweep",
            image: lakshImg,
            description: "Tropical Coral Islands Paradise",
            tags: ["Romantic Places"]
        },
        {
            name: "Kashmir",
            image: packageCategory === "Devotional Trip" ? kashmirTempleImg : kashmirImg,
            description: "Paradise on Earth - Dal Lake & Snow",
            tags: ["Chill Climate", "Romantic Places", "Family", "Temples"]
        },
        {
            name: "Manali",
            image: manaliImg,
            description: "Snowy Mountains & Adventure",
            tags: ["Chill Climate", "Most Popular"]
        },
        {
            name: "Sikkim",
            image: sikkimImg,
            description: "Organic State & Himalayan Views",
            tags: ["Chill Climate"]
        },
        {
            name: "Udaipur",
            image: udaipurImg,
            description: "City of Lakes & Palaces",
            tags: ["Chill Climate", "Romantic Places"]
        },
        {
            name: "Tamil Nadu",
            image: tamilNaduTempleImg,
            description: "Land of Temples - Madurai & Rameswaram",
            tags: ["Temples", "Family"]
        },
        {
            name: "Punjab",
            image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80",
            description: "Home of the Golden Temple",
            tags: ["Temples", "Family"]
        },
        {
            name: "Andhra Pradesh",
            image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=800&q=80",
            description: "Spiritual Hub - Tirupati Balaji",
            tags: ["Temples", "Family"]
        },
        {
            name: "Agra",
            image: agraImg,
            description: "Symbol of Love - The Taj Mahal",
            tags: ["Most Popular", "Romantic Places"]
        },
        {
            name: "Mumbai",
            image: mumbaiHeaderImg,
            description: "City of Dreams - Siddhivinayak & Haji Ali",
            tags: ["Family", "Temples"]
        },
        // Seasonal Pilgrimage Destinations
        {
            name: "Palani",
            image: palaniImg,
            description: "Lord Murugan's Hill Temple",
            tags: ["Seasonal"]
        },
        {
            name: "Thiruvannamalai",
            image: thiruvannamalaiImg,
            description: "Arunachaleswarar Temple",
            tags: ["Seasonal"]
        },
        {
            name: "Tirupati",
            image: tirupatiImg,
            description: "Tirumala Venkateswara Temple",
            tags: ["Seasonal"]
        },
        {
            name: "Sabarimala",
            image: keralatempleImg,
            description: "Ayyappa Swamy Temple",
            tags: ["Seasonal"]
        },
        {
            name: "Tiruchendur",
            image: tiruchendurImg,
            description: "Seashore Murugan Temple",
            tags: ["Seasonal"]
        }
    ];

    const destinations = allDestinations.filter(dest =>
        type === "Destinations" || (dest.tags && dest.tags.includes(type))
    );

    return (
        <div className={`min-h-screen ${isDevotional ? "bg-amber-950" : "bg-black"} text-white font-sans selection:bg-pink-500 selection:text-white`}>
            <Navbar />

            <main className="pt-36 pb-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Ambient Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>

                {isDevotional && (
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        {/* Smoke/Fog Effect */}
                        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-gray-400/10 rounded-full blur-[150px] animate-pulse duration-7000"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-orange-200/5 rounded-full blur-[150px] animate-pulse delay-1000 duration-10000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/img.png')] opacity-30 animate-[spin_60s_linear_infinite]"></div>
                    </div>
                )}

                {/* Smoke Intro Overlay Removed */}

                {(type === "Family" || isDevotional) && (
                    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                        <img src={templeDrumsBg} alt="Background Pattern" className="w-full h-full object-cover" />
                    </div>
                )}

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
                            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-lg py-2 leading-normal" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                {type}
                            </h1>
                            <p className="text-xl text-gray-400 mt-2 font-light tracking-wider">Explore the best of {packageCategory}</p>
                        </div>
                    </div>

                    {/* Destinations Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {destinations.map((dest, index) => (
                            <div
                                key={dest.name}
                                onClick={() => {
                                    if (dest.name === "Kerala") {
                                        if (type === "Family" || packageCategory === "Devotional Trip") {
                                            navigate("/destinations/kerala-temple");
                                        } else {
                                            navigate("/destinations/kerala");
                                        }
                                    } else if (dest.name === "Goa") {
                                        navigate("/destinations/goa");
                                    } else if (dest.name === "Kodaikanal") {
                                        navigate("/destinations/kodaikanal");
                                    } else if (dest.name === "Ooty") {
                                        navigate("/destinations/ooty");
                                    } else if (dest.name === "Coorg") {
                                        navigate("/destinations/coorg");
                                    } else if (dest.name === "Andaman") {
                                        navigate("/destinations/andaman");
                                    } else if (dest.name === "Lakshadweep") {
                                        navigate("/destinations/lakshadweep");
                                    } else if (dest.name === "Darjeeling") {
                                        navigate("/destinations/darjeeling");
                                    } else if (dest.name === "Kashmir") {
                                        if (type === "Family" || packageCategory === "Devotional Trip") {
                                            navigate("/destinations/kashmir-temple");
                                        } else {
                                            navigate("/destinations/kashmir");
                                        }
                                    } else if (dest.name === "Manali") {
                                        navigate("/destinations/manali");
                                    } else if (dest.name === "Udaipur") {
                                        navigate("/destinations/udaipur");
                                    } else if (dest.name === "Sikkim") {
                                        navigate("/destinations/sikkim");
                                    } else if (dest.name === "Agra") {
                                        navigate("/destinations/agra");
                                    } else if (dest.name === "Tamil Nadu") {
                                        console.log("Navigating to Tamil Nadu explore page");
                                        navigate("/destinations/tamil-nadu");
                                    } else if (dest.name === "Andhra Pradesh") {
                                        navigate("/destinations/andhra-temple");
                                    } else if (dest.name === "Punjab") {
                                        navigate("/destinations/punjab-temple");
                                    } else if (dest.name === "Mumbai") {
                                        navigate("/destinations/mumbai-temple");
                                    } else if (dest.name === "Palani") {
                                        navigate("/destinations/palani");
                                    } else if (dest.name === "Thiruvannamalai") {
                                        navigate("/destinations/thiruvannamalai");
                                    } else if (dest.name === "Tiruchendur") {
                                        navigate("/destinations/thiruchendur");
                                    } else if (dest.name === "Tirupati") {
                                        navigate("/destinations/tirupati");
                                    } else if (dest.name === "Sabarimala") {
                                        navigate("/destinations/sabarimala");
                                    } else {
                                        navigate(`/booking?package=${encodeURIComponent(packageCategory + " - " + dest.name)}`);
                                    }
                                }}
                                className="group relative h-[400px] rounded-[1.5rem] overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                            >
                                {/* Background Image */}
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-all duration-500">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>

                                    <h2 className="text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all">
                                        {dest.name}
                                    </h2>

                                    <p className="text-gray-300 text-sm mb-6 font-light">
                                        {dest.description}
                                    </p>

                                    <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase mt-2">
                                        <span className="text-green-400 group-hover:text-white transition-colors">
                                            Explore
                                        </span>
                                        <div className="h-[2px] w-12 bg-green-500 group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main >


        </div >
    );
};

export default Destinations;
