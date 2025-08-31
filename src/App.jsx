import React, { useEffect, useMemo, useState,useRef } from "react";
import { motion } from "framer-motion";
import logo from "./components/logo.jpg";
import vtlogo from "./components/vtlogo.png";
import cmrtclogo from "./components/cmrtclogo.png";
import { FaWhatsapp } from "react-icons/fa";

import { GraduationCap, Sprout, UserPlus } from "lucide-react";
import banner from "./components/banner.jpg";

import {
  Calendar,
  Clock,
  ChevronDown,
  Rocket,
  Users,
  Lightbulb,
  Cpu,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Gift,
  Trophy,
  Mail,
  Phone,
  Instagram,
  
  Twitter,
  Linkedin,
  Banknote,
  Stethoscope,
  Leaf,
  MapPin,Circle,Flag,
} from "lucide-react";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
const item = {
  hidden: { y: 12, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 140 } },
};

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, targetDate.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-10">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 text-cyan-700 ring-1 ring-cyan-500/20 text-xs font-medium">
          <Rocket className="h-4 w-4" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function Pill({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white/80 backdrop-blur border border-slate-200 px-5 py-3 shadow-sm">
      <div className="text-3xl md:text-4xl font-extrabold text-slate-800 tabular-nums">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-slate-500">{label}</div>
    </div>
  );
}


function Navbar() {
  const links = [
    { id: "about", label: "About" },
    { id: "schedule", label: "Schedule" },
    { id: "tracks", label: "Themes" },
    { id: "prizes", label: "Prizes" },
    { id: "sponsors", label: "Sponsors" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="fixed inset-x-0 top-0 z-50">
  <div className="mx-auto max-w-7xl px-4">
    <div className="mt-3 rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-slate-200 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        <a
          href="#hero"
          className="flex items-center font-black tracking-tight text-slate-800 text-lg gap-2"
          onClick={(e) => handleClick(e, "hero")}
        >
          <img src={logo} alt="NeuraX Logo" className="h-10 w-10 rounded" />
          <span>
            Neura<span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">X</span>
          </span>
        </a>

        {/* Navbar Links */}
        <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleClick(e, l.id)}
              className="hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
  href="https://forms.gle/RE9YrMDKbsK4VQJd8" 
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 px-4 py-2 text-white font-semibold shadow hover:shadow-md hover:opacity-95 active:opacity-90"
>
  <UserPlus className="h-4 w-4" /> Register
</a>
</nav>
<img
                src={vtlogo}
                alt="vtLogo"
                className="h-10 w=10 object-contain rounded"
              />
              <img
                src={cmrtclogo}
                alt="Logo 2"
                className="h-12 w-12 object-contain rounded"
              />
              </div>
      </div>
    </div>
  </div>
</div>

  );
}

function Hero() {
  const eventDate = useMemo(() => new Date("2025-09-20T09:00:00+05:30"), []);
  const { days, hours, minutes, seconds } = useCountdown(eventDate);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 md:pt-36 w-full"
    >
      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 h-72 w-72 md:h-[26rem] md:w-[26rem] rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 md:h-[26rem] md:w-[26rem] rounded-full bg-emerald-300/30 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 md:grid-cols-2 items-center"
        >
          {/* Left Section */}
          <div className="text-center md:text-left space-y-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur"
              >
                <Calendar className="h-4 w-4 text-cyan-600" /> Sep 20–21, 2025 ·
                Offline ·<span className="inline-flex items-center gap-1">
    <MapPin className="h-3.5 w-3.5 text-emerald-600" /> CMR Technical Campus
  </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight break-words"
              >
                Neura
                <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  X{" "}
                </span>
                <span className="block text-xl sm:text-2xl md:text-4xl font-bold text-slate-700">
                  HACKATHON 2025
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="text-slate-600 text-sm sm:text-base md:text-lg"
              >
                Your Code. Your Vision. Your Legacy. <br />
                At NeuraX Hackathon 2025, every line of code is more than just
                syntax — it’s a step toward shaping the future.
              </motion.p>

              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3"
              >
                <a
                  href="https://forms.gle/RE9YrMDKbsK4VQJd8"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 px-5 py-3 text-white font-semibold shadow hover:shadow-md hover:opacity-95 active:opacity-90 w-full sm:w-auto"
                >
                  Register Now
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 font-medium text-slate-700 backdrop-blur hover:bg-white w-full sm:w-auto justify-center"
                >
                  Learn more{" "}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </motion.div>

              {/* Countdown */}
              <motion.div
                variants={item}
                className="mt-4 flex flex-wrap justify-center md:justify-start gap-3"
              >
                <Pill value={String(days).padStart(2, "0")} label="Days" />
                <Pill value={String(hours).padStart(2, "0")} label="Hours" />
                <Pill value={String(minutes).padStart(2, "0")} label="Minutes" />
                <Pill value={String(seconds).padStart(2, "0")} label="Seconds" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Section - Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  <div>
                    <div className="text-sm font-semibold">24h Build Sprint</div>
                    <div className="text-xs text-slate-500">
                      Code. Create. Conquer.
                    </div>
                  </div>
                </div>
                <Clock className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xl sm:text-2xl font-extrabold">150+</div>
                  <div className="text-xs text-slate-500">Participants</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xl sm:text-2xl font-extrabold">50+</div>
                  <div className="text-xs text-slate-500">Teams</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-base sm:text-xl font-extrabold">
                    Worth ₹20,000+
                  </div>
                  <div className="text-xs text-slate-500">Prizes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const highlights = [
    { icon: <Lightbulb className="h-5 w-5" />, title: "Innovation", desc: "Explore cutting-edge ideas with mentorship and rapid prototyping." },
    { icon: <Users className="h-5 w-5" />, title: "Collaboration", desc: "Meet talented peers, form teams, and build together." },
    { icon: <Trophy className="h-5 w-5" />, title: "Prizes", desc: "Win cash, Internships, Certificates" },
  ];
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Why join?"
          title="About the Hackathon"
          subtitle="Bring your boldest vision, transform it into reality, and create a legacy that inspires beyond the 24 hours.
This is where innovation meets impact, and your ideas leave a mark on tomorrow."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-cyan-100 to-emerald-100 p-2 text-cyan-700">{h.icon}</div>
                <div className="font-semibold">{h.title}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{h.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// import { Calendar, Clock, Flag } from "lucide-react";

function Schedule() {
  const rows = [
    {
      day: "Round 1 (Mode - Online)",
      items: [
        { time: "01-Sep-2025", title: "Registration Begins" },
        { time: "02-Sep-2025 to 14-Sep-2025", title: "Proposal Submission" },
        { time: "15-Sep-2025", title: "Round 1 Results" },
        { time: "17-Sep-2025", title: "Payment Deadline (INR 699/-)" },
      ],
    },
    {
      day: "Round 2 (Mode - Offline · 20 & 21 Sep 2025)",
      items: [
        { time: "Day-1", title: "" },
        { time: "09:30", title: "Check-in & Verification" },
        { time: "10:00", title: "Opening Ceremony" },
        { time: "14:00", title: "Lunch" },
        { time: "17:00", title: "Activity & Checkpoints" },
        { time: "20:00", title: "Dinner" },
        { time: "Day-2", title: "" },
        { time: "01:00", title: "Refreshment & Checkpoints" },
        { time: "06:00", title: "Checkpoints" },
        { time: "08:00", title: "Breakfast" },
        { time: "10:00", title: "Project Submission & Judging" },
        { time: "12:00", title: "Closing Ceremony" },
      ],
    },
  ];

  return (
    <section id="schedule" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Plan your sprint"
          title="Event Schedule"
          subtitle="A clear timeline to help you focus and ship."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {rows.map((col, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              {/* Round heading */}
              <div className="mb-4 flex items-center gap-2">
                <Flag className="h-5 w-5 text-cyan-600" />
                <h3 className="text-lg font-semibold">{col.day}</h3>
              </div>

              {/* Timeline */}
              <ol className="relative ml-3 border-l border-slate-200">
                {col.items.map((it, i) => {
                  // If the entry is "Day-1" or "Day-2", use Calendar icon
                  const isDay = it.time.toLowerCase().includes("day");
                  return (
                    <li key={i} className="mb-6 ml-4">
                      <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border border-slate-200 bg-white" />
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                          {isDay ? (
                            <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                          ) : (
                            <Clock className="h-3.5 w-3.5 text-cyan-600" />
                          )}
                          {it.time}
                        </span>
                        <div className="font-medium">{it.title}</div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Tracks() {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    { 
      icon: <Sprout className="h-5 w-5" />, 
      title: "AI in Agriculture", 
      desc: "From soil to cloud — AI for better yields.",
      problem: "Develop an AI-powered solution to predict crop diseases early and optimize irrigation using weather and soil data."
    },
    { 
      icon: <GraduationCap className="h-5 w-5" />, 
      title: "AI in Education", 
      desc: "Empowering minds through intelligent learning.",
      problem: "Design an AI-driven tutor that tracks progress and provides smart recommendations for improved learning outcomes."
    },
    { 
      icon: <HeartPulse className="h-5 w-5" />, 
      title: "AI in HealthCare", 
      desc: "AI at the heart of better healthcare.",
      problem: "Create an AI system to detect anomalies in X-rays/MRIs and assist doctors with faster, more accurate diagnosis."
    },
  ];

  const handleCardClick = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section id="tracks" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading 
          eyebrow="Choose your lane" 
          title="Tracks & Themes" 
          subtitle="Pick a theme or propose your own wild card." 
        />

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div key={i}>
              {/* Card */}
              <motion.div 
                onClick={() => handleCardClick(i)}
                whileHover={{ scale: 1.03 }}
                className={`cursor-pointer group rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur shadow-sm transition-shadow hover:shadow-md 
                  ${activeIndex === i ? "ring-2 ring-cyan-500" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-cyan-100 to-emerald-100 p-2 text-cyan-700">{c.icon}</div>
                  <div className="font-semibold">{c.title}</div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{c.desc}</p>
              </motion.div>

              {/* Problem statement (Mobile only) */}
              {activeIndex === i && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 lg:hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-cyan-50 to-emerald-50 shadow-lg p-5 relative"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setActiveIndex(null)}
                    className="absolute top-3 right-3 text-slate-500 hover:text-slate-800"
                  >
                    ✕
                  </button>

                  <h3 className="text-base font-bold text-slate-800 mb-2">
                    Problem Statement
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {c.problem}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Unified problem statement (Desktop only) */}
        {activeIndex !== null && (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="mt-8 hidden lg:block rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 to-emerald-50 p-8 shadow-lg"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Problem Statement — {cards[activeIndex].title}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {cards[activeIndex].problem}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}


// export default Tracks;

function Prizes() {
  const prizes = [
    { icon: <Banknote className="h-6 w-6" />, title: "Worth upto ₹20,000+", desc: "Grand Prize (Team)" },
    // { icon: <Gift className="h-6 w-6" />, title: "Goodies & Swag", desc: "Tees, stickers, gadgets" },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Merit Certificates", desc: "For your valuable contribution" },
    { icon: <Trophy className="h-6 w-6" />, title: "Direct Internship", desc: "With Vishwasri Technologies Pvt.Ltd" },
  ];
  return (
    <section id="prizes" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="What you can win" title="Prizes & Rewards" subtitle="More than glory—boost your career and product." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prizes.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-cyan-100 to-emerald-100 p-2 text-cyan-700">{p.icon}</div>
                <div className="font-semibold">{p.title}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Sponsors() {
  // Replace these with real sponsor data
  const sponsors = [
    {
      name: "Vishwasri Technologies",
      logo: vtlogo, // put logo in public/sponsors folder
      tagline: "Turning Your Ideas into Products!",
    },
    {
      name: "Sponsor 2",
      logo: "/sponsors/techcorp.png",
      tagline: "tagline",
    },
    {
      name: "Sponsor 3",
      logo: "/sponsors/innosoft.png",
      tagline: "tagline",
    },
  ];

  return (
    <section id="sponsors" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Backed by the best"
          title="Sponsors"
          subtitle="Thanks to our partners for powering innovation."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {sponsors.map((s, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center gap-3 h-40 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition p-4 text-center"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-12 w-auto object-contain"
              />
              <div className="text-slate-800 font-semibold">{s.name}</div>
              <div className="text-sm text-slate-500">{s.tagline}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function FAQ() {
  const qa = [
    { q: "Who can participate?", a: "Anyone with a passion for Innovation and problem solving" },
    { q: "What is the team size?", a: "2-3 members.Should be enclosed at the time of registration" },
    { q: "Is there a registration fee?", a: "Yes. A Nominal fee will be collected after shortlisting" },
    { q: "Will it be online or offline?", a: "Round 1-online , Round 2 - will be conducted offline at CMR Technical Campus,Hyderabad" },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="All you need to know" title="FAQ" />
        <div className="space-y-3">
          {qa.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur">
              <button
                onClick={() => setOpen((v) => (v === idx ? -1 : idx))}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-slate-800">{item.q}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${open === idx ? "rotate-180" : ""}`} />
              </button>
              {open === idx && (
                <div className="px-5 pb-5 text-sm text-slate-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Say hello"
          title="Contact"
          subtitle="Get in touch with us for any queries or collaborations."
        />

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur max-w-3xl mx-auto text-center">
          <div className="mb-4 text-sm text-slate-600">
            For partnership & media queries, reach out anytime.
          </div>
          <div className="flex flex-col items-center justify-center" >
            <a
              href="mailto:neurax@cmrtc.ac.in"
              className="flex items-center gap-3 hover:text-slate-900"
            >
              <Mail className="h-4 w-4 text-cyan-600" /> neurax@cmrtc.ac.in
            </a>
            <a
              href="tel:+917995760212"
              className="flex items-center gap-3 hover:text-slate-900"
            >
              <Phone className="h-4 w-4 text-cyan-600" /> +91 7995760212
            </a>
            <div className="flex items-center gap-4 pt-2">
              <a
  href="https://wa.me/7995760212" // <-- replace with your WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="rounded-full border border-slate-200 p-2 hover:bg-slate-50"
>
  <FaWhatsapp className="h-4 w-4 text-green-600" />
</a>

              <a
                href="https://www.instagram.com/cmrtechnicalcampus?igsh=cWdqMml3aXNldXF1"
                target="_blank"
                aria-label="Instagram"
                className="rounded-full border border-slate-200 p-2 hover:bg-slate-50"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/school/cmrtechnicalcampus/"
                target="_blank"
                aria-label="LinkedIn"
                className="rounded-full border border-slate-200 p-2 hover:bg-slate-50"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
   return (
    <footer className="relative bg-black">
      <img 
        src={banner} 
        alt="Footer Banner" 
        className="w-full object-contain max-h-[300px] md:max-h-[400px] mx-auto"
      />
    </footer>
  );
}

export default function HackathonSite() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth", "antialiased");
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(52,211,153,0.06),transparent_40%)]">
      <Navbar />
      <main className="pt-4">
        <Hero />
        <About />
        <Schedule />
        <Tracks />
        <Prizes />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}