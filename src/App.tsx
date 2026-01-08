import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Memories from "./pages/Memories";
import States from "./pages/States";
import TamilnaduExplorer from "./pages/TamilnaduExplorer";
import KeralaExplorer from "./pages/KeralaExplorer";
import KarnatakaExplorer from "./pages/KarnatakaExplorer";
import GoaExplorer from "./pages/GoaExplorer";
import DelhiExplorer from "./pages/DelhiExplorer";
import MaharashtraExplorer from "./pages/MaharashtraExplorer";
import AndhraPradeshExplorer from "./pages/AndhraPradeshExplorer";
import TelanganaExplorer from "./pages/TelanganaExplorer";
import JammuKashmirExplorer from "./pages/JammuKashmirExplorer";
import PuducherryExplorer from "./pages/PuducherryExplorer";
import GujaratExplorer from "./pages/GujaratExplorer";
import RajasthanExplorer from "./pages/RajasthanExplorer";
import LadakhExplorer from "./pages/LadakhExplorer";
import MadhyaPradeshExplorer from "./pages/MadhyaPradeshExplorer";
import AssamExplorer from "./pages/AssamExplorer";
import AndamanExplorer from "./pages/AndamanExplorer";
import UttarPradeshExplorer from "./pages/UttarPradeshExplorer";
import BiharExplorer from "./pages/BiharExplorer";
import JharkhandExplorer from "./pages/JharkhandExplorer";
import SikkimExplorer from "./pages/SikkimExplorer";
import MeghalayaExplorer from "./pages/MeghalayaExplorer";
import ArunachalExplorer from "./pages/ArunachalExplorer";
import NagalandExplorer from "./pages/NagalandExplorer";
import ManipurExplorer from "./pages/ManipurExplorer";
import HimachalExplorer from "./pages/HimachalExplorer";
import WestBengalExplorer from "./pages/WestBengalExplorer";
import OdishaExplorer from "./pages/OdishaExplorer";
import ChhattisgarhExplorer from "./pages/ChhattisgarhExplorer"; // Refresh
import PunjabExplorer from "./pages/PunjabExplorer";
import TripuraExplorer from "./pages/TripuraExplorer";
import MizoramExplorer from "./pages/MizoramExplorer";
import HaryanaExplorer from "./pages/HaryanaExplorer";
import NotFound from "./pages/NotFound";

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
          <Route path="/states/tamilnadu" element={<TamilnaduExplorer />} />
          <Route path="/states/kerala" element={<KeralaExplorer />} />
          <Route path="/states/karnataka" element={<KarnatakaExplorer />} />
          <Route path="/states/goa" element={<GoaExplorer />} />
          <Route path="/states/delhi" element={<DelhiExplorer />} />
          <Route path="/states/maharashtra" element={<MaharashtraExplorer />} />
          <Route path="/states/chhattisgarh" element={<ChhattisgarhExplorer />} />
          <Route path="/states/andhrapradesh" element={<AndhraPradeshExplorer />} />
          <Route path="/states/telangana" element={<TelanganaExplorer />} />
          <Route path="/states/jammukashmir" element={<JammuKashmirExplorer />} />
          <Route path="/states/puducherry" element={<PuducherryExplorer />} />
          <Route path="/states/gujarat" element={<GujaratExplorer />} />
          <Route path="/states/rajasthan" element={<RajasthanExplorer />} />
          <Route path="/states/ladakh" element={<LadakhExplorer />} />
          <Route path="/states/madhyapradesh" element={<MadhyaPradeshExplorer />} />
          <Route path="/states/assam" element={<AssamExplorer />} />
          <Route path="/states/andaman" element={<AndamanExplorer />} />
          <Route path="/states/uttarpradesh" element={<UttarPradeshExplorer />} />
          <Route path="/states/bihar" element={<BiharExplorer />} />
          <Route path="/states/jharkhand" element={<JharkhandExplorer />} />
          <Route path="/states/sikkim" element={<SikkimExplorer />} />
          <Route path="/states/meghalaya" element={<MeghalayaExplorer />} />
          <Route path="/states/arunachal" element={<ArunachalExplorer />} />
          <Route path="/states/nagaland" element={<NagalandExplorer />} />
          <Route path="/states/manipur" element={<ManipurExplorer />} />
          <Route path="/states/himachal" element={<HimachalExplorer />} />
          <Route path="/states/west-bengal" element={<WestBengalExplorer />} />
          <Route path="/states/odisha" element={<OdishaExplorer />} />

          <Route path="/states/punjab" element={<PunjabExplorer />} />
          <Route path="/states/tripura" element={<TripuraExplorer />} />
          <Route path="/states/mizoram" element={<MizoramExplorer />} />
          <Route path="/states/haryana" element={<HaryanaExplorer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
