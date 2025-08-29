import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>© 2025 Hackathon. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-blue-400">Twitter</a>
        <a href="#" className="hover:text-blue-400">LinkedIn</a>
        <a href="#" className="hover:text-blue-400">Email</a>
      </div>
    </footer>
  );
}
