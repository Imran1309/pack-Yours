import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Heart, Snowflake, Flame, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PackageDetails = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category") || "Package";

    const categories = [
        {
            id: "popular",
            title: "Most Popular",
            description: "Top rated destinations loved by couples.",
            icon: Star,
            color: "from-yellow-400 to-orange-500",
            image: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?w=800&q=80"
        },
        {
            id: "romantic",
            title: "Romantic Places",
            description: "Intimate getaways for unforgettable moments.",
            icon: Heart,
            color: "from-pink-500 to-rose-500",
            image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80"
        },
        {
            id: "chill",
            title: "Chill Climate",
            description: "Escape to the cool, misty mountains.",
            icon: Snowflake,
            color: "from-cyan-400 to-blue-500",
            image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500 selection:text-white">
            <Navbar />

            <main className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Ambient Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
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
                            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-lg py-2 leading-normal" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                {category} Collections
                            </h1>
                            <p className="text-xl text-gray-400 mt-2 font-light tracking-wider">Curated experiences just for you</p>
                        </div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {categories.map((cat, index) => (
                            <div
                                key={cat.id}
                                onClick={() => {
                                    if (cat.id === 'popular') {
                                        navigate(`/destinations?type=Most%20Popular&category=${encodeURIComponent(category)}`);
                                    } else if (cat.id === 'romantic') {
                                        navigate(`/destinations?type=Romantic%20Places&category=${encodeURIComponent(category)}`);
                                    } else if (cat.id === 'chill') {
                                        navigate(`/destinations?type=Chill%20Climate&category=${encodeURIComponent(category)}`);
                                    } else {
                                        navigate(`/booking?package=${encodeURIComponent(category + " - " + cat.title)}`);
                                    }
                                }}
                                className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                            >
                                {/* Background Image */}
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
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
            </main>

            <Footer />
        </div>
    );
};

export default PackageDetails;
