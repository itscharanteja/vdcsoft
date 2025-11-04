import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 flex flex-col gap-6">
        {/* Referral Banner */}
        <div className="text-center p-4 bg-purple-50 rounded-xl">
          <p className="text-purple-700 font-medium">
            🎁 Refer a Friend: Both you and your referral get an extra 5% off!
          </p>
          <p className="text-sm text-purple-600 mt-1">
            Limited time offer for our first 5 clients per package
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-xl font-bold text-primary">VDCSoft</div>
            <div className="text-sm text-gray-500">
              Based in Sweden · GDPR-ready
            </div>
          </div>
          <nav aria-label="Footer navigation" className="flex gap-4">
            <Link to="/">Home</Link>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="text-sm text-gray-500">
            © {year} VDCSoft ·{" "}
            <Link to="/privacy" className="underline">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link to="/terms" className="underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
