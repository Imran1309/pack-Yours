import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, Upload, User, Star, Globe, Utensils, Car, BedDouble, X, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import AuthDialog from "@/components/AuthDialog";
import axios from "axios";

interface MediaItem {
  url: string;
  type: string;
}

interface Review {
  _id: string;
  title: string;
  description: string;
  foodReview?: string;
  roomReview?: string;
  vehicleReview?: string;
  rating: number;
  media: MediaItem[]; // Array of media objects
  createdAt: string;
  type: 'review' | 'memory';
}

const Memories = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'review' | 'memory'>('review');

  const OWNER_EMAILS = ["dhanatoursconsultors2020@gmail.com", "imransurajbasha786@gmail.com"];

  // Form State
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [foodReview, setFoodReview] = useState("");
  const [roomReview, setRoomReview] = useState("");
  const [vehicleReview, setVehicleReview] = useState("");

  const [rating, setRating] = useState(5);
  // Multiple files support
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<{ url: string, type: string }[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setIsAuthenticated(true);
      const user = JSON.parse(currentUser);
      setUserEmail(user.email);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [activeTab]);

  const fetchReviews = async () => {
    try {
      const response = await API.get("/reviews", { params });

      // Transform old data structure if needed (for backward compatibility if DB has old records)
      const data = response.data.map((item: any) => ({
        ...item,
        media: Array.isArray(item.media) ? item.media : (item.media ? [{ url: item.media, type: item.mediaType || 'image' }] : [])
      }));

      setReviews(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newFiles = [...selectedFiles, ...filesArray];

      // Should ideally validate types here
      setSelectedFiles(newFiles);

      // Generate previews
      const newPreviews = filesArray.map(file => ({
        url: URL.createObjectURL(file),
        type: file.type.startsWith('video/') ? 'video' : 'image'
      }));
      setPreviewUrls([...previewUrls, ...newPreviews]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);

    const newPreviews = [...previewUrls];
    // Revoke URL to avoid memory leaks
    URL.revokeObjectURL(newPreviews[index].url);
    newPreviews.splice(index, 1);
    setPreviewUrls(newPreviews);
  };

  const handleUpload = async () => {
    if (!newTitle.trim() || !newDescription.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide a title and review",
        variant: "destructive",
      });
      return;
    }

    if (!userEmail) {
      toast({
        title: "Authentication Error",
        description: "Please login again",
        variant: "destructive",
      });
      setAuthDialogOpen(true);
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("description", newDescription);

    formData.append("foodReview", foodReview);
    formData.append("roomReview", roomReview);
    formData.append("vehicleReview", vehicleReview);

    formData.append("rating", rating.toString());
    formData.append("userEmail", userEmail);
    formData.append("type", activeTab);

    // Append all selected files
    selectedFiles.forEach((file) => {
      formData.append("media", file); // Key 'media' matches multer config
    });

    try {
      await API.post("/reviews", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast({
        title: activeTab === 'review' ? "Review Posted!" : "Memories Saved!",
        description: "Successfully added.",
      });

      setUploadDialogOpen(false);
      setNewTitle("");
      setNewDescription("");
      setFoodReview("");
      setRoomReview("");
      setVehicleReview("");
      setRating(5);
      setSelectedFiles([]);
      setPreviewUrls([]);

      fetchReviews();
    } catch (error: any) {
      console.error("Error uploading:", error);
      toast({
        title: "Upload failed",
        description: error.response?.data?.message || "Network Error: Check Payload Size or Server Status",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getRatingPercentage = (stars: number) => {
    return Math.round((stars / 5) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b6cb7] to-[#182848] md:from-[#5F8D8B] md:to-[#28494B] relative text-white font-sans selection:bg-[#F2C94C] selection:text-black">
      {/* Decorative Background Elements */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#F2C94C] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#5effee] rounded-full mix-blend-overlay filter blur-[96px] opacity-20"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white/5 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-white/10">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-white/70 hover:text-white transition-colors hover:bg-white/10 p-2 rounded-full border border-transparent hover:border-white/20"
            aria-label="Go back"
            title="Go back"
          >
            <ArrowLeft size={24} />
          </button>
          <h1
            className="text-4xl md:text-5xl text-[#E91E63] mb-0 drop-shadow-sm py-2 leading-normal"
            style={{
              fontFamily: "'Great Vibes', 'Dancing Script', cursive",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            {activeTab === 'review' ? "Traveller Diaries" : "Our Gallery"}
          </h1>
        </div>

        {/* Tabs - Glass Pill */}
        <div className="flex bg-black/20 p-1 rounded-full border border-white/10 backdrop-blur-sm mt-4 md:mt-0">
          <button
            onClick={() => setActiveTab('review')}
            className={`flex items-center px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ease-out ${activeTab === 'review' ? 'bg-white text-[#28494B] shadow-lg' : 'text-white/60 hover:text-white'
              }`}
          >
            <Globe className="w-3 h-3 mr-2" />
            Reviews
          </button>
          <button
            onClick={() => setActiveTab('memory')}
            className={`flex items-center px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ease-out ${activeTab === 'memory' ? 'bg-white text-[#28494B] shadow-lg' : 'text-white/60 hover:text-white'
              }`}
          >
            <Globe className="w-3 h-3 mr-2" />
            Gallery
          </button>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {isAuthenticated && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setAuthDialogOpen(true)}
              className="hidden md:flex bg-transparent hover:bg-white/10 text-white border border-white/30 backdrop-blur-md transition-all"
            >
              <User className="h-4 w-4 mr-2" />
              Account
            </Button>
          )}
          {(activeTab === 'review' || (activeTab === 'memory' && OWNER_EMAILS.includes(userEmail || ""))) && (
            <Button
              onClick={() => {
                if (!isAuthenticated) {
                  setAuthDialogOpen(true);
                } else {
                  setUploadDialogOpen(true);
                }
              }}
              className="bg-[#F2C94C] hover:bg-[#d4af37] text-[#1a2d2f] rounded-full px-8 py-6 shadow-xl transform hover:scale-105 transition-all text-xs font-black tracking-widest uppercase border border-yellow-300/50"
            >
              <Plus className="mr-2 h-4 w-4" />
              {activeTab === 'review' ? "Write Review" : "Add Photos"}
            </Button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-8 relative z-0">
        {reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-white/5 p-8 rounded-full mb-6 backdrop-blur-sm border border-white/10">
              <Globe className="h-16 w-16 text-white/20" />
            </div>
            <h2 className="text-3xl font-light text-white mb-3 tracking-wide">
              {activeTab === 'review' ? "No Reviews Yet" : "Gallery Empty"}
            </h2>
            <p className="text-white/50 font-light text-lg max-w-md">
              {activeTab === 'review'
                ? "Be the first traveler to share your amazing journey with us!"
                : "We are curating our best travel moments. Stay tuned!"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:bg-white/15 border border-white/10 hover:border-white/30 flex flex-col hover:-translate-y-2"
              >
                {/* Media Carousel / Grid */}
                {review.media && review.media.length > 0 && (
                  <div className="relative h-64 bg-black/40 overflow-hidden">
                    {review.media[0].type === 'video' ? (
                      <video
                        src={review.media[0].url}
                        controls
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale-[20%] group-hover:grayscale-0 duration-700"
                      />
                    ) : (
                      <img
                        src={review.media[0].url}
                        alt={review.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
                      />
                    )}

                    {/* Multiple Items Indicator */}
                    {review.media.length > 1 && (
                      <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-xl text-white px-3 py-1 rounded-sm text-[10px] font-bold tracking-wider flex items-center gap-1 border border-white/10 uppercase">
                        <Plus size={8} /> {review.media.length - 1} More
                      </div>
                    )}

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-sm shadow-lg flex items-center gap-1.5 border border-white/10">
                      <Star className="w-3 h-3 fill-[#F2C94C] text-[#F2C94C]" />
                      <span className="font-bold text-white text-xs">{review.rating}</span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-white line-clamp-1 mb-2 tracking-wide font-serif">
                      {review.title}
                    </h3>
                    <div className="flex gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-0.5 w-full rounded-full ${i < review.rating ? 'bg-[#F2C94C]' : 'bg-white/10'}`} />
                      ))}
                    </div>
                  </div>

                  {/* Reviews Chips */}
                  {activeTab === 'review' && (
                    <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider">
                      {review.foodReview && (
                        <div className="bg-white/5 px-3 py-1.5 rounded-sm border border-white/10 text-white/80 flex items-center gap-1 group-hover:bg-white/10 transition-colors">
                          <Utensils size={10} className="text-[#F2C94C]" /> {review.foodReview}
                        </div>
                      )}
                      {review.roomReview && (
                        <div className="bg-white/5 px-3 py-1.5 rounded-sm border border-white/10 text-white/80 flex items-center gap-1 group-hover:bg-white/10 transition-colors">
                          <BedDouble size={10} className="text-[#F2C94C]" /> {review.roomReview}
                        </div>
                      )}
                      {review.vehicleReview && (
                        <div className="bg-white/5 px-3 py-1.5 rounded-sm border border-white/10 text-white/80 flex items-center gap-1 group-hover:bg-white/10 transition-colors">
                          <Car size={10} className="text-[#F2C94C]" /> {review.vehicleReview}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="relative mt-2">
                    {/* Decorative Quote Mark */}
                    <Quote className="absolute -top-3 -left-1 w-6 h-6 text-white/10 transform -scale-x-100" />
                    <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line pl-6 relative z-10 font-light">
                      {review.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-white/40 font-medium tracking-widest uppercase">
                    <span>
                      {new Date(review.createdAt).toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })}
                    </span>
                    {isAuthenticated && userEmail === OWNER_EMAILS[0] && (
                      <span className="text-[#F2C94C]">Owner</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upload Dialog - Minimalist Teal Theme */}
      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-[#2b4c4f]/95 backdrop-blur-xl border-white/10 text-white shadow-2xl rounded-none">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light text-center text-white tracking-[0.2em] uppercase mb-4 pt-4">
              {activeTab === 'review' ? "Share Journey" : "Add Memory"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-8 py-4 px-2">

            {/* Rating Input */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none transition-all hover:scale-110 active:scale-95 group"
                  >
                    <Star
                      size={28}
                      className={`${star <= rating
                        ? "fill-[#F2C94C] text-[#F2C94C] drop-shadow-md"
                        : "text-white/20 group-hover:text-white/40"
                        }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-[#F2C94C] text-sm font-bold tracking-widest">{getRatingPercentage(rating)}% SATISFACTION</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Input
                  id="title"
                  placeholder={activeTab === 'review' ? "TRIP / PLACE NAME" : "MEMORY TITLE"}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="h-12 border-b border-white/20 border-t-0 border-x-0 rounded-none bg-transparent focus:ring-0 focus:border-[#F2C94C] placeholder:text-white/30 text-white text-lg font-light tracking-wide px-0 transition-colors"
                />
              </div>

              {activeTab === 'review' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Input
                      id="food"
                      placeholder="FOOD REVIEW"
                      value={foodReview}
                      onChange={(e) => setFoodReview(e.target.value)}
                      className="border-b border-white/20 border-t-0 border-x-0 rounded-none bg-transparent focus:ring-0 focus:border-[#F2C94C] placeholder:text-white/30 text-white text-xs tracking-wider px-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="room"
                      placeholder="STAY REVIEW"
                      value={roomReview}
                      onChange={(e) => setRoomReview(e.target.value)}
                      className="border-b border-white/20 border-t-0 border-x-0 rounded-none bg-transparent focus:ring-0 focus:border-[#F2C94C] placeholder:text-white/30 text-white text-xs tracking-wider px-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="vehicle"
                      placeholder="TRAVEL REVIEW"
                      value={vehicleReview}
                      onChange={(e) => setVehicleReview(e.target.value)}
                      className="border-b border-white/20 border-t-0 border-x-0 rounded-none bg-transparent focus:ring-0 focus:border-[#F2C94C] placeholder:text-white/30 text-white text-xs tracking-wider px-0"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Textarea
                  id="description"
                  placeholder="YOUR STORY..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  rows={3}
                  className="resize-none border-b border-white/20 border-t-0 border-x-0 rounded-none bg-transparent focus:ring-0 focus:border-[#F2C94C] placeholder:text-white/30 text-white font-light tracking-wide px-0 min-h-[100px]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-[10px] font-bold text-white/50 tracking-widest uppercase block mb-2">Media Upload</Label>

              {/* Preview Grid */}
              {previewUrls.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {previewUrls.map((preview, idx) => (
                    <div key={idx} className="relative aspect-square bg-black/20 overflow-hidden border border-white/10 group">
                      {preview.type === 'video' ? (
                        <video src={preview.url} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <img src={preview.url} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                      )}
                      <button
                        onClick={() => removeFile(idx)}
                        className="absolute top-0 right-0 bg-red-500/80 text-white p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div
                onClick={() => fileInputRef.current?.click()}
                className="group border border-dashed border-white/20 p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 hover:border-[#F2C94C]/50 transition-all"
              >
                <Upload className="h-6 w-6 text-white/30 group-hover:text-[#F2C94C] mb-2 transition-colors" />
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest group-hover:text-white/70">Click to Select Files</p>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple // Enabled multiple
                  accept="image/*,video/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            </div>

            <Button
              onClick={handleUpload}
              className="w-full bg-[#F2C94C] hover:bg-[#d4af37] text-[#1a2d2f] font-black tracking-widest uppercase py-6 shadow-xl transition-all rounded-sm hover:-translate-y-1"
              disabled={loading}
            >
              {loading ? "PROCESSING..." : (activeTab === 'review' ? "PUBLISH REVIEW" : "ADD MEMORY")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Auth Dialog - Passed props to match dark theme inside if needed, assuming generic dialog */}
      <AuthDialog
        open={authDialogOpen}
        onOpenChange={setAuthDialogOpen}
        onAuthenticated={() => {
          setIsAuthenticated(true);
          const currentUser = localStorage.getItem("currentUser");
          if (currentUser) {
            setUserEmail(JSON.parse(currentUser).email);
          }
        }}
        onLogout={() => {
          setIsAuthenticated(false);
          setUserEmail("");
        }}
      />
    </div>
  );
};

export default Memories;
