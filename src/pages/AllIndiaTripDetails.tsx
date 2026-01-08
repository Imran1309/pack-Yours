import React, { useEffect, useState } from "react";
import { ArrowLeft, Star, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Assets
import keralaImg from "../assets/kerala_houseboat_hero_1765904333251.png";
import kodaikanalImg from "../assets/kodaikanal_guna_cave_1765969425172.png";
import mumbaiImg from "../assets/mumbai_gateway_full_view_1765970435408.png";
import ramojiImg from "../assets/ramoji_film_city_entrance_1765973648093.png";
import goaImg from "../assets/goa_beach_party_night_1765976164714.png";
import manaliImg from "../assets/manali_snow_mountains_1765985791682.png";
import ootyImg from "../assets/ooty_card_cover.jpg";
import indiaCover from "../assets/india_map_golden_premium_1766046818021.png"; // Fallback map or reuse specific map
import triangleBg from "../assets/triangle bg.mp4";
import busImg from "../assets/luxury_tourist_bus_front_transparent.png";
import tnImg from "../assets/tn_murugan.png";
import kashmirImg from "../assets/kashmir_dal_lake.png";
import planTripImg from "../assets/india_map_golden_premium_1766046818021.png";

const AllIndiaTripDetails = () => {
    const navigate = useNavigate();

    const [currentLocation, setCurrentLocation] = useState(0);
    const [isMoving, setIsMoving] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [distance, setDistance] = useState("0 km");

    const locations = [
        { name: "Kerala", x: 30, y: 85 },
        { name: "Tamil Nadu", x: 40, y: 80 },
        { name: "Goa", x: 25, y: 65 },
        { name: "Mumbai", x: 20, y: 55 },
        { name: "Hyderabad", x: 45, y: 60 },
        { name: "Kolkata", x: 75, y: 50 },
        { name: "Delhi", x: 35, y: 30 },
        { name: "Manali", x: 38, y: 20 },
        { name: "Kashmir", x: 32, y: 10 },
        { name: "North East", x: 80, y: 35 },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);

        // Animation Loop
        const interval = setInterval(() => {
            // Zoom In & Start Moving
            setZoomLevel(1.5);
            setIsMoving(true);
            setDistance(`${Math.floor(Math.random() * 200 + 100)} km`); // Simulate distance

            setTimeout(() => {
                // Move to next location
                setCurrentLocation((prev) => (prev + 1) % locations.length);

                // Stop & Zoom Out slightly
                setTimeout(() => {
                    setIsMoving(false);
                    setZoomLevel(1.2);
                }, 2000); // Travel duration matching CSS

            }, 500); // Delay before moving starts

        }, 4500); // Total cycle time

        return () => clearInterval(interval);
    }, []);

    const originalPackages = [
        {
            id: 1,
            name: "Kerala",
            sub: "God's Own Country",
            image: keralaImg,
            route: "/college-iv/kerala"
        },
        {
            id: 2,
            name: "Goa",
            sub: "Party Paradise",
            image: goaImg,
            route: "/college-iv/goa"
        },
        {
            id: 3,
            name: "Manali",
            sub: "Snow & Adventure",
            image: manaliImg,
            route: "/college-iv/manali"
        },
        {
            id: 4,
            name: "Ooty",
            sub: "Queen of Hills",
            image: ootyImg,
            route: "/destinations/ooty"
        },
        {
            id: 5,
            name: "Hyderabad",
            sub: "City of Pearls",
            image: ramojiImg,
            route: "/college-iv/hyderabad"
        },
        {
            id: 6,
            name: "Mumbai",
            sub: "City of Dreams",
            image: mumbaiImg,
            route: "/college-iv/mumbai"
        },
        {
            id: 7,
            name: "Kodaikanal",
            sub: "Princess of Hills",
            image: kodaikanalImg,
            route: "/college-iv/kodaikanal"
        },
        {
            id: 8,
            name: "Bangalore",
            sub: "Silicon Valley",
            image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800",
            route: "/college-iv/bangalore"
        }
    ];

    const additionalPackages = [
        {
            id: 9,
            name: "Tamil Nadu",
            sub: "Land of Temples",
            image: tnImg,
            route: "/destinations/tamilnadu-temple"
        },
        {
            id: 10,
            name: "Kashmir",
            sub: "Paradise on Earth",
            image: kashmirImg,
            route: "/destinations/kashmir"
        },
        {
            id: 11,
            name: "Make Your Own Plan",
            sub: "Design Your Dream Journey",
            image: planTripImg,
            route: "/make-own-plan"
        }
    ];

    const allPackages = [...originalPackages, ...additionalPackages];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500 selection:text-white pb-20">
            <Navbar />

            <div className="relative h-screen w-full overflow-hidden bg-black">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={triangleBg} type="video/mp4" />
                    </video>
                </div>

                {/* Left Back Button (Yellow Square) */}
                <div className="absolute top-28 left-6 z-50">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="bg-yellow-400 hover:bg-yellow-500 rounded-md w-12 h-12 shadow-lg opacity-100"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft className="w-8 h-8 text-red-600" />
                    </Button>
                </div>

                {/* Optional Gradient Overlay for Title Visibility */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Title Content */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-1 pt-41">
                    <h1 className="text-4xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-200 to-green-700 drop-shadow-3xl filter brightness-100"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        All India Trip
                    </h1>
                    <p className="text-2xl md:text-3xl font-semibold text-amber-400 tracking-widest uppercase drop-shadow-md"
                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                        Discover Every Wonder of India
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 -mt-20 relative z-30">
                {/* Special Recommendation Card */}
                <div className="bg-gradient-to-r from-amber-700 to-yellow-600 rounded-3xl p-1 shadow-2xl mb-16 transform hover:scale-[1.01] transition-all cursor-pointer"
                    onClick={() => navigate('/special-trip-details')}>
                    <div className="bg-black/90 rounded-[1.4rem] p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-left">
                                <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-2 block">Premium Experience</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">India Golden Triangle</h2>
                                <p className="text-gray-300 text-lg max-w-xl">
                                    Experience the royal heritage of Delhi, Agra, and Jaipur. The ultimate cultural journey through the heart of India.
                                </p>
                            </div>
                            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-6 px-8 rounded-full text-lg shadow-lg flex items-center gap-2">
                                For More Details <ExternalLink className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {allPackages.map((pkg) => (
                        <div key={pkg.id}
                            className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-white/10"
                            onClick={() => navigate(pkg.route)}>
                            <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{pkg.name}</h3>
                                <div className="h-1 w-12 bg-rose-500 rounded-full mb-3 group-hover:w-full transition-all duration-500"></div>
                                <p className="text-sm text-gray-300">{pkg.sub}</p>
                            </div>

                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                <ArrowLeft className="w-5 h-5 text-white rotate-180" />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AllIndiaTripDetails;
