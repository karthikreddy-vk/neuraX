import React, { useState, useEffect } from "react";

export default function Hero() {
  const calculateTimeLeft = () => {
    const target = new Date("2025-12-31").getTime();
    const now = new Date().getTime();
    const difference = target - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-green-400 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">HackAI 2025</h1>
      <p className="text-lg mb-6">Innovate. Collaborate. Create the Future.</p>
      <div className="flex space-x-6 text-xl font-semibold mb-6">
        {Object.keys(timeLeft).map((interval) => (
          <div key={interval}>
            {timeLeft[interval]} {interval}
          </div>
        ))}
      </div>
      <a href="#contact" className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition">
        Register Now
      </a>
    </section>
  );
}
