import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-gray-700">
        This is a placeholder Privacy Policy. VDCSoft is GDPR-ready. We collect
        only necessary contact information and store it securely. We use
        analytics to improve our service. Contact: vdfcsoft@outlook.com
      </p>
      <section className="mt-6 bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="font-semibold">Data we collect</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
          <li>Contact form entries (name, email, company, message)</li>
          <li>Analytics data (anonymous)</li>
        </ul>
      </section>
    </div>
  );
}
