import { motion } from "framer-motion";
import { ArrowRight, Activity, Beaker, Heart, Thermometer, Shield, FlaskConical, Pill, Scale, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import USMap from "@/components/USMap";

/* ─── ASSET IMPORTS ─── */
import heroImg from "@/assets/iStock-1097768100-3.jpg";        // Man at railing, sunset — HERO
import coupleJog from "@/assets/iStock-1081494342-1-4.jpg";     // Couple jogging sunset — collage
import oceanRunner from "@/assets/iStock-948010824-2.jpg";      // Man running by ocean — collage
import fitMan from "@/assets/iStock-518621045.jpg";             // Older fit man, earbuds — collage
import consultation from "@/assets/iStock-2187145642-1-5.jpg";  // Man in consultation — collage + testimonial
import trackSitting from "@/assets/iStock-864444970-1-7.jpg";   // Man on track, phone — collage
import trackCrouch from "@/assets/iStock-2177439750-1-8.jpg";   // Man crouching, headphones — tab image
import trackEarbuds from "@/assets/iStock-859864388-6.jpg";     // Man on track, earbuds — tab image
import boardwalkJog from "@/assets/iStock-1097324074-10.jpg";   // Two men jogging boardwalk — collage
import jogCloseup from "@/assets/iStock-1097324174-11.jpg";     // Two men jogging close-up — press
import beachWalk from "@/assets/iStock-2170822818-12.jpg";      // Two men beach — coverage

/* ─── HERO ─── */
const Hero = () => (
  <section className="hero-section relative w-full overflow-hidden" style={{ height: "100dvh", minHeight: 640, background: "#FAFAF7" }}>
    {/* Video frame with rounded corners — image fills the frame */}
    <div className="video-frame absolute overflow-hidden rounded-none lg:rounded-2xl" style={{ zIndex: 1, inset: "0px 0px 52px" }}>
      <style>{`@media (min-width: 1024px) { .video-frame { inset: 12px 12px 80px !important; } }`}</style>
      <video
        src="/mwc_hero_montage.mp4"
        
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Left gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background: "linear-gradient(90deg, #06081ae6 0%, #06081a73 35%, #06081a26 55%, #06081a1a 100%)",
        }}
      />
      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          zIndex: 2,
          height: "40%",
          background: "linear-gradient(transparent 0%, #06081ab3 100%)",
        }}
      />
      {/* Noise texture */}
      <div className="noise-overlay absolute inset-0" style={{ zIndex: 3 }} />
    </div>

    {/* Hero content */}
    <motion.div
      className="hero-content-pos absolute flex flex-col items-start gap-3 lg:gap-5 px-5 lg:px-0 max-w-[740px]"
      style={{ zIndex: 20, top: "50%", transform: "translateY(-50%)", left: "20px", right: "20px" }}
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <style>{`@media (min-width: 1024px) { .hero-content-pos { top: 55% !important; left: clamp(56px, 13vw, 200px) !important; right: auto !important; } }`}</style>

      {/* Announcement pill — hidden on mobile */}
      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block"
      >
        <span
          className="inline-flex items-center gap-2.5"
          style={{
            backdropFilter: "blur(20px) saturate(1.8)",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 9,
            padding: "7px 14px 7px 7px",
          }}
        >
          <span
            className="inline-flex items-center gap-1"
            style={{ background: "#1B2B4B", borderRadius: 5, padding: "4px 10px 4px 7px" }}
          >
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#E8670A]">NEW</span>
          </span>
          <span className="font-space text-[13px] font-light text-[#C5CDE0]/80">
            Longentis telehealth now live in all 50 states →
          </span>
        </span>
      </motion.div>

      {/* H1 */}
      <motion.h1
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.7 }}
        className="font-sans font-semibold leading-[1.05] tracking-[-0.032em] text-[#FAFAF7] text-[32px] lg:text-[clamp(42px,5vw,72px)]"
        style={{ textShadow: "0 2px 30px rgba(0,0,0,0.4)" }}
      >
        Clinic-grade men's health,{" "}
        <em className="font-lora italic text-[#E8670A] not-italic" style={{ fontStyle: "italic" }}>delivered.</em>
      </motion.h1>

      {/* Subtitle — shortened on mobile */}
      <motion.p
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.7 }}
        className="font-space font-light text-[14px] lg:text-[17px] leading-[1.6] lg:leading-[1.7] tracking-[0.01em] max-w-[600px]"
        style={{ color: "rgba(197,205,224,0.65)" }}
      >
        <span className="hidden lg:inline">TRT, ED treatment, and physician-supervised weight loss — backed by 10,000+ patients and a decade of Men's Wellness Centers clinical experience. Now via telehealth in all 50 states.</span>
        <span className="lg:hidden">TRT, ED treatment & weight loss — physician-supervised telehealth in all 50 states.</span>
      </motion.p>

      {/* CTA */}
      <motion.div
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.7 }}
      >
        <Link
          to="/get-started"
          className="inline-flex items-center gap-2.5 font-sans text-[11.5px] font-bold uppercase tracking-[0.09em] text-[#FAFAF7] active:scale-[0.98] transition-all hover:brightness-110"
          style={{
            borderRadius: 10,
            padding: "14px 18px 14px 24px",
            background: "linear-gradient(135deg, #E8670A 0%, #D45A00 100%)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "inset 0 1px rgba(255,255,255,0.22), inset 0 -1px rgba(0,0,0,0.15), 0 0 0 1px rgba(232,103,10,0.50), 0 4px 14px rgba(232,103,10,0.35), 0 12px 40px rgba(0,0,0,0.30)",
          }}
        >
          Start Your Free Visit
          <span className="flex items-center justify-center w-[26px] h-[26px] rounded-[6px] bg-white/20">
            <ArrowRight className="h-3.5 w-3.5 text-white" />
          </span>
        </Link>
      </motion.div>
    </motion.div>

    {/* Metrics — hidden on mobile, right column on desktop */}
    <motion.div
      className="metrics-stack absolute hidden lg:flex flex-col z-20 lg:top-[45%] lg:-translate-y-1/2 lg:right-[clamp(56px,13vw,200px)] lg:w-[168px]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
    >
      {[
        ["10,000+", "Patients Treated"],
        ["2015", "Since"],
        ["3", "VA Centers"],
        ["50", "States"],
      ].map(([val, label], i) => (
        <div
          key={label}
          className={`flex flex-col items-end py-5 ${i > 0 ? "border-t border-white/[0.15]" : ""}`}
        >
          <p
            className="font-sans font-extrabold leading-none tracking-[-0.03em] text-[clamp(28px,2.8vw,40px)]"
            style={{
              background: "linear-gradient(160deg, rgba(210,218,238,0.92) 0%, #1B2B4B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {val}
          </p>
          <p className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-right mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
            {label}
          </p>
        </div>
      ))}
    </motion.div>

    {/* Partners row — very bottom */}
    <div className="absolute bottom-0 left-0 right-0 bg-[#FAFAF7] py-4 px-6" style={{ zIndex: 20 }}>
      <div className="mx-auto max-w-[1600px] flex items-center justify-center gap-10 flex-wrap">
        {["LegitScript", "HIPAA", "State Licensed", "FSA/HSA"].map((name) => (
          <span key={name} className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#0A1029]/35">
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/* ─── HEALTH ASSESSMENT GRID ─── */
const assessmentCards = [
  { icon: Beaker, title: "Comprehensive Blood Panel", desc: "Full hormone, metabolic, and nutrient analysis from a single draw." },
  { icon: Activity, title: "Testosterone (Free & Total)", desc: "The baseline that drives energy, drive, and body composition." },
  { icon: RefreshCw, title: "Metabolic Markers", desc: "Glucose, insulin, A1C — tracking the engine behind your weight and energy." },
  { icon: Thermometer, title: "Thyroid Panel", desc: "TSH, T3, T4 — the system that controls metabolism, mood, and focus." },
  { icon: Heart, title: "Cardiovascular Risk", desc: "Lipids, inflammation markers, and lipoprotein detail beyond a standard panel." },
  { icon: Shield, title: "PSA Screening", desc: "Prostate-specific antigen monitoring for men on hormone protocols." },
  { icon: Pill, title: "Vitamin & Nutrient Levels", desc: "D, B12, and key micronutrients that affect everything from sleep to recovery." },
  { icon: Scale, title: "Body Composition Tracking", desc: "Weight, body fat, visceral fat, and muscle mass tracked over time." },
  { icon: FlaskConical, title: "Continuous Monitoring", desc: "Repeat labs and follow-ups included — your protocol evolves as your body does." },
];

const HealthAssessment = () => (
  <section className="bg-[#FAFAF7] py-24 relative">
    {/* Subtle navy gradient bleed from hero */}
    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#06081a]/[0.03] to-transparent pointer-events-none" />
    <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)", backdropFilter: "blur(12px)" }}>
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#243656] opacity-60" />
            <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#243656]" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">Your Health Snapshot</span>
        </div>
        <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">
          Know your numbers. Own your health.
        </h2>
        <p className="font-space mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#555] font-light">
          Your comprehensive lab panel covers 20+ biomarkers across hormones, metabolism, cardiovascular risk, and nutrient levels — giving your provider the full picture, not a guess.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4">
        {assessmentCards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.04}>
            <div
              className="flex w-full flex-row items-center rounded-2xl py-3 pr-5 pl-3 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(11,16,41,0.12)] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(232,237,245,0.6) 100%)",
                backdropFilter: "blur(12px) saturate(1.3)",
                border: "1px solid rgba(27,43,75,0.08)",
                boxShadow: "0 2px 16px rgba(11,16,41,0.05), inset 0 1px 0 rgba(255,255,255,0.7)",
              }}
            >
              <div className="relative size-11 shrink-0 overflow-hidden rounded-xl md:size-13 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0B1029 0%, #1B2B4B 100%)" }}>
                <card.icon className="h-5 w-5 text-[#C5CDE0]" strokeWidth={1.5} />
              </div>
              <div className="ml-3">
                <h3 className="font-sans text-sm leading-none font-semibold text-gray-900 md:text-[15px]">{card.title}</h3>
                <p className="font-sans text-xs leading-snug text-gray-500 md:text-[13px] mt-1">{card.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── EDITORIAL COLLAGE — Full 8-col Agentis-style grid ─── */
const GridImg = ({ src, alt, style }: { src: string; alt: string; style: React.CSSProperties }) => (
  <div className="rounded-lg overflow-hidden relative" style={style}>
    <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div>
);

const EditorialStatement = () => (
  <section className="bg-[#F5F1EB] overflow-hidden">
    <div className="mx-auto max-w-[1600px] px-4 lg:px-6">
      {/* Desktop: 8-col, 7-row dense grid matching Agentis density */}
      <div className="hidden lg:grid grid-cols-8 gap-2.5 pt-10 pb-0" style={{ gridTemplateRows: "repeat(7, 120px)" }}>
        {/* Row 1 — full width images */}
        <GridImg src={coupleJog}    alt="" style={{ gridColumn: "1/2", gridRow: "1/2" }} />
        <GridImg src={consultation} alt="" style={{ gridColumn: "2/3", gridRow: "1/2" }} />
        <GridImg src={trackCrouch}  alt="" style={{ gridColumn: "3/4", gridRow: "1/2" }} />
        <GridImg src={oceanRunner}  alt="" style={{ gridColumn: "4/5", gridRow: "1/2" }} />
        <GridImg src={fitMan}       alt="" style={{ gridColumn: "5/6", gridRow: "1/2" }} />
        <GridImg src={boardwalkJog} alt="" style={{ gridColumn: "6/7", gridRow: "1/2" }} />
        <GridImg src={trackEarbuds} alt="" style={{ gridColumn: "7/8", gridRow: "1/2" }} />
        <GridImg src={jogCloseup}   alt="" style={{ gridColumn: "8/9", gridRow: "1/2" }} />

        {/* Row 2-3 — left side images */}
        <GridImg src={trackSitting}  alt="" style={{ gridColumn: "1/2", gridRow: "2/4" }} />
        <GridImg src={beachWalk}     alt="" style={{ gridColumn: "2/3", gridRow: "2/3" }} />

        {/* Row 2-3 — right side images */}
        <GridImg src={coupleJog}     alt="" style={{ gridColumn: "7/8", gridRow: "2/3" }} />
        <GridImg src={consultation}  alt="" style={{ gridColumn: "8/9", gridRow: "2/4" }} />

        {/* Row 3 — fill edges */}
        <GridImg src={oceanRunner}   alt="" style={{ gridColumn: "2/3", gridRow: "3/4" }} />
        <GridImg src={boardwalkJog}  alt="" style={{ gridColumn: "7/8", gridRow: "3/5" }} />

        {/* CENTER TEXT — spans cols 3-7, rows 2-6 */}
        <div className="flex flex-col items-center justify-center text-center px-10 z-10" style={{ gridColumn: "3/7", gridRow: "2/6" }}>
          <ScrollReveal>
            <h2 className="font-lora text-[clamp(30px,3.4vw,50px)] leading-[1.15] tracking-[-0.015em] text-[#0B1029] mb-6">
              Extending what's possible in men's health.
            </h2>
            <p className="font-space font-light text-[15px] leading-[1.7] text-[#666] max-w-[480px] mb-8">
              The gap between how men feel and what their doctor calls 'normal' is where we operate. Longentis connects you with dedicated men's health providers, real lab panels, and treatment protocols built on a decade of clinical data — not a questionnaire and a subscription.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 border border-[#243656]/40 px-6 py-3 rounded-lg group transition-all duration-200 hover:border-[#243656] hover:bg-[#243656]/[0.06]"
            >
              <span className="font-sans font-semibold text-[11px] tracking-[0.08em] uppercase text-[#243656]">About Longentis</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#243656] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Row 4-5 — left side */}
        <GridImg src={fitMan}        alt="" style={{ gridColumn: "1/2", gridRow: "4/6" }} />
        <GridImg src={trackCrouch}   alt="" style={{ gridColumn: "2/3", gridRow: "4/5" }} />

        {/* Row 4-5 — right side */}
        <GridImg src={trackEarbuds}  alt="" style={{ gridColumn: "8/9", gridRow: "4/6" }} />

        {/* Row 5 — edges */}
        <GridImg src={jogCloseup}    alt="" style={{ gridColumn: "2/3", gridRow: "5/6" }} />

        {/* Row 6-7 — bottom full width */}
        <GridImg src={beachWalk}     alt="" style={{ gridColumn: "1/2", gridRow: "6/7" }} />
        <GridImg src={trackSitting}  alt="" style={{ gridColumn: "2/3", gridRow: "6/7" }} />
        <GridImg src={coupleJog}     alt="" style={{ gridColumn: "3/4", gridRow: "6/7" }} />
        <GridImg src={oceanRunner}   alt="" style={{ gridColumn: "4/5", gridRow: "6/7" }} />
        <GridImg src={consultation}  alt="" style={{ gridColumn: "5/6", gridRow: "6/7" }} />
        <GridImg src={fitMan}        alt="" style={{ gridColumn: "6/7", gridRow: "6/7" }} />
        <GridImg src={boardwalkJog}  alt="" style={{ gridColumn: "7/8", gridRow: "6/7" }} />
        <GridImg src={trackCrouch}   alt="" style={{ gridColumn: "8/9", gridRow: "6/7" }} />

        {/* Row 7 — extra bottom row for density */}
        <GridImg src={jogCloseup}    alt="" style={{ gridColumn: "1/2", gridRow: "7/8" }} />
        <GridImg src={trackEarbuds}  alt="" style={{ gridColumn: "2/3", gridRow: "7/8" }} />
        <GridImg src={beachWalk}     alt="" style={{ gridColumn: "3/5", gridRow: "7/8" }} />
        <GridImg src={oceanRunner}   alt="" style={{ gridColumn: "5/6", gridRow: "7/8" }} />
        <GridImg src={coupleJog}     alt="" style={{ gridColumn: "6/7", gridRow: "7/8" }} />
        <GridImg src={trackSitting}  alt="" style={{ gridColumn: "7/8", gridRow: "7/8" }} />
        <GridImg src={consultation}  alt="" style={{ gridColumn: "8/9", gridRow: "7/8" }} />
      </div>

      {/* Mobile fallback — 4-col strip + text */}
      <div className="lg:hidden py-16">
        <div className="grid grid-cols-4 gap-2 mb-10">
          {[coupleJog, oceanRunner, trackEarbuds, fitMan, consultation, boardwalkJog, trackCrouch, beachWalk].map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden h-20 relative">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <ScrollReveal>
          <h2 className="font-lora text-[clamp(28px,7vw,42px)] leading-[1.15] tracking-[-0.015em] text-[#0B1029] mb-5">
            Extending what's possible in men's health.
          </h2>
          <p className="font-space font-light text-[15px] leading-[1.7] text-[#555]">
            The gap between how men feel and what their doctor calls 'normal' is where we operate. Longentis connects you with dedicated men's health providers, real lab panels, and treatment protocols built on a decade of clinical data.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 border border-[#243656]/40 px-5 py-2.5 rounded-lg font-sans font-semibold text-[11px] tracking-[0.08em] uppercase text-[#243656]">
            About Longentis <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

/* ─── OUR APPROACH TABS ─── */
const tabsData = [
  {
    id: "providers",
    label: "Dedicated Providers",
    num: "01",
    h3: "Your Provider, Every Visit",
    body: "Not a chatbot. Not a rotating roster. A licensed men's health specialist who knows your name, your labs, and your goals. The same provider from first visit through every follow-up.",
    stats: [["Patients Treated", "10,000+"], ["Google Rating", "4.9 avg"]],
  },
  {
    id: "labs",
    label: "Lab-Driven Protocols",
    num: "02",
    h3: "Real Labs, Real Data",
    body: "20+ biomarker panels, not questionnaires. At-home lab kits or in-center draws. Results reviewed line by line with your provider — not auto-generated by an algorithm.",
    stats: [["Biomarkers", "20+"], ["Results", "In days"]],
  },
  {
    id: "care",
    label: "Ongoing Care",
    num: "03",
    h3: "Care That Doesn't Stop",
    body: "Follow-ups, dosage adjustments, repeat labs, and direct messaging with your provider between visits. All included. This is ongoing care, not a one-time prescription.",
    stats: [["Follow-ups", "Unlimited"], ["Provider Access", "Direct"]],
  },
];

const OurApproach = () => (
  <section className="bg-[#06081a] py-24 noise-overlay relative">
    <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(197,205,224,0.06)", border: "1px solid rgba(197,205,224,0.12)" }}>
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8670A] opacity-60" />
            <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#E8670A]" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C5CDE0]/70">Our Approach</span>
        </div>
        <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#E8E2D9]">
          The full stack behind every patient.
        </h2>
      </ScrollReveal>

      <div className="mt-12">
        {/* Card with diagonal stripe borders */}
        <div className="relative rounded-2xl overflow-hidden" style={{ background: "#E8EDF5" }}>
          {/* Left stripe border */}
          <div className="absolute left-0 top-0 bottom-0 w-3 lg:w-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(27,43,75,0.13) 5px, rgba(27,43,75,0.13) 6px)" }} />
          {/* Right stripe border */}
          <div className="absolute right-0 top-0 bottom-0 w-3 lg:w-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(27,43,75,0.13) 5px, rgba(27,43,75,0.13) 6px)" }} />

          <Tabs defaultValue="providers" className="relative z-10 px-6 py-6 lg:px-16 lg:py-10">
            <TabsList className="bg-transparent border-0 p-0 h-auto flex flex-wrap gap-2 mb-8">
              {tabsData.map((t) => (
                <TabsTrigger
                  key={t.id}
                  value={t.id}
                  className="font-mono text-[10px] tracking-[0.1em] uppercase px-4 py-2.5 rounded-md transition-all data-[state=active]:bg-white/70 data-[state=active]:backdrop-blur-[10px] data-[state=active]:border data-[state=active]:border-[rgba(27,43,75,0.25)] data-[state=active]:shadow-[0_1px_6px_rgba(27,43,75,0.10),inset_0_1px_0_rgba(255,255,255,0.8)] data-[state=inactive]:bg-white/30 data-[state=inactive]:border data-[state=inactive]:border-[rgba(27,43,75,0.15)]"
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabsData.map((t) => (
              <TabsContent key={t.id} value={t.id}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-8 lg:grid-cols-2"
                >
                  <div>
                    <span className="font-mono text-[10px] bg-white/70 px-2 py-1 rounded text-[#243656] border border-[#C5CDE0]/60">{t.num}</span>
                    <h3 className="font-sans mt-4 text-2xl font-semibold text-[#0B1029] md:text-3xl">{t.h3}</h3>
                    <p className="font-space mt-4 text-[15px] leading-[1.7] text-[#555] font-light">{t.body}</p>
                    <Link to="/treatments" className="mt-6 inline-flex items-center gap-1 font-sans text-sm font-semibold text-[#E8670A] hover:underline">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="mt-8 flex gap-12">
                      {t.stats.map(([label, val]) => (
                        <div key={label}>
                          <p className="font-sans text-2xl font-bold text-[#0B1029]">{val}</p>
                          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[#555]/60">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg h-72 lg:h-auto relative overflow-hidden">
                    <img src={trackCrouch} alt="Active man with headphones" className="absolute inset-0 w-full h-full object-cover" />
                    {/* Glass stat overlays */}
                    <div
                      className="absolute bottom-4 left-4 rounded-lg px-4 py-3"
                      style={{
                        background: "rgba(255,255,255,0.11)",
                        backdropFilter: "blur(18px) saturate(1.6)",
                        border: "1px solid rgba(255,255,255,0.20)",
                        boxShadow: "0 8px 28px rgba(0,0,0,0.22)",
                      }}
                    >
                      <p className="font-mono text-[9px] tracking-[0.18em] uppercase" style={{ color: "rgba(197,205,224,0.85)" }}>{t.stats[0][0]}</p>
                      <p className="font-sans font-bold text-[22px] leading-none tracking-[-0.03em] text-white">{t.stats[0][1]}</p>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  </section>
);

/* ─── COVERAGE MAP ─── */
const CoverageMap = () => (
  <section className="bg-[#FAFAF7] py-24 relative">
    {/* Gradient bleed from dark Our Approach section above */}
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#06081a]/[0.06] to-transparent pointer-events-none" />
    <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)" }}>
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#243656] opacity-60" />
            <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#243656]" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">Coverage</span>
        </div>
        <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">
          Men's health care, <em className="italic text-[#E8670A]">nationwide.</em>
        </h2>
        <p className="font-space mt-4 max-w-xl text-[15px] leading-[1.7] text-[#555] font-light">
          Telehealth in all 50 states. In-person at 3 Virginia centers. Same providers. Same protocols.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <USMap className="mt-12 max-w-3xl mx-auto" selectedState="VA" />
      </ScrollReveal>
      <div
        className="mt-12 flex flex-wrap justify-center gap-12 rounded-2xl px-10 py-8 mx-auto max-w-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(11,16,41,0.04) 0%, rgba(27,43,75,0.08) 100%)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(27,43,75,0.10)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
        }}
      >
        <StatCounter end={50} label="States" />
        <StatCounter end={3} label="VA Centers" />
        <StatCounter end={10000} suffix="+" label="Patients" />
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { name: "Richmond, VA", phone: "(804) 303-4200", desc: "Same-day labs and treatment in Richmond." },
          { name: "Newport News, VA", phone: "(757) 215-3005", desc: "Hampton Roads men's health — TRT, ED, weight loss." },
          { name: "Virginia Beach, VA", phone: "(757) 215-3006", desc: "Virginia Beach location for same-day care." },
        ].map((c, i) => (
          <ScrollReveal key={c.name} delay={i * 0.1}>
            <div
              className="rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(232,237,245,0.5) 100%)",
                backdropFilter: "blur(16px) saturate(1.4)",
                border: "1px solid rgba(27,43,75,0.10)",
                boxShadow: "0 4px 24px rgba(11,16,41,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">{`0${i + 1}`}</span>
              <h3 className="font-sans mt-2 text-lg font-semibold text-[#0B1029]">Men's Wellness Centers — {c.name}</h3>
              <p className="font-space mt-2 text-[13px] text-[#555] font-light">{c.desc}</p>
              <p className="font-space mt-2 text-[13px] text-[#555] font-light">{c.phone}</p>
              <Link to="/coverage" className="mt-4 inline-flex items-center gap-1 font-sans text-sm font-semibold text-[#E8670A] hover:underline">
                Visit Center <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── TESTIMONIALS — BENTO GRID ─── */
const Testimonials = () => (
  <section className="bg-[#F0EDE8] py-24">
    <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)" }}>
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#243656] opacity-60" />
            <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#243656]" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">Real Results</span>
        </div>
        <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">
          What patients say <em className="italic text-[#E8670A]">after starting.</em>
        </h2>
      </ScrollReveal>

      {/* Bento grid — desktop */}
      <div className="mt-12 hidden lg:grid gap-4" style={{ gridTemplateColumns: "1fr 1.3fr 1fr", gridTemplateRows: "190px 280px 200px" }}>
        {/* Stat card 1 */}
        <div className="rounded-3xl p-6 flex flex-col justify-between" style={{ background: "linear-gradient(145deg, #ffffff 0%, #E8EDF5 100%)", border: "1px solid rgba(27,43,75,0.10)", boxShadow: "0 4px 30px rgba(11,16,41,0.08), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
          <p className="font-sans font-extrabold text-[clamp(40px,3.5vw,52px)] leading-none tracking-[-0.04em]" style={{ background: "linear-gradient(160deg, #06081a 0%, #1B2B4B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>10,000+</p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">Patients Treated</p>
        </div>

        {/* Main quote card — spans 2 rows */}
        <div className="rounded-3xl overflow-hidden relative row-span-2" style={{ background: "#06081a" }}>
          <img
            src={consultation}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#06081a]/60" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <p className="font-lora text-[17px] italic leading-[1.55] text-[#E8E2D9]/90">
              "I want to express my appreciation. Their support and commitment have been outstanding — they've empowered us to take things to the next level."
            </p>
            <div className="mt-4">
              <p className="font-sans font-semibold text-base text-[#E8E2D9]">Kevin M.</p>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/35">Virginia · Google Review</p>
            </div>
          </div>
        </div>

        {/* Stat card 2 — navy gradient */}
        <div className="rounded-3xl p-6 flex flex-col justify-between" style={{ background: "linear-gradient(145deg, #1B2B4B 0%, #06081a 100%)", border: "1px solid rgba(197,205,224,0.10)", boxShadow: "0 4px 30px rgba(0,0,0,0.20)" }}>
          <p className="font-sans font-extrabold text-[clamp(40px,3.5vw,52px)] leading-none tracking-[-0.04em] text-[#E8670A]">4.9</p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C5CDE0]/50">Google Rating</p>
        </div>

        {/* Quote card 2 */}
        <div className="rounded-3xl overflow-hidden relative" style={{ background: "#111938" }}>
          <div className="absolute inset-0 bg-[#06081a]/30" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <p className="font-lora text-[15px] italic leading-[1.55] text-[#E8E2D9]/90">
              "Great experience. They answered all my questions, even the stupid ones."
            </p>
            <p className="font-sans font-semibold text-sm text-[#E8E2D9] mt-3">Adam C.</p>
          </div>
        </div>

        {/* Quote card 3 */}
        <div className="rounded-3xl overflow-hidden relative" style={{ background: "#111938" }}>
          <div className="absolute inset-0 bg-[#06081a]/30" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <p className="font-lora text-[15px] italic leading-[1.55] text-[#E8E2D9]/90">
              "Very attentive and professional, more flexible with scheduling than any medical office."
            </p>
            <p className="font-sans font-semibold text-sm text-[#E8E2D9] mt-3">Phoenix M.</p>
          </div>
        </div>

        {/* Stat card 3 — gradient */}
        <div className="rounded-3xl p-6 flex flex-col justify-between" style={{ background: "linear-gradient(145deg, #ffffff 0%, #E8EDF5 100%)", border: "1px solid rgba(27,43,75,0.10)", boxShadow: "0 4px 30px rgba(11,16,41,0.08), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
          <p className="font-sans font-extrabold text-[clamp(40px,3.5vw,52px)] leading-none tracking-[-0.04em]" style={{ background: "linear-gradient(160deg, #06081a 0%, #1B2B4B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>2015</p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">Established</p>
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="mt-12 lg:hidden flex flex-col gap-4">
        {[
          { stat: "10,000+", label: "Patients", quote: "Great experience. They answered all my questions, even the stupid ones.", name: "Adam C." },
          { stat: "4.9", label: "Google Rating", quote: "Their support and commitment have been outstanding.", name: "Kevin M." },
          { stat: "2015", label: "Established", quote: "Very attentive and professional.", name: "Phoenix M." },
        ].map((t, i) => (
          <div key={i} className="rounded-2xl p-6" style={{ background: "#06081a" }}>
            <p className="font-sans font-extrabold text-3xl text-[#E8E2D9]">{t.stat}</p>
            <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/35 mt-1">{t.label}</p>
            <p className="font-lora text-[15px] italic leading-[1.55] text-[#E8E2D9]/80 mt-4">"{t.quote}"</p>
            <p className="font-sans font-semibold text-sm text-[#E8E2D9] mt-3">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PRESS ─── */
const pressArticles = [
  { source: "Healthcare Business Today", year: "2026", title: "The Rise of Telehealth in Men's Health" },
  { source: "Authority Magazine", year: "2026", title: "How One Virginia Practice Is Going National" },
  { source: "Business Wire", year: "2026", title: "Longentis Launches Nationwide Telehealth Platform" },
  { source: "MSN", year: "2026", title: "Men's Health Gets Personal: Inside the Longentis Model" },
  { source: "Richmond Times", year: "2026", title: "From 3 Clinics to 50 States" },
  { source: "Men's Health Today", year: "2026", title: "The Future of TRT Is Telehealth" },
];

const PressSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start", dragFree: true });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#FAFAF7] py-24 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)" }}>
            <span className="relative flex h-[7px] w-[7px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#243656] opacity-60" />
              <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#243656]" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">In the News</span>
          </div>
          <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">
            What they're saying <em className="italic text-[#E8670A]">about Longentis.</em>
          </h2>
          <p className="font-space mt-4 max-w-xl text-[15px] leading-[1.7] text-[#555] font-light">
            From industry outlets to local press — the word is getting out about what we're building in men's health.
          </p>
        </ScrollReveal>

        <div
          ref={emblaRef}
          className="mt-12 overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div className="flex gap-4">
            {pressArticles.map((a, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden cursor-pointer flex flex-col flex-shrink-0 p-5 justify-end transition-all duration-300"
                style={{
                  width: 280,
                  height: activeIndex === i ? 420 : 260,
                  background: `linear-gradient(145deg, ${activeIndex === i ? "#1B2B4B" : "#111938"} 0%, #06081a 100%)`,
                  opacity: activeIndex === i ? 1 : 0.35,
                  border: activeIndex === i ? "1px solid rgba(197,205,224,0.12)" : "1px solid rgba(197,205,224,0.04)",
                  boxShadow: activeIndex === i ? "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)" : "none",
                }}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <p className="font-mono text-[8px] tracking-[0.16em] uppercase text-[#C5CDE0]/50">
                  {a.source} · {a.year}
                </p>
                <h3 className="font-sans font-semibold text-[13px] leading-[1.45] text-[#E8E2D9]/90 line-clamp-3 mt-2">{a.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[8px] tracking-[0.16em] uppercase text-[#243656]">
                  Read Article <ArrowRight className="h-2.5 w-2.5" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── PAGE ─── */
const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <HealthAssessment />
      <EditorialStatement />
      <OurApproach />
      <CoverageMap />
      <Testimonials />
      <PressSection />
    </main>
    <Footer />
    <MobileBottomBar />
  </>
);

export default Index;
