import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Stethoscope, Globe, TestTube, UserCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import USMap from "@/components/USMap";
import Diamond from "@/components/Diamond";

/* ─── ASSET IMPORTS ─── */
import fitMan from "@/assets/iStock-518621045.jpg";
import coupleJog from "@/assets/iStock-1081494342-1-4.jpg";
import trackCrouch from "@/assets/iStock-2177439750-1-8.jpg";
import boardwalkJog from "@/assets/iStock-1097324074-10.jpg";

/* ═══════════════════════════════════════════
   SECTION 1 — HERO
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
            <Diamond size="md" className="ml-2 align-super" />
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
              <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-cta mb-2">Most popular</span>
              <h2 className="font-sans font-bold text-[22px] lg:text-[28px] text-white leading-tight">Testosterone<br/>Therapy</h2>
              <p className="font-space text-[14px] text-white/65 mt-2 max-w-[280px] hidden lg:block">Comprehensive hormone panel, personalized protocol, quarterly monitoring.</p>
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
              <p className="font-space text-white/70 text-[13px] mt-2">5-minute assessment. No cost.</p>
            </div>
            <div className="size-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="h-5 w-5 text-white" />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Trust strip — ✦ diamonds instead of icons */}
    <div className="mt-10 border-t border-navy-900/[0.06] bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex items-center justify-between flex-wrap gap-y-3 gap-x-6">
        <div className="flex items-center gap-6 flex-wrap">
          {[
            "LegitScript Certified",
            "HIPAA Compliant",
            "4.9★ Google (200+ reviews)",
            "FSA / HSA Accepted",
          ].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <Diamond size="xs" className="text-cta" />
              <span className="font-sans text-[11px] font-medium tracking-wide uppercase text-navy-500">{label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-sans font-bold text-navy-900 text-[15px]">10,000+</span>
          <span className="font-sans text-[11px] font-medium tracking-wide uppercase text-navy-400">patients since 2015</span>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — HOW IT WORKS
   ═══════════════════════════════════════════ */
const steps = [
  { title: "Complete a 5-minute assessment", desc: "Medical history, symptoms, and goals — reviewed by a licensed provider." },
  { title: "Get comprehensive labs", desc: "At-home kit or Quest/Labcorp visit. 20+ biomarkers, not a questionnaire." },
  { title: "Meet your provider", desc: "Video consultation. Your labs reviewed line by line, protocol built together." },
  { title: "Treatment ships to you", desc: "Discreet delivery. Ongoing monitoring, repeat labs, and follow-ups included." },
];

const HowItWorks = () => (
  <section className="bg-white py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ScrollReveal>
        <h2 className="font-sans font-bold text-navy-900 text-[clamp(26px,3vw,38px)] leading-[1.12] tracking-[-0.02em] max-w-lg">
          From assessment to treatment in as little as 7 days.
        </h2>
      </ScrollReveal>

      <div className="mt-14 grid gap-0 lg:grid-cols-4">
        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.06}>
            <div className={`py-6 lg:py-0 lg:pr-8 ${i > 0 ? "border-t lg:border-t-0 lg:border-l border-navy-900/[0.06] lg:pl-8" : ""}`}>
              <Diamond size="md" className="text-cta/80" />
              <h3 className="font-sans font-semibold text-[15px] text-navy-900 mt-3">{step.title}</h3>
              <p className="font-space text-[14px] leading-[1.65] text-navy-500 mt-2">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-12">
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
   ═══════════════════════════════════════════ */
const WhyLongentis = () => (
  <section className="bg-cream-100 py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* Pull-quote lead */}
      <ScrollReveal>
        <div className="max-w-3xl">
          <p className="font-lora italic text-navy-900 text-[clamp(22px,2.8vw,32px)] leading-[1.4] tracking-[-0.01em]">
            "We started treating men in Virginia in 2015. Same ownership, same protocols, same obsession with labs. Longentis is just how we scale that to 50 states."
          </p>
          <p className="font-sans font-semibold text-[14px] text-navy-600 mt-5">
            — Medical Advisory Team
          </p>
        </div>
      </ScrollReveal>

      {/* Compact differentiators with ✦ */}
      <div className="mt-16 grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_1fr]">
        {[
          { title: "Same provider, every visit.", desc: "A licensed men's health specialist who knows your name, your labs, and your goals. Not a rotating roster. Not a chatbot." },
          { title: "Real labs, not questionnaires.", desc: "20+ biomarker panels analyzed with your provider — hormones, metabolic, cardiovascular. Not auto-generated by an algorithm." },
          { title: "A decade of clinical data.", desc: "Born from Men's Wellness Centers in Virginia. 10,000+ patients. The protocols are proven, not experimental." },
          { title: "LegitScript certified.", desc: "One of the few men's telehealth platforms with LegitScript certification for pharmacy and healthcare compliance." },
        ].map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.05}>
            <h3 className="font-sans font-bold text-[20px] text-navy-900 leading-tight inline-flex items-center gap-2">
              <Diamond size="sm" className="text-cta" />
              {item.title}
            </h3>
            <p className="font-space text-[15px] leading-[1.65] text-navy-600 mt-3 max-w-md">
              {item.desc}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 4 — SOCIAL PROOF
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
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <ScrollReveal>
          <h2 className="font-sans font-bold text-white text-[clamp(26px,3vw,38px)] leading-[1.12] tracking-[-0.02em] max-w-md">
            What changes when the labs are real.
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
              <Star key={i} className="h-3.5 w-3.5 text-cta fill-cta" />
            ))}
          </div>
          <span className="font-sans font-semibold text-white text-[14px]">4.9</span>
          <span className="font-space text-[12px] text-white/50">on Google</span>
        </a>
      </div>

      {/* Staggered masonry layout */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Featured — spans 2 cols */}
        <ScrollReveal className="lg:col-span-2">
          <div className="rounded-2xl p-8 lg:p-10 bg-white/[0.04] border border-white/[0.06] h-full flex flex-col justify-between">
            <div>
              <Diamond size="lg" className="text-cta/40 mb-3 block" />
              <p className="font-lora italic text-[clamp(18px,2.2vw,24px)] leading-[1.45] text-white/80">
                {testimonials[2].quote}
              </p>
            </div>
            <div className="mt-8 flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className="font-sans font-semibold text-[14px] text-white">{testimonials[2].name}</p>
                <p className="font-space text-[12px] text-white/50 mt-0.5">{testimonials[2].location}</p>
              </div>
              <p className="font-mono text-[22px] font-bold text-cta tracking-tight">{testimonials[2].metric}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Side stack */}
        <div className="flex flex-col gap-4">
          {[testimonials[1], testimonials[4]].map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.06}>
              <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.05] h-full">
                <Diamond size="sm" className="text-cta/30 mb-2 block" />
                <p className="font-space text-[14px] leading-[1.6] text-white/65">{t.quote}</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-sans font-medium text-[13px] text-white/70">{t.name} · {t.location}</p>
                  <span className="font-mono text-[10px] text-cta/80">{t.treatment}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom row */}
        {[testimonials[0], testimonials[3], testimonials[5]].map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.04}>
            <div className="rounded-xl p-5 bg-white/[0.02] border border-white/[0.04]">
              <Diamond size="xs" className="text-cta/30 mb-1.5 block" />
              <p className="font-space text-[13px] leading-[1.6] text-white/50">{t.quote}</p>
              <p className="font-sans font-medium text-[12px] text-white/60 mt-4">{t.name} · <span className="text-white/35">{t.location}</span></p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 5 — EDITORIAL BREAK
   ═══════════════════════════════════════════ */
const EditorialBreak = () => (
  <section className="relative overflow-hidden bg-cream-100">
    <div className="grid lg:grid-cols-2">
      <div className="relative h-[300px] lg:h-auto lg:min-h-[420px]">
        <img src={boardwalkJog} alt="Active lifestyle" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="flex items-center px-8 lg:px-16 py-14 lg:py-20">
        <div>
          <Diamond size="lg" className="text-cta/60 mb-4 block" />
          <p className="font-sans font-bold text-navy-900 text-[clamp(48px,6vw,72px)] leading-none tracking-tight">50</p>
          <p className="font-sans font-semibold text-navy-900 text-[18px] mt-2">states by telehealth.</p>
          <p className="font-space text-[14px] text-navy-500 mt-3 max-w-sm">
            Licensed in every state. Three in-person clinics in Virginia for same-day labs and treatment.
          </p>
          <Link to="/coverage" className="inline-flex items-center gap-1.5 mt-6 font-sans text-[14px] font-semibold text-cta hover:underline">
            View coverage <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 6 — COVERAGE + LOCATIONS
   ═══════════════════════════════════════════ */
const locations = [
  { name: "Richmond", phone: "(804) 303-4200", desc: "Same-day labs and treatment." },
  { name: "Newport News", phone: "(757) 215-3005", desc: "Hampton Roads men's health." },
  { name: "Virginia Beach", phone: "(757) 215-3006", desc: "Virginia Beach same-day care." },
];

const CoverageSection = () => (
  <section className="bg-white py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div>
          <ScrollReveal>
            <h2 className="font-sans font-bold text-navy-900 text-[clamp(26px,3vw,38px)] leading-[1.12] tracking-[-0.02em]">
              3 Virginia clinics.<br/>Telehealth everywhere else.
            </h2>
          </ScrollReveal>

          <div className="mt-8 flex gap-8">
            <StatCounter end={50} label="States" />
            <StatCounter end={3} label="VA Centers" />
            <StatCounter end={10000} suffix="+" label="Patients" />
          </div>

          <div className="mt-10 space-y-3">
            {locations.map((loc) => (
              <ScrollReveal key={loc.name}>
                <div className="flex items-baseline justify-between py-3 border-b border-navy-900/[0.05]">
                  <div>
                    <span className="font-sans font-semibold text-[15px] text-navy-900">{loc.name}, VA</span>
                    <span className="font-space text-[13px] text-navy-400 ml-3">{loc.desc}</span>
                  </div>
                  <span className="font-mono text-[12px] text-navy-400">{loc.phone}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <Link to="/coverage" className="inline-flex items-center gap-1.5 mt-6 font-sans text-[14px] font-semibold text-cta hover:underline">
              Full coverage details <ArrowRight className="h-3.5 w-3.5" />
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
   ═══════════════════════════════════════════ */
const pressArticles = [
  { source: "Healthcare Business Today", title: "The Rise of Physician-Led Telehealth in Men's Health" },
  { source: "Authority Magazine", title: "How One Virginia Practice Is Going National" },
  { source: "Business Wire", title: "Longentis Launches Nationwide Telehealth" },
];

const PressSection = () => (
  <section className="bg-cream-100 py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ScrollReveal>
        <p className="font-space text-[13px] text-navy-400 mb-6">As seen in</p>
        <div className="space-y-0 divide-y divide-navy-900/[0.06]">
          {pressArticles.map((a) => (
            <div key={a.title} className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 group cursor-pointer">
              <div className="flex items-baseline gap-4">
                <span className="font-sans font-bold text-[11px] text-navy-400 uppercase tracking-[0.06em] shrink-0 sm:w-[180px]">{a.source}</span>
                <span className="font-sans font-semibold text-[15px] text-navy-900 group-hover:text-cta transition-colors">{a.title}</span>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-navy-300 group-hover:text-cta transition-colors shrink-0" />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 8 — FINAL CTA
   ═══════════════════════════════════════════ */
const FinalCTA = () => (
  <section className="bg-navy-950 py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-10 items-end">
        <ScrollReveal>
          <h2 className="font-sans font-bold text-white text-[clamp(30px,4vw,48px)] leading-[1.08] tracking-[-0.03em]">
            Your health<br/>shouldn't wait.
          </h2>
          <p className="font-space text-[15px] text-white/50 mt-4 max-w-md">
            Start with a free assessment. Your dedicated provider is ready.
          </p>
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 mt-8 rounded-full bg-cta px-8 py-4 text-[15px] font-semibold text-white font-sans hover:bg-cta-hover transition-colors active:scale-[0.98] shadow-cta hover:shadow-cta-hover"
          >
            Start Your Free Visit <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="hidden lg:flex flex-col items-end text-right">
            <Diamond size="xl" className="text-white/[0.15]" />
            <p className="font-mono text-[11px] text-white/35 mt-3 tracking-[0.1em] uppercase">Est. 2015 · Virginia</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <HowItWorks />
      <WhyLongentis />
      <SocialProof />
      <EditorialBreak />
      <CoverageSection />
      <PressSection />
      <FinalCTA />
    </main>
    <Footer />
    <MobileBottomBar />
  </>
);

export default Index;
