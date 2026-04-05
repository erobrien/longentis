import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardCheck, TestTube, Video, Truck, Star, Shield, Heart, Scale, Activity, Thermometer, RefreshCw, Pill, Beaker } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import USMap from "@/components/USMap";
import TrustBar from "@/components/TrustBar";
import SectionHeader from "@/components/SectionHeader";

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

/* ═══════════════════════════════════════════
   SECTION 1 — HERO
   ═══════════════════════════════════════════ */
const heroStats = [
  { value: "10,000+", label: "Patients" },
  { value: "Since 2015", label: "Established" },
  { value: "All 50 States", label: "Telehealth" },
  { value: "4.9★", label: "Google Rating" },
];

const Hero = () => (
  <section className="relative w-full overflow-hidden bg-navy-950 noise-overlay">
    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        {/* Left — Copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans font-bold text-cream-100 text-[clamp(36px,5.2vw,72px)] leading-[1.04] tracking-[-0.03em]"
          >
            Clinic-grade men's health.{" "}
            <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>Nationwide.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-space text-cream-200/55 text-[16px] lg:text-[17px] max-w-lg mt-5 leading-relaxed"
          >
            TRT, ED treatment, and weight loss — physician-supervised, telehealth in all 50 states.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2.5 rounded-full bg-cta px-8 py-4 font-sans text-[15px] font-semibold text-white hover:bg-cta/90 transition-colors active:scale-[0.98]"
            >
              Start Your Free Visit <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-sans font-bold text-cream-100 text-[18px] leading-none">{s.value}</span>
                <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-cream-200/35 mt-1">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="rounded-2xl overflow-hidden h-[480px] relative">
            <img src={heroImg} alt="Men's health consultation" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 rounded-xl px-5 py-4 bg-navy-950/70 backdrop-blur-xl border border-white/[0.1]">
              <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-cream-200/50">Patients Treated</p>
              <p className="font-sans font-bold text-[28px] leading-none text-cream-100 mt-1">10,000+</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Trust badges bar */}
    <TrustBar variant="dark" className="border-t border-white/[0.06]" />
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — HOW IT WORKS
   ═══════════════════════════════════════════ */
const howItWorksSteps = [
  { icon: ClipboardCheck, num: "01", title: "Free Online Assessment", desc: "5-minute health questionnaire reviewed by a licensed men's health provider. No cost, no commitment.", time: "5 minutes" },
  { icon: TestTube, num: "02", title: "Comprehensive Lab Panel", desc: "At-home lab kit shipped to you, or visit Quest/Labcorp. 20+ biomarkers analyzed — hormones, metabolic, cardiovascular.", time: "2–5 days" },
  { icon: Video, num: "03", title: "Provider Consultation", desc: "Video visit with your dedicated men's health specialist. Labs reviewed line by line. Protocol built together.", time: "30 minutes" },
  { icon: Truck, num: "04", title: "Treatment Delivered", desc: "Medication shipped discreetly to your door. Ongoing monitoring, repeat labs, and follow-ups — all included.", time: "Ships in 48hr" },
];

const HowItWorks = () => (
  <section className="bg-cream-100 py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        badge="How It Works"
        title={<>Four steps to <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>feeling better.</em></>}
        description="From assessment to treatment in as little as 7 days. No waiting rooms. No pharmacy visits."
      />

      {/* Desktop horizontal timeline */}
      <div className="mt-14 hidden lg:grid grid-cols-4 gap-0 relative">
        {/* Connecting line */}
        <div className="absolute top-[22px] left-[calc(12.5%+22px)] right-[calc(12.5%+22px)] h-[2px] bg-navy-900/[0.08]" />
        {howItWorksSteps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 0.1}>
            <div className="flex flex-col items-center text-center px-4">
              <div className="relative z-10 size-11 rounded-full bg-navy-950 flex items-center justify-center mb-5">
                <step.icon className="h-5 w-5 text-cta" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] tracking-[0.16em] text-navy-700/30 mb-2">{step.num}</span>
              <h3 className="font-sans font-semibold text-[16px] text-navy-900 mb-2">{step.title}</h3>
              <p className="font-space text-[13px] leading-[1.6] text-navy-700/50">{step.desc}</p>
              <span className="mt-3 inline-flex items-center rounded-md px-2.5 py-1 bg-cta/[0.06] border border-cta/[0.12] font-mono text-[9px] tracking-[0.14em] uppercase text-cta/80">{step.time}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Mobile vertical stack */}
      <div className="mt-14 flex flex-col gap-4 lg:hidden">
        {howItWorksSteps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 0.06}>
            <div className="flex gap-4 items-start rounded-2xl p-5 bg-white border border-navy-900/[0.06]">
              <div className="size-11 rounded-xl bg-navy-950 flex items-center justify-center shrink-0">
                <step.icon className="h-5 w-5 text-cta" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-sans font-semibold text-[15px] text-navy-900">{step.title}</h3>
                  <span className="font-mono text-[9px] tracking-[0.14em] text-navy-700/25">{step.num}</span>
                </div>
                <p className="font-space text-[13px] leading-[1.6] text-navy-700/50">{step.desc}</p>
                <span className="mt-2 inline-flex items-center rounded-md px-2 py-1 bg-cta/[0.06] border border-cta/[0.12] font-mono text-[9px] tracking-[0.12em] uppercase text-cta/80">{step.time}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-12 text-center">
          <Link
            to="/get-started"
            className="inline-flex items-center rounded-full bg-cta px-8 py-4 text-[15px] font-semibold text-white font-sans hover:bg-cta/90 transition-colors active:scale-[0.98]"
          >
            Get Started — It Takes 5 Minutes <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 3 — TREATMENTS OVERVIEW
   ═══════════════════════════════════════════ */
const primaryTreatments = [
  { title: "Testosterone Replacement Therapy", desc: "Comprehensive hormone panel, provider-reviewed results, and a personalized TRT protocol.", href: "/treatments/trt", img: fitMan, icon: Activity },
  { title: "Erectile Dysfunction", desc: "Confidential evaluation, real diagnostics, and a treatment plan that works.", href: "/treatments/ed", img: coupleJog, icon: Heart },
  { title: "Medical Weight Loss", desc: "Physician-supervised programs combining prescription medication with monthly lab monitoring.", href: "/treatments/weight-loss", img: trackCrouch, icon: Scale },
];

const secondaryTreatments = [
  { title: "Hormone Optimization", icon: Activity },
  { title: "Metabolic Health", icon: RefreshCw },
  { title: "Thyroid Function", icon: Thermometer },
  { title: "Cardiovascular Screening", icon: Shield },
  { title: "Vitamin & Nutrient Optimization", icon: Pill },
  { title: "Ongoing Health Monitoring", icon: Beaker },
];

const TreatmentsOverview = () => (
  <section className="bg-cream-200 py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        badge="Treatments"
        title={<>Three conditions. One dedicated <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>practice.</em></>}
        description="From first assessment through every follow-up — real labs, evidence-based protocols, and physician-led oversight."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {primaryTreatments.map((t, i) => (
          <ScrollReveal key={t.title} delay={i * 0.08}>
            <Link to={t.href} className="group block rounded-2xl overflow-hidden bg-navy-950 relative h-[380px] hover:-translate-y-1 transition-all duration-300">
              <img src={t.img} alt={t.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-[1.03] transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="size-10 rounded-xl bg-white/[0.08] border border-white/[0.1] flex items-center justify-center mb-4">
                  <t.icon className="h-5 w-5 text-cta" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-semibold text-[18px] text-cream-100 mb-2">{t.title}</h3>
                <p className="font-space text-[13px] leading-[1.6] text-cream-200/50 mb-4">{t.desc}</p>
                <span className="inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-cta group-hover:underline">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {/* Secondary treatments */}
      <ScrollReveal delay={0.3}>
        <div className="mt-10 rounded-2xl p-6 bg-white border border-navy-900/[0.06]">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-navy-700/40 mb-4">We also treat</p>
          <div className="flex flex-wrap gap-3">
            {secondaryTreatments.map((t) => (
              <Link key={t.title} to="/treatments" className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 bg-navy-900/[0.04] border border-navy-900/[0.06] hover:border-navy-900/[0.12] transition-colors">
                <t.icon className="h-3.5 w-3.5 text-navy-700/50" strokeWidth={1.5} />
                <span className="font-sans text-[13px] font-medium text-navy-900/70">{t.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 4 — WHY LONGENTIS
   ═══════════════════════════════════════════ */
const differentiators = [
  { icon: CheckCircle2, title: "Same Provider Every Visit", desc: "Not a chatbot. Not a rotating roster. A licensed men's health specialist who knows your name, labs, and goals." },
  { icon: TestTube, title: "Real Lab Panels, Not Questionnaires", desc: "20+ biomarker panels analyzed line by line with your provider — not auto-generated by an algorithm." },
  { icon: Shield, title: "A Decade of Clinical Data", desc: "Born from Men's Wellness Centers — treating men in Virginia since 2015. Same ownership. Same protocols." },
  { icon: Star, title: "LegitScript Certified", desc: "One of the few men's telehealth platforms with LegitScript certification for pharmacy and healthcare compliance." },
];

const WhyLongentis = () => (
  <section className="bg-cream-100 py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
        <div>
          <SectionHeader
            badge="Why Longentis"
            title={<>The practice that actually <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>knows you.</em></>}
          />
          <div className="mt-10 space-y-6">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.06}>
                <div className="flex gap-4">
                  <div className="size-10 rounded-xl bg-navy-950 flex items-center justify-center shrink-0 mt-0.5">
                    <d.icon className="h-4.5 w-4.5 text-cta" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[15px] text-navy-900">{d.title}</h3>
                    <p className="font-space text-[13px] leading-[1.6] text-navy-700/50 mt-1">{d.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl overflow-hidden h-[480px] relative hidden lg:block">
            <img src={consultation} alt="Provider consultation" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 5 — SOCIAL PROOF
   ═══════════════════════════════════════════ */
const testimonials = [
  { quote: "I want to express my appreciation. Their support and commitment have been outstanding — they've empowered us to take things to the next level.", name: "Kevin M.", location: "Virginia", treatment: "TRT", outcome: "Energy & strength restored in 8 weeks" },
  { quote: "Great experience. They answered all my questions, even the stupid ones. I've never had a doctor spend this much time with me.", name: "Adam C.", location: "Texas", treatment: "TRT + ED", outcome: "Testosterone from 280 → 850 ng/dL" },
  { quote: "Very attentive and professional, more flexible with scheduling than any medical office I've been to.", name: "Phoenix M.", location: "Florida", treatment: "Weight Loss", outcome: "32 lbs lost in 4 months" },
  { quote: "The quarterly labs give me confidence that everything is dialed in. No other telehealth company does this level of monitoring.", name: "James R.", location: "California", treatment: "TRT", outcome: "Body fat from 28% → 19%" },
  { quote: "Discreet, professional, and actually effective. The same provider every visit makes all the difference.", name: "Marcus T.", location: "New York", treatment: "ED", outcome: "Full confidence restored" },
  { quote: "Lost 40 pounds in 5 months. My A1C dropped from 6.1 to 5.4. The metabolic labs caught things my PCP missed for years.", name: "David L.", location: "Ohio", treatment: "Weight Loss", outcome: "A1C: 6.1 → 5.4" },
];

const SocialProof = () => (
  <section className="bg-navy-950 py-24 noise-overlay relative">
    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeader
          badge="Real Results"
          badgeVariant="dark"
          title={<>What patients say <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>after starting.</em></>}
        />
        <a
          href="https://g.page/r/longentis/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.15] transition-colors"
        >
          <Star className="h-4 w-4 text-cta fill-cta" />
          <span className="font-sans font-bold text-[15px] text-cream-100">4.9</span>
          <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-cream-200/35">on Google Reviews</span>
        </a>
      </div>

      {/* Featured testimonial */}
      <ScrollReveal>
        <div className="mt-12 rounded-2xl p-8 lg:p-12 bg-white/[0.04] border border-white/[0.08]">
          <div className="flex items-center gap-2 mb-6">
            <span className="rounded-md px-2 py-1 bg-cta/10 font-mono text-[9px] tracking-[0.14em] uppercase text-cta font-medium">{testimonials[1].treatment}</span>
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-cream-200/25">Verified Patient</span>
          </div>
          <p className="font-lora text-[clamp(20px,2.5vw,32px)] italic leading-[1.4] text-cream-100/80">
            "{testimonials[1].quote}"
          </p>
          <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-sans font-semibold text-[15px] text-cream-100">{testimonials[1].name}</p>
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-cream-200/30">{testimonials[1].location} · Google Review</p>
            </div>
            <div className="rounded-lg px-4 py-2 bg-cta/[0.08] border border-cta/[0.15]">
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-cta/80">{testimonials[1].outcome}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Carousel grid */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.filter((_, i) => i !== 1).map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.05}>
            <div className="rounded-2xl p-6 h-full flex flex-col bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="rounded-md px-2 py-1 bg-cta/10 font-mono text-[9px] tracking-[0.14em] uppercase text-cta font-medium">{t.treatment}</span>
                <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-cream-200/20">Verified</span>
              </div>
              <p className="font-lora text-[15px] italic leading-[1.55] text-cream-100/65 flex-1">"{t.quote}"</p>
              {t.outcome && (
                <div className="mt-4 rounded-lg px-3 py-2 bg-white/[0.03] border border-white/[0.06]">
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-cta/70">{t.outcome}</p>
                </div>
              )}
              <div className="mt-4">
                <p className="font-sans font-semibold text-sm text-cream-100">{t.name}</p>
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-cream-200/25">{t.location}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 6 — PRESS & MEDIA
   ═══════════════════════════════════════════ */
const pressOutlets = ["Healthcare Business Today", "Authority Magazine", "Business Wire", "MSN", "Richmond Times", "Men's Health Today"];
const pressArticles = [
  { source: "Healthcare Business Today", year: "2026", title: "The Rise of Telehealth in Men's Health" },
  { source: "Authority Magazine", year: "2026", title: "How One Virginia Practice Is Going National" },
  { source: "Business Wire", year: "2026", title: "Longentis Launches Nationwide Telehealth Platform" },
];

const PressSection = () => (
  <section className="bg-cream-100 py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        badge="In the News"
        title={<>What they're saying <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>about Longentis.</em></>}
      />

      {/* Outlet logos bar */}
      <ScrollReveal>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6 border-y border-navy-900/[0.06]">
          {pressOutlets.map((outlet) => (
            <span key={outlet} className="font-sans font-bold text-[14px] text-navy-900/20 uppercase tracking-[0.06em]">{outlet}</span>
          ))}
        </div>
      </ScrollReveal>

      {/* Featured articles */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {pressArticles.map((a, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="rounded-2xl p-6 h-full flex flex-col bg-navy-950 border border-white/[0.06] hover:-translate-y-1 transition-all duration-300">
              <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-cream-200/30">{a.source} · {a.year}</span>
              <h3 className="font-sans font-semibold text-[16px] leading-[1.4] text-cream-100/90 mt-3 flex-1">{a.title}</h3>
              <span className="mt-4 inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-cta hover:underline cursor-pointer">
                Read Article <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 7 — COVERAGE MAP
   ═══════════════════════════════════════════ */
const CoverageMap = () => (
  <section className="bg-cream-200 py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        badge="Coverage"
        title={<>Telehealth everywhere. <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>In-person in Virginia.</em></>}
        description="Our telehealth platform serves men nationwide. Our Virginia centers offer same-day, in-person care."
      />

      <ScrollReveal delay={0.2}>
        <USMap className="mt-12 max-w-3xl mx-auto" selectedState="VA" />
      </ScrollReveal>

      <div className="mt-12 flex flex-wrap justify-center gap-12 rounded-2xl px-10 py-8 mx-auto max-w-2xl bg-white border border-navy-900/[0.06]">
        <StatCounter end={50} label="States" />
        <StatCounter end={3} label="VA Centers" />
        <StatCounter end={10000} suffix="+" label="Patients" />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          { name: "Richmond, VA", phone: "(804) 303-4200", desc: "Same-day labs and treatment in Richmond." },
          { name: "Newport News, VA", phone: "(757) 215-3005", desc: "Hampton Roads men's health — TRT, ED, weight loss." },
          { name: "Virginia Beach, VA", phone: "(757) 215-3006", desc: "Virginia Beach location for same-day care." },
        ].map((c, i) => (
          <ScrollReveal key={c.name} delay={i * 0.08}>
            <div className="rounded-2xl p-6 bg-white border border-navy-900/[0.06] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(11,16,41,0.08)] transition-all duration-300">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-navy-600">{`0${i + 1}`}</span>
              <h3 className="font-sans mt-2 text-lg font-semibold text-navy-900">Men's Wellness Centers — {c.name}</h3>
              <p className="font-space mt-2 text-[13px] text-navy-700/50">{c.desc}</p>
              <p className="font-space mt-1 text-[13px] text-navy-700/50">{c.phone}</p>
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

/* ═══════════════════════════════════════════
   SECTION 8 — FINAL CTA (in Footer)
   The Footer already has a pre-footer CTA,
   so we keep it but the page flow ends clean.
   ═══════════════════════════════════════════ */

/* ═══════════════════════════════════════════
   PAGE COMPOSITION
   ═══════════════════════════════════════════ */
const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <HowItWorks />
      <TreatmentsOverview />
      <WhyLongentis />
      <SocialProof />
      <PressSection />
      <CoverageMap />
    </main>
    <Footer />
    <MobileBottomBar />
  </>
);

export default Index;
