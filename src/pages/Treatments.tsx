import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Syringe, Heart, Scale, Activity, Thermometer, Shield, Beaker, Pill, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
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
      {/* Hero */}
      <section className="bg-background pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl max-w-3xl"
          >
            Three conditions. One dedicated practice.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From first assessment through every follow-up, Longentis delivers a coordinated clinical program — real labs, evidence-based protocols, and physician-led oversight across TRT, ED, and weight loss.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Link to="/get-started" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3 font-heading text-sm font-semibold text-cta-foreground hover:brightness-110 active:scale-[0.98] transition-all">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionLabel text="Services" />
            <h2 className="font-heading mt-3 text-3xl font-bold text-foreground md:text-4xl">Focused expertise. One coordinated standard of care.</h2>
            <p className="font-body mt-4 max-w-2xl text-lg text-muted-foreground">
              Each treatment is delivered with the same clinical discipline — real lab panels, dedicated providers, and ongoing monitoring you can trust.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.05}>
                <div className="group rounded-lg border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg h-full">
                  <s.icon className="h-8 w-8 text-cta mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="font-body mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
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
