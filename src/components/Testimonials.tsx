import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "@/api/api";

interface Review {
  _id: string;
  title: string;
  description: string;
  rating: number;
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await API.get("/reviews?type=review");
        // Take only the latest 6 reviews
        setReviews(response.data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const defaultTestimonials = [
    {
      _id: "1",
      title: "Priya Sharma",
      // location: "Mumbai",
      rating: 5,
      description: "Absolutely wonderful experience! The team organized our Kashmir trip perfectly. Every detail was taken care of, and we created memories that will last a lifetime.",
    },
    {
      _id: "2",
      title: "Rajesh Kumar",
      // location: "Delhi",
      rating: 5,
      description: "Professional, friendly, and extremely knowledgeable. They helped us explore Rajasthan in ways we never imagined. Highly recommended!",
    },
    {
      _id: "3",
      title: "Anita Patel",
      // location: "Bangalore",
      rating: 5,
      description: "Best travel agency we've worked with! From booking to the actual trip, everything was seamless. The local guides were fantastic and very informative.",
    },
    {
      _id: "4",
      title: "Arjun Reddy",
      rating: 5,
      description: "The College IV trip to Goa was insane! The organization was top-notch, DJ night was lit, and the safety measures were excellent. Can't wait for the next one!",
    },
    {
      _id: "5",
      title: "Meera Iyer",
      rating: 4,
      description: "Our pilgrimage to Kashi was so peaceful. The VIP darshan tickets arranged by Pack Yours saved us hours of standing in line. Truly a divine experience.",
    },
    {
      _id: "6",
      title: "David John",
      rating: 5,
      description: "Honeymoon in Andaman was like a dream. Candlelight dinner by the beach was a surprise we didn't expect! Thank you for going the extra mile.",
    }
  ];

  const displayReviews = reviews.length > 0 ? reviews : defaultTestimonials;

  return (
    <section id="reviews" className="py-20 relative overflow-hidden bg-black selection:bg-[#FFD700] selection:text-black">
      {/* Decorative Elements matching Luxury Theme */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#FFD700]/5 to-transparent pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#DAA520] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block border border-[#FFD700]/50 rounded-full px-6 py-1 mb-4">
             <span className="text-[#FFD700] text-sm tracking-widest uppercase">Testimonials</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#FFD700] mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] font-bold uppercase leading-relaxed"
            style={{
              fontFamily: "'Syncopate', sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            What Our <span className="text-white">Travelers</span> Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide" style={{ fontFamily: "'Cinzel Decorative', cursive" }}>
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayReviews.map((review, index) => (
            <Card
              key={review._id}
              className="relative overflow-hidden hover:shadow-[0_5px_15px_rgba(255,215,0,0.15)] transition-all duration-500 animate-fade-in flex flex-col bg-[#111] backdrop-blur-md border border-[#333] hover:border-[#FFD700]/50 hover:bg-[#1a1a1a] h-full group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-8 px-6 pb-8 flex-1 flex flex-col">
                <Quote className="h-8 w-8 text-[#FFD700] mb-6 opacity-80 group-hover:scale-110 transition-transform" />

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-[#FFD700] text-[#FFD700]" : "text-white/20"}`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-8 italic flex-1 font-light leading-relaxed text-lg" style={{ fontFamily: "'Cinzel Decorative', cursive" }}>
                  "{review.description}"
                </p>

                <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#B8860B] flex items-center justify-center text-black font-bold text-lg shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                    {review.title.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium text-white tracking-wide line-clamp-1">{review.title}</div>
                    <div className="text-xs text-[#FFD700] tracking-widest uppercase font-bold mt-1">Verified User</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/memories">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold bg-transparent border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] uppercase tracking-widest" style={{ fontFamily: "'Syncopate', sans-serif" }}>
              View All Reviews
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
