import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import USMap from "@/components/USMap";
import SectionHeader from "@/components/SectionHeader";
import Diamond from "@/components/Diamond";

import consultation from "@/assets/iStock-2187145642-1-5.jpg";
import trackSitting from "@/assets/iStock-864444970-1-7.jpg";
import boardwalkJog from "@/assets/iStock-1097324074-10.jpg";

const clinics = [
  { name: "Richmond, VA", phone: "(804) 303-4200", desc: "Same-day labs and treatment in Richmond. Walk in or book ahead.", address: "Richmond, VA", img: consultation },
  { name: "Newport News, VA", phone: "(757) 215-3005", desc: "Hampton Roads men's health — TRT, ED, weight loss. Same-day appointments.", address: "Newport News, VA", img: trackSitting },
  { name: "Virginia Beach, VA", phone: "(757) 215-3006", desc: "Virginia Beach location for same-day hormone, ED, and weight loss care.", address: "Virginia Beach, VA", img: boardwalkJog },
];

const allStates = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

const Coverage = () => {
  const [selectedState, setSelectedState] = useState("VA");
  const [search, setSearch] = useState("");

  const filteredStates = search
    ? allStates.filter((s) => s.toLowerCase().includes(search.toLowerCase()))
    : allStates;

  const isVA = selectedState === "VA";

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-cream-100 pt-36 pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="font-sans font-bold text-[clamp(32px,4.5vw,64px)] leading-[1.08] tracking-[-0.03em] text-navy-900 max-w-3xl"
            >
              Telehealth in every state.{" "}
              <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>Centers in Virginia.</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-space mt-6 max-w-2xl text-[15px] leading-[1.7] text-navy-700/70">
              Our telehealth platform serves men nationwide. Our Virginia centers offer same-day, in-person care.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
              {["50 States", "3 VA Centers", "10,000+ Patients"].map((s) => (
                <span key={s} className="rounded-lg border border-navy-900/[0.08] bg-navy-900/[0.04] px-4 py-2 font-sans text-[12px] font-medium tracking-wide uppercase text-navy-600">{s}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Map + State Search */}
        <section className="bg-cream-100 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader badge="Coverage Map" title={<>Explore our <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>coverage.</em></>} />

            <ScrollReveal>
              <div className="mt-8 max-w-sm relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-700/40" />
                <input
                  type="text"
                  placeholder="Search by state (e.g. CA, Texas)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-navy-900/[0.08] bg-white pl-10 pr-4 py-3 font-space text-[14px] text-navy-900 placeholder:text-navy-700/30 focus:outline-none focus:border-cta/40 transition-colors"
                />
              </div>
            </ScrollReveal>

            {search && (
              <div className="mt-4 flex flex-wrap gap-2">
                {filteredStates.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSelectedState(s); setSearch(""); }}
                    className={`rounded-lg px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] uppercase transition-colors ${
                      s === "VA" ? "bg-cta/10 text-cta border border-cta/20" : "bg-navy-900/[0.04] text-navy-700/60 border border-navy-900/[0.06] hover:border-navy-900/[0.12]"
                    }`}
                  >
                    {s} {s === "VA" && "· In-Person"}
                  </button>
                ))}
                {filteredStates.length === 0 && <p className="font-space text-[13px] text-navy-700/50">No states found.</p>}
              </div>
            )}

            <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_2fr]">
              <div className="space-y-4">
                <div className="rounded-2xl p-5 bg-cta/[0.06] border border-cta/[0.12]">
                  <p className="font-sans text-[11px] font-semibold tracking-wide uppercase text-cta mb-2 inline-flex items-center gap-1.5">
                    <Diamond size="xs" /> In-Person Care
                  </p>
                  <p className="font-space text-[14px] text-navy-700/75">Available at our 3 Virginia centers. Same-day labs, walk-ins welcome.</p>
                </div>
                <div className="rounded-2xl p-5 bg-navy-900/[0.04] border border-navy-900/[0.06]">
                  <p className="font-sans text-[11px] font-semibold tracking-wide uppercase text-navy-600 mb-2 inline-flex items-center gap-1.5">
                    <Diamond size="xs" /> Telehealth
                  </p>
                  <p className="font-space text-[14px] text-navy-700/75">Available in all 50 states. Video visits with your dedicated provider. Labs via at-home kit or Quest/Labcorp.</p>
                </div>

                {selectedState && (
                  <div className="rounded-2xl p-5 bg-white border border-navy-900/[0.06]">
                    <p className="font-sans text-[11px] font-medium tracking-wide uppercase text-navy-600 mb-1">Selected</p>
                    <h3 className="font-sans font-semibold text-[16px] text-navy-900">{selectedState}</h3>
                    <p className="font-space text-[14px] text-navy-700/70 mt-1">
                      {isVA ? "In-person & telehealth available" : "Telehealth available"}
                    </p>
                    <Link to="/get-started" className="mt-3 inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-cta hover:underline">
                      {isVA ? "Book a Visit" : "Start Telehealth"} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>

              <USMap selectedState={selectedState} onStateSelect={setSelectedState} />
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-12 rounded-2xl px-10 py-8 mx-auto max-w-2xl bg-white border border-navy-900/[0.06]">
              <StatCounter end={50} label="States" />
              <StatCounter end={3} label="VA Centers" />
              <StatCounter end={10000} suffix="+" label="Patients" />
            </div>
          </div>
        </section>

        {/* Virginia Centers */}
        <section className="bg-cream-200 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader badge="Virginia Centers" title={<>Same-day care. <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>Walk-ins welcome.</em></>} />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {clinics.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 0.1}>
                  <div className="rounded-2xl border border-navy-900/[0.06] bg-white overflow-hidden h-full flex flex-col">
                    <div className="h-48 relative">
                      <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <Diamond size="sm" className="text-cta/60 mb-2" />
                      <h3 className="font-sans text-[16px] font-semibold text-navy-900">Men's Wellness Centers — {c.name}</h3>
                      <p className="font-space mt-2 text-[14px] text-navy-700/70 flex-1">{c.desc}</p>
                      <div className="mt-4 space-y-2">
                        <p className="font-space flex items-center gap-2 text-[14px] text-navy-700/70"><MapPin className="h-3.5 w-3.5 shrink-0" />{c.address}</p>
                        <a href={`tel:${c.phone.replace(/\D/g, "")}`} className="font-space flex items-center gap-2 text-[14px] text-navy-700/70 hover:text-cta transition-colors"><Phone className="h-3.5 w-3.5 shrink-0" />{c.phone}</a>
                      </div>
                      <Link to="/get-started" className="mt-4 inline-flex items-center gap-1 font-sans text-sm font-semibold text-cta hover:underline">
                        Visit Center <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Telehealth CTA */}
        <section className="bg-navy-950 noise-overlay py-16 relative">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-sans font-bold text-[clamp(24px,3vw,40px)] leading-[1.15] tracking-[-0.02em] text-cream-100">
              Not near a Virginia center? Start a telehealth visit from anywhere.
            </h2>
            <Link to="/get-started" className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-cta px-8 py-4 font-sans text-[15px] font-semibold text-white hover:bg-cta/90 transition-colors active:scale-[0.98]">
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
