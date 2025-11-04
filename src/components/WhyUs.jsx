import React from "react";

export default function WhyUs() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        We’re new — that’s your advantage.
      </h2>
      <p className="mt-3 text-gray-700">
        Senior-level execution at startup pricing. Fast delivery, direct founder
        contact, and transparent reporting.
      </p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h4 className="font-semibold">Professional Execution</h4>
          <p className="text-sm text-gray-600 mt-2">
            Fast, professional websites at competitive rates with measurable
            performance improvements.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h4 className="font-semibold">Satisfaction Guarantee</h4>
          <p className="text-sm text-gray-600 mt-2">
            Not satisfied in 30 days? Get 50% refund or a free optimization
            cycle.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h4 className="font-semibold">Transparent Pricing</h4>
          <p className="text-sm text-gray-600 mt-2">
            Clear pricing, no hidden fees, and personal commitment to your
            growth.
          </p>
        </div>
      </div>
      {/* Optional Services */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-purple-100">
          <h4 className="font-semibold flex items-center">
            <svg
              className="w-5 h-5 text-purple-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Ongoing Maintenance
          </h4>
          <p className="text-sm text-gray-600 mt-2">
            SEK 5,000–10,000/month for updates, backups, and security
            maintenance.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-purple-100">
          <h4 className="font-semibold flex items-center">
            <svg
              className="w-5 h-5 text-purple-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            Digital Marketing
          </h4>
          <p className="text-sm text-gray-600 mt-2">
            Starting at SEK 7,500/month for ad campaigns and organic SEO
            efforts.
          </p>
        </div>
      </div>

      {/* Early Stage Offer */}
      <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-purple-100 via-purple-50 to-white border border-purple-100 glow-effect relative overflow-hidden">
        <div className="relative z-10">
          <strong className="text-purple-700">Early Stage Offer:</strong>{" "}
          <span className="bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
            First 5 clients get 10-15% off any package! Plus, get a satisfaction
            guarantee.
          </span>
        </div>
      </div>
    </div>
  );
}
