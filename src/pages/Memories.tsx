import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, Upload, User, Star, Globe, Utensils, Car, BedDouble, X, ChevronLeft, ChevronRight, Quote, Trash2, Video, Heart, Share2, Play } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import AuthDialog from "@/components/AuthDialog";
import API from "@/api/api";

// ... (interfaces remain same)



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
  userEmail: string;
  likes?: number;
}

const Memories = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'review' | 'memory' | 'reels'>('review');

  const OWNER_EMAILS = ["dhanatrip2020@gmail.com"];

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
  const [uploadProgress, setUploadProgress] = useState(0);
  const [activeIndices, setActiveIndices] = useState<Record<string, number>>({});
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextSlide = (e: React.MouseEvent, reviewId: string, total: number) => {
    e.stopPropagation();
    setActiveIndices(prev => ({
      ...prev,
      [reviewId]: ((prev[reviewId] || 0) + 1) % total
    }));
  };

  const prevSlide = (e: React.MouseEvent, reviewId: string, total: number) => {
    e.stopPropagation();
    setActiveIndices(prev => ({
      ...prev,
      [reviewId]: ((prev[reviewId] || 0) - 1 + total) % total
    }));
  };

  const handleLike = async (id: string) => {
    // Optimistic Update
    // Prevent multiple likes from same session if already liked
    if (likedReviews[id]) return;

    setLikedReviews(prev => ({ ...prev, [id]: true }));
    setReviews(prev => prev.map(r => r._id === id ? { ...r, likes: (r.likes || 0) + 1 } : r));

    try {
      await API.put(`/reviews/${id}/like`);
    } catch (error) {
      console.error("Like failed", error);
      // Revert optimistic update
      setLikedReviews(prev => ({ ...prev, [id]: false }));
      setReviews(prev => prev.map(r => r._id === id ? { ...r, likes: (r.likes || 0) - 1 } : r));
    }
  };

  const handleShare = async (review: Review) => {
    const url = window.location.href; // Or specific deep link if you have routing for individual reviews
    const shareData = {
      title: review.title || "Check out this memory from Pack Yours!",
      text: review.description,
      url: url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share failed/cancelled", err);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(url);
      toast({
        title: "Link Copied!",
        description: "Shared link copied to clipboard.",
      });
    }
  };

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
      // If reels, we want ALL items (no type filter), then we filter for videos client-side
      const params = activeTab === 'reels' ? { _t: Date.now() } : { type: activeTab, _t: Date.now() };
      const response = await API.get("/reviews", { params });

      // Transform old data structure if needed (for backward compatibility if DB has old records)
      // Transform old data structure if needed
      let data = response.data.map((item: any) => ({
        ...item,
        media: (Array.isArray(item.media) ? item.media : (item.media ? [{ url: item.media, type: item.mediaType || 'image' }] : []))
          .map((m: any) => ({
            ...m,
            // Trust the backend provided URL
            url: m.url
          })),
        likes: item.likes || 0
      }));

      if (activeTab === 'reels') {
        data = data.filter((item: Review) => item.media.some(m => m.type === 'video'));
      }

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

  const CHUNK_SIZE = 10 * 1024 * 1024; // 5MB chunks for faster uploads
  const PARALLEL_CHUNKS = 5; // Upload 5 chunks in parallel

  const uploadFileChunked = async (file: File, uploadId: string, onProgress: (uploadedBytes: number) => void): Promise<{ url: string; type: string } | null> => {
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    const fileName = file.name.replace(/\s+/g, '_');

    // Create all chunk tasks
    const tasks = Array.from({ length: totalChunks }, (_, chunkIndex) => async () => {
      const start = chunkIndex * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, file.size);
      const chunk = file.slice(start, end);

      const formData = new FormData();
      formData.append('chunk', chunk);
      formData.append('uploadId', uploadId);
      formData.append('chunkIndex', chunkIndex.toString());
      formData.append('totalChunks', totalChunks.toString());
      formData.append('fileName', fileName);

      let retries = 3;
      while (retries > 0) {
        try {
          const res = await API.post('/upload/chunk', formData, {
            headers: { "Content-Type": "multipart/form-data" },
            timeout: 300000 // 5 minutes timeout
          });
          return { ...res.data, size: chunk.size };
        } catch (err) {
          console.error(`Chunk ${chunkIndex} failed, retrying...`, err);
          retries--;
          if (retries === 0) throw err;
          await new Promise(r => setTimeout(r, 1000 * (4 - retries)));
        }
      }
    });

    // Execute with concurrency limit
    const results: any[] = [];
    const executing: Promise<void>[] = [];
    let completedData: { url: string; type: string } | null = null;

    for (const task of tasks) {
      const p = task().then(res => {
        // Update progress
        onProgress(res.size);
        if (res && res.completed) completedData = res;
        return res;
      });

      results.push(p);
      const e: any = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);

      if (executing.length >= PARALLEL_CHUNKS) {
        await Promise.race(executing);
      }
    }

    await Promise.all(results);
    return completedData;
  };

  const handleUpload = async () => {
    if (!newTitle.trim() || !newDescription.trim()) {
      toast({ title: "Missing information", description: "Please provide a title and review", variant: "destructive", });
      return;
    }

    if (!userEmail) {
      toast({ title: "Authentication Error", description: "Please login again", variant: "destructive", });
      setAuthDialogOpen(true);
      return;
    }

    setLoading(true);
    setUploadProgress(0);

    // Use lower threshold for chunking to avoid server limits on body size
    const LARGE_FILE_THRESHOLD = 5 * 1024 * 1024; // 5MB

    // Split files
    const largeFiles = selectedFiles.filter(f => f.size > LARGE_FILE_THRESHOLD);
    const smallFiles = selectedFiles.filter(f => f.size <= LARGE_FILE_THRESHOLD);

    const preUploadedMedia: { url: string, type: string }[] = [];
    let totalBytes = selectedFiles.reduce((acc, f) => acc + f.size, 0);
    let globalUploadedBytes = 0;

    try {
      // 1. Upload Large Files with Parallel Chunking
      for (const file of largeFiles) {
        // Generate UUID (fallback for non-secure contexts)
        const generateUUID = () => {
          if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
          }
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
        };

        const uploadId = generateUUID();
        // Track progress for this file
        const updateFileProgress = (chunkBytes: number) => {
          globalUploadedBytes += chunkBytes;
          const percent = Math.round((globalUploadedBytes / totalBytes) * 100);
          setUploadProgress(Math.min(percent, 95));
        };

        const result = await uploadFileChunked(file, uploadId, updateFileProgress);
        if (result) {
          preUploadedMedia.push({ url: result.url, type: result.type });
        } else {
          throw new Error(`Failed to upload file: ${file.name}`);
        }
      }

      // 2. Submit Review with Small Files + Pre-uploaded URLs
      const formData = new FormData();
      formData.append("title", newTitle);
      formData.append("description", newDescription);
      formData.append("foodReview", foodReview);
      formData.append("roomReview", roomReview);
      formData.append("vehicleReview", vehicleReview);
      formData.append("rating", rating.toString());
      formData.append("userEmail", userEmail);
      formData.append("type", activeTab === 'reels' ? 'review' : activeTab);

      if (preUploadedMedia.length > 0) {
        formData.append("preUploadedMedia", JSON.stringify(preUploadedMedia));
      }

      smallFiles.forEach((file) => {
        formData.append("media", file);
      });

      // Account for small files size in progress immediately for UI smoothness 
      // (or tracking it via axios onUploadProgress, but mixed tracking is complex)

      await API.post("/reviews", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 300000, // 5 minutes for small files
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total && smallFiles.length > 0) {
            // Logic to blend progress could go here, but with large files done, we are near 100%
            // Just let it jump to 100 on completion
          }
        }
      });

      setUploadProgress(100);
      toast({
        title: "Success Link generated!",
        description: "Successfully added your memory.",
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
      setUploadProgress(0);

      fetchReviews();
    } catch (error: any) {
      console.error("Error uploading:", error);
      toast({
        title: "Upload failed",
        description: error.response?.data?.message || error.message || "Check your internet connection or try smaller files.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this memory? This cannot be undone.")) return;

    try {
      await API.delete(`/reviews/${id}`, {
        data: { userEmail } // Pass email for authorization check
      });

      toast({
        title: "Deleted",
        description: "Memory deleted successfully.",
      });

      fetchReviews(); // Refresh list
    } catch (error: any) {
      console.error("Delete Error:", error);
      toast({
        title: "Delete Failed",
        description: error.response?.data?.message || "Could not delete.",
        variant: "destructive"
      });
    }
  };

  const getRatingPercentage = (stars: number) => {
    return Math.round((stars / 5) * 100);
  };

  useEffect(() => {
    if (activeTab !== 'reels') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            // Attempt to play
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.log("Autoplay prevented:", error);
                // Optionally show a "Click to Play" UI if autoplay is blocked
              });
            }
          } else {
            video.pause();
            video.currentTime = 0; // Optional: Reset to start when scrolled away? standard reels behavior usually just pauses.
            // video.currentTime = 0; // Keep it paused where it was? Instagram resets or pauses? 
            // Usually pauses. Resetting might be annoying if you scroll back up.
          }
        });
      },
      { threshold: 0.6 } // Video must be 60% visible to play
    );

    // Small timeout to ensure DOM is rendered (since we are using querySelectorAll on state change)
    const timeoutId = setTimeout(() => {
      const videos = document.querySelectorAll('video.reel-video');
      videos.forEach((v) => observer.observe(v));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const videos = document.querySelectorAll('video.reel-video');
      videos.forEach((v) => observer.unobserve(v));
      observer.disconnect();
    };
  }, [activeTab, reviews]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b6cb7] to-[#182848] md:from-[#5F8D8B] md:to-[#28494B] relative text-white font-sans selection:bg-[#F2C94C] selection:text-black">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#F2C94C] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-[#5effee] rounded-full mix-blend-overlay filter blur-[96px] opacity-20"></div>
      </div>

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
            {activeTab === 'review' ? "Traveller Diaries" : activeTab === 'memory' ? "Our Gallery" : "Video Reels"}
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
          <button
            onClick={() => setActiveTab('reels')}
            className={`flex items-center px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ease-out ${activeTab === 'reels' ? 'bg-white text-[#28494B] shadow-lg' : 'text-white/60 hover:text-white'
              }`}
          >
            <Video className="w-3 h-3 mr-2" />
            Reels
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

          {(activeTab === 'review' || activeTab === 'memory' || activeTab === 'reels') && (
            <Button
              onClick={() => {
                if (!isAuthenticated) {
                  setAuthDialogOpen(true);
                } else {
                  if (activeTab === 'memory' && !OWNER_EMAILS.includes(userEmail || "")) {
                    toast({
                      title: "Restricted Access",
                      description: "Only authorized owners can add memories.",
                      variant: "destructive",
                    });
                    return;
                  }
                  // For reels, we allow users to upload "Review Videos" or owners "Gallery Videos". 
                  // Since 'reels' isn't a DB type, we'll default to 'review' upload unless owner, but simplification:
                  // Just open upload dialog.
                  setUploadDialogOpen(true);
                }
              }}
              className="bg-[#F2C94C] hover:bg-[#d4af37] text-[#1a2d2f] rounded-full px-8 py-6 shadow-xl transform hover:scale-105 transition-all text-xs font-black tracking-widest uppercase border border-yellow-300/50"
            >
              <Plus className="mr-2 h-4 w-4" />
              {activeTab === 'review' ? "Write Review" : activeTab === 'memory' ? "Add Photos" : "Add Video"}
            </Button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className={activeTab === 'reels' ? "w-full h-[calc(100dvh-90px)] relative z-0 bg-[#0f0f0f]" : "container mx-auto px-4 py-8 relative z-0"}>
        {reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-white/5 p-8 rounded-full mb-6 backdrop-blur-sm border border-white/10">
              <Globe className="h-16 w-16 text-white/20" />
            </div>
            <h2 className="text-3xl font-light text-white mb-3 tracking-wide">
              {activeTab === 'review' ? "No Reviews Yet" : activeTab === 'memory' ? "Gallery Empty" : "No Reels Yet"}
            </h2>
            <p className="text-white/50 font-light text-lg max-w-md">
              {activeTab === 'review'
                ? "Be the first traveler to share your amazing journey with us!"
                : activeTab === 'memory'
                  ? "We are curating our best travel moments. Stay tuned!"
                  : "Upload your travel videos to see them here!"}
            </p>
          </div>
        ) : (
          activeTab === 'reels' ? (
            <div className="w-full h-full overflow-y-scroll snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {reviews.map((review) => {
                const videoMedia = review.media.find(m => m.type === 'video');
                if (!videoMedia) return null;

                return (
                  <div key={review._id} className="relative w-full h-full snap-start shrink-0 flex justify-center bg-black">
                    <div className="relative w-full md:max-w-[480px] h-full bg-black shadow-2xl overflow-hidden">
                      {/* Video Player */}
                      <video
                        src={videoMedia.url}
                        className="w-full h-full object-cover cursor-pointer peer reel-video"
                        loop
                        playsInline
                        muted={false}
                        crossOrigin="anonymous"
                        onClick={(e) => {
                          const v = e.currentTarget;
                          if (v.paused) v.play(); else v.pause();
                        }}
                      />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 opacity-0 bg-black/20 peer-paused:opacity-100">
                        <Play className="w-16 h-16 text-white/90 fill-white/20 drop-shadow-lg" />
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 pointer-events-none" />

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col gap-4 pb-16 md:pb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F2C94C] to-[#E91E63] p-[2px]">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                              <User size={24} className="text-white/80" />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-base shadow-black drop-shadow-md">
                                {review.userEmail.split('@')[0]}
                              </span>
                              {(review.userEmail === 'dhanatrip2020@gmail.com' || review.type === 'memory') && (
                                <span className="px-2 py-0.5 bg-[#F2C94C] text-[10px] font-bold text-black rounded-full">
                                  OWNER
                                </span>
                              )}
                            </div>
                            {review.title && (
                              <span className="text-sm text-white/90 font-medium tracking-wide">
                                {review.title}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-white/90 text-sm md:text-base font-light leading-relaxed line-clamp-3">
                          {review.description}
                        </p>

                        {/* Music / Date */}
                        <div className="flex items-center gap-2 text-xs text-white/70">
                          <div className="flex items-center gap-1">
                            <span className="animate-pulse">♫</span> Original Audio
                          </div>
                          <span>•</span>
                          <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Sidebar Actions */}
                      <div className="absolute right-4 bottom-28 md:bottom-20 flex flex-col items-center gap-6 z-30">
                        <div
                          className="flex flex-col items-center gap-1 group/btn cursor-pointer transition-transform active:scale-90"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(review._id);
                          }}
                        >
                          <div className={`p-3 backdrop-blur-md rounded-full transition-colors ${likedReviews[review._id] ? 'bg-red-500/20' : 'bg-black/30'}`}>
                            <Heart className={`w-8 h-8 ${likedReviews[review._id] ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                          </div>
                          <span className="text-xs font-bold text-white shadow-black drop-shadow-md">
                            {review.likes || 0}
                          </span>
                        </div>

                        <div
                          className="flex flex-col items-center gap-1 cursor-pointer transition-transform active:scale-90"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShare(review);
                          }}
                        >
                          <div className="p-3 bg-black/30 backdrop-blur-md rounded-full hover:bg-white/10">
                            <Share2 className="w-7 h-7 text-white" />
                          </div>
                          <span className="text-xs font-bold text-white shadow-black drop-shadow-md">Share</span>
                        </div>

                        {isAuthenticated && OWNER_EMAILS.includes(userEmail || "") && (
                          <div className="flex flex-col items-center gap-1 cursor-pointer">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(review._id);
                              }}
                              className="p-3 bg-black/30 backdrop-blur-md rounded-full hover:bg-red-500/20 text-white hover:text-red-400"
                            >
                              <Trash2 className="w-6 h-6" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
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
                    <div className="relative h-64 bg-black/40 overflow-hidden group/media">
                      {(() => {
                        const currentIndex = activeIndices[review._id] || 0;
                        const currentMedia = review.media[currentIndex];

                        return currentMedia && (currentMedia.type === 'video' ? (
                          <video
                            src={currentMedia.url}
                            controls
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img
                            src={currentMedia.url}
                            alt={review.title}
                            className="w-full h-full object-cover transition-transform duration-500 cursor-pointer"
                            onClick={() => setSelectedImage(currentMedia.url)}
                          />
                        ));
                      })()}

                      {/* Navigation Buttons */}
                      {review.media.length > 1 && (
                        <>
                          <button
                            onClick={(e) => prevSlide(e, review._id, review.media.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover/media:opacity-100 transition-opacity backdrop-blur-sm z-10"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={(e) => nextSlide(e, review._id, review.media.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover/media:opacity-100 transition-opacity backdrop-blur-sm z-10"
                          >
                            <ChevronRight size={20} />
                          </button>

                          {/* Dots Indicator */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {review.media.map((_, idx) => (
                              <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${(activeIndices[review._id] || 0) === idx ? 'bg-white' : 'bg-white/40'
                                  }`}
                              />
                            ))}
                          </div>
                        </>
                      )}

                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-sm shadow-lg flex items-center gap-1.5 border border-white/10 pointer-events-none z-10">
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

                      <div className="flex items-center gap-2">
                        {isAuthenticated && userEmail === OWNER_EMAILS[0] && (
                          <span className="text-[#F2C94C]">Owner</span>
                        )}

                        {isAuthenticated && OWNER_EMAILS.includes(userEmail || "") && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(review._id);
                            }}
                            className="p-1.5 hover:bg-red-500/20 rounded-md text-white/40 hover:text-red-400 transition-colors"
                            title="Delete Review"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
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
              {loading
                ? (uploadProgress === 100 ? "FINALIZING... (DO NOT CLOSE)" : `UPLOADING ${uploadProgress}%...`)
                : (activeTab === 'review' ? "PUBLISH REVIEW" : "ADD MEMORY")
              }
            </Button>
            {loading && (
              <p className="text-center text-[10px] text-white/50 mt-2 animate-pulse">
                Please keep this window open until finished. Large videos may take a few minutes to process.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>

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

      {/* Full Screen Image Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl scale-in-95 animate-in duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself? Or allow it? 
          // Usually clicking background closes. Clicking image can do nothing or toggle zoom.
          // Let's just catch propagation so it doesn't close immediately if user clicks image.
          />
        </div>
      )}
    </div>
  );
};

export default Memories;
