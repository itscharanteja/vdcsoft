import React, { forwardRef, useCallback, useLayoutEffect, useRef, useState } from "react";
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
  const layoutRef = useRef(null);
  const cardRefs = useRef([]);
  const [lineData, setLineData] = useState({
    width: 0,
    height: 80,
    d: "",
    points: [],
    length: 0,
  });

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

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.3 + i * 0.1, ease: "easeOut" },
    }),
  };

  const recalcLine = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!layoutRef.current) return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const containerRect = layoutRef.current.getBoundingClientRect();

    if (!isDesktop) {
      setLineData((prev) => ({
        ...prev,
        width: containerRect.width,
        d: "",
        points: [],
        length: 0,
      }));
      return;
    }

    const usableRefs = cardRefs.current.filter((el) => el);
    if (!usableRefs.length) {
      setLineData((prev) => ({
        ...prev,
        width: containerRect.width,
        d: "",
        points: [],
        length: 0,
      }));
      return;
    }

    const positions = usableRefs.map((el) => {
      const rect = el.getBoundingClientRect();
      return rect.left + rect.width / 2 - containerRect.left;
    });

    const totalLength = positions.reduce((sum, x, idx) => {
      if (idx === 0) return sum;
      return sum + Math.abs(x - positions[idx - 1]);
    }, 0);

    const height = 80;
    const midY = height / 2;
    const d = positions
      .map((x, idx) => `${idx === 0 ? "M" : "L"} ${x} ${midY}`)
      .join(" ");

    setLineData({
      width: containerRect.width,
      height,
      d,
      points: positions,
      length: totalLength,
    });
  }, []);

  useLayoutEffect(() => {
    recalcLine();
    window.addEventListener("resize", recalcLine);
    return () => window.removeEventListener("resize", recalcLine);
  }, [recalcLine]);

  return (
    <section id="process" ref={ref} className="py-4">
      <h2 className="text-2xl font-semibold">Our process</h2>
      <p className="text-brandText/70 mt-2">
        We follow a structured process to ensure consistent quality and results
        with every project.
      </p>

      <div className="relative mt-12" ref={layoutRef}>
        {lineData.d && (
          <svg
            className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 md:block"
            viewBox={`0 0 ${Math.max(lineData.width, 1)} ${lineData.height}`}
            preserveAspectRatio="none"
            style={{
              width: lineData.width,
              height: lineData.height,
            }}
          >
            <motion.path
              d={lineData.d}
              fill="none"
              stroke="#D4C4B7"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength="1"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={lineVariants}
            />
            {lineData.length > 0 && (
              <motion.path
                key={`highlight-${lineData.d}`}
                d={lineData.d}
                fill="none"
                stroke="#F7DFAE"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${Math.max(
                  Math.min(lineData.length * 0.35, 220),
                  100
                )} ${Math.max(lineData.length, 1)}`}
                strokeDashoffset={lineData.length}
                initial={{ strokeDashoffset: lineData.length, opacity: 0 }}
                animate={
                  inView
                    ? { strokeDashoffset: -lineData.length, opacity: 1 }
                    : { strokeDashoffset: lineData.length, opacity: 0 }
                }
                transition={
                  inView
                    ? { duration: 3.2, ease: "linear", repeat: Infinity }
                    : { duration: 0.3 }
                }
                style={{
                  filter: "drop-shadow(0 0 12px rgba(247, 223, 174, 0.7))",
                }}
              />
            )}
            {lineData.points.map((x, idx) => (
              <motion.circle
                key={idx}
                cx={x}
                cy={lineData.height / 2}
                r="9"
                fill="#F3E9E1"
                stroke="#D4C4B7"
                strokeWidth="2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={idx}
                variants={dotVariants}
              />
            ))}
          </svg>
        )}

        <div className="relative z-10 grid gap-5 sm:grid-cols-2 md:flex md:gap-6">
          {steps.map((s, i) => (
            <CardWithIcons
              key={s.title}
              step={s}
              index={i}
              inView={inView}
              stepVariants={stepVariants}
            spreadVariants={spreadVariants}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const CardWithIcons = forwardRef(function CardWithIcons(
  { step, index, inView, stepVariants, spreadVariants },
  ref
) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={stepVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-md md:flex-1"
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
        <div className="text-sm text-brandText/60 mt-2">{step.desc}</div>
      </div>
    </motion.div>
  );
});
