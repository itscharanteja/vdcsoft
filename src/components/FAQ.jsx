import React from "react";

const faqs = [
  {
    q: "You’re new — why trust you?",
    a: "We’re founder-led and deliver senior expertise with transparent milestones, references via demos, and a guarantee.",
  },
  {
    q: "How do you report progress?",
    a: "Weekly updates, access to analytics dashboards and a clear KPI scoreboard.",
  },
  {
    q: "Who owns the website?",
    a: "You retain full ownership and source files; we provide deployment instructions.",
  },
  {
    q: "Do you offer maintenance plans?",
    a: "Yes — optional monthly retainers for updates, monitoring, and ad management.",
  },
];

export default function FAQ() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <div className="mt-4 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="p-4 bg-white rounded-2xl shadow-sm">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
