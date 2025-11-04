import React, { useEffect, useState } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(
    () => localStorage.getItem("vdc_cookies") === "1"
  );

  useEffect(() => {
    if (accepted) localStorage.setItem("vdc_cookies", "1");
  }, [accepted]);

  if (accepted) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 z-50">
      <div className="bg-white p-4 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-gray-700">
          We use essential cookies to run this site and analytics to improve our
          service. By continuing you accept our{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 rounded-md border"
            onClick={() => setAccepted(true)}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
