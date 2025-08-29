import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange}
          className="w-full p-3 border rounded-lg" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}
          className="w-full p-3 border rounded-lg" required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange}
          className="w-full p-3 border rounded-lg" required />
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
