import React from "react";

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Prizes & Rewards</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">Cash Prize</h3>
          <p className="text-gray-600">Exciting cash rewards for winners.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">Internship</h3>
          <p className="text-gray-600">Exclusive internship opportunities.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">Swags</h3>
          <p className="text-gray-600">Goodies, T-shirts, and more!</p>
        </div>
      </div>
    </section>
  );
}
