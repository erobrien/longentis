import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const plans = [
  {
    title: "Erectile Dysfunction",
    price: "$99",
    period: "/month",
    description: "FDA-approved PDE5 inhibitors with full clinical oversight.",
    includes: [
      "Sildenafil or Tadalafil prescription",
      "Provider consultation (video)",
      "Comprehensive lab panel",
      "Quarterly follow-ups",
      "Discreet shipping included",
      "Direct provider messaging",
    ],
    href: "/treatments/ed",
    popular: false,
  },
  {
    title: "Testosterone (TRT)",
    price: "$149",
    period: "/month",
    description: "Testosterone cypionate protocols with 20+ biomarker monitoring.",
    includes: [
      "Testosterone cypionate prescription",
      "20+ biomarker lab panels",
      "Dedicated provider every visit",
      "Quarterly labs included",
      "Estrogen management when indicated",
      "Direct provider messaging",
      "Medication shipping included",
    ],
    href: "/treatments/trt",
    popular: true,
  },
  {
    title: "Weight Loss",
    price: "$199",
    period: "/month",
    description: "GLP-1 medications with metabolic labs and body composition tracking.",
    includes: [
      "Semaglutide or Tirzepatide",
      "Comprehensive metabolic panel",
      "Body composition tracking",
      "Monthly provider check-ins",
      "Dosage titration & adjustments",
      "Nutrition guidance",
      "Medication shipping included",
    ],
    href: "/treatments/weight-loss",
    popular: false,
  },
];

const comparisons = [
  { item: "Provider consultation", longentis: "Included", office: "$150-300/visit" },
  { item: "Comprehensive lab panel", longentis: "Included", office: "$200-500/panel" },
  { item: "Medication", longentis: "Included", office: "$50-200+/month" },
  { item: "Follow-up visits", longentis: "Unlimited", office: "$100-200/visit" },
  { item: "Provider messaging", longentis: "Direct access", office: "Call & wait" },
  { item: "Shipping", longentis: "Free", office: "Pharmacy pickup" },
];

const Pricing = () => (
  <>
    <Header />
    <main>
      {/* Hero */}
      <section className="relative w-full pt-32 lg:pt-40 pb-16 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-sans font-bold text-[clamp(32px,5vw,64px)] leading-[1.08] tracking-[-0.03em] text-navy-900">
              Transparent pricing.{" "}
              <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>No surprises.</em>
            </h1>
            <p className="font-space mt-4 max-w-2xl text-[16px] leading-[1.7] text-navy-700/60">
              Every plan includes labs, provider consultations, medication, and shipping. One monthly price. No hidden fees. Cancel anytime.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 bg-navy-900/[0.06] border border-navy-900/[0.10]">
              <Shield className="h-4 w-4 text-cta" />
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-navy-700/60">FSA / HSA Accepted</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-cream-100 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.title} delay={i * 0.08}>
                <div className={`relative rounded-2xl p-7 h-full flex flex-col ${
                  plan.popular
                    ? "bg-navy-950 border-2 border-cta/30"
                    : "bg-white border border-navy-900/[0.08]"
                }`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-6 rounded-full bg-cta px-4 py-1 font-mono text-[10px] tracking-[0.14em] uppercase text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`font-sans font-bold text-xl ${plan.popular ? "text-cream-100" : "text-navy-900"}`}>
                    {plan.title}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`font-sans font-extrabold text-[42px] leading-none tracking-[-0.03em] ${plan.popular ? "text-cta" : "text-navy-900"}`}>
                      {plan.price}
                    </span>
                    <span className={`font-space text-[14px] ${plan.popular ? "text-cream-200/50" : "text-navy-700/50"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`font-space text-[13px] leading-[1.6] mt-3 ${plan.popular ? "text-cream-200/50" : "text-navy-700/50"}`}>
                    {plan.description}
                  </p>
                  <div className="mt-6 space-y-3 flex-1">
                    {plan.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${plan.popular ? "text-cta" : "text-cta"}`} />
                        <span className={`font-space text-[13px] ${plan.popular ? "text-cream-200/70" : "text-navy-700/60"}`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/get-started"
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 font-sans text-[14px] font-semibold transition-colors ${
                      plan.popular
                        ? "bg-cta text-white hover:bg-cta/90"
                        : "bg-navy-950 text-white hover:bg-navy-900"
                    }`}
                  >
                    Start Your Free Visit
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-navy-950 py-20 noise-overlay">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-sans font-bold text-[clamp(26px,3vw,42px)] leading-[1.12] tracking-[-0.02em] text-cream-200 text-center">
              Longentis vs.{" "}
              <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>in-office visits.</em>
            </h2>
            <p className="font-space mt-3 text-[15px] text-cream-200/50 text-center max-w-xl mx-auto">
              Traditional men's health care adds up. Longentis includes everything in one monthly price.
            </p>
          </ScrollReveal>
          <div className="mt-12 rounded-2xl overflow-hidden border border-white/[0.08]">
            <div className="grid grid-cols-3 bg-white/[0.04] px-6 py-4 border-b border-white/[0.06]">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/30" />
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-cta text-center">Longentis</span>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/30 text-center">In-Office</span>
            </div>
            {comparisons.map((row, i) => (
              <div key={row.item} className={`grid grid-cols-3 px-6 py-4 ${i < comparisons.length - 1 ? "border-b border-white/[0.04]" : ""}`}>
                <span className="font-space text-[14px] text-cream-200/60">{row.item}</span>
                <span className="font-sans font-semibold text-[14px] text-cta text-center">{row.longentis}</span>
                <span className="font-space text-[14px] text-cream-200/35 text-center">{row.office}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Hidden Fees */}
      <section className="bg-cream-100 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-sans font-bold text-2xl text-navy-900">No hidden fees. No contracts. Cancel anytime.</h2>
            <p className="font-space mt-3 text-[15px] text-navy-700/50">
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
