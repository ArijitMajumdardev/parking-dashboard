// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LayoutPage from "./pages/LayoutPage";
import BillingPage from "./pages/BillingPage";
import ParkingProvider from "./context/ParkingContext";


export default function App() {
  return (
    <ParkingProvider>
      <BrowserRouter>
        <Header />
        <main className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<LayoutPage />} />
            <Route path="/billing" element={<BillingPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ParkingProvider>
  );
}
