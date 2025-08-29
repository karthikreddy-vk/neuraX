import React from "react";

export default function Sponsors() {
  const sponsors = ["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4"];
  return (
    <section id="sponsors" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Sponsors</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {sponsors.map((s, idx) => (
          <div key={idx} className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
