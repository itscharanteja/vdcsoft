import React from "react";

export default function FounderNote() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-6">
      <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
        Photo
      </div>
      <div>
        <h3 className="text-xl font-semibold">From the Founder</h3>
        <p className="text-gray-700 mt-2">
          I started VDCSoft to help small businesses access enterprise-quality
          digital tools without corporate overhead. Values: Clarity · Speed ·
          Accountability.
        </p>
        <div className="mt-4">
          <a
            href="#contact"
            className="px-4 py-2 bg-primary text-white rounded-2xl"
          >
            Let’s talk about your project
          </a>
        </div>
      </div>
    </div>
  );
}
