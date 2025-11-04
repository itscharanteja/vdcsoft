import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Web Development",
    desc: "Fast, accessible sites built with modern tooling.",
    bullets: ["Responsive sites", "CMS integration", "Performance-first"],
  },
  {
    title: "SEO",
    desc: "Search-first approach to increase organic traffic.",
    bullets: ["Technical SEO", "Content strategy", "GSC + GA4 setup"],
  },
  {
    title: "Digital Marketing",
    desc: "Ads and campaigns that convert.",
    bullets: [
      "Meta/IG/TikTok ads",
      "Analytics & reporting",
      "Email automation",
    ],
  },
  {
    title: "UI/UX & Branding",
    desc: "Design that communicates trust.",
    bullets: ["Brand kits", "Landing pages", "Microcopy"],
  },
];

export default function Services() {
  return (
    <div id="services">
      <h2 className="text-2xl font-semibold">Services</h2>
      <p className="text-gray-600 mt-2">
        What we do — outcome-focused deliverables for SMEs.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            whileHover={{
              rotateX: 2,
              rotateY: 4,
              scale: 1.02,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            className="p-6 bg-white rounded-2xl shadow-md relative overflow-hidden transform-preserve-3d"
          >
            {/* decorative semi-circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-primary/5" />
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary/5" />
            </div>

            <h3 className="font-semibold text-lg relative z-10">{c.title}</h3>
            <p className="text-sm text-gray-600 mt-2 relative z-10">{c.desc}</p>
            <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1 relative z-10">
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
