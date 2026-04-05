import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import USMap from "@/components/USMap";

const clinics = [
  { name: "Richmond, VA", phone: "(804) 303-4200", desc: "Same-day labs and treatment in Richmond. Walk in or book ahead.", address: "Richmond, VA" },
  { name: "Newport News, VA", phone: "(757) 215-3005", desc: "Hampton Roads men's health — TRT, ED, weight loss. Same-day appointments.", address: "Newport News, VA" },
  { name: "Virginia Beach, VA", phone: "(757) 215-3006", desc: "Virginia Beach location for same-day hormone, ED, and weight loss care.", address: "Virginia Beach, VA" },
];

const Coverage = () => {
  const [selectedState, setSelectedState] = useState("VA");

  return (
    <>
      <Header />
      <main>
        <section className="bg-[#FAFAF7] pt-36 pb-20">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="font-lora text-[clamp(32px,4vw,64px)] leading-[1.1] tracking-[-0.02em] text-[#0B1029] max-w-3xl"
            >
              Telehealth in every state. <em className="italic text-[#E8670A]">Centers in Virginia.</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-space mt-6 max-w-2xl text-[15px] leading-[1.7] text-[#555] font-light">
              Our telehealth platform serves men nationwide. Our Virginia centers offer same-day, in-person care.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
              {["50 States", "3 VA Centers", "10,000+ Patients"].map((s) => (
                <span key={s} className="rounded-lg border border-gray-200 px-4 py-2 font-mono text-[10px] tracking-[0.14em] uppercase text-[#243656]">{s}</span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#FAFAF7] py-24">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)" }}>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">Coverage Map</span>
              </div>
              <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">Explore our coverage</h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr]">
              <div className="space-y-3 max-h-96 overflow-y-auto pr-4">
                {clinics.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedState("VA")}
                    className="w-full text-left rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">{`0${i + 1}`}</span>
                    <h3 className="font-sans text-[15px] font-semibold text-[#0B1029] mt-1">{c.name}</h3>
                    <p className="font-space text-[11px] text-[#555] font-light mt-1">{c.desc}</p>
                  </button>
                ))}
              </div>
              <USMap selectedState={selectedState} onStateSelect={setSelectedState} />
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-12">
              <StatCounter end={50} label="States" />
              <StatCounter end={3} label="VA Centers" />
              <StatCounter end={10000} suffix="+" label="Patients" />
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {clinics.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 0.1}>
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm h-full">
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">{`0${i + 1}`}</span>
                    <h3 className="font-sans mt-2 text-[15px] font-semibold text-[#0B1029]">Men's Wellness Centers — {c.name}</h3>
                    <p className="font-space mt-2 text-[13px] text-[#555] font-light">{c.desc}</p>
                    <div className="mt-4 space-y-2">
                      <p className="font-space flex items-center gap-2 text-[13px] text-[#555] font-light"><MapPin className="h-3.5 w-3.5" />{c.address}</p>
                      <a href={`tel:${c.phone.replace(/\D/g, "")}`} className="font-space flex items-center gap-2 text-[13px] text-[#555] font-light hover:text-[#E8670A] transition-colors"><Phone className="h-3.5 w-3.5" />{c.phone}</a>
                    </div>
                    <Link to="/get-started" className="mt-4 inline-flex items-center gap-1 font-sans text-sm font-semibold text-[#E8670A] hover:underline">
                      Visit Center <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#06081a] noise-overlay py-16">
          <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12 text-center">
            <h2 className="font-lora text-[clamp(24px,3vw,40px)] leading-[1.15] tracking-[-0.02em] text-[#E8E2D9]">
              Not near a Virginia center? Start a telehealth visit from anywhere in the US.
            </h2>
            <Link to="/get-started" className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-[#1B2B4B] px-6 py-3 font-sans text-[11.5px] font-bold uppercase tracking-[0.09em] text-[#FAFAF7] border border-white/[0.11] hover:bg-[#162340] active:scale-[0.98] transition-all">
              Start Telehealth Visit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Coverage;
