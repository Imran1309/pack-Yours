import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Memories from "./pages/Memories";
import States from "./pages/States";
import NotFound from "./pages/NotFound";
import PackageDetails from "./pages/PackageDetails";
import Destinations from "./pages/Destinations";
import BangaloreIVDetails from "./pages/BangaloreIVDetails";
import MumbaiIVDetails from "./pages/MumbaiIVDetails";
import HyderabadIVDetails from "./pages/HyderabadIVDetails";
import GoaIVDetails from "./pages/GoaIVDetails";
import ManaliIVDetails from "./pages/ManaliIVDetails";
import OotyIVDetails from "./pages/OotyIVDetails";
import KeralaDetails from "./pages/KeralaDetails";
import KeralaIVDetails from "./pages/KeralaIVDetails";
import KarnatakaIVDetails from "./pages/KarnatakaIVDetails";
import KodaikanalIVDetails from "./pages/KodaikanalIVDetails";
import VagamonDetails from "./pages/VagamonDetails";
import MunnarDetails from "./pages/MunnarDetails";
import AlleppeyDetails from "./pages/AlleppeyDetails";
import VarkalaDetails from "./pages/VarkalaDetails";
import KochiDetails from "./pages/KochiDetails";
import GoaDetails from "./pages/GoaDetails";
import KodaikanalDetails from "./pages/KodaikanalDetails";
import OotyDetails from "./pages/OotyDetails";
import CoorgDetails from "./pages/CoorgDetails";
import AndamanDetails from "./pages/AndamanDetails";
import LakshadweepDetails from "./pages/LakshadweepDetails";
import DarjeelingDetails from "./pages/DarjeelingDetails";
import KashmirDetails from "./pages/KashmirDetails";
import ManaliDetails from "./pages/ManaliDetails";
import UdaipurDetails from "./pages/UdaipurDetails";
import SikkimDetails from "./pages/SikkimDetails";
import DevotionalDetails from "./pages/DevotionalDetails";
import TemplePackages from "./pages/TemplePackages";
import KeralaTempleDetails from "./pages/KeralaTempleDetails";
import TamilNaduTempleDetails from "./pages/TamilNaduTempleDetails";
import AndhraTempleDetails from "./pages/AndhraTempleDetails";
import KashmirTempleDetails from "./pages/KashmirTempleDetails";
import PunjabTempleDetails from "./pages/PunjabTempleDetails";
import MumbaiTempleDetails from "./pages/MumbaiTempleDetails";
import PalaniDetails from "./pages/PalaniDetails";
import ThiruvannamalaiDetails from "./pages/ThiruvannamalaiDetails";
import TirupatiTempleDetails from "./pages/TirupatiTempleDetails";
import SabarimalaDetails from "./pages/SabarimalaDetails";
import ThiruchendurDetails from "./pages/ThiruchendurDetails";
import CollegeIVDetails from "./pages/CollegeIVDetails";
import EducationalTripDetails from "./pages/EducationalTripDetails";
import AllIndiaTripDetails from "./pages/AllIndiaTripDetails";
import SpecialTripDetails from "./pages/SpecialTripDetails";
import AgraDetails from "./pages/AgraDetails";
import WeddingTripDetails from "./pages/WeddingTripDetails";
import JaipurWeddingDetails from "./pages/JaipurWeddingDetails";
import JodhpurJaisalmerDetails from "./pages/JodhpurJaisalmerDetails";
import MakeOwnPlan from "./pages/MakeOwnPlan";
import KochiWeddingDetails from "./pages/KochiWeddingDetails";
import AndamanWeddingDetails from "./pages/AndamanWeddingDetails";
import LakshadweepWeddingDetails from "./pages/LakshadweepWeddingDetails";
import ChennaiWeddingDetails from "./pages/ChennaiWeddingDetails";
import GoaWeddingDetails from "./pages/GoaWeddingDetails";
import ShimlaWeddingDetails from "./pages/ShimlaWeddingDetails";
import CoorgWeddingDetails from "./pages/CoorgWeddingDetails";
import ValparaiIVDetails from "./pages/ValparaiIVDetails";
import PondicherryIVDetails from "./pages/PondicherryIVDetails";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AdminBookings from "./pages/AdminBookings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/states" element={<States />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/package-details/:category" element={<PackageDetails />} />
          <Route path="/package-details" element={<PackageDetails />} />

          <Route path="/college-iv-details" element={<CollegeIVDetails />} />
          <Route path="/educational-trip-details" element={<EducationalTripDetails />} />
          <Route path="/all-india-trip-details" element={<AllIndiaTripDetails />} />
          <Route path="/wedding-trip-details" element={<WeddingTripDetails />} />

          {/* Destination Routes */}
          <Route path="/destinations/jaipur" element={<JaipurWeddingDetails />} />
          <Route path="/destinations/jodhpur-jaisalmer" element={<JodhpurJaisalmerDetails />} />
          <Route path="/destinations/kochi-wedding" element={<KochiWeddingDetails />} />
          <Route path="/destinations/andaman" element={<AndamanWeddingDetails />} />
          <Route path="/destinations/lakshadweep" element={<LakshadweepWeddingDetails />} />
          <Route path="/make-own-plan" element={<MakeOwnPlan />} />
          <Route path="/special-trip-details" element={<SpecialTripDetails />} />

          {/* College IV Routes */}
          <Route path="/college-iv/kerala" element={<KeralaIVDetails />} />
          <Route path="/college-iv/bangalore" element={<BangaloreIVDetails />} />
          <Route path="/college-iv/kodaikanal" element={<KodaikanalIVDetails />} />
          <Route path="/college-iv/mumbai" element={<MumbaiIVDetails />} />
          <Route path="/college-iv/hyderabad" element={<HyderabadIVDetails />} />
          <Route path="/college-iv/goa" element={<GoaIVDetails />} />
          <Route path="/college-iv/manali" element={<ManaliIVDetails />} />
          <Route path="/college-iv/karnataka" element={<KarnatakaIVDetails />} />
          <Route path="/college-iv/valparai" element={<ValparaiIVDetails />} />
          <Route path="/college-iv/pondicherry" element={<PondicherryIVDetails />} />

          {/* Destinations */}
          <Route path="/destinations/ooty" element={<OotyIVDetails />} />
          <Route path="/devotional-details" element={<DevotionalDetails />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/kerala" element={<KeralaDetails />} />
          {/* <Route path="/destinations/tamil-nadu" element={<TamilNaduDetails />} /> */}
          <Route path="/destinations/kerala/vagamon" element={<VagamonDetails />} />
          <Route path="/destinations/kerala/munnar" element={<MunnarDetails />} />
          <Route path="/destinations/kerala/alleppey" element={<AlleppeyDetails />} />
          <Route path="/destinations/kerala/varkala" element={<VarkalaDetails />} />
          <Route path="/destinations/kerala/kochi" element={<KochiDetails />} />
          <Route path="/destinations/goa" element={<GoaDetails />} />
          <Route path="/destinations/kodaikanal" element={<KodaikanalDetails />} />
          <Route path="/destinations/coorg" element={<CoorgDetails />} />
          <Route path="/destinations/andaman" element={<AndamanDetails />} />
          <Route path="/destinations/lakshadweep" element={<LakshadweepDetails />} />
          <Route path="/destinations/darjeeling" element={<DarjeelingDetails />} />
          <Route path="/destinations/kashmir" element={<KashmirDetails />} />
          <Route path="/destinations/manali" element={<ManaliDetails />} />
          <Route path="/destinations/udaipur" element={<UdaipurDetails />} />
          <Route path="/destinations/sikkim" element={<SikkimDetails />} />
          <Route path="/destinations/agra" element={<AgraDetails />} />
          {/* <Route path="/destinations/punjab" element={<PunjabDetails />} /> */}
          {/* <Route path="/destinations/andhra" element={<AndhraDetails />} /> */}
          {/* <Route path="/destinations/mumbai" element={<MumbaiDetails />} /> */}
          {/* <Route path="/destinations/karnataka" element={<KarnatakaDetails />} /> */}

          {/* Temple Routes */}
          <Route path="/temple-packages" element={<TemplePackages />} />
          <Route path="/destinations/palani" element={<PalaniDetails />} />
          <Route path="/destinations/thiruvannamalai" element={<ThiruvannamalaiDetails />} />
          <Route path="/destinations/tirupati" element={<TirupatiTempleDetails />} />
          <Route path="/destinations/sabarimala" element={<SabarimalaDetails />} />
          <Route path="/destinations/thiruchendur" element={<ThiruchendurDetails />} />
          <Route path="/destinations/kerala-temple" element={<KeralaTempleDetails />} />
          <Route path="/destinations/tamilnadu-temple" element={<TamilNaduTempleDetails />} />
          <Route path="/destinations/andhra-temple" element={<AndhraTempleDetails />} />
          <Route path="/destinations/kashmir-temple" element={<KashmirTempleDetails />} />
          <Route path="/destinations/punjab-temple" element={<PunjabTempleDetails />} />
          <Route path="/destinations/mumbai-temple" element={<MumbaiTempleDetails />} />
          <Route path="/temple/palani" element={<TamilNaduTempleDetails />} />

          {/* Wedding Routes */}
          <Route path="/destinations/chennai-wedding" element={<ChennaiWeddingDetails />} />
          <Route path="/destinations/goa-wedding" element={<GoaWeddingDetails />} />
          <Route path="/destinations/shimla-wedding" element={<ShimlaWeddingDetails />} />
          <Route path="/destinations/coorg-wedding" element={<CoorgWeddingDetails />} />

          <Route path="/admin-bookings" element={<AdminBookings />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
