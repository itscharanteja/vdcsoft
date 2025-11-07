import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vdc_4.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", id: "services" },
    { label: "Process", id: "process" },
    { label: "Pricing", id: "pricing" },
  ];

  const handleNavClick = (id) => {
    scrollToId(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className="border-b border-secondary/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 sticky top-0 z-40"
      role="banner"
    >
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="VDCSoft Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-accent">VDCsoft.</span>
            </Link>
            <span className="hidden text-sm text-brandText/60 sm:inline">
              Based in Sweden · GDPR-ready
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-secondary/40 text-brandText md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>

            <nav aria-label="Main navigation" className="hidden md:block">
              <ul className="flex items-center gap-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className="text-brandText/80 transition hover:text-brandText hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="px-4 py-2 rounded-xl bg-primary text-white shadow-sm transition hover:bg-primary/90 focus-ring"
                  >
                    Book call
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div
          className={`md:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          } grid transition-all duration-300`}
        >
          <div className="overflow-hidden">
            <nav
              aria-label="Mobile navigation"
              className="mt-4 space-y-3 rounded-2xl border border-secondary/30 bg-white p-4 shadow-md"
            >
              <div className="text-sm text-brandText/60 sm:hidden">
                Based in Sweden · GDPR-ready
              </div>
              <ul className="flex flex-col gap-3 text-base">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className="block rounded-xl px-3 py-2 text-brandText/80 transition hover:bg-secondary/10 hover:text-brandText"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleNavClick("contact")}
                className="mt-3 w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-background shadow-md transition hover:bg-accent/90 focus-ring"
              >
                Book a strategy call
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
