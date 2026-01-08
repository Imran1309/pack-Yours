import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Heart, Mountain, Ship, Quote, Landmark, Sun, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import munnarImg from "@/assets/munnar.jpg";
import vagamonImg from "@/assets/vagmon.jpg";
import alleppeyImg from "@/assets/Alleppey.png";
import varkalaImg from "@/assets/kerala_varkala.png";
import kochiImg from "@/assets/kerala_kochi.png";
import seasonalImg from "@/assets/seasonal_yatra.jpg";

const KeralaDetails = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [activeSlide, setActiveSlide] = useState(0);

    const regularSlides = [
        {
            title: "Munnar",
            subtitle: "The Misty Hills",
            image: munnarImg,
            icon: Mountain,
            description: "Munnar is a quiet, network-free sanctuary where silence speaks volumes. It's the perfect place to disconnect from the world and reconnect with each other. Here, couples can truly understand one another, forging a tight bond in the lap of nature.",
            quote: "In the silence of the hills, love finds its loudest voice.",
            color: "from-green-400 to-emerald-600"
        },
        {
            title: "Vagamon",
            subtitle: "Nature's Abode",
            image: vagamonImg,
            icon: Heart,
            description: "Experience stays nestled deep within the nature hills. Vagamon offers a serene escape with pine forests and lush meadows, perfect for a romantic retreat.",
            quote: "Nature is not a place to visit. It is home.",
            color: "from-teal-400 to-green-500"
        },
        {
            title: "Alleppey",
            subtitle: "Backwater Bliss",
            image: alleppeyImg,
            icon: Ship,
            description: "Drift away on a luxurious houseboat. Experience the tranquility of the backwaters with premium stays, delicious local cuisine, and the gentle lull of the waves.",
            quote: "Life is better on a boat.",
            color: "from-blue-400 to-cyan-600"
        },
        {
            title: "Varkala",
            subtitle: "The Cliff Beach",
            image: varkalaImg,
            icon: Sun,
            description: "Where red cliffs meet the Arabian Sea. Witness magical sunsets, explore the unique geological formations, and relax on the golden sands of this coastal paradise.",
            quote: "Let the waves hit your feet, and the sand be your seat.",
            color: "from-orange-400 to-red-600"
        },
        {
            title: "Kochi",
            subtitle: "Queen of Arabian Sea",
            image: kochiImg,
            icon: Building,
            description: "A vibrant city blending history and modernity. Visit the Chinese fishing nets, Fort Kochi, Marine Drive, and shop at Lulu Mall.",
            quote: "Where history meets the horizon.",
            color: "from-cyan-400 to-blue-600"
        }
    ];

    const slides = regularSlides;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Navbar />

            <main className="relative min-h-screen w-full overflow-x-hidden">
                {/* Background Slideshow */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset - 0 transition - opacity duration - 1000 ease -in -out ${index === activeSlide ? "opacity-100" : "opacity-0"
                            } `}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
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
                                <span className="animate-pulse w-2 h-2 rounded-full bg-green-400"></span>
                                <span className="text-sm font-medium tracking-wider uppercase text-green-400">
                                    Discover Kerala
                                </span>
                            </div>

                            <h1
                                className={`text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 cursor-pointer hover:text-green-400 transition-colors underline decoration-green-500/30`}
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                                onClick={() => {
                                    if (slides[activeSlide].title === "Vagamon") {
                                        navigate("/destinations/kerala/vagamon");
                                    } else if (slides[activeSlide].title === "Munnar") {
                                        navigate("/destinations/kerala/munnar");
                                    } else if (slides[activeSlide].title === "Alleppey") {
                                        navigate("/destinations/kerala/alleppey");
                                    } else if (slides[activeSlide].title === "Varkala") {
                                        navigate("/destinations/kerala/varkala");
                                    } else if (slides[activeSlide].title === "Kochi") {
                                        navigate("/destinations/kerala/kochi");
                                    }
                                }}
                            >
                                {slides[activeSlide].title}
                            </h1>

                            <h2 className={`text-3xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r ${slides[activeSlide].color} `}>
                                {slides[activeSlide].subtitle}
                            </h2>

                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                                {slides[activeSlide].description}
                            </p>

                            <div className="bg-white/5 border-l-4 border-green-400 p-6 rounded-r-xl backdrop-blur-md">
                                <Quote className="w-8 h-8 text-green-400 mb-2 opacity-50" />
                                <p className="text-xl italic text-gray-200 font-serif">
                                    "{slides[activeSlide].quote}"
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                {slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveSlide(idx)}
                                        className={`h-1 transition-all duration-300 rounded-full ${activeSlide === idx ? "w-12 bg-green-400" : "w-4 bg-white/30 hover:bg-white/50"} `}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Image Card */}
                        <div className="hidden lg:block relative h-[600px] w-full animate-in slide-in-from-right duration-700 fade-in">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-[3rem] transform rotate-6 blur-xl"></div>
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
            </main>

            <Footer />
        </div>
    );
};

export default KeralaDetails;
