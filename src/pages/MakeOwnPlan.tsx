import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Map, Calendar, Hotel, CheckCircle, PenTool, Globe } from "lucide-react";
import heroImg from "../assets/custom_plan_bg.png";

const MakeOwnPlan = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        {
            id: 1,
            title: "Choose Destinations",
            desc: "Pick from our curated list of 32+ states and union territories.",
            icon: Globe,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            id: 2,
            title: "Select Dates",
            desc: "Flexible planning to suit your schedule and season preferences.",
            icon: Calendar,
            color: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            id: 3,
            title: "Pick Accommodation",
            desc: "From budget stays to luxury palaces, the choice is yours.",
            icon: Hotel,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        },
        {
            id: 4,
            title: "Customize Experiences",
            desc: "Add adventures, food tours, or relaxation days as you please.",
            icon: PenTool,
            color: "text-orange-500",
            bg: "bg-orange-500/10"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-teal-500 selection:text-white pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img src={heroImg} alt="Plan Your Trip" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl animate-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600/30 backdrop-blur-md border border-teal-500/30 mb-6">
                        <Map className="w-5 h-5 text-teal-400" />
                        <span className="text-sm font-bold text-teal-200 uppercase tracking-widest">Custom Itinerary</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-teal-400 drop-shadow-xl"
                        style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Design Your Dream Trip
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                        Your Journey, Your Rules. Create a travel experience that is uniquely yours.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 mt-16 space-y-20">

                {/* Introduction */}
                <section className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Planning a trip shouldn't be stressful. With our custom plan builder, you can craft the perfect itinerary in simple steps.
                        Whether it's a solo backpacking trip, a romantic honeymoon, or a family vacation, we make it happen.
                    </p>
                </section>

                {/* Steps Section */}
                <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                                <step.icon className="w-24 h-24" />
                            </div>
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${step.bg} ${step.color}`}>
                                <step.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </section>

                {/* CTA Section */}
                <section className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-teal-900 via-emerald-900 to-teal-900 border border-white/10 p-12 md:p-20 text-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'serif' }}>Ready to Start?</h2>
                        <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                            Launch our trip builder and get a personalized quote within 24 hours.
                        </p>
                        <button
                            onClick={() => navigate('/booking?package=Custom_Plan_Builder')}
                            className="px-10 py-5 bg-white text-teal-900 rounded-full font-bold text-lg hover:bg-teal-50 hover:scale-105 transition-all shadow-xl shadow-teal-900/50 flex items-center gap-3 mx-auto"
                        >
                            <CheckCircle className="w-6 h-6" />
                            Start Building Now
                        </button>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default MakeOwnPlan;
