import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    { q: "Who can participate?", a: "Anyone interested in coding and innovation!" },
    { q: "Is it free?", a: "Yes, participation is free." },
    { q: "What should I bring?", a: "Bring your laptop, charger, and enthusiasm." },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">FAQs</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-4 bg-white shadow rounded-lg text-left">
            <button onClick={() => setOpen(open === idx ? null : idx)} className="w-full text-left font-semibold">
              {faq.q}
            </button>
            {open === idx && <p className="mt-2 text-gray-600">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
