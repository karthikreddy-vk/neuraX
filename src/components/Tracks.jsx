import React from "react";

export default function Tracks() {
  const tracks = ["Artificial Intelligence", "Sustainability", "FinTech", "HealthTech"];
  return (
    <section id="tracks" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Hackathon Tracks</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {tracks.map((track, idx) => (
          <div key={idx} className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{track}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
