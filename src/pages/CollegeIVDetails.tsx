import React, { useEffect, useState } from "react";
import { ArrowLeft, Star, MapPin, Users, Calendar, Bus, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import collegeIVBg from "../assets/college_iv_bg.png"; // Campfire
import collegeIVPartyBg from "../assets/college_iv_party_bg.png"; // Full Party Scene
import collegeIVBoatBg from "../assets/college_iv_dj_boat_bg.png"; // DJ Boat
import collegeIVDjRoomBg from "../assets/college_iv_dj_room_bg.png"; // DJ Room
import collegeIVBusBg from "../assets/college_iv_bus_party_bg.png"; // Bus Interior
import keralaHouseboatHero from "../assets/kerala_houseboat_hero_1765904333251.png";
import kodaikanalHero from "../assets/kodaikanal_guna_cave_1765969425172.png";
import mumbaiHero from "../assets/mumbai_gateway_full_view_1765970435408.png";
import ramojiImg from "../assets/ramoji_film_city_entrance_1765973648093.png";
import goaPartyImg from "../assets/goa_beach_party_night_1765976164714.png";
import manaliHero from "../assets/manali_snow_mountains_1765985791682.png";
import chikmagalurJeep from "../assets/chikmagalur_jeep_safari.png";
import ootyCardImg from "../assets/ooty_card_cover.jpg";
import bangaloreHero from "../assets/bangalore_palace_architecture_1765904886253.png";
import valparaiImg from "../assets/darj_tea_estate.jpg";
import pondyHero from "../assets/auroville_matrimandir.png"; // Placeholder for Pondy/Mahe, using river/boat theme
import tajMahalImg from "../assets/agra_taj_mahal_romantic_1766064172254.png";

const CollegeIVDetails = () => {
    const navigate = useNavigate();
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % 5);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const popularPackages = [
        {
            id: 1,
            name: "Kerala Ultimate IV",
            duration: "4 Days / 3 Nights",
            image: keralaHouseboatHero,
            features: ["Athirapally Waterfalls", "Houseboat Stay", "Wonderla"],
        },
        {
            id: 2,
            name: "Bangalore Startup",
            duration: "3 Days / 2 Nights",
            image: bangaloreHero,
            features: ["IT Park", "Wonderla", "India's Largest Elephant Camp"],
        },
        {
            id: 3,
            name: "Goa Party",
            duration: "5 Days / 4 Nights",
            image: goaPartyImg,
            features: ["Beach Party", "Cruise Dinner", "Water Sports"],
        },
        {
            id: 8,
            name: "Kodaikanal Escape",
            duration: "3 Days / 2 Nights",
            image: kodaikanalHero,
            features: ["Campfire", "Trekking", "Nature Walk"],
        },
        {
            id: 10,
            name: "Valparai Nature",
            duration: "3 Days / 2 Nights",
            image: valparaiImg,
            features: ["Tea Estates", "Waterfalls", "Hairpin Bends"],
        },
        {
            id: 12,
            name: "Pondicherry French",
            duration: "3 Days / 2 Nights",
            image: pondyHero,
            features: ["Mahe Beach", "French Quarter", "Auroville"],
        },
    ];

    const specialPackages = [
        {
            id: 4,
            name: "Hyderabad Tech",
            duration: "3 Days / 2 Nights",
            image: ramojiImg,
            features: ["Ramoji Film City", "IT Park Visit", "Hussain Sagar"],
        },
        {
            id: 5,
            name: "Manali Adventure",
            duration: "5 Days / 4 Nights",
            image: manaliHero,
            features: ["Snow Trek", "Bonfire", "River Rafting"],
        },
        {
            id: 6,
            name: "Mumbai Marine",
            duration: "3 Days / 2 Nights",
            image: mumbaiHero,
            features: ["Gateway of India", "Marine Drive Ride", "Boating Experience"]
        },
        {
            id: 7,
            name: "Ooty Chill",
            duration: "3 Days / 2 Nights",
            image: ootyCardImg,
            features: ["Tea Factory Visit", "Botanical Garden", "Campfire"],
        },
        {
            id: 9,
            name: "Karnataka Explorer",
            duration: "4 Days / 3 Nights",
            image: chikmagalurJeep,
            features: ["Jeep Safari", "Tiger Safari", "Bangalore Tech"],
        }
    ];

    return (
        <div className="min-h-screen font-sans relative">
            <style>{`
                @keyframes swing {
                    0%, 100% { transform: translateX(-50%) rotate(-25deg); opacity: 0.5; }
                    50% { transform: translateX(-50%) rotate(25deg); opacity: 0.8; }
                }
                .animate-swing-custom {
                    animation: swing 4s ease-in-out infinite;
                }
                @keyframes rgbFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .text-rgb-animated {
                    background: linear-gradient(270deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff);
                    background-size: 400% 400%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    animation: rgbFlow 3s ease infinite;
                }
            `}</style>

            {/* Background Slideshow Container */}
            <div className="fixed inset-0 z-0 bg-black">
                {/* Image 1: Campfire */}
                <div
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBgIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `url(${collegeIVBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Image 2: Party Scene */}
                <div
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBgIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `url(${collegeIVPartyBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Image 3: DJ Boat */}
                <div
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBgIndex === 2 ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `url(${collegeIVBoatBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Image 4: DJ Room */}
                <div
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBgIndex === 3 ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `url(${collegeIVDjRoomBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Image 5: Bus Interior */}
                <div
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBgIndex === 4 ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `url(${collegeIVBusBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />

                {/* Simulated Moving DJ Lights (Overlay on top of both images) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Beam 1 - Blue */}
                    <div className="absolute bottom-0 left-1/4 w-[150px] h-[140vh] origin-bottom animate-swing-custom mix-blend-screen pointer-events-none"
                        style={{
                            background: 'conic-gradient(from 180deg at 50% 100%, transparent 0deg, rgba(59, 130, 246, 0.6) 15deg, transparent 30deg)',
                            animationDelay: '0s'
                        }} />

                    {/* Beam 2 - Purple */}
                    <div className="absolute bottom-0 left-1/2 w-[150px] h-[140vh] origin-bottom animate-swing-custom mix-blend-screen pointer-events-none"
                        style={{
                            background: 'conic-gradient(from 180deg at 50% 100%, transparent 0deg, rgba(168, 85, 247, 0.6) 15deg, transparent 30deg)',
                            animationDelay: '-1.5s',
                            animationDuration: '5s'
                        }} />

                    {/* Beam 3 - Rose */}
                    <div className="absolute bottom-0 right-1/4 w-[150px] h-[140vh] origin-bottom animate-swing-custom mix-blend-screen pointer-events-none"
                        style={{
                            background: 'conic-gradient(from 180deg at 50% 100%, transparent 0deg, rgba(244, 63, 94, 0.6) 15deg, transparent 30deg)',
                            animationDelay: '-0.5s',
                            animationDuration: '4.5s'
                        }} />

                    {/* Beam 4 - Cyan (Center Wide) */}
                    <div className="absolute bottom-[-10%] left-1/2 w-[250px] h-[140vh] origin-bottom animate-swing-custom mix-blend-screen pointer-events-none"
                        style={{
                            background: 'conic-gradient(from 180deg at 50% 100%, transparent 0deg, rgba(6, 182, 212, 0.5) 20deg, transparent 40deg)',
                            animationDelay: '-2s',
                            animationDuration: '6s'
                        }} />
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10">
                {/* Hero Section */}
                <div className="relative h-[60vh] w-full flex flex-col items-center justify-center text-center p-4">
                    {/* Navigation Back Button */}
                    <div className="absolute top-6 left-6 z-20">
                        <div
                            className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all border border-white/20"
                            onClick={() => navigate(-1)}
                        >
                            <ArrowLeft className="text-white w-6 h-6" />
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg tracking-wide text-rgb-animated py-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
                        College Industrial Visits
                    </h1>
                    <p className="text-xl md:text-3xl font-bold max-w-3xl mx-auto drop-shadow-xl text-red-600 tracking-wide uppercase">
                        Learn, Explore, and Create Memories with Your Gang
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 pb-16 space-y-24">

                    {/* Section 1: Most Popular Packages */}
                    <section>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-rose-500/20 rounded-2xl backdrop-blur-sm border border-rose-500/30">
                                <Star className="w-8 h-8 text-rose-400" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white">Most Popular Packages</h2>
                                <p className="text-gray-300">The most loved destinations by students this season</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {popularPackages.map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className="group bg-white/10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-white/10"
                                    onClick={() => {
                                        if (pkg.name === "Kerala Ultimate IV") {
                                            navigate('/college-iv/kerala');
                                        } else if (pkg.name === "Bangalore Startup") {
                                            navigate('/college-iv/bangalore');
                                        } else if (pkg.name === "Kodaikanal Escape") {
                                            navigate('/college-iv/kodaikanal');
                                        } else if (pkg.name === "Goa Party") {
                                            navigate('/college-iv/goa');
                                        } else if (pkg.name === "Valparai Nature") {
                                            navigate('/college-iv/valparai');
                                        } else if (pkg.name === "Pondicherry French") {
                                            navigate('/college-iv/pondicherry');
                                        } else {
                                            navigate('/booking');
                                        }
                                    }}
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={pkg.image}
                                            alt={pkg.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-rose-600 shadow-sm uppercase tracking-wider">
                                            Bestseller
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-rose-400 transition-colors">{pkg.name}</h3>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
                                            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                                <Calendar className="w-4 h-4" />
                                                {pkg.duration}
                                            </div>
                                        </div>

                                        <div className="space-y-2 mb-6">
                                            {pkg.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-gray-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-xl py-6 font-medium text-lg transition-all shadow-lg hover:shadow-xl"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (pkg.name === "Kerala Ultimate IV") {
                                                    navigate('/college-iv/kerala');
                                                } else if (pkg.name === "Bangalore Startup") {
                                                    navigate('/college-iv/bangalore');
                                                } else if (pkg.name === "Kodaikanal Escape") {
                                                    navigate('/college-iv/kodaikanal');
                                                } else if (pkg.name === "Goa Party") {
                                                    navigate('/college-iv/goa');
                                                } else if (pkg.name === "Valparai Nature") {
                                                    navigate('/college-iv/valparai');
                                                } else if (pkg.name === "Pondicherry French") {
                                                    navigate('/college-iv/pondicherry');
                                                } else {
                                                    navigate('/booking');
                                                }
                                            }}
                                        >
                                            Book Now
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 2: Special Packages */}
                    <section>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-purple-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30">
                                <Briefcase className="w-8 h-8 text-purple-400" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white">Special IV Packages</h2>
                                <p className="text-gray-300">Curated industrial visits with top company exposures</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {specialPackages.map((pkg) => (
                                <div key={pkg.id} className="group bg-white/10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-white/10"
                                    onClick={() => {
                                        if (pkg.name === "Ooty Chill") {
                                            navigate('/destinations/ooty');
                                        } else if (pkg.name === "Mumbai Marine") {
                                            navigate('/college-iv/mumbai');
                                        } else if (pkg.name === "Hyderabad Tech") {
                                            navigate('/college-iv/hyderabad');
                                        } else if (pkg.name === "Goa Party") {
                                            navigate('/college-iv/goa');
                                        } else if (pkg.name === "Manali Adventure") {
                                            navigate('/college-iv/manali');
                                        } else if (pkg.name === "Karnataka Explorer") {
                                            navigate('/college-iv/karnataka');
                                        } else {
                                            navigate('/booking');
                                        }
                                    }}
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={pkg.image}
                                            alt={pkg.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
                                            Educational
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{pkg.name}</h3>

                                        <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
                                            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                                <Calendar className="w-4 h-4" />
                                                {pkg.duration}
                                            </div>
                                        </div>

                                        <div className="space-y-2 mb-6">
                                            {pkg.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-gray-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button className="w-full bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-xl py-6 font-medium text-lg transition-all"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (pkg.name === "Ooty Chill") {
                                                    navigate('/destinations/ooty');
                                                } else if (pkg.name === "Mumbai Marine") {
                                                    navigate('/college-iv/mumbai');
                                                } else if (pkg.name === "Hyderabad Tech") {
                                                    navigate('/college-iv/hyderabad');
                                                } else if (pkg.name === "Goa Party") {
                                                    navigate('/college-iv/goa');
                                                } else if (pkg.name === "Manali Adventure") {
                                                    navigate('/college-iv/manali');
                                                } else if (pkg.name === "Karnataka Explorer") {
                                                    navigate('/college-iv/karnataka');
                                                } else {
                                                    navigate('/booking');
                                                }
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Own Idea / Custom */}
                    <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-md shadow-2xl border border-white/10">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-16 gap-10">
                            <div className="text-white max-w-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-blue-200 font-medium tracking-wide">CUSTOMIZE YOUR TRIP</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Have Your Own Idea? <br /> Let's Make It Happen
                                </h2>
                                <p className="text-lg text-blue-100 leading-relaxed mb-8">
                                    Don't see what you're looking for? Design your perfect industrial visit package. Choose destinations, companies, and activities that match your curriculum and fun requirements.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                                        <Bus className="w-4 h-4" />
                                        <span className="text-sm">Flexible Transport</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">Any Destination</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                                        <Star className="w-4 h-4" />
                                        <span className="text-sm">Premium Stay</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl max-w-md w-full">
                                <h3 className="text-2xl font-bold text-white mb-2">Request Custom Quote</h3>
                                <p className="text-gray-300 text-sm mb-6">Tell us your requirements and we'll get back to you with the best plan.</p>

                                <div className="space-y-4">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1"
                                        onClick={() => navigate('/booking')}
                                    >
                                        Start Planning
                                    </Button>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400">Or call us directly at <span className="text-gray-300 font-semibold">+91 98765 43210</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CollegeIVDetails;
