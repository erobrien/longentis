import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Stethoscope, Globe, TestTube, UserCheck, Star, Lock, BadgeCheck, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import USMap from "@/components/USMap";

/* ─── ASSET IMPORTS ─── */
import heroImg from "@/assets/iStock-1097768100-3.jpg";
import coupleJog from "@/assets/iStock-1081494342-1-4.jpg";
import fitMan from "@/assets/iStock-518621045.jpg";
import consultation from "@/assets/iStock-2187145642-1-5.jpg";
import trackCrouch from "@/assets/iStock-2177439750-1-8.jpg";
import trackEarbuds from "@/assets/iStock-859864388-6.jpg";
import boardwalkJog from "@/assets/iStock-1097324074-10.jpg";
import beachWalk from "@/assets/iStock-2170822818-12.jpg";

/* ═══════════════════════════════════════════
   SECTION 1 — HERO
   Ro.co-inspired: headline left, bento grid below,
   trust bullets inline. Cream background, not dark.
   ═══════════════════════════════════════════ */
const Hero = () => (
  <section className="relative bg-cream-100 pt-28 lg:pt-32 pb-0 overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* Headline row */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-sans font-bold text-navy-900 text-[clamp(36px,4.5vw,56px)] leading-[1.06] tracking-[-0.03em]">
            Men's Longevity,{" "}
            <span className="text-navy-400">Delivered.</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="pb-3"
        >
          <ul className="space-y-3">
            {([
              { icon: Stethoscope, text: "Physician-supervised TRT, ED & weight loss" },
              { icon: Globe, text: "Telehealth in all 50 states" },
              { icon: TestTube, text: "20+ biomarker lab panels, not questionnaires" },
              { icon: UserCheck, text: "Same provider every visit" },
            ] as const).map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <item.icon className="h-4.5 w-4.5 text-cta shrink-0" strokeWidth={1.5} />
                <span className="font-space text-[14px] text-navy-700 leading-snug">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ─── BENTO CARD GRID ─── */}
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {/* TRT — tall */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="col-span-1 row-span-2 lg:col-span-2 lg:row-span-2"
        >
          <Link to="/treatments/trt" className="group block relative rounded-2xl overflow-hidden h-[320px] lg:h-[420px] bg-navy-950">
            <img src={fitMan} alt="Testosterone therapy" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-[1.02] transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-cta mb-2">Most popular</span>
              <h2 className="font-sans font-bold text-[22px] lg:text-[28px] text-white leading-tight">Testosterone<br/>Therapy</h2>
              <p className="font-space text-[13px] text-white/50 mt-2 max-w-[280px] hidden lg:block">Comprehensive hormone panel, personalized protocol, quarterly monitoring.</p>
              <span className="inline-flex items-center gap-1.5 mt-4 font-sans text-[13px] font-semibold text-cta group-hover:gap-2.5 transition-all">
                Start now <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* ED */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
        >
          <Link to="/treatments/ed" className="group block relative rounded-2xl overflow-hidden h-[154px] lg:h-[200px] bg-navy-950">
            <img src={coupleJog} alt="Sexual health" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-[1.02] transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-5">
              <h3 className="font-sans font-bold text-[16px] lg:text-[18px] text-white">Sexual Health</h3>
              <span className="flex items-center gap-1 mt-1.5 font-sans text-[12px] font-medium text-cta">
                Learn more <ChevronRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Weight Loss */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
        >
          <Link to="/treatments/weight-loss" className="group block relative rounded-2xl overflow-hidden h-[154px] lg:h-[200px] bg-navy-950">
            <img src={trackCrouch} alt="Weight loss" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-[1.02] transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-5">
              <h3 className="font-sans font-bold text-[16px] lg:text-[18px] text-white">Weight Loss</h3>
              <span className="flex items-center gap-1 mt-1.5 font-sans text-[12px] font-medium text-cta">
                Learn more <ChevronRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="col-span-2"
        >
          <Link to="/get-started" className="group flex items-center justify-between rounded-2xl h-[154px] lg:h-[200px] bg-cta px-6 lg:px-8 hover:bg-cta-hover transition-colors duration-300">
            <div>
              <p className="font-sans font-bold text-white text-[20px] lg:text-[24px] leading-tight">Start your<br/>free visit</p>
              <p className="font-space text-white/60 text-[13px] mt-2">5-minute assessment. No cost.</p>
            </div>
            <div className="size-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="h-5 w-5 text-white" />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Trust strip */}
    <div className="mt-10 border-t border-navy-900/[0.06] bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex items-center justify-between flex-wrap gap-y-3 gap-x-6">
        <div className="flex items-center gap-6 flex-wrap">
          {[
            { icon: Shield, label: "LegitScript Certified" },
            { icon: Shield, label: "HIPAA Compliant" },
            { icon: Star, label: "4.9★ Google (200+ reviews)" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <b.icon className="h-3.5 w-3.5 text-navy-400" strokeWidth={1.5} />
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-navy-500">{b.label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <span className="font-sans font-bold text-navy-900 text-[15px]">10,000+</span>
          <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-navy-400">patients treated since 2015</span>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — HOW IT WORKS
   Clean 4-step with numbers, no timeline gimmick
   ═══════════════════════════════════════════ */
const steps = [
  { num: "01", icon: ClipboardCheck, title: "Online Assessment", desc: "5-minute health questionnaire reviewed by a licensed men's health provider.", time: "5 min" },
  { num: "02", icon: TestTube, title: "Comprehensive Labs", desc: "At-home lab kit or Quest/Labcorp visit. 20+ biomarkers — hormones, metabolic, cardiovascular.", time: "2–5 days" },
  { num: "03", icon: Video, title: "Provider Visit", desc: "Video consultation with your dedicated specialist. Labs reviewed line by line.", time: "30 min" },
  { num: "04", icon: Truck, title: "Treatment Shipped", desc: "Medication shipped discreetly. Ongoing monitoring, repeat labs, and follow-ups included.", time: "48 hrs" },
];

const HowItWorks = () => (
  <section className="bg-white py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ScrollReveal>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-navy-400 mb-4">How it works</p>
        <h2 className="font-sans font-bold text-navy-900 text-[clamp(28px,3.5vw,44px)] leading-[1.1] tracking-[-0.02em] max-w-xl">
          From assessment to treatment in as little as 7 days.
        </h2>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 0.08}>
            <div className="group relative rounded-2xl p-6 bg-cream-50 border border-navy-900/[0.04] hover:border-navy-900/[0.1] hover:shadow-card transition-all duration-300 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="size-10 rounded-xl bg-navy-950 flex items-center justify-center">
                  <step.icon className="h-4.5 w-4.5 text-cta" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[32px] font-bold text-navy-900/[0.06] leading-none">{step.num}</span>
              </div>
              <h3 className="font-sans font-semibold text-[16px] text-navy-900 mb-2">{step.title}</h3>
              <p className="font-space text-[13px] leading-[1.65] text-navy-500">{step.desc}</p>
              <div className="mt-4 inline-flex items-center rounded-md px-2.5 py-1 bg-navy-900/[0.03] border border-navy-900/[0.06]">
                <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-navy-400">{step.time}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.35}>
        <div className="mt-10 text-center">
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-7 py-3.5 text-[14px] font-semibold text-white font-sans hover:bg-navy-900 transition-colors active:scale-[0.98]"
          >
            Get Started — It Takes 5 Minutes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 3 — WHY LONGENTIS
   Editorial split layout
   ═══════════════════════════════════════════ */
const differentiators = [
  { title: "Same provider, every visit", desc: "A licensed men's health specialist who knows your name, labs, and goals. Not a chatbot." },
  { title: "Real labs, not questionnaires", desc: "20+ biomarker panels analyzed with your provider — not auto-generated by an algorithm." },
  { title: "A decade of clinical data", desc: "Born from Men's Wellness Centers, treating men in Virginia since 2015. Same ownership, same protocols." },
  { title: "LegitScript certified", desc: "One of the few men's telehealth platforms with LegitScript certification for pharmacy and healthcare compliance." },
];

const WhyLongentis = () => (
  <section className="bg-cream-100 py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        {/* Image */}
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4] relative">
            <img src={consultation} alt="Provider reviewing labs with patient" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </ScrollReveal>

        {/* Copy */}
        <div>
          <ScrollReveal>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-navy-400 mb-4">Why Longentis</p>
            <h2 className="font-sans font-bold text-navy-900 text-[clamp(28px,3.5vw,44px)] leading-[1.1] tracking-[-0.02em]">
              The practice that actually knows you.
            </h2>
          </ScrollReveal>

          <div className="mt-10 space-y-8">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.06}>
                <div className="border-l-2 border-navy-900/10 pl-5">
                  <h3 className="font-sans font-semibold text-[15px] text-navy-900">{d.title}</h3>
                  <p className="font-space text-[13px] leading-[1.65] text-navy-500 mt-1.5">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 4 — SOCIAL PROOF
   Featured quote + grid, light background
   ═══════════════════════════════════════════ */
const testimonials = [
  { quote: "I want to express my appreciation. Their support and commitment have been outstanding — they've empowered us to take things to the next level.", name: "Kevin M.", location: "Virginia", treatment: "TRT", metric: "Energy restored in 8 weeks" },
  { quote: "Great experience. They answered all my questions, even the stupid ones. I've never had a doctor spend this much time with me.", name: "Adam C.", location: "Texas", treatment: "TRT + ED", metric: "T from 280 → 850 ng/dL" },
  { quote: "Lost 40 pounds in 5 months. My A1C dropped from 6.1 to 5.4. The metabolic labs caught things my PCP missed for years.", name: "David L.", location: "Ohio", treatment: "Weight Loss", metric: "A1C: 6.1 → 5.4" },
  { quote: "Very attentive and professional, more flexible with scheduling than any medical office I've been to.", name: "Phoenix M.", location: "Florida", treatment: "Weight Loss", metric: "32 lbs in 4 months" },
  { quote: "Discreet, professional, and actually effective. The same provider every visit makes all the difference.", name: "Marcus T.", location: "New York", treatment: "ED", metric: "Confidence restored" },
  { quote: "The quarterly labs give me confidence that everything is dialed in. No other telehealth company does this level of monitoring.", name: "James R.", location: "California", treatment: "TRT", metric: "Body fat 28% → 19%" },
];

const SocialProof = () => (
  <section className="bg-navy-950 py-20 lg:py-24 relative overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <ScrollReveal>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cta mb-4">Patient outcomes</p>
          <h2 className="font-sans font-bold text-white text-[clamp(28px,3.5vw,44px)] leading-[1.1] tracking-[-0.02em]">
            Results that speak<br/>for themselves.
          </h2>
        </ScrollReveal>
        <a
          href="https://g.page/r/longentis/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start lg:self-auto"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-cta fill-cta" />
            ))}
          </div>
          <span className="font-sans font-bold text-white text-[15px]">4.9</span>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/30">on Google</span>
        </a>
      </div>

      {/* Featured */}
      <ScrollReveal>
        <div className="mt-12 rounded-2xl p-8 lg:p-10 bg-white/[0.04] border border-white/[0.06]">
          <p className="font-lora text-[clamp(18px,2.2vw,26px)] italic leading-[1.45] text-white/75">
            "{testimonials[1].quote}"
          </p>
          <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-cta/20 flex items-center justify-center">
                <span className="font-sans font-bold text-cta text-[13px]">{testimonials[1].name[0]}</span>
              </div>
              <div>
                <p className="font-sans font-semibold text-[14px] text-white">{testimonials[1].name}</p>
                <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/30">{testimonials[1].location} · {testimonials[1].treatment}</p>
              </div>
            </div>
            <div className="rounded-lg px-3 py-1.5 bg-cta/[0.1] border border-cta/[0.2]">
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-cta">{testimonials[1].metric}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid */}
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.filter((_, i) => i !== 1).map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.04}>
            <div className="rounded-2xl p-6 h-full flex flex-col bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.1] transition-colors duration-300">
              <p className="font-space text-[14px] leading-[1.6] text-white/55 flex-1">"{t.quote}"</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="size-7 rounded-full bg-white/[0.06] flex items-center justify-center">
                    <span className="font-sans font-semibold text-white/60 text-[11px]">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-[13px] text-white/80">{t.name}</p>
                    <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-white/20">{t.location}</p>
                  </div>
                </div>
                <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-cta/60">{t.treatment}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 5 — EDITORIAL IMAGE BREAK
   Full-width lifestyle image with overlaid stat
   ═══════════════════════════════════════════ */
const EditorialBreak = () => (
  <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
    <img src={boardwalkJog} alt="Men's health and wellness" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-navy-950/40" />
    <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
      <div>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/50 mb-3">Nationwide coverage</p>
        <h2 className="font-sans font-bold text-white text-[clamp(32px,5vw,56px)] leading-[1.05] tracking-[-0.03em]">
          Telehealth everywhere.<br/>In-person in Virginia.
        </h2>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 6 — COVERAGE + LOCATIONS
   ═══════════════════════════════════════════ */
const locations = [
  { name: "Richmond", phone: "(804) 303-4200", address: "Same-day labs and treatment." },
  { name: "Newport News", phone: "(757) 215-3005", address: "Hampton Roads men's health." },
  { name: "Virginia Beach", phone: "(757) 215-3006", address: "Virginia Beach same-day care." },
];

const Coverage = () => (
  <section className="bg-white py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div>
          <ScrollReveal>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-navy-400 mb-4">Coverage</p>
            <h2 className="font-sans font-bold text-navy-900 text-[clamp(28px,3.5vw,40px)] leading-[1.1] tracking-[-0.02em]">
              50 states by telehealth.<br/>3 Virginia clinics.
            </h2>
          </ScrollReveal>

          <div className="mt-8 flex gap-8">
            <StatCounter end={50} label="States" />
            <StatCounter end={3} label="VA Centers" />
            <StatCounter end={10000} suffix="+" label="Patients" />
          </div>

          <div className="mt-10 space-y-4">
            {locations.map((loc, i) => (
              <ScrollReveal key={loc.name} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-xl p-4 bg-cream-50 border border-navy-900/[0.04]">
                  <div className="size-10 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                    <span className="font-mono text-[11px] text-cta font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[15px] text-navy-900">{loc.name}, VA</h3>
                    <p className="font-space text-[13px] text-navy-500 mt-0.5">{loc.address}</p>
                    <p className="font-mono text-[12px] text-navy-400 mt-1">{loc.phone}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <Link to="/coverage" className="inline-flex items-center gap-1.5 mt-6 font-sans text-[14px] font-semibold text-cta hover:underline">
              View all coverage <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="hidden lg:block">
            <USMap className="w-full" selectedState="VA" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 7 — PRESS
   Minimal logo bar + article cards
   ═══════════════════════════════════════════ */
const pressOutlets = ["Healthcare Business Today", "Authority Magazine", "Business Wire", "MSN", "Richmond Times"];
const pressArticles = [
  { source: "Healthcare Business Today", title: "The Rise of Physician-Led Telehealth in Men's Health" },
  { source: "Authority Magazine", title: "How One Virginia Practice Is Going National" },
  { source: "Business Wire", title: "Longentis Launches Nationwide Telehealth" },
];

const Press = () => (
  <section className="bg-cream-100 py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ScrollReveal>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-navy-400 mb-4">Press</p>
        <h2 className="font-sans font-bold text-navy-900 text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.02em]">
          In the news.
        </h2>
      </ScrollReveal>

      {/* Logo bar */}
      <ScrollReveal>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 py-5 border-y border-navy-900/[0.06]">
          {pressOutlets.map((name) => (
            <span key={name} className="font-sans font-bold text-[13px] text-navy-900/15 uppercase tracking-[0.04em]">{name}</span>
          ))}
        </div>
      </ScrollReveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {pressArticles.map((a, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <div className="rounded-xl p-5 bg-white border border-navy-900/[0.04] hover:border-navy-900/[0.1] hover:shadow-card transition-all duration-300 h-full flex flex-col">
              <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-navy-400">{a.source}</span>
              <h3 className="font-sans font-semibold text-[15px] leading-[1.4] text-navy-900 mt-2 flex-1">{a.title}</h3>
              <span className="mt-4 inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-cta">
                Read <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 8 — FINAL CTA
   ═══════════════════════════════════════════ */
const FinalCTA = () => (
  <section className="bg-navy-950 py-20 lg:py-28">
    <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
      <ScrollReveal>
        <h2 className="font-sans font-bold text-white text-[clamp(32px,4.5vw,52px)] leading-[1.08] tracking-[-0.03em]">
          Your health shouldn't wait.
        </h2>
        <p className="font-space text-[15px] text-white/40 mt-4 max-w-md mx-auto">
          Start with a free assessment. Your dedicated provider is ready.
        </p>
        <Link
          to="/get-started"
          className="inline-flex items-center gap-2 mt-8 rounded-full bg-cta px-8 py-4 text-[15px] font-semibold text-white font-sans hover:bg-cta-hover transition-colors active:scale-[0.98] shadow-cta hover:shadow-cta-hover"
        >
          Start Your Free Visit <ArrowRight className="h-4 w-4" />
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   PAGE COMPOSITION
   ═══════════════════════════════════════════ */
const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <HowItWorks />
      <WhyLongentis />
      <SocialProof />
      <EditorialBreak />
      <Coverage />
      <Press />
      <FinalCTA />
    </main>
    <Footer />
    <MobileBottomBar />
  </>
);

export default Index;
