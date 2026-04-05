import { motion } from "framer-motion";
import { ArrowRight, Activity, Beaker, Heart, Thermometer, Shield, FlaskConical, Pill, Scale, RefreshCw, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import USMap from "@/components/USMap";

/* ─── ASSET IMPORTS ─── */
import heroImg from "@/assets/iStock-1097768100-3.jpg";
import coupleJog from "@/assets/iStock-1081494342-1-4.jpg";
import oceanRunner from "@/assets/iStock-948010824-2.jpg";
import fitMan from "@/assets/iStock-518621045.jpg";
import consultation from "@/assets/iStock-2187145642-1-5.jpg";
import trackSitting from "@/assets/iStock-864444970-1-7.jpg";
import trackCrouch from "@/assets/iStock-2177439750-1-8.jpg";
import trackEarbuds from "@/assets/iStock-859864388-6.jpg";
import boardwalkJog from "@/assets/iStock-1097324074-10.jpg";
import jogCloseup from "@/assets/iStock-1097324174-11.jpg";
import beachWalk from "@/assets/iStock-2170822818-12.jpg";

/* ─── HERO BLOCK MENU ─── */
const heroCards = [
  {
    title: "Testosterone Replacement Therapy",
    img: fitMan,
    bgClass: "bg-navy-950",
    href: "/treatments",
  },
  {
    title: "Erectile Dysfunction",
    img: coupleJog,
    bgClass: "bg-navy-800",
    href: "/treatments",
  },
  {
    title: "Peptides",
    img: oceanRunner,
    bgClass: "bg-navy-900",
    href: "/treatments",
  },
  {
    title: "Weight Loss",
    img: trackCrouch,
    bgClass: "bg-navy-700",
    href: "/treatments",
  },
  {
    title: "Get Started",
    img: heroImg,
    bgClass: "bg-cta",
    href: "/get-started",
    isAccent: true,
  },
];

const HeroCard = ({ title, img, bgClass, href, className, isAccent }: { title: string; img: string; bgClass: string; href: string; className?: string; isAccent?: boolean }) => (
  <Link
    to={href}
    className={`group relative overflow-hidden rounded-2xl flex flex-col justify-between p-6 lg:p-8 ${bgClass} ${className ?? ""}`}
  >
    <h3 className="relative z-10 font-sans font-semibold text-white text-lg lg:text-2xl max-w-[220px] leading-tight">
      {title}
    </h3>
    <div className="relative z-10 mt-auto pt-4">
      <span className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-white font-sans text-[11px] font-bold uppercase tracking-[0.08em] transition-all group-hover:scale-105 ${isAccent ? "bg-white/20 backdrop-blur-sm group-hover:bg-white/30" : "bg-black/80 group-hover:bg-black"}`}>
        Start now
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </div>
    <img
      src={img}
      alt={title}
      className="absolute bottom-0 right-0 h-[70%] w-[45%] object-cover object-top rounded-tl-2xl opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500"
    />
  </Link>
);

const valueProps = [
  "10,000+ patients since 2015",
  "Real providers, FDA-approved protocols",
  "Same dedicated provider every visit",
  "Get started 100% online",
];

const Hero = () => (
  <section className="relative w-full overflow-hidden pt-28 lg:pt-32 pb-0 bg-cream-100">
    <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-8 lg:mb-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-sans font-bold text-navy-900 text-[clamp(36px,5vw,72px)] leading-[1.05] tracking-[-0.03em] mb-4"
      >
        Clinic-grade men's health,{" "}
        <em className="font-lora italic text-cta not-italic" style={{ fontStyle: "italic" }}>delivered.</em>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-space text-navy-700/70 text-[15px] lg:text-[17px] max-w-2xl mb-6 leading-relaxed"
      >
        TRT, ED treatment, and physician-supervised weight loss — backed by a decade of clinical data from Men's Wellness Centers.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center gap-x-6 gap-y-2"
      >
        {valueProps.map((prop) => (
          <span key={prop} className="inline-flex items-center gap-1.5 text-navy-900/60 font-space text-[13px] lg:text-[14px]">
            <CheckCircle2 className="h-4 w-4 text-cta shrink-0" />
            {prop}
          </span>
        ))}
      </motion.div>
    </div>

    <motion.div
      className="mx-auto max-w-7xl px-4 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="hidden lg:grid grid-cols-2 gap-3 mb-3">
        <HeroCard {...heroCards[0]} className="h-[360px]" />
        <HeroCard {...heroCards[1]} className="h-[360px]" />
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-3">
        <HeroCard {...heroCards[2]} className="h-[240px]" />
        <HeroCard {...heroCards[3]} className="h-[240px]" />
        <HeroCard {...heroCards[4]} className="h-[240px]" />
      </div>
      <div className="flex flex-col gap-3 lg:hidden">
        {heroCards.map((card) => (
          <HeroCard key={card.title} {...card} className="h-[200px]" />
        ))}
      </div>
    </motion.div>

    {/* Trust bar */}
    <div className="bg-cream-100 py-5 px-6 mt-6">
      <div className="mx-auto max-w-7xl flex items-center justify-center gap-10 flex-wrap">
        {["LegitScript Certified", "HIPAA Compliant", "State Licensed", "FSA/HSA Eligible"].map((name) => (
          <span key={name} className="font-mono text-[9px] tracking-[0.18em] uppercase text-navy-900/30">
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

const SectionBadge = ({ children, variant = "light" }: { children: React.ReactNode; variant?: "light" | "dark" }) => (
  <div className={`inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 ${
    variant === "dark"
      ? "bg-white/[0.06] border border-white/[0.12]"
      : "bg-navy-900/[0.08] border border-navy-900/[0.15]"
  }`}>
    <span className="relative flex h-[7px] w-[7px]">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${variant === "dark" ? "bg-cta" : "bg-navy-600"}`} />
      <span className={`relative inline-flex rounded-full h-[7px] w-[7px] ${variant === "dark" ? "bg-cta" : "bg-navy-600"}`} />
    </span>
    <span className={`font-mono text-[10px] tracking-[0.22em] uppercase ${
      variant === "dark" ? "text-white/50" : "text-navy-600"
    }`}>{children}</span>
  </div>
);

const HealthAssessment = () => (
  <section className="bg-cream-100 py-24 relative">
    <div className="absolute inset-x-0 top-0 h-32 bg-navy-950/[0.03] pointer-events-none" style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }} />
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ScrollReveal>
        <SectionBadge>Your Health Snapshot</SectionBadge>
        <h2 className="font-sans font-bold mt-6 text-[clamp(28px,3.8vw,52px)] leading-[1.12] tracking-[-0.02em] text-navy-900">
          Know your numbers.{" "}
          <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>Own your health.</em>
        </h2>
        <p className="font-space mt-4 max-w-2xl text-[15px] leading-[1.7] text-navy-700/60">
          Your comprehensive lab panel covers 20+ biomarkers across hormones, metabolism, cardiovascular risk, and nutrient levels — giving your provider the full picture, not a guess.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4">
        {assessmentCards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.04}>
            <div className="flex w-full flex-row items-center rounded-2xl py-3 pr-5 pl-3 bg-white/80 backdrop-blur-sm border border-navy-900/[0.06] shadow-[0_2px_16px_rgba(11,16,41,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(11,16,41,0.10)] transition-all duration-300">
              <div className="size-11 shrink-0 overflow-hidden rounded-xl md:size-13 flex items-center justify-center bg-navy-950">
                <card.icon className="h-5 w-5 text-cream-200" strokeWidth={1.5} />
              </div>
              <div className="ml-3">
                <h3 className="font-sans text-sm leading-none font-semibold text-navy-900 md:text-[15px]">{card.title}</h3>
                <p className="font-space text-xs leading-snug text-navy-700/50 md:text-[13px] mt-1">{card.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── EDITORIAL COLLAGE ─── */
const GridImg = ({ src, alt, style }: { src: string; alt: string; style: React.CSSProperties }) => (
  <div className="rounded-lg overflow-hidden relative" style={style}>
    <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div>
);

const EditorialStatement = () => (
  <section className="bg-cream-200 overflow-hidden">
    <div className="mx-auto max-w-7xl px-4 lg:px-6">
      <div className="hidden lg:grid grid-cols-8 gap-2.5 pt-10 pb-0" style={{ gridTemplateRows: "repeat(7, 120px)" }}>
        <GridImg src={coupleJog}    alt="" style={{ gridColumn: "1/2", gridRow: "1/2" }} />
        <GridImg src={consultation} alt="" style={{ gridColumn: "2/3", gridRow: "1/2" }} />
        <GridImg src={trackCrouch}  alt="" style={{ gridColumn: "3/4", gridRow: "1/2" }} />
        <GridImg src={oceanRunner}  alt="" style={{ gridColumn: "4/5", gridRow: "1/2" }} />
        <GridImg src={fitMan}       alt="" style={{ gridColumn: "5/6", gridRow: "1/2" }} />
        <GridImg src={boardwalkJog} alt="" style={{ gridColumn: "6/7", gridRow: "1/2" }} />
        <GridImg src={trackEarbuds} alt="" style={{ gridColumn: "7/8", gridRow: "1/2" }} />
        <GridImg src={jogCloseup}   alt="" style={{ gridColumn: "8/9", gridRow: "1/2" }} />

        <GridImg src={trackSitting}  alt="" style={{ gridColumn: "1/2", gridRow: "2/4" }} />
        <GridImg src={beachWalk}     alt="" style={{ gridColumn: "2/3", gridRow: "2/3" }} />
        <GridImg src={coupleJog}     alt="" style={{ gridColumn: "7/8", gridRow: "2/3" }} />
        <GridImg src={consultation}  alt="" style={{ gridColumn: "8/9", gridRow: "2/4" }} />
        <GridImg src={oceanRunner}   alt="" style={{ gridColumn: "2/3", gridRow: "3/4" }} />
        <GridImg src={boardwalkJog}  alt="" style={{ gridColumn: "7/8", gridRow: "3/5" }} />

        {/* CENTER TEXT */}
        <div className="flex flex-col items-center justify-center text-center px-10 z-10" style={{ gridColumn: "3/7", gridRow: "2/6" }}>
          <ScrollReveal>
            <h2 className="font-sans font-bold text-[clamp(30px,3.4vw,48px)] leading-[1.12] tracking-[-0.02em] text-navy-900 mb-6">
              Extending what's possible in{" "}
              <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>men's health.</em>
            </h2>
            <p className="font-space text-[15px] leading-[1.7] text-navy-700/60 max-w-[480px] mb-8">
              The gap between how men feel and what their doctor calls 'normal' is where we operate. Longentis connects you with dedicated men's health providers, real lab panels, and treatment protocols built on a decade of clinical data — not a questionnaire and a subscription.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 border border-navy-600/40 px-6 py-3 rounded-lg group transition-all duration-200 hover:border-navy-600 hover:bg-navy-600/[0.06]"
            >
              <span className="font-sans font-semibold text-[11px] tracking-[0.08em] uppercase text-navy-600">About Longentis</span>
              <ArrowRight className="h-3.5 w-3.5 text-navy-600 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <GridImg src={fitMan}        alt="" style={{ gridColumn: "1/2", gridRow: "4/6" }} />
        <GridImg src={trackCrouch}   alt="" style={{ gridColumn: "2/3", gridRow: "4/5" }} />
        <GridImg src={trackEarbuds}  alt="" style={{ gridColumn: "8/9", gridRow: "4/6" }} />
        <GridImg src={jogCloseup}    alt="" style={{ gridColumn: "2/3", gridRow: "5/6" }} />

        <GridImg src={beachWalk}     alt="" style={{ gridColumn: "1/2", gridRow: "6/7" }} />
        <GridImg src={trackSitting}  alt="" style={{ gridColumn: "2/3", gridRow: "6/7" }} />
        <GridImg src={coupleJog}     alt="" style={{ gridColumn: "3/4", gridRow: "6/7" }} />
        <GridImg src={oceanRunner}   alt="" style={{ gridColumn: "4/5", gridRow: "6/7" }} />
        <GridImg src={consultation}  alt="" style={{ gridColumn: "5/6", gridRow: "6/7" }} />
        <GridImg src={fitMan}        alt="" style={{ gridColumn: "6/7", gridRow: "6/7" }} />
        <GridImg src={boardwalkJog}  alt="" style={{ gridColumn: "7/8", gridRow: "6/7" }} />
        <GridImg src={trackCrouch}   alt="" style={{ gridColumn: "8/9", gridRow: "6/7" }} />

        <GridImg src={jogCloseup}    alt="" style={{ gridColumn: "1/2", gridRow: "7/8" }} />
        <GridImg src={trackEarbuds}  alt="" style={{ gridColumn: "2/3", gridRow: "7/8" }} />
        <GridImg src={beachWalk}     alt="" style={{ gridColumn: "3/5", gridRow: "7/8" }} />
        <GridImg src={oceanRunner}   alt="" style={{ gridColumn: "5/6", gridRow: "7/8" }} />
        <GridImg src={coupleJog}     alt="" style={{ gridColumn: "6/7", gridRow: "7/8" }} />
        <GridImg src={trackSitting}  alt="" style={{ gridColumn: "7/8", gridRow: "7/8" }} />
        <GridImg src={consultation}  alt="" style={{ gridColumn: "8/9", gridRow: "7/8" }} />
      </div>

      {/* Mobile */}
      <div className="lg:hidden py-16">
        <div className="grid grid-cols-4 gap-2 mb-10">
          {[coupleJog, oceanRunner, trackEarbuds, fitMan, consultation, boardwalkJog, trackCrouch, beachWalk].map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden h-20 relative">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <ScrollReveal>
          <h2 className="font-sans font-bold text-[clamp(28px,7vw,42px)] leading-[1.12] tracking-[-0.02em] text-navy-900 mb-5">
            Extending what's possible in{" "}
            <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>men's health.</em>
          </h2>
          <p className="font-space text-[15px] leading-[1.7] text-navy-700/60">
            The gap between how men feel and what their doctor calls 'normal' is where we operate. Longentis connects you with dedicated men's health providers, real lab panels, and treatment protocols built on a decade of clinical data.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 border border-navy-600/40 px-5 py-2.5 rounded-lg font-sans font-semibold text-[11px] tracking-[0.08em] uppercase text-navy-600">
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
    img: consultation,
  },
  {
    id: "labs",
    label: "Lab-Driven Protocols",
    num: "02",
    h3: "Real Labs, Real Data",
    body: "20+ biomarker panels, not questionnaires. At-home lab kits or in-center draws. Results reviewed line by line with your provider — not auto-generated by an algorithm.",
    stats: [["Biomarkers", "20+"], ["Results", "In days"]],
    img: trackEarbuds,
  },
  {
    id: "care",
    label: "Ongoing Care",
    num: "03",
    h3: "Care That Doesn't Stop",
    body: "Follow-ups, dosage adjustments, repeat labs, and direct messaging with your provider between visits. All included. This is ongoing care, not a one-time prescription.",
    stats: [["Follow-ups", "Unlimited"], ["Provider Access", "Direct"]],
    img: trackCrouch,
  },
];

const OurApproach = () => (
  <section className="bg-navy-950 py-24 noise-overlay relative">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ScrollReveal>
        <SectionBadge variant="dark">Our Approach</SectionBadge>
        <h2 className="font-sans font-bold mt-6 text-[clamp(28px,3.8vw,52px)] leading-[1.12] tracking-[-0.02em] text-cream-200">
          The full stack behind{" "}
          <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>every patient.</em>
        </h2>
      </ScrollReveal>

      <div className="mt-12">
        <div className="relative rounded-2xl overflow-hidden bg-cream-100">
          {/* Solid accent borders */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-cta/20" />
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-cta/20" />

          <Tabs defaultValue="providers" className="relative z-10 px-6 py-6 lg:px-12 lg:py-10">
            <TabsList className="bg-transparent border-0 p-0 h-auto flex flex-wrap gap-2 mb-8">
              {tabsData.map((t) => (
                <TabsTrigger
                  key={t.id}
                  value={t.id}
                  className="font-mono text-[10px] tracking-[0.1em] uppercase px-4 py-2.5 rounded-md transition-all data-[state=active]:bg-white/80 data-[state=active]:border data-[state=active]:border-navy-900/20 data-[state=active]:shadow-sm data-[state=inactive]:bg-navy-900/[0.04] data-[state=inactive]:border data-[state=inactive]:border-navy-900/[0.08]"
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
                    <span className="font-mono text-[10px] bg-white/70 px-2 py-1 rounded text-navy-600 border border-navy-900/10">{t.num}</span>
                    <h3 className="font-sans mt-4 text-2xl font-bold text-navy-900 md:text-3xl">{t.h3}</h3>
                    <p className="font-space mt-4 text-[15px] leading-[1.7] text-navy-700/60">{t.body}</p>
                    <Link to="/treatments" className="mt-6 inline-flex items-center gap-1 font-sans text-sm font-semibold text-cta hover:underline">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="mt-8 flex gap-12">
                      {t.stats.map(([label, val]) => (
                        <div key={label}>
                          <p className="font-sans text-2xl font-bold text-navy-900">{val}</p>
                          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-navy-700/40">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg h-72 lg:h-auto relative overflow-hidden">
                    <img src={t.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div
                      className="absolute bottom-4 left-4 rounded-lg px-4 py-3 bg-navy-950/60 backdrop-blur-xl border border-white/[0.12]"
                    >
                      <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/60">{t.stats[0][0]}</p>
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
  <section className="bg-cream-100 py-24 relative">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ScrollReveal>
        <SectionBadge>Coverage</SectionBadge>
        <h2 className="font-sans font-bold mt-6 text-[clamp(28px,3.8vw,52px)] leading-[1.12] tracking-[-0.02em] text-navy-900">
          Men's health care,{" "}
          <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>nationwide.</em>
        </h2>
        <p className="font-space mt-4 max-w-xl text-[15px] leading-[1.7] text-navy-700/60">
          Telehealth in all 50 states. In-person at 3 Virginia centers. Same providers. Same protocols.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <USMap className="mt-12 max-w-3xl mx-auto" selectedState="VA" />
      </ScrollReveal>
      <div className="mt-12 flex flex-wrap justify-center gap-12 rounded-2xl px-10 py-8 mx-auto max-w-2xl bg-navy-900/[0.04] border border-navy-900/[0.08]">
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
            <div className="rounded-2xl p-6 bg-white/80 backdrop-blur-sm border border-navy-900/[0.06] shadow-[0_4px_24px_rgba(11,16,41,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(11,16,41,0.10)] transition-all duration-300">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-navy-600">{`0${i + 1}`}</span>
              <h3 className="font-sans mt-2 text-lg font-semibold text-navy-900">Men's Wellness Centers — {c.name}</h3>
              <p className="font-space mt-2 text-[13px] text-navy-700/50">{c.desc}</p>
              <p className="font-space mt-2 text-[13px] text-navy-700/50">{c.phone}</p>
              <Link to="/coverage" className="mt-4 inline-flex items-center gap-1 font-sans text-sm font-semibold text-cta hover:underline">
                Visit Center <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── TESTIMONIALS ─── */
const Testimonials = () => (
  <section className="bg-cream-200 py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ScrollReveal>
        <SectionBadge>Real Results</SectionBadge>
        <h2 className="font-sans font-bold mt-6 text-[clamp(28px,3.8vw,52px)] leading-[1.12] tracking-[-0.02em] text-navy-900">
          What patients say{" "}
          <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>after starting.</em>
        </h2>
      </ScrollReveal>

      {/* Desktop bento */}
      <div className="mt-12 hidden lg:grid gap-4" style={{ gridTemplateColumns: "1fr 1.3fr 1fr", gridTemplateRows: "190px 280px 200px" }}>
        {/* Stat: Patients */}
        <div className="rounded-2xl p-6 flex flex-col justify-between bg-white border border-navy-900/[0.06]">
          <p className="font-sans font-extrabold text-[clamp(40px,3.5vw,52px)] leading-none tracking-[-0.04em] text-navy-900">10,000+</p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-navy-600">Patients Treated</p>
        </div>

        {/* Main quote — spans 2 rows */}
        <div className="rounded-2xl overflow-hidden relative row-span-2 bg-navy-950">
          <img src={consultation} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-navy-950/50" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <p className="font-lora text-[17px] italic leading-[1.55] text-cream-100/90">
              "I want to express my appreciation. Their support and commitment have been outstanding — they've empowered us to take things to the next level."
            </p>
            <div className="mt-4">
              <p className="font-sans font-semibold text-base text-cream-100">Kevin M.</p>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/30">Virginia · Google Review</p>
            </div>
          </div>
        </div>

        {/* Stat: Rating */}
        <div className="rounded-2xl p-6 flex flex-col justify-between bg-navy-950 border border-white/[0.06]">
          <p className="font-sans font-extrabold text-[clamp(40px,3.5vw,52px)] leading-none tracking-[-0.04em] text-cta">4.9</p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/40">Google Rating</p>
        </div>

        {/* Quote 2 */}
        <div className="rounded-2xl overflow-hidden relative bg-navy-900">
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <p className="font-lora text-[15px] italic leading-[1.55] text-cream-100/85">
              "Great experience. They answered all my questions, even the stupid ones."
            </p>
            <p className="font-sans font-semibold text-sm text-cream-100 mt-3">Adam C.</p>
          </div>
        </div>

        {/* Quote 3 */}
        <div className="rounded-2xl overflow-hidden relative bg-navy-900">
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <p className="font-lora text-[15px] italic leading-[1.55] text-cream-100/85">
              "Very attentive and professional, more flexible with scheduling than any medical office."
            </p>
            <p className="font-sans font-semibold text-sm text-cream-100 mt-3">Phoenix M.</p>
          </div>
        </div>

        {/* Stat: Established */}
        <div className="rounded-2xl p-6 flex flex-col justify-between bg-white border border-navy-900/[0.06]">
          <p className="font-sans font-extrabold text-[clamp(40px,3.5vw,52px)] leading-none tracking-[-0.04em] text-navy-900">2015</p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-navy-600">Established</p>
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-12 lg:hidden flex flex-col gap-4">
        {[
          { stat: "10,000+", label: "Patients", quote: "Great experience. They answered all my questions, even the stupid ones.", name: "Adam C." },
          { stat: "4.9", label: "Google Rating", quote: "Their support and commitment have been outstanding.", name: "Kevin M." },
          { stat: "2015", label: "Established", quote: "Very attentive and professional.", name: "Phoenix M." },
        ].map((t, i) => (
          <div key={i} className="rounded-2xl p-6 bg-navy-950">
            <p className="font-sans font-extrabold text-3xl text-cream-100">{t.stat}</p>
            <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/30 mt-1">{t.label}</p>
            <p className="font-lora text-[15px] italic leading-[1.55] text-cream-100/75 mt-4">"{t.quote}"</p>
            <p className="font-sans font-semibold text-sm text-cream-100 mt-3">{t.name}</p>
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
    <section className="bg-cream-100 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionBadge>In the News</SectionBadge>
          <h2 className="font-sans font-bold mt-6 text-[clamp(28px,3.8vw,52px)] leading-[1.12] tracking-[-0.02em] text-navy-900">
            What they're saying{" "}
            <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>about Longentis.</em>
          </h2>
          <p className="font-space mt-4 max-w-xl text-[15px] leading-[1.7] text-navy-700/60">
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
                className={`rounded-2xl overflow-hidden cursor-pointer flex flex-col flex-shrink-0 p-5 justify-end transition-all duration-300 ${
                  activeIndex === i ? "bg-navy-800 border border-white/[0.10] opacity-100" : "bg-navy-950 border border-white/[0.04] opacity-35"
                }`}
                style={{
                  width: 280,
                  height: activeIndex === i ? 420 : 260,
                }}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <p className="font-mono text-[8px] tracking-[0.16em] uppercase text-white/40">
                  {a.source} · {a.year}
                </p>
                <h3 className="font-sans font-semibold text-[13px] leading-[1.45] text-cream-100/90 line-clamp-3 mt-2">{a.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[8px] tracking-[0.16em] uppercase text-navy-600">
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
