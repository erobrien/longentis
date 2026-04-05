import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Heart, Scale, RefreshCw, Shield, Thermometer, Pill, Beaker } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

import fitMan from "@/assets/iStock-518621045.jpg";
import coupleJog from "@/assets/iStock-1081494342-1-4.jpg";
import trackCrouch from "@/assets/iStock-2177439750-1-8.jpg";

const primaryTreatments = [
  { title: "Testosterone Replacement Therapy", desc: "Comprehensive hormone panel, provider-reviewed results, and a personalized TRT protocol — injections, topicals, or pellets based on your labs.", href: "/treatments/trt", img: fitMan, icon: Activity },
  { title: "Erectile Dysfunction Treatment", desc: "Confidential evaluation, real diagnostics, and a treatment plan that works — often connected to hormone levels we're already testing.", href: "/treatments/ed", img: coupleJog, icon: Heart },
  { title: "Medical Weight Loss", desc: "Physician-supervised programs combining prescription medication with monthly lab monitoring. Your plan adapts as your body changes.", href: "/treatments/weight-loss", img: trackCrouch, icon: Scale },
];

const comprehensiveCare = [
  { icon: Activity, title: "Hormone Optimization", desc: "Thyroid, sex hormones, and insulin signaling optimized with repeat testing and dosing that respects the whole person." },
  { icon: RefreshCw, title: "Metabolic Health", desc: "Glucose stability, lipids, and body composition tracked over time so the plan evolves as physiology does." },
  { icon: Shield, title: "Cardiovascular Screening", desc: "Early risk detection beyond standard panels — lipids, inflammation markers, and lipoprotein detail." },
  { icon: Thermometer, title: "Thyroid Function", desc: "TSH, T3, T4 — the system that controls metabolism, mood, and energy. Often overlooked. Never here." },
  { icon: Pill, title: "Vitamin & Nutrient Optimization", desc: "D, B12, and key micronutrients aligned to labs and goals — because deficiencies compound everything else." },
  { icon: Beaker, title: "Ongoing Health Monitoring", desc: "Repeat labs, follow-ups, and dosage adjustments all included. Your protocol evolves. Your provider stays the same." },
];

const Treatments = () => (
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
            Three conditions. One dedicated{" "}
            <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>practice.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-space mt-6 max-w-2xl text-[15px] leading-[1.7] text-navy-700/55">
            From first assessment through every follow-up, Longentis delivers a coordinated clinical program — real labs, evidence-based protocols, and physician-led oversight across TRT, ED, and weight loss.
          </motion.p>
        </div>
      </section>

      {/* Primary treatments — hero cards */}
      <section className="bg-cream-100 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {primaryTreatments.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 0.08}>
                <Link to={t.href} className="group block rounded-2xl overflow-hidden bg-navy-950 relative h-[420px] hover:-translate-y-1 transition-all duration-300">
                  <img src={t.img} alt={t.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-[1.03] transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                    <div className="size-11 rounded-xl bg-white/[0.08] border border-white/[0.1] flex items-center justify-center mb-4">
                      <t.icon className="h-5 w-5 text-cta" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-sans font-bold text-[22px] text-cream-100 mb-2">{t.title}</h3>
                    <p className="font-space text-[14px] leading-[1.6] text-cream-200/50 mb-5">{t.desc}</p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 font-sans text-[13px] font-semibold text-white w-fit group-hover:bg-cta/90 transition-colors">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment quiz CTA */}
      <section className="bg-navy-950 noise-overlay py-16 relative">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-[clamp(24px,3vw,40px)] leading-[1.15] tracking-[-0.02em] text-cream-100">
            Not sure which treatment?
          </h2>
          <p className="font-space mt-3 text-[15px] text-cream-200/45 max-w-lg mx-auto">
            Take our 2-minute assessment and we'll point you in the right direction.
          </p>
          <Link to="/get-started" className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-cta px-8 py-4 font-sans text-[15px] font-semibold text-white hover:bg-cta/90 transition-colors active:scale-[0.98]">
            Start Free Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Comprehensive care */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Comprehensive Care"
            title={<>Everything else we monitor and <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>optimize.</em></>}
            description="Each treatment is delivered with the same clinical discipline — real lab panels, dedicated providers, and ongoing monitoring."
          />
          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {comprehensiveCare.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.04}>
                <div className="flex gap-4 items-start rounded-2xl p-5 bg-white border border-navy-900/[0.06] hover:-translate-y-0.5 transition-transform h-full">
                  <div className="size-11 shrink-0 rounded-xl bg-navy-950 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-cream-200" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-[15px] font-semibold text-navy-900">{s.title}</h3>
                    <p className="font-space text-[13px] leading-snug text-navy-700/50 mt-1">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Treatments;
