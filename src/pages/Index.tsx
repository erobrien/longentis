import { motion } from "framer-motion";
import { ArrowRight, Activity, Beaker, Heart, Thermometer, Shield, FlaskConical, Pill, Scale, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import USMap from "@/components/USMap";

/* ─── HERO ─── */
const Hero = () => (
  <section className="relative min-h-screen bg-navy-950 noise-overlay flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 to-navy-900/80 z-[1]" />
    <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
      {/* Announcement pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-cream-200/80">
          <span className="rounded-full bg-cta px-2 py-0.5 text-[10px] font-bold uppercase text-cta-foreground">New</span>
          Longentis telehealth now available in all 50 states →
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-4xl font-normal leading-tight text-cream-200 md:text-6xl lg:text-7xl max-w-4xl"
      >
        Clinic-grade men's health,{" "}
        <em className="text-cta italic">delivered.</em>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-cream-200/70 md:text-xl"
      >
        TRT, ED treatment, and physician-supervised weight loss — backed by 10,000+ patients and a decade of Men's Wellness Centers clinical experience. Now via telehealth in all 50 states.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Link
          to="/get-started"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cta px-8 py-4 font-heading text-base font-semibold text-cta-foreground transition-all hover:shadow-xl hover:brightness-110 active:scale-[0.98]"
        >
          Start Your Free Visit <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>

      {/* Bottom metrics */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mt-20 grid grid-cols-2 gap-6 border-t border-white/[0.08] pt-8 md:grid-cols-4"
      >
        {[
          ["10,000+", "Patients Treated"],
          ["2015", "Since"],
          ["3", "Virginia Centers"],
          ["50", "States via Telehealth"],
        ].map(([val, label]) => (
          <div key={label}>
            <p className="font-heading text-2xl font-bold text-cream-200 md:text-3xl">{val}</p>
            <p className="font-mono-label mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-cream-200/50">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── LOGO TICKER ─── */
const LogoTicker = () => {
  const logos = ["LegitScript", "HIPAA Compliant", "State Licensed", "FSA/HSA Accepted"];
  return (
    <section className="bg-background py-12 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono-label text-center text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-8">Trusted by</p>
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <span key={i} className="font-heading text-lg font-semibold text-muted-foreground/40 hover:text-foreground transition-colors shrink-0">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
  <section className="bg-background py-24">
    <div className="mx-auto max-w-7xl px-6">
      <ScrollReveal>
        <SectionLabel text="Your Health Snapshot" />
        <h2 className="font-heading mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Know your numbers. Own your health.
        </h2>
        <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Your comprehensive lab panel covers 20+ biomarkers across hormones, metabolism, cardiovascular risk, and nutrient levels — giving your provider the full picture, not a guess.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {assessmentCards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.05}>
            <div className="group rounded-lg border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <card.icon className="h-8 w-8 text-cta mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="font-body mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── EDITORIAL STATEMENT ─── */
const EditorialStatement = () => (
  <section className="bg-background py-24 overflow-hidden">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-3">
            {[
              "rounded-lg bg-navy-800 h-48",
              "rounded-lg bg-navy-700 h-56 mt-8",
              "rounded-lg bg-navy-600 h-44 mt-4",
              "rounded-lg bg-navy-900 h-40 col-span-2",
              "rounded-lg bg-navy-800 h-52",
            ].map((cls, i) => (
              <div key={i} className={cls} />
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Extending what's possible in men's health.
          </h2>
          <p className="font-body mt-6 text-lg leading-relaxed text-muted-foreground">
            The gap between how men feel and what their doctor calls 'normal' is where we operate. Longentis connects you with dedicated men's health providers, real lab panels, and treatment protocols built on a decade of clinical data — not a questionnaire and a subscription.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-semibold text-cta hover:underline">
            About Longentis <ArrowRight className="h-4 w-4" />
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
  <section className="bg-navy-950 noise-overlay py-24">
    <div className="mx-auto max-w-7xl px-6 relative z-10">
      <ScrollReveal>
        <SectionLabel text="Our Approach" />
        <h2 className="font-heading mt-3 text-3xl font-bold text-cream-200 md:text-4xl lg:text-5xl">
          The full stack behind every patient.
        </h2>
        <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-cream-200/70">
          From your first consultation to every follow-up — built for how men's health actually works.
        </p>
      </ScrollReveal>

      <Tabs defaultValue="providers" className="mt-12">
        <TabsList className="bg-white/[0.05] border border-white/[0.08] p-1 rounded-lg w-full md:w-auto">
          {tabsData.map((t) => (
            <TabsTrigger
              key={t.id}
              value={t.id}
              className="font-heading text-sm font-semibold text-cream-200/60 data-[state=active]:text-cream-200 data-[state=active]:bg-white/[0.08] rounded-md px-4 py-2"
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
              className="mt-8 grid gap-8 lg:grid-cols-2"
            >
              <div>
                <span className="font-mono-label text-xs font-medium text-cta tracking-[0.15em]">{t.num}</span>
                <h3 className="font-heading mt-2 text-2xl font-semibold text-cream-200 md:text-3xl">{t.h3}</h3>
                <p className="font-body mt-4 text-lg leading-relaxed text-cream-200/70">{t.body}</p>
                <Link to="/treatments" className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-semibold text-cta hover:underline">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="mt-8 flex gap-12">
                  {t.stats.map(([label, val]) => (
                    <div key={label}>
                      <p className="font-heading text-2xl font-bold text-cream-200">{val}</p>
                      <p className="font-mono-label text-[11px] font-medium uppercase tracking-[0.15em] text-cream-200/50">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-navy-800 h-72 lg:h-auto" />
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

/* ─── COVERAGE MAP ─── */
const CoverageMap = () => (
  <section className="bg-background py-24">
    <div className="mx-auto max-w-7xl px-6">
      <ScrollReveal>
        <SectionLabel text="Coverage" />
        <h2 className="font-heading mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Men's health care, <span className="font-display italic text-cta">nationwide.</span>
        </h2>
        <p className="font-body mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Telehealth in all 50 states. In-person at 3 Virginia centers. Same providers. Same protocols.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <USMap className="mt-12 max-w-3xl mx-auto" selectedState="VA" />
      </ScrollReveal>
      <div className="mt-12 flex flex-wrap justify-center gap-12">
        <StatCounter end={50} label="States" />
        <StatCounter end={3} label="VA Centers" />
        <StatCounter end={10000} suffix="+" label="Patients" />
      </div>

      {/* Virginia clinic cards */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { name: "Richmond, VA", phone: "(804) 303-4200", desc: "Same-day labs and treatment in Richmond." },
          { name: "Newport News, VA", phone: "(757) 215-3005", desc: "Hampton Roads men's health — TRT, ED, weight loss." },
          { name: "Virginia Beach, VA", phone: "(757) 215-3006", desc: "Virginia Beach location for same-day care." },
        ].map((c, i) => (
          <ScrollReveal key={c.name} delay={i * 0.1}>
            <div className="rounded-lg border border-border bg-background p-6">
              <span className="font-mono-label text-xs font-medium text-cta">{`0${i + 1}`}</span>
              <h3 className="font-heading mt-2 text-lg font-semibold text-foreground">Men's Wellness Centers — {c.name}</h3>
              <p className="font-body mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <p className="font-body mt-2 text-sm text-muted-foreground">{c.phone}</p>
              <Link to="/coverage" className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-cta hover:underline">
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
const testimonials = [
  { stat: "10,000+ Patients", quote: "Great experience. They answered all my questions, even the stupid ones.", name: "Adam C.", location: "Virginia" },
  { stat: "4.9 Google Rating", quote: "I want to express my appreciation. Their support and commitment have been outstanding — they've empowered us to take things to the next level.", name: "Kevin M.", location: "Virginia" },
  { stat: "Since 2015", quote: "Very attentive and professional, more flexible with scheduling than any medical office other than a walk-in clinic.", name: "Phoenix M.", location: "Virginia" },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-navy-950 noise-overlay py-24">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <ScrollReveal>
          <SectionLabel text="Real Results" />
          <div className="flex items-end justify-between">
            <h2 className="font-heading mt-3 text-3xl font-bold text-cream-200 md:text-4xl lg:text-5xl">
              What patients say <span className="font-display italic text-cta">after starting.</span>
            </h2>
            <div className="hidden gap-2 md:flex">
              <button onClick={() => emblaApi?.scrollPrev()} disabled={!canPrev} className="rounded-full border border-white/[0.12] p-2 text-cream-200 hover:bg-white/[0.06] disabled:opacity-30 transition-colors">
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button onClick={() => emblaApi?.scrollNext()} disabled={!canNext} className="rounded-full border border-white/[0.12] p-2 text-cream-200 hover:bg-white/[0.06] disabled:opacity-30 transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div ref={emblaRef} className="mt-12 overflow-hidden">
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_38%]">
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-8 h-full">
                  <p className="font-heading text-2xl font-bold text-cta">{t.stat}</p>
                  <p className="font-body mt-6 text-lg leading-relaxed text-cream-200/80 italic">"{t.quote}"</p>
                  <p className="font-heading mt-6 text-sm font-semibold text-cream-200">{t.name} <span className="text-cream-200/50">— {t.location}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionLabel text="In the News" />
          <h2 className="font-heading mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            What they're saying <span className="font-display italic text-cta">about Longentis.</span>
          </h2>
          <p className="font-body mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From industry outlets to local press — the word is getting out about what we're building in men's health.
          </p>
        </ScrollReveal>
        <div ref={emblaRef} className="mt-12 overflow-hidden">
          <div className="flex gap-6">
            {pressArticles.map((a, i) => (
              <div key={i} className="min-w-0 flex-[0_0_80%] md:flex-[0_0_35%] lg:flex-[0_0_28%]">
                <div className="rounded-lg border border-border bg-background overflow-hidden group">
                  <div className="h-44 bg-navy-800" />
                  <div className="p-5">
                    <p className="font-mono-label text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      {a.source} · {a.year}
                    </p>
                    <h3 className="font-heading mt-2 text-base font-semibold text-foreground group-hover:text-cta transition-colors">{a.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-1 font-heading text-sm font-semibold text-cta">
                      Read Article <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
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
      <LogoTicker />
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
