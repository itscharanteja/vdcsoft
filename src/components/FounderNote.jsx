import React, { useEffect, useState } from "react";

const quotes = [
  {
    message:
      "We obsess over clarity. Every sprint starts with a shared scorecard so you always know where we are and where your growth is headed.",
    name: "Vinod Reddy · Co-founder",
  },
  {
    message: "Purpose is the only algorithm that never fails.",
    name: "Deependra Sai Kumar Reddy · Co-founder",
  },
  {
    message:
      "Partnership over projects. We only win when your team does, so we align every deliverable to measurable business outcomes.",
    name: "Charan Sri Teja Burra · Co-founder",
  },
];

export default function FounderNote() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [paused]);

  const togglePause = () => setPaused((prev) => !prev);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-white via-surface/40 to-secondary/10 p-8 shadow-xl">
      <h3 className="text-xl font-semibold text-brandText">
        Notes from the founders
      </h3>
      <div className="relative mt-6 h-36 overflow-hidden">
        {quotes.map((quote, i) => (
          <blockquote
            key={quote.name}
            onClick={togglePause}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                togglePause();
              }
            }}
            role="button"
            tabIndex={0}
            aria-pressed={paused}
            aria-label={
              paused
                ? "Quote playback paused. Click to resume."
                : "Quote playback running. Click to pause."
            }
            className={`absolute inset-0 cursor-pointer text-lg text-brandText/90 transition-opacity duration-700 focus:outline-none focus:ring-2 focus:ring-accent/40 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            “{quote.message}”
            <footer className="mt-4 text-sm font-semibold text-brandText">
              — {quote.name}
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="mt-2 text-xs text-brandText/60">
        {paused ? "Paused — click to resume" : "Click a quote to pause"}
      </div>
      <div className="mt-4 flex items-center gap-2">
        {quotes.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              i === index ? "bg-accent" : "bg-secondary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
