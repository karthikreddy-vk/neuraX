import React from "react";

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Event Schedule</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">Day 1</h3>
          <p className="text-gray-600">Opening ceremony, team formation, and idea pitching.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">Day 2</h3>
          <p className="text-gray-600">Hackathon coding, workshops, and mentoring.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">Final Pitch</h3>
          <p className="text-gray-600">Project submissions and final presentations.</p>
        </div>
      </div>
    </section>
  );
}
