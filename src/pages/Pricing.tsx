import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollReveal from "@/components/ScrollReveal";
import Diamond from "@/components/Diamond";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tiers = [
  {
    name: "Starter",
    tagline: "Clinical-grade care. No clinic required.",
    price: "$299",
    annualPrice: "$269",
    period: "/month",
    annualNote: "$3,228/yr billed annually",
    popular: false,
    includesLabel: null,
    highlights: [
      "Physician-led video consultation (30 min)",
      "20+ biomarker lab panel at Quest / Labcorp",
      "Same dedicated provider every visit",
      "Labs every 12 weeks (4×/year)",
      "Single-condition focus (TRT, ED, or Weight Loss)",
      "Medication prescribed & shipped — cost included",
      "Provider messaging with 24-hour response",
    ],
    cta: "Start Your Free Visit",
    ctaHref: "/get-started",
  },
  {
    name: "Advanced",
    tagline: "Your complete men's health team.",
    price: "$549",
    annualPrice: "$499",
    period: "/month",
    annualNote: "$5,988/yr billed annually",
    popular: true,
    includesLabel: "Everything in Starter, plus:",
    highlights: [
      "40+ biomarker extended panel",
      "Labs every 8 weeks (6×/year)",
      "Multi-condition treatment under one protocol",
      "Dedicated care coordinator",
      "Same-day provider messaging (business hours)",
      "Peptide therapy (BPC-157, PT-141, etc.)",
      "Thyroid & full hormonal optimization",
      "Quarterly nutrition & fitness guidance",
    ],
    cta: "Start Your Free Visit",
    ctaHref: "/get-started",
  },
  {
    name: "Custom",
    tagline: "Concierge medicine. Built around you.",
    price: "From $699",
    annualPrice: null,
    period: "/month",
    annualNote: "Custom-built after clinical consultation",
    popular: false,
    isCustom: true,
    includesLabel: "Everything in Advanced, plus:",
    highlights: [
      "Named physician + dedicated NP",
      "Direct physician access during business hours",
      "Unlimited lab panels & specialty diagnostics",
      "DEXA body composition scan coordination",
      "Wearable data integration (Oura, Whoop, Apple Health)",
      "Growth hormone optimization",
      "Annual comprehensive health dossier",
      "Specialist referral coordination",
    ],
    cta: "Book a Consultation",
    ctaHref: "/get-started",
  },
];

const comparisonRows = [
  { feature: "Biomarkers tested", starter: "20+", advanced: "40+", custom: "Unlimited" },
  { feature: "Lab frequency", starter: "Every 12 weeks", advanced: "Every 8 weeks", custom: "As needed" },
  { feature: "Conditions treated", starter: "1 primary", advanced: "Multi-condition", custom: "Unlimited" },
  { feature: "Provider consultations", starter: "Every 8 weeks", advanced: "Every 6 weeks", custom: "On demand" },
  { feature: "Same provider every visit", starter: true, advanced: true, custom: "Named physician" },
  { feature: "Medication included", starter: true, advanced: true, custom: true },
  { feature: "Provider messaging", starter: "24hr response", advanced: "Same-day", custom: "Direct access" },
  { feature: "Care coordinator", starter: false, advanced: true, custom: "Dedicated" },
  { feature: "Peptide therapy", starter: false, advanced: true, custom: "Advanced protocols" },
  { feature: "Hormone optimization", starter: "Testosterone only", advanced: "Full panel", custom: "Full + GH + custom" },
  { feature: "Nutrition guidance", starter: false, advanced: "Quarterly", custom: "Ongoing" },
  { feature: "Wearable data review", starter: false, advanced: false, custom: true },
  { feature: "Annual health dossier", starter: false, advanced: false, custom: true },
  { feature: "Specialist coordination", starter: false, advanced: false, custom: true },
  { feature: "FSA / HSA eligible", starter: true, advanced: true, custom: true },
];

const positioning = [
  {
    tier: "Starter",
    versus: "vs. telehealth TRT mills",
    price: "$89–$250/mo",
    copy: "Most online clinics test 5–8 biomarkers with a rotating roster of providers and finger-prick home kits. Starter delivers 20+ biomarker panels at Quest/Labcorp, the same dedicated physician every visit, and a real 30-minute consultation — not a 5-minute rubber stamp.",
  },
  {
    tier: "Advanced",
    versus: "vs. boutique concierge",
    price: "$5K–$15K/yr",
    copy: "Generalist concierge practices charge $5,000–$15,000/yr but rarely specialize in men's hormonal health. Advanced delivers 40+ biomarkers 6×/year, multi-condition protocols, peptide therapy, and a dedicated care coordinator — purpose-built for optimization.",
  },
  {
    tier: "Custom",
    versus: "vs. Fountain Life APEX",
    price: "$19,500/yr",
    copy: "Fountain Life's APEX membership costs $19,500/yr. Custom starts at roughly a third of that price while delivering comparable concierge-level physician access, unlimited diagnostics, and fully personalized protocols for hormonal and metabolic health.",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Diamond size="sm" />;
  if (value === false) return <span className="text-cream-200/35">—</span>;
  return <span>{value}</span>;
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const Pricing = () => (
  <>
    <Header />
    <main>
      {/* Hero */}
      <section className="relative w-full pt-32 lg:pt-40 pb-16 bg-cream-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-sans font-bold text-[clamp(32px,5vw,64px)] leading-[1.08] tracking-[-0.03em] text-navy-900">
              Clinic-grade men's health.{" "}
              <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>Three ways in.</em>
            </h1>
            <p className="font-space mt-4 max-w-2xl text-[16px] leading-[1.7] text-navy-700/80">
              Real physicians. Real labs. Real medication. Every plan includes everything — no hidden fees, no surprise billing. Choose the depth of care that fits your goals.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 bg-navy-900/[0.06] border border-navy-900/[0.12]">
              <Diamond size="sm" />
              <span className="font-sans text-[12px] font-medium tracking-wide uppercase text-navy-600">FSA / HSA Accepted</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="bg-cream-100 pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier, i) => {
              const isCustom = "isCustom" in tier && tier.isCustom;
              const isDark = tier.popular;
              return (
                <ScrollReveal key={tier.name} delay={i * 0.08}>
                  <div
                    className={`relative rounded-2xl p-7 h-full flex flex-col ${
                      isDark
                        ? "bg-navy-950 border-2 border-cta/30"
                        : isCustom
                        ? "bg-white border-2 border-cta/20 shadow-card"
                        : "bg-white border border-navy-900/[0.10] shadow-card"
                    }`}
                  >
                    {tier.popular && (
                      <span className="absolute -top-3 left-6 rounded-full bg-cta px-4 py-1 font-sans text-[11px] font-semibold tracking-wide uppercase text-white">
                        Most Popular
                      </span>
                    )}

                    {/* Name & tagline */}
                    <h3 className={`font-sans font-bold text-xl ${isDark ? "text-cream-100" : "text-navy-900"}`}>
                      {tier.name}
                    </h3>
                    <p className={`font-space text-[14px] leading-[1.5] mt-1 ${isDark ? "text-cream-200/70" : "text-navy-700/75"}`}>
                      {tier.tagline}
                    </p>

                    {/* Price */}
                    <div className="mt-5 flex items-baseline gap-1">
                      <span className={`font-sans font-extrabold text-[42px] leading-none tracking-[-0.03em] ${isDark ? "text-cta" : "text-navy-900"}`}>
                        {tier.price}
                      </span>
                      <span className={`font-space text-[15px] ${isDark ? "text-cream-200/65" : "text-navy-700/60"}`}>
                        {tier.period}
                      </span>
                    </div>
                    {tier.annualPrice && (
                      <p className={`font-space text-[13px] mt-1.5 ${isDark ? "text-cream-200/60" : "text-navy-700/65"}`}>
                        or {tier.annualPrice}/mo billed annually
                      </p>
                    )}
                    {!tier.annualPrice && (
                      <p className={`font-space text-[13px] mt-1.5 ${isDark ? "text-cream-200/60" : "text-navy-700/65"}`}>
                        {tier.annualNote}
                      </p>
                    )}

                    {/* Includes label */}
                    {tier.includesLabel && (
                      <p className={`font-sans text-[11px] font-semibold tracking-wide uppercase mt-6 mb-1 ${isDark ? "text-cta/90" : "text-cta"}`}>
                        {tier.includesLabel}
                      </p>
                    )}

                    {/* Highlights */}
                    <div className={`${tier.includesLabel ? "mt-2" : "mt-6"} space-y-3 flex-1`}>
                      {tier.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <Diamond size="xs" className="mt-1 shrink-0" />
                          <span className={`font-space text-[14px] leading-[1.5] ${isDark ? "text-cream-200/80" : "text-navy-700/80"}`}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to={tier.ctaHref}
                      className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 font-sans text-[14px] font-semibold transition-colors ${
                        isDark
                          ? "bg-cta text-white hover:bg-cta/90"
                          : "bg-navy-950 text-white hover:bg-navy-900"
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-navy-950 py-20 noise-overlay">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-sans font-bold text-[clamp(26px,3vw,42px)] leading-[1.12] tracking-[-0.02em] text-cream-200 text-center">
              Compare{" "}
              <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>every plan.</em>
            </h2>
            <p className="font-space mt-3 text-[15px] text-cream-200/70 text-center max-w-xl mx-auto">
              Every tier includes labs, medication, provider consultations, and shipping. Here's what changes as you move up.
            </p>
          </ScrollReveal>

          <div className="mt-12 rounded-2xl overflow-x-auto border border-white/[0.10] bg-white/[0.03]">
            <div className="min-w-[560px]">
              {/* Header */}
              <div className="grid grid-cols-4 bg-white/[0.06] px-4 sm:px-6 py-4 border-b border-white/[0.08]">
                <span />
                <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-cream-200/60 text-center">Starter</span>
                <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-cta text-center">Advanced</span>
                <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-cream-200/60 text-center">Custom</span>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 px-4 sm:px-6 py-3.5 ${i < comparisonRows.length - 1 ? "border-b border-white/[0.06]" : ""}`}
                >
                  <span className="font-space text-[14px] text-cream-200/80">{row.feature}</span>
                  <span className="font-space text-[14px] text-cream-200/70 text-center"><CellValue value={row.starter} /></span>
                  <span className="font-sans font-semibold text-[14px] text-cta text-center"><CellValue value={row.advanced} /></span>
                  <span className="font-space text-[14px] text-cream-200/70 text-center"><CellValue value={row.custom} /></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-sans font-bold text-[clamp(26px,3vw,42px)] leading-[1.12] tracking-[-0.02em] text-navy-900 text-center">
              How Longentis{" "}
              <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>compares.</em>
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {positioning.map((pos, i) => (
              <ScrollReveal key={pos.tier} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-navy-900/[0.10] shadow-card p-7 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Diamond size="xs" />
                    <span className="font-sans font-bold text-[16px] text-navy-900">{pos.tier}</span>
                  </div>
                  <p className="font-sans text-[12px] font-medium tracking-wide uppercase text-navy-500 mb-4">
                    {pos.versus} <span className="text-cta">({pos.price})</span>
                  </p>
                  <p className="font-space text-[15px] leading-[1.7] text-navy-700/80 flex-1">
                    {pos.copy}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Savings */}
      <section className="bg-navy-900 py-14 noise-overlay">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Diamond size="lg" className="text-cta/40" />
            <h2 className="font-sans font-bold text-2xl text-cream-200 mt-3">Save 10% with annual billing.</h2>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <div>
                <p className="font-sans font-extrabold text-[28px] text-cream-200">$269<span className="text-[16px] font-normal text-cream-200/60">/mo</span></p>
                <p className="font-sans text-[11px] font-medium tracking-wide uppercase text-cream-200/55 mt-1">Starter Annual</p>
              </div>
              <div>
                <p className="font-sans font-extrabold text-[28px] text-cta">$499<span className="text-[16px] font-normal text-cta/60">/mo</span></p>
                <p className="font-sans text-[11px] font-medium tracking-wide uppercase text-cream-200/55 mt-1">Advanced Annual</p>
              </div>
              <div>
                <p className="font-sans font-extrabold text-[28px] text-cream-200">Custom</p>
                <p className="font-sans text-[11px] font-medium tracking-wide uppercase text-cream-200/55 mt-1">Billed Annually</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-cream-100 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-sans font-bold text-2xl text-navy-900">No hidden fees. No contracts. Cancel anytime.</h2>
            <p className="font-space mt-3 text-[15px] text-navy-700/75">
              Your subscription includes everything: medication, labs, consultations, and shipping. FSA and HSA cards accepted for all plans.
            </p>
            <Link
              to="/get-started"
              className="mt-8 inline-flex items-center rounded-full bg-cta px-8 py-4 text-[15px] font-semibold text-white font-sans hover:bg-cta/90 transition-colors"
            >
              Start Your Free Visit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
    <Footer />
    <MobileBottomBar />
  </>
);

export default Pricing;
