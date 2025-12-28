import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import API from "@/api/api";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthDialog from "@/components/AuthDialog";
import { format, subDays, isAfter, parseISO } from "date-fns";
import { CheckCircle, DollarSign, Edit2, TrendingUp } from "lucide-react";

interface Booking {
    _id: string;
    name: string;
    email: string;
    phone: string;
    destination: string;
    date: string;
    people: string;
    vacationType: string;
    submittedAt: string;
    price?: number;
    status?: 'pending' | 'completed' | 'cancelled';
}

const AdminBookings = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authDialogOpen, setAuthDialogOpen] = useState(false);
    const [filterType, setFilterType] = useState("all");
    const [currentUserEmail, setCurrentUserEmail] = useState("");
    const OWNER_EMAIL = "dhanatrip2020@gmail.com";
    const navigate = useNavigate();

    // Editing State
    const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
    const [editPrice, setEditPrice] = useState("");
    const [editStatus, setEditStatus] = useState<string>("pending");
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        const user = localStorage.getItem("currentUser");
        if (user) {
            const parsedUser = JSON.parse(user);
            setCurrentUserEmail(parsedUser.email);
            if (parsedUser.email === OWNER_EMAIL) {
                setIsAuthenticated(true);
                fetchBookings();
            } else {
                setIsAuthenticated(false);
                setLoading(false);
            }
        } else {
            setIsAuthenticated(false);
            setLoading(false);
            setAuthDialogOpen(true);
        }
    };

    const fetchBookings = async () => {
        try {
            setLoading(true);
            const res = await API.get("/bookings");
            setBookings(res.data);
        } catch (error) {
            console.error("Failed to fetch bookings", error);
        } finally {
            setLoading(false);
        }
    };

    const getFilteredBookings = () => {
        if (filterType === "all") return bookings;

        const now = new Date();
        let startDate;

        switch (filterType) {
            case "weekly":
                startDate = subDays(now, 7);
                break;
            case "monthly":
                startDate = subDays(now, 30);
                break;
            case "yearly":
                startDate = subDays(now, 365);
                break;
            default:
                return bookings;
        }

        return bookings.filter((booking) => {
            const bookingDate = booking.submittedAt ? parseISO(booking.submittedAt) : new Date();
            return isAfter(bookingDate, startDate);
        });
    };

    const filteredBookings = getFilteredBookings();

    // Calculate Income
    const totalIncome = useMemo(() => {
        return filteredBookings.reduce((sum, booking) => {
            // Only count completed bookings towards actual realized income
            if (booking.status === 'completed') {
                return sum + (booking.price || 0);
            }
            return sum;
        }, 0);
    }, [filteredBookings]);

    const pendingValue = useMemo(() => {
        return filteredBookings.reduce((sum, booking) => {
            if (booking.status === 'pending' || !booking.status) {
                return sum + (booking.price || 0);
            }
            return sum;
        }, 0);
    }, [filteredBookings]);


    const handleEditClick = (booking: Booking) => {
        setEditingBooking(booking);
        setEditPrice(booking.price?.toString() || "0");
        setEditStatus(booking.status || "pending");
        setIsEditDialogOpen(true);
    };

    const handleUpdateBooking = async () => {
        if (!editingBooking) return;

        try {
            const updatedBooking = {
                ...editingBooking,
                price: parseFloat(editPrice),
                status: editStatus
            };

            await API.put(`/bookings/${editingBooking._id}`, {
                price: updatedBooking.price,
                status: updatedBooking.status
            });

            // Update local state
            setBookings(bookings.map(b => b._id === editingBooking._id ? { ...b, price: updatedBooking.price, status: updatedBooking.status as any } : b));

            setIsEditDialogOpen(false);
            setEditingBooking(null);
        } catch (error) {
            console.error("Failed to update booking", error);
        }
    };

    const markAsComplete = async (booking: Booking) => {
        try {
            await API.put(`/bookings/${booking._id}`, {
                status: 'completed'
            });
            setBookings(bookings.map(b => b._id === booking._id ? { ...b, status: 'completed' } : b));
        } catch (error) {
            console.error("Failed to mark complete", error);
        }
    }

    // Money Rain Effect
    const MoneyRain = () => {
        const [items, setItems] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

        useEffect(() => {
            const newItems = Array.from({ length: 30 }).map((_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 5,
                duration: 5 + Math.random() * 5,
                size: 20 + Math.random() * 20
            }));
            setItems(newItems);
        }, []);

        return (
            <div className="fixed inset-0 pointer-events-none z-0 select-none overflow-hidden">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="absolute top-[-50px] text-emerald-500/30 flex items-center justify-center font-bold"
                        style={{
                            left: `${item.left}%`,
                            animation: `fall ${item.duration}s linear infinite`,
                            animationDelay: `-${item.delay}s`,
                            fontSize: `${item.size}px`,
                        }}
                    >
                        {item.id % 2 === 0 ? '$' : '💰'}
                    </div>
                ))}
                <style>{`
                    @keyframes fall {
                        0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
                        10% { opacity: 0.4; }
                        90% { opacity: 0.4; }
                        100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
                    }
                `}</style>
            </div>
        );
    };

    if (!isAuthenticated && !loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
                {/* Access Denied Component */}
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
                    <p className="mb-6">You must be logged in as the owner to view this page.</p>
                    <div className="space-y-4">
                        <Button onClick={() => setAuthDialogOpen(true)} className="w-full">
                            Login as Owner
                        </Button>
                        <Button variant="outline" onClick={() => navigate('/')} className="w-full">
                            Return Home
                        </Button>
                    </div>
                </div>
                <AuthDialog
                    open={authDialogOpen}
                    onOpenChange={setAuthDialogOpen}
                    onAuthenticated={checkAuth}
                    onLogout={() => {
                        localStorage.removeItem("currentUser");
                        checkAuth();
                    }}
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a2d2f] to-[#0d1617] text-gray-100 relative overflow-hidden">
            <MoneyRain />

            <div className="relative z-10 w-full flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 container mx-auto px-4 py-36">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2 leading-tight">Admin Dashboard</h1>
                            <p className="text-gray-400">Manage bookings and track revenue</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 bg-white/5 p-2 rounded-xl border border-white/10 backdrop-blur-md">
                            <Select value={filterType} onValueChange={setFilterType}>
                                <SelectTrigger className="w-[180px] bg-transparent border-white/20 text-white focus:ring-offset-0 focus:ring-0">
                                    <SelectValue placeholder="Filter by Date" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#1a2d2f] border-white/20 text-white">
                                    <SelectItem value="all">All Time</SelectItem>
                                    <SelectItem value="weekly">Last 7 Days</SelectItem>
                                    <SelectItem value="monthly">Last 30 Days</SelectItem>
                                    <SelectItem value="yearly">Last Year</SelectItem>
                                </SelectContent>
                            </Select>

                            <Button
                                variant="outline"
                                onClick={fetchBookings}
                                className="bg-transparent border-white/20 text-white hover:bg-white/10"
                            >
                                Refresh
                            </Button>
                        </div>
                    </div>

                    {/* Income Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 md:p-6 p-4 rounded-xl border border-emerald-500/30 backdrop-blur-md flex items-center justify-between">
                            <div>
                                <p className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-1">Total Completed Income</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">₹{totalIncome.toLocaleString()}</h2>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
                                <TrendingUp className="text-emerald-400 h-6 w-6" />
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 md:p-6 p-4 rounded-xl border border-yellow-500/30 backdrop-blur-md flex items-center justify-between">
                            <div>
                                <p className="text-yellow-400 font-bold uppercase tracking-wider text-xs mb-1">Pending Value</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">₹{pendingValue.toLocaleString()}</h2>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/50">
                                <DollarSign className="text-yellow-400 h-6 w-6" />
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white/5 rounded-xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-md">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-white/5 border-white/10 hover:bg-white/10">
                                        <TableHead className="font-bold text-gray-300">Submitted</TableHead>
                                        <TableHead className="font-bold text-gray-300">Customer</TableHead>
                                        <TableHead className="font-bold text-gray-300">Destination</TableHead>
                                        <TableHead className="font-bold text-gray-300">Details</TableHead>
                                        <TableHead className="font-bold text-gray-300">Price</TableHead>
                                        <TableHead className="font-bold text-gray-300 text-center">Status</TableHead>
                                        <TableHead className="font-bold text-gray-300 text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {loading ? (
                                        <TableRow>
                                            <TableCell colSpan={7} className="text-center py-12 text-gray-400">Loading bookings...</TableCell>
                                        </TableRow>
                                    ) : filteredBookings.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={7} className="text-center py-12 text-gray-400">No bookings found in this period.</TableCell>
                                        </TableRow>
                                    ) : (
                                        filteredBookings.map((booking) => (
                                            <TableRow key={booking._id || Math.random()} className="hover:bg-white/5 border-white/5 transition-colors">
                                                <TableCell className="text-sm text-gray-400 whitespace-nowrap">
                                                    {booking.submittedAt ? format(new Date(booking.submittedAt), "MMM d, yyyy") : "N/A"}
                                                    <div className="text-xs text-gray-500">
                                                        {booking.submittedAt ? format(new Date(booking.submittedAt), "h:mm a") : ""}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="font-medium text-white">{booking.name}</div>
                                                    <div className="text-xs text-gray-400 font-mono">{booking.phone}</div>
                                                    <a href={`mailto:${booking.email}`} className="text-xs text-[#F2C94C] hover:underline block truncate max-w-[150px]">{booking.email}</a>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="text-white">{booking.destination}</div>
                                                    <div className="text-xs text-gray-400">{booking.vacationType}</div>
                                                </TableCell>
                                                <TableCell className="text-sm text-gray-400">
                                                    <div>{booking.date ? format(new Date(booking.date), "MMM d, yyyy") : "N/A"}</div>
                                                    <div className="text-xs">{booking.people} Guests</div>
                                                </TableCell>
                                                <TableCell className="font-mono font-medium text-white">
                                                    {booking.price ? `₹${booking.price.toLocaleString()}` : '-'}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Badge className={`
                                                    ${booking.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 border' : ''}
                                                    ${booking.status === 'cancelled' ? 'bg-red-500/20 text-red-400 border-red-500/50 border' : ''}
                                                    ${(!booking.status || booking.status === 'pending') ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 border' : ''}
                                                `}>
                                                        {(booking.status || 'pending').toUpperCase()}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        {booking.status !== 'completed' && (
                                                            <Button
                                                                size="icon"
                                                                variant="ghost"
                                                                className="h-8 w-8 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20"
                                                                title="Mark as Completed"
                                                                onClick={() => markAsComplete(booking)}
                                                            >
                                                                <CheckCircle className="h-4 w-4" />
                                                            </Button>
                                                        )}
                                                        <Button
                                                            size="icon"
                                                            variant="ghost"
                                                            className="h-8 w-8 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20"
                                                            title="Edit Income & Status"
                                                            onClick={() => handleEditClick(booking)}
                                                        >
                                                            <Edit2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </main>
                <Footer />

                <AuthDialog
                    open={authDialogOpen}
                    onOpenChange={setAuthDialogOpen}
                    onAuthenticated={checkAuth}
                    onLogout={() => {
                        localStorage.removeItem("currentUser");
                        checkAuth();
                    }}
                />

                {/* Edit Booking Dialog */}
                <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                    <DialogContent className="bg-[#1a2d2f] border-white/10 text-white">
                        <DialogHeader>
                            <DialogTitle>Manage Booking</DialogTitle>
                        </DialogHeader>

                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="price" className="text-right text-gray-300">
                                    Price (₹)
                                </Label>
                                <Input
                                    id="price"
                                    type="number"
                                    value={editPrice}
                                    onChange={(e) => setEditPrice(e.target.value)}
                                    className="col-span-3 bg-white/5 border-white/10 text-white focus:border-[#F2C94C]"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="status" className="text-right text-gray-300">
                                    Status
                                </Label>
                                <Select value={editStatus} onValueChange={setEditStatus}>
                                    <SelectTrigger className="col-span-3 bg-white/5 border-white/10 text-white">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1a2d2f] border-white/10 text-white">
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="completed">Completed</SelectItem>
                                        <SelectItem value="cancelled">Cancelled</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <DialogFooter>
                            <Button variant="ghost" onClick={() => setIsEditDialogOpen(false)} className="text-gray-400 hover:text-white hover:bg-white/10">
                                Cancel
                            </Button>
                            <Button onClick={handleUpdateBooking} className="bg-[#F2C94C] text-black hover:bg-[#d4af37]">
                                Save Changes
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default AdminBookings;
