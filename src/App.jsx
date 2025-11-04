import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import CookieBanner from "./components/CookieBanner";
import Seo from "./components/Seo";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-brandText">
      <Seo />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route
            path="*"
            element={
              <div className="container py-24 text-center">
                <h2 className="text-2xl font-semibold">Page not found</h2>
                <p className="mt-4">
                  Go back{" "}
                  <Link to="/" className="text-primary underline">
                    home
                  </Link>
                  .
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      <footer className="border-t mt-8">
        <div className="container py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} VDCSoft
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}
