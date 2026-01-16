
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import API from "@/api/api";
import { Edit, Image as ImageIcon, Trash2 } from "lucide-react";

interface OfferData {
    imageUrl: string;
    percentage: string;
    isVisible: boolean;
    backgroundColor?: string;
}

const SpecialOffer = () => {
    const [offer, setOffer] = useState<OfferData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isOwner, setIsOwner] = useState(false);
    const [open, setOpen] = useState(false);

    // Form States
    const [percentage, setPercentage] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [backgroundColor, setBackgroundColor] = useState("#000000");

    const fileInputRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();

    useEffect(() => {
        checkOwner();
        fetchOffer(true); // Initial fetch with loading

        // Poll for updates every 10 seconds to ensure clients see new offers immediately
        const interval = setInterval(() => {
            fetchOffer(false);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    // Sync form data only when opening the dialog to prevent overwriting active edits
    useEffect(() => {
        if (open && offer) {
            setPercentage(offer.percentage || "");
            setIsVisible(offer.isVisible ?? true);
            if (offer.backgroundColor) setBackgroundColor(offer.backgroundColor);
        }
    }, [open]);

    const checkOwner = () => {
        const userStr = localStorage.getItem("currentUser");
        if (userStr) {
            const user = JSON.parse(userStr);
            // Hardcoded owner check matching backend
            if (user.email === "dhanatrip2020@gmail.com") {
                setIsOwner(true);
            }
        }
    };

    const fetchOffer = async (showLoading = false) => {
        if (showLoading) setLoading(true);
        try {
            const { data } = await API.get("/special-offer");
            if (data) {
                setOffer(data);
            }
        } catch (error) {
            console.error("Failed to fetch offer", error);
        } finally {
            if (showLoading) setLoading(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this offer? This cannot be undone.")) return;

        try {
            const userStr = localStorage.getItem("currentUser");
            if (!userStr) return;
            const user = JSON.parse(userStr);

            await API.delete("/special-offer", {
                data: { userEmail: user.email }
            });

            setOffer(null);
            toast({ title: "Deleted", description: "Special offer has been deleted." });
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.response?.data?.message || "Failed to delete offer",
                variant: "destructive"
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Allow update without image if one already exists
        if (!offer?.imageUrl && !imageFile) {
            toast({ title: "Image required", description: "Please upload an offer image.", variant: "destructive" });
            return;
        }

        const formData = new FormData();
        formData.append("percentage", percentage);
        formData.append("isVisible", isVisible.toString());
        formData.append("backgroundColor", backgroundColor);

        // Send user email for backend verification
        const userStr = localStorage.getItem("currentUser");
        if (userStr) {
            const user = JSON.parse(userStr);
            formData.append("userEmail", user.email);
        }

        if (imageFile) {
            formData.append("image", imageFile);
        }

        try {
            const { data } = await API.post("/special-offer", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setOffer(data.offer);
            setOpen(false);
            toast({ title: "Success", description: "Special offer updated successfully!" });
        } catch (error: any) {
            console.error(error);
            toast({
                title: "Error",
                description: error.response?.data?.message || "Failed to update offer",
                variant: "destructive"
            });
        }
    };

    if (loading) return null;

    // Render nothing if no offer and not owner
    if (!offer && !isOwner) return null;

    // Render nothing if hidden and not owner
    if (offer && !offer.isVisible && !isOwner) return null;

    // Helper to fix protocol for local IP addresses (failed https detection)
    const getCorrectImageUrl = (url: string) => {
        if (!url) return "";
        if (url.includes(":5000") && url.startsWith("https:")) {
            return url.replace("https:", "http:");
        }
        return url;
    };

    return (
        <section className="container mx-auto px-4 py-8">
            {isOwner && (
                <div className="flex justify-end mb-4 gap-2">
                    {offer && (
                        <Button
                            variant="destructive"
                            onClick={handleDelete}
                            className="gap-2"
                        >
                            <Trash2 className="w-4 h-4" />
                            Delete Offer
                        </Button>
                    )}
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="gap-2 bg-yellow-400 text-black hover:bg-yellow-500 border-none">
                                <Edit className="w-4 h-4" />
                                {offer ? "Edit Special Offer" : "Add Special Offer"}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle>Manage Special Offer</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-6 py-4">
                                <div className="space-y-2">
                                    <Label>Offer Image</Label>
                                    <div
                                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-yellow-500 transition-colors"
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        {previewUrl || offer?.imageUrl ? (
                                            <img
                                                src={previewUrl || getCorrectImageUrl(offer?.imageUrl || "")}
                                                alt="Preview"
                                                className="h-40 object-cover rounded-md"
                                            />
                                        ) : (
                                            <div className="text-center text-gray-400">
                                                <ImageIcon className="w-12 h-12 mx-auto mb-2" />
                                                <p>Click to upload image</p>
                                            </div>
                                        )}
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="percentage">Discount Percentage (e.g. "50% OFF")</Label>
                                    <Input
                                        id="percentage"
                                        value={percentage}
                                        onChange={(e) => setPercentage(e.target.value)}
                                        placeholder="50% OFF"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="bgColor">Background Color (Cover Custom)</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id="bgColor"
                                            type="color"
                                            value={backgroundColor}
                                            onChange={(e) => setBackgroundColor(e.target.value)}
                                            className="w-16 h-10 p-1"
                                        />
                                        <Input
                                            value={backgroundColor}
                                            onChange={(e) => setBackgroundColor(e.target.value)}
                                            placeholder="#000000"
                                            className="flex-1"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between space-x-2 border p-3 rounded-md">
                                    <Label htmlFor="visibility" className="cursor-pointer">Show to all web users?</Label>
                                    <Switch
                                        id="visibility"
                                        checked={isVisible}
                                        onCheckedChange={setIsVisible}
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                                    Save Offer
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            )}

            {offer && (
                <div className={`relative rounded-xl overflow-hidden shadow-2xl ${!offer.isVisible ? 'opacity-75 grayscale' : ''}`}>
                    {!offer.isVisible && isOwner && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">
                            HIDDEN FROM PUBLIC
                        </div>
                    )}

                    <div
                        className="relative w-full min-h-[300px] flex justify-center items-center overflow-hidden bg-gray-50 border border-white/10"
                        style={!offer.imageUrl ? { backgroundColor: offer.backgroundColor || '#000000' } : undefined}
                    >
                        {/* Aesthetic Blurred Backdrop */}
                        {offer.imageUrl && (
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center blur-3xl opacity-60 scale-110 transition-all duration-700"
                                style={{ backgroundImage: `url(${getCorrectImageUrl(offer.imageUrl)})` }}
                            />
                        )}

                        {offer.imageUrl ? (
                            <img
                                src={getCorrectImageUrl(offer.imageUrl)}
                                alt="Special Offer"
                                className="relative z-10 max-w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl mx-auto transition-transform duration-500 hover:scale-[1.02]"
                            />
                        ) : (
                            // Fallback Overlay text only if NO image is present
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
                                <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tighter">
                                    SPECIAL OFFER
                                </h2>
                                <div className="mt-4 bg-yellow-500 text-black font-bold text-xl md:text-3xl px-6 py-2 rounded-full transform rotate-[-2deg] shadow-lg animate-pulse">
                                    {offer.percentage}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </section>
    );
};

export default SpecialOffer;
