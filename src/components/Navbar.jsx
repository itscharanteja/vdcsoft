import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vdc_3.svg";

function scrollToId(id) {
  if (!id) return;
  const el =
    document.getElementById(id) || document.querySelector(`a[name="${id}"]`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // update hash without jumping
    history.replaceState(null, "", `#${id}`);
  }
}

export default function Navbar() {
  return (
    <header className="border-b" role="banner">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="VDCSoft Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-primary">VDCSoft</span>
          </Link>
          <span className="text-sm text-gray-500">
            Based in Sweden · GDPR-ready
          </span>
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("services");
                }}
                className="hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("process");
                }}
                className="hover:underline"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("pricing");
                }}
                className="hover:underline"
              >
                Pricing
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollToId("contact")}
                className="px-4 py-2 rounded-md bg-primary text-white focus-ring"
              >
                Book call
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
