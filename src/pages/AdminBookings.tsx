import { useState, useEffect } from "react";
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthDialog from "@/components/AuthDialog";
import { format, subDays, isAfter, parseISO } from "date-fns";

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
}

const AdminBookings = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authDialogOpen, setAuthDialogOpen] = useState(false);
    const [filterType, setFilterType] = useState("all");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentUserEmail, setCurrentUserEmail] = useState("");
    const OWNER_EMAIL = "dhanatrip2020@gmail.com";
    const navigate = useNavigate();

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
                // Logged in but not owner
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

    if (!isAuthenticated && !loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
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
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-36">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">Booking Applications</h1>

                    <div className="flex items-center gap-4">
                        <Select value={filterType} onValueChange={setFilterType}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter by Date" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Time</SelectItem>
                                <SelectItem value="weekly">Last 7 Days</SelectItem>
                                <SelectItem value="monthly">Last 30 Days</SelectItem>
                                <SelectItem value="yearly">Last Year</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button variant="outline" onClick={fetchBookings}>Refresh</Button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-100">
                                    <TableHead className="font-bold text-black">Submitted</TableHead>
                                    <TableHead className="font-bold text-black">Name</TableHead>
                                    <TableHead className="font-bold text-black">Contact</TableHead>
                                    <TableHead className="font-bold text-black">Destination</TableHead>
                                    <TableHead className="font-bold text-black">Travel Date</TableHead>
                                    <TableHead className="font-bold text-black">Type</TableHead>
                                    <TableHead className="font-bold text-black">People</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={7} className="text-center py-8">Loading...</TableCell>
                                    </TableRow>
                                ) : filteredBookings.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={7} className="text-center py-8">No bookings found.</TableCell>
                                    </TableRow>
                                ) : (
                                    filteredBookings.map((booking) => (
                                        <TableRow key={booking._id || Math.random()} className="hover:bg-gray-50">
                                            <TableCell className="whitespace-nowrap text-sm">
                                                {booking.submittedAt ? format(new Date(booking.submittedAt), "MMM d, yyyy HH:mm") : "N/A"}
                                            </TableCell>
                                            <TableCell className="font-medium">{booking.name}</TableCell>
                                            <TableCell>
                                                <div className="flex flex-col text-sm">
                                                    <span className="font-medium">{booking.email}</span>
                                                    <span className="text-gray-500">{booking.phone}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>{booking.destination}</TableCell>
                                            <TableCell className="whitespace-nowrap">
                                                {booking.date ? format(new Date(booking.date), "MMM d, yyyy") : "N/A"}
                                            </TableCell>
                                            <TableCell>{booking.vacationType}</TableCell>
                                            <TableCell className="text-center">{booking.people}</TableCell>
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
        </div>
    );
};

export default AdminBookings;
