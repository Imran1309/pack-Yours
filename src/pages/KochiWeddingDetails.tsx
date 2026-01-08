import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Anchor, Sunset, Quote } from "lucide-react";
import deckImg from "../assets/alleppey_boat_wedding.jpg";
import blueBoatImg from "../assets/kerala_boat_blue.png";
import alleppeyBoatImg from "../assets/kerala_boat_wedding_deck.png";

const KochiWeddingDetails = () => {
    const navigate = useNavigate();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const slides = [deckImg, blueBoatImg, alleppeyBoatImg];

    useEffect(() => {
        window.scrollTo(0, 0);
        const interval = setInterval(() => {
            setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const quotes = [
        "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
        "A successful marriage requires falling in love many times, always with the same person.",
        "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-teal-500 selection:text-white pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <img src={deckImg} alt="Kochi Wedding Boat" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl animate-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600/30 backdrop-blur-md border border-teal-500/30 mb-6">
                        <Anchor className="w-5 h-5 text-teal-400" />
                        <span className="text-sm font-bold text-teal-200 uppercase tracking-widest">Luxury Houseboat Wedding</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-blue-200 drop-shadow-xl"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Kochi Backwaters
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 font-light tracking-wide mb-2 italic">
                        Sail into Forever
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 mt-16 space-y-24">

                {/* Introduction */}
                <section className="text-center max-w-3xl mx-auto space-y-8">
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        Exchange your vows on the tranquil backwaters of Kochi. With the gentle lapping of waves and a horizon painted with sunset hues, a houseboat wedding is the epitome of romantic intimacy.
                    </p>
                </section>

                {/* Marriage Quotes Section */}
                <section className="grid md:grid-cols-3 gap-8">
                    {quotes.map((quote, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl relative hover:bg-white/10 transition-colors">
                            <Quote className="w-8 h-8 text-teal-400 mb-4 opacity-50 absolute top-6 left-6" />
                            <p className="text-gray-200 text-lg font-serif italic relative z-10 pt-6">
                                "{quote}"
                            </p>
                            <div className="w-12 h-1 bg-teal-500 rounded-full mt-6 opacity-50"></div>
                        </div>
                    ))}
                </section>

                {/* Slideshow Section (Bottom) */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'serif' }}>The Experience</h2>
                        <p className="text-gray-400">Day & Night on the Backwaters</p>
                    </div>

                    <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide}
                                alt={`Kochi Boat Slide ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlideIndex ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                            <h3 className="text-3xl font-bold text-white mb-2">
                                {currentSlideIndex === 0 ? "Grand Deck Celebration" : currentSlideIndex === 1 ? "Magical Night Cruise" : "Scenic Alleppey Voyage"}
                            </h3>
                            <p className="text-gray-300 max-w-lg">
                                {currentSlideIndex === 0
                                    ? "A beautifully decorated deck ready for your traditional ceremony."
                                    : currentSlideIndex === 1
                                        ? "Witness the boat come alive with stunning lights reflecting on the water."
                                        : "Cruise through the famous Alleppey backwaters in grandeur."}
                            </p>
                        </div>

                        {/* Indicators */}
                        <div className="absolute bottom-8 right-8 flex gap-2">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlideIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${idx === currentSlideIndex ? 'bg-white w-8' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <div className="pb-10 text-center">
                    <button
                        onClick={() => navigate('/booking?package=Kochi_Houseboat_Wedding')}
                        className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-teal-900/50 transition-all uppercase tracking-widest text-sm"
                    >
                        Book This Experience
                    </button>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default KochiWeddingDetails;
