import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Syringe, Heart, Scale, Activity, Thermometer, Shield, Beaker, Pill, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: Syringe, title: "Testosterone Replacement Therapy", desc: "Comprehensive hormone panel, provider-reviewed results, and a personalized TRT protocol — injections, topicals, or pellets based on your labs." },
  { icon: Heart, title: "Erectile Dysfunction Treatment", desc: "Confidential evaluation, real diagnostics, and a treatment plan that works — often connected to hormone levels we're already testing." },
  { icon: Scale, title: "Medical Weight Loss", desc: "Physician-supervised programs combining prescription medication with monthly lab monitoring. Your plan adapts as your body changes." },
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
      <section className="bg-[#FAFAF7] pt-36 pb-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-lora text-[clamp(32px,4vw,64px)] leading-[1.1] tracking-[-0.02em] text-[#0B1029] max-w-3xl"
          >
            Three conditions. One dedicated practice.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-space mt-6 max-w-2xl text-[15px] leading-[1.7] text-[#555] font-light">
            From first assessment through every follow-up, Longentis delivers a coordinated clinical program — real labs, evidence-based protocols, and physician-led oversight across TRT, ED, and weight loss.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Link to="/get-started" className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-[#1B2B4B] px-6 py-3 font-sans text-[11.5px] font-bold uppercase tracking-[0.09em] text-[#FAFAF7] border border-white/[0.11] hover:bg-[#162340] active:scale-[0.98] transition-all">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)" }}>
              <span className="relative flex h-[7px] w-[7px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#243656] opacity-60" />
                <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#243656]" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">Services</span>
            </div>
            <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">Focused expertise. One coordinated standard of care.</h2>
            <p className="font-space mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#555] font-light">
              Each treatment is delivered with the same clinical discipline — real lab panels, dedicated providers, and ongoing monitoring you can trust.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.04}>
                <div className="flex w-full flex-row items-center rounded-2xl border border-gray-100 bg-white py-3 pr-4 pl-3 shadow-sm hover:-translate-y-0.5 transition-transform h-full">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg bg-gray-50 md:size-12 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-[#1B2B4B]" strokeWidth={1.5} />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-sans text-sm leading-none font-semibold text-gray-900 md:text-[15px]">{s.title}</h3>
                    <p className="font-sans text-xs leading-snug text-gray-500 md:text-[13px] mt-1">{s.desc}</p>
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
