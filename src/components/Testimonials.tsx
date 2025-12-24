import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
        const response = await axios.get("http://localhost:5001/api/reviews?type=review");
        // Take only the latest 3 reviews
        setReviews(response.data.slice(0, 3));
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
  ];

  const displayReviews = reviews.length > 0 ? reviews : defaultTestimonials;

  return (
    <section id="reviews" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#4b6cb7] to-[#182848] md:from-[#5F8D8B] md:to-[#28494B]">
      {/* Decorative Elements matching Memories Page */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#5effee] rounded-full mix-blend-overlay filter blur-[96px] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl text-[#E91E63] mb-4 drop-shadow-sm"
            style={{
              fontFamily: "'Great Vibes', 'Dancing Script', cursive",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            What Our Travelers Say
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light tracking-wide">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayReviews.map((review, index) => (
            <Card
              key={review._id}
              className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in flex flex-col bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 h-full group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-8 px-6 pb-8 flex-1 flex flex-col">
                <Quote className="h-8 w-8 text-[#F2C94C] mb-6 opacity-80" />

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-[#F2C94C] text-[#F2C94C]" : "text-white/20"}`}
                    />
                  ))}
                </div>

                <p className="text-white/80 mb-8 italic flex-1 font-light leading-relaxed text-lg">
                  "{review.description}"
                </p>

                <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F2C94C] to-[#d4af37] flex items-center justify-center text-[#1a2d2f] font-bold text-lg shadow-lg">
                    {review.title.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium text-white tracking-wide line-clamp-1">{review.title}</div>
                    <div className="text-xs text-[#F2C94C] tracking-widest uppercase font-bold mt-1">Verified User</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/memories">
            <Button size="lg" className="rounded-full px-8 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity text-white">
              View All Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
