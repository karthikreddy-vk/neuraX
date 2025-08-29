import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">About the Hackathon</h2>
      <p className="max-w-2xl mx-auto mb-12 text-gray-600">
        Our hackathon brings together students, developers, and innovators to solve real-world problems
        in AI, sustainability, and more. Join us for an unforgettable experience!
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-gray-600">Bring your boldest ideas to life.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
          <p className="text-gray-600">Work with diverse, talented peers.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Prizes</h3>
          <p className="text-gray-600">Win exciting rewards and recognition.</p>
        </div>
      </div>
    </section>
  );
}
