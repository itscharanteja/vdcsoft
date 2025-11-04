import React from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ChartBarIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Launch. Rank. Grow.
            </h1>
            <p className="mt-4 text-gray-700 max-w-prose">
              VDCSoft is a full-service digital agency helping small and medium
              businesses grow online through web development, SEO, and digital
              marketing.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="px-5 py-3 rounded-2xl bg-primary text-white shadow-md focus-ring"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="#pricing"
                className="px-5 py-3 rounded-2xl border border-gray-200 focus-ring"
              >
                See Our Starter Packages
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Based in Sweden · GDPR-ready · Transparent pricing
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl relative overflow-hidden"
          >
            {/* 3D Abstract Illustration */}
            <div className="h-60 relative z-10">
              {/* Background Gradients */}
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-gradient-to-br from-purple-200 to-purple-50 opacity-60 blur-xl"></div>
              <div className="absolute left-1/4 top-1/4 w-32 h-32 rounded-lg bg-gradient-to-tl from-purple-300 to-purple-100 opacity-50 blur-lg transform rotate-12"></div>
              <div className="absolute right-1/4 bottom-1/4 w-24 h-24 rounded-lg bg-gradient-to-br from-purple-400 to-purple-200 opacity-40 blur-md transform -rotate-12"></div>

              {/* Floating Elements with Icons */}
              {/* Web Development Icon */}
              <motion.div
                className="absolute left-8 top-8 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CodeBracketIcon className="w-8 h-8 text-purple-600" />
              </motion.div>

              {/* Analytics/SEO Icon */}
              <motion.div
                className="absolute right-12 top-1/2 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center"
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <ChartBarIcon className="w-8 h-8 text-purple-500" />
              </motion.div>

              {/* Digital Marketing Icon */}
              <motion.div
                className="absolute left-1/3 bottom-8 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center"
                animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <MegaphoneIcon className="w-8 h-8 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
