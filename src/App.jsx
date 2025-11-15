import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BusinessHero from "./components/BusinessHero";
import Login from "./pages/Login";
import ContactSection from "./pages/Contact";
import ProductsServices from "./pages/Products";
import SecuritySafety from "./pages/SecuritySafety";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

export default function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      {/* Always visible */}
      <Navbar />

      <main className="flex-grow">
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <BusinessHero />
              </>
            }
          />

          {/* Contact Page */}
          <Route path="/contact" element={<ContactSection />} />

          {/* Products & Services Page */}
          <Route path="/products" element={<ProductsServices />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Redirect any unknown route */}
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* Security Page */}
          <Route path="/security" element={<SecuritySafety />} />

          {/* Protected Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </main>

      {/* Always visible */}
      <Footer />
    </div>
  );
}
