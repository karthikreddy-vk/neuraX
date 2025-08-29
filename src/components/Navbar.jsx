import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">Hackathon</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#schedule" className="hover:text-blue-500">Schedule</a>
          <a href="#tracks" className="hover:text-blue-500">Tracks</a>
          <a href="#prizes" className="hover:text-blue-500">Prizes</a>
          <a href="#sponsors" className="hover:text-blue-500">Sponsors</a>
          <a href="#faq" className="hover:text-blue-500">FAQ</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}
