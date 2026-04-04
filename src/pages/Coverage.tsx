import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
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
        {/* Hero */}
        <section className="bg-background pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl max-w-3xl"
            >
              Telehealth in every state. <span className="font-display italic text-cta">Centers in Virginia.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Our telehealth platform serves men nationwide. Our Virginia centers offer same-day, in-person care.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
              {["50 States", "3 VA Centers", "10,000+ Patients"].map((s) => (
                <span key={s} className="rounded-full border border-border px-4 py-2 font-mono-label text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{s}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Map + Clinics */}
        <section className="bg-cream-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <SectionLabel text="Coverage Map" />
              <h2 className="font-heading mt-3 text-3xl font-bold text-foreground md:text-4xl">Explore our coverage</h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr]">
              {/* State list sidebar */}
              <div className="space-y-3 max-h-96 overflow-y-auto pr-4">
                {clinics.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedState("VA")}
                    className={`w-full text-left rounded-lg border p-4 transition-all ${
                      selectedState === "VA" ? "border-cta bg-cta/5" : "border-border bg-background hover:border-cta/30"
                    }`}
                  >
                    <span className="font-mono-label text-xs text-cta">{`0${i + 1}`}</span>
                    <h3 className="font-heading text-sm font-semibold text-foreground mt-1">{c.name}</h3>
                    <p className="font-body text-xs text-muted-foreground mt-1">{c.desc}</p>
                  </button>
                ))}
              </div>
              {/* Map */}
              <USMap selectedState={selectedState} onStateSelect={setSelectedState} />
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-12">
              <StatCounter end={50} label="States" />
              <StatCounter end={3} label="VA Centers" />
              <StatCounter end={10000} suffix="+" label="Patients" />
            </div>

            {/* Clinic cards */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {clinics.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 0.1}>
                  <div className="rounded-lg border border-border bg-background p-6 h-full">
                    <span className="font-mono-label text-xs font-medium text-cta">{`0${i + 1}`}</span>
                    <h3 className="font-heading mt-2 text-lg font-semibold text-foreground">Men's Wellness Centers — {c.name}</h3>
                    <p className="font-body mt-2 text-sm text-muted-foreground">{c.desc}</p>
                    <div className="mt-4 space-y-2">
                      <p className="font-body flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{c.address}</p>
                      <a href={`tel:${c.phone.replace(/\D/g, "")}`} className="font-body flex items-center gap-2 text-sm text-muted-foreground hover:text-cta transition-colors"><Phone className="h-3.5 w-3.5" />{c.phone}</a>
                    </div>
                    <Link to="/get-started" className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-cta hover:underline">
                      Visit Center <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Telehealth Banner */}
        <section className="bg-navy-950 noise-overlay py-16">
          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <h2 className="font-heading text-2xl font-bold text-cream-200 md:text-3xl">
              Not near a Virginia center? Start a telehealth visit from anywhere in the US.
            </h2>
            <Link to="/get-started" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3 font-heading text-sm font-semibold text-cta-foreground hover:brightness-110 active:scale-[0.98] transition-all">
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
