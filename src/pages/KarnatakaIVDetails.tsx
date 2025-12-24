import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flame, Utensils, Bus, Hotel, Music, Castle, Palmtree, UserCheck, MapPin, Waves, Building2, Coffee, CloudFog } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import chikmagalurJeep from "@/assets/chikmagalur_jeep_safari.png";
import bangaloreAnimal from "@/assets/bangalore_tiger_lion_park.png";
import gokarnaImg from "@/assets/gokarna_beach_sunset.png";
import murdeshwarImg from "@/assets/murdeshwar_shiva_statue.png";
import coorgMisty from "@/assets/coorg_misty_plantation_1765904860516.png";
import coorgFood from "@/assets/south_indian_nonveg_feast_1765904961097.png";
import coorgRoom from "@/assets/coorg_cottage.jpg";

const KarnatakaIVDetails = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Coorg",
            subtitle: "Scotland of India",
            image: coorgMisty,
            quote: "Wake up to the aroma of fresh coffee."
        },
        {
            title: "Chikmagalur",
            subtitle: "Jeep Safari & Misty Hills",
            image: chikmagalurJeep,
            quote: "Adventure in the coffee land."
        },
        {
            title: "Bangalore",
            subtitle: "Wild & Tech",
            image: bangaloreAnimal,
            quote: "From tigers to tech parks."
        },
        {
            title: "Gokarna",
            subtitle: "Beach Vibes & Trekking",
            image: gokarnaImg,
            quote: "Where the ocean meets the soul."
        },
        {
            title: "Murdeshwar",
            subtitle: "Divine & Majestic",
            image: murdeshwarImg,
            quote: "Blessings by the Arabian Sea."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500 selection:text-white pb-20">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
                {/* Subtle animated background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>
            </div>

            <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all group border border-white/10"
                >
                    <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Hero / Main Package Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Text Content */}
                    <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in order-2 lg:order-1">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 mb-2 leading-tight"
                                style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Karnataka Explorer
                            </h1>
                            <p className="text-2xl font-light tracking-widest uppercase text-gray-300 border-l-4 border-green-500 pl-4 mt-4">
                                Hills, Beaches & Wildlife
                            </p>
                        </div>

                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            Experience the best of Karnataka! From the misty coffee plantations of Coorg and Chikmagalur to the wild tigers of Bangalore, and extending to the serene beaches of Gokarna and the majestic Murdeshwar.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-green-400">
                                    <Coffee className="w-6 h-6" />
                                    <span className="font-bold text-lg">Coffee Estates</span>
                                </div>
                                <p className="text-sm text-gray-400">Stay amidst lush green plantations in Coorg.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-orange-400">
                                    <Flame className="w-6 h-6" />
                                    <span className="font-bold text-lg">Wildlife Safari</span>
                                </div>
                                <p className="text-sm text-gray-400">Spot Tigers and Lions in Bangalore.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-blue-400">
                                    <Waves className="w-6 h-6" />
                                    <span className="font-bold text-lg">Beach Vibes</span>
                                </div>
                                <p className="text-sm text-gray-400">Relax at Om Beach, Gokarna.</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2 text-yellow-400">
                                    <Building2 className="w-6 h-6" />
                                    <span className="font-bold text-lg">Divine & Grand</span>
                                </div>
                                <p className="text-sm text-gray-400">Visit the massive Murdeshwar Shiva Statue.</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/booking?package=Karnataka%20Explorer')}
                            className="w-full py-5 bg-gradient-to-r from-green-600 to-teal-600 hover:shadow-green-500/25 text-white font-bold rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 text-lg"
                        >
                            <Music className="w-6 h-6" />
                            Book This Adventure
                        </button>
                    </div>

                    {/* Image Slide - Main Destinations */}
                    <div className="order-1 lg:order-2 relative h-[500px] w-full animate-in slide-in-from-right duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-[3rem] transform rotate-3 blur-2xl animate-pulse"></div>
                        <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 p-6">
                                        <h3 className="text-4xl font-bold text-white mb-2">{slide.title}</h3>
                                        <p className="text-green-400 text-lg italic">{slide.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Destinations Detail Section */}
                <section className="space-y-24">

                    {/* Coorg Section */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                        <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl -skew-y-1 group-hover:skew-y-0 transition-all duration-500 ease-out">
                            <img src={coorgMisty} alt="Coorg" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6 text-right md:text-left">
                            <h2 className="text-4xl font-bold text-white">Coorg (Kodagu)</h2>
                            <h3 className="text-2xl text-emerald-400">The Scotland of India</h3>
                            <p className="text-gray-300 text-lg">
                                Wake up to the aroma of fresh coffee beans and misty mountains. Explore the Dubare Elephant Camp, Raja's Seat, and the magnificent Abbey Falls. A perfect retreat into nature's lap.
                            </p>
                        </div>
                    </div>

                    {/* Coorg Food & Stay - Special Request */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg group">
                            <img src={coorgFood} alt="Coorg Food" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div>
                                    <h4 className="text-xl font-bold text-white flex items-center gap-2"><Utensils className="w-5 h-5 text-orange-400" /> Authentic Feast</h4>
                                    <p className="text-gray-300 text-sm">Traditional Kodava cuisine with Pandi Curry & Akki Roti.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg group">
                            <img src={coorgRoom} alt="Coorg Stay" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div>
                                    <h4 className="text-xl font-bold text-white flex items-center gap-2"><Hotel className="w-5 h-5 text-blue-400" /> Misty Cottages</h4>
                                    <p className="text-gray-300 text-sm">Stay in premium wooden cottages amidst coffee estates.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chikmagalur Section */}
                    <div className="flex flex-col md:flex-row items-center gap-12 group">
                        <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl skew-y-1 group-hover:skew-y-0 transition-all duration-500 ease-out">
                            <img src={chikmagalurJeep} alt="Jeep Safari" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold text-white">Chikmagalur</h2>
                            <h3 className="text-2xl text-green-400">Off-Road Jeep Safari</h3>
                            <p className="text-gray-300 text-lg">
                                Buckle up for an adrenaline-pumping jeep safari through the rugged terrains and lush coffee plantations of Chikmagalur. Feel the mist on your face as you capture breathtaking views of the Western Ghats.
                            </p>
                        </div>
                    </div>

                    {/* Bangalore Section */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                        <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl -skew-y-1 group-hover:skew-y-0 transition-all duration-500 ease-out">
                            <img src={bangaloreAnimal} alt="Bangalore Zoo" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6 text-right md:text-left">
                            <h2 className="text-4xl font-bold text-white">Bangalore</h2>
                            <h3 className="text-2xl text-orange-400">Bannerghatta Wildlife Safari</h3>
                            <p className="text-gray-300 text-lg">
                                Experience the wild side of the Garden City. Witness Majestic Tigers and Lions in their natural habitat at the Bannerghatta Biological Park. Also visit India's largest elephant camp for an up-close gentle giant experience. A perfect blend of nature and thrill.
                            </p>
                        </div>
                    </div>

                    {/* Gokarna Section */}
                    <div className="flex flex-col md:flex-row items-center gap-12 group">
                        <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl skew-y-1 group-hover:skew-y-0 transition-all duration-500 ease-out">
                            <img src={gokarnaImg} alt="Gokarna Beach" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold text-white">Gokarna</h2>
                            <h3 className="text-2xl text-blue-400">Beaches & Trekking</h3>
                            <p className="text-gray-300 text-lg">
                                Discover the pristine beaches of Gokarna, from the famous Om Beach to the secluded Paradise Beach. Enjoy a sunset volleyball match, trek along the coastline, or simply chill by the waves.
                            </p>
                        </div>
                    </div>

                    {/* Murdeshwar Section */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                        <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl -skew-y-1 group-hover:skew-y-0 transition-all duration-500 ease-out">
                            <img src={murdeshwarImg} alt="Murdeshwar Shiva" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6 text-right md:text-left">
                            <h2 className="text-4xl font-bold text-white">Murdeshwar</h2>
                            <h3 className="text-2xl text-yellow-400">Majestic Shiva Statue</h3>
                            <p className="text-gray-300 text-lg">
                                Stand in awe before the second tallest Shiva statue in the world, towering against the backdrop of the endless Arabian Sea. A spiritual and visual marvel that you cannot miss.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default KarnatakaIVDetails;
