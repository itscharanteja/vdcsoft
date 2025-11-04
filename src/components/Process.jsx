// Removed stray opening markdown fence
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    title: "Discover",
    desc: "Research, audits, and KPI definition",
    icon: "🔍",
  },
  { title: "Plan", desc: "Scope, milestones, and tracking setup", icon: "📋" },
  { title: "Build", desc: "Implementation, testing, and QA", icon: "⚡" },
  {
    title: "Optimize",
    desc: "Iterate on data and growth experiments",
    icon: "📈",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stepVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.08, type: "spring", stiffness: 120 },
    }),
  };

  const spreadVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const flowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const glowVariants = {
    start: { opacity: 0, pathOffset: 0 },
    end: {
      opacity: [0, 1, 0],
      pathOffset: 1,
      transition: { duration: 2, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <section id="process" ref={ref} className="py-4">
      <h2 className="text-2xl font-semibold">Our process</h2>
      <p className="text-gray-600 mt-2">
        A clear 4-step delivery path so you always know what's next.
      </p>

      <div className="mt-12 relative h-[300px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 300"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d="M200,150 C300,150 350,150 450,150 C550,150 600,150 700,150 C800,150 850,150 950,150"
            fill="none"
            stroke="#E9E5FF"
            strokeWidth="4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={flowVariants}
          />
          <motion.path
            d="M200,150 C300,150 350,150 450,150 C550,150 600,150 700,150 C800,150 850,150 950,150"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="4"
            strokeLinecap="round"
            initial="start"
            animate="end"
            variants={glowVariants}
            style={{ filter: "drop-shadow(0 0 8px #4F46E5)" }}
          />
        </svg>

        <div className="grid md:grid-cols-4 gap-6 relative z-10">
          {steps.map((s, i) => (
            <CardWithIcons
              key={s.title}
              step={s}
              index={i}
              inView={inView}
              stepVariants={stepVariants}
              spreadVariants={spreadVariants}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardWithIcons({ step, index, inView, stepVariants, spreadVariants }) {
  const [hovered, setHovered] = useState(false);
  const radius = 64;

  return (
    <motion.div
      custom={index}
      variants={stepVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="p-6 bg-white rounded-2xl shadow-md text-center relative overflow-hidden"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {/* decorative semi-circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-primary/5" />
        <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary/5" />
      </div>

      {/* spreading background */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full"
        style={{ width: 260, height: 260 }}
        variants={spreadVariants}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
      />

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center text-2xl">
          {step.icon}
        </div>
        <h4 className="mt-4 font-semibold">{step.title}</h4>
        <div className="text-sm text-gray-500 mt-2">{step.desc}</div>
      </div>
    </motion.div>
  );
}
