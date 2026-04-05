import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Stethoscope, CalendarCheck, BookOpen, TrendingUp, Building2, Award, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import USMap from "@/components/USMap";
import Diamond from "@/components/Diamond";

const whyItems = [
  { title: "Established patient flow", desc: "10,000+ patients and growing. No building your own panel from scratch." },
  { title: "Clinical autonomy", desc: "Evidence-based protocols, but you're the provider. No chatbot-first intake." },
  { title: "Operational support", desc: "Labs, pharmacy, scheduling, billing, compliance — handled." },
  { title: "Dedicated panels", desc: "Your patients stay yours. No rotating rosters. Continuity of care is the model." },
];

const scaleCards = [
  { icon: Users, title: "10,000+ Patients Treated", desc: "A proven leader in men's hormone health, leveraging a patient panel to deliver quality telehealth care nationwide." },
  { icon: Target, title: "Scaling to All 50 States", desc: "Currently operating 3 Virginia centers with telehealth in all 50 states and aggressive nationwide provider recruitment." },
  { icon: Award, title: "Clinical Quality at the Core", desc: "Evidence-based protocols and dedicated provider panels ensuring high-quality care is the foundation of every interaction." },
  { icon: TrendingUp, title: "20%+ Patient Growth", desc: "Strong demand driven by real results, patient referrals, and a sophisticated marketing engine." },
];

const benefits = [
  { icon: Users, title: "Dedicated Patient Panels", desc: "Logical patient assignment, continuity of care." },
  { icon: Building2, title: "Full Operational Support", desc: "Billing, labs, pharmacy, compliance." },
  { icon: CalendarCheck, title: "Flexible Scheduling", desc: "Telehealth lets you practice from anywhere." },
  { icon: BookOpen, title: "Clinical Resources", desc: "Protocols, lab integrations, peer network." },
];

const roadmap = [
  { phase: "Current State", desc: "Longentis specializes in TRT, ED, and weight loss via telehealth in all 50 states plus 3 Virginia centers. 10,000+ patients treated since 2015." },
  { phase: "Building the Network", desc: "Recruiting dedicated men's health providers nationwide. Expanding clinical protocols and adding provider support infrastructure." },
  { phase: "Expanding Services", desc: "Once standards are set, Longentis will add the next logical services — peptide therapy, longevity medicine, and performance optimization." },
];

const ForProviders = () => (
  <>
    <Header />
    <main>
      <section className="bg-cream-50 pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-lora text-[clamp(32px,4vw,64px)] leading-[1.1] tracking-[-0.02em] text-navy-900 max-w-3xl"
          >
            Join the Longentis provider network.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-space mt-6 max-w-2xl text-[15px] leading-[1.7] text-navy-600">
            We're building the largest dedicated men's health telehealth practice in the country. If you're a licensed provider who specializes in men's health, we want to talk.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
            <Link to="/get-started" className="inline-flex items-center gap-2.5 rounded-full bg-navy-950 px-7 py-3.5 font-sans text-[14px] font-semibold text-white hover:bg-navy-900 active:scale-[0.98] transition-all">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            {["Established panels", "Clinical autonomy", "Full support"].map((s) => (
              <span key={s} className="rounded-lg border border-navy-900/[0.08] px-4 py-2 font-mono text-[10px] tracking-[0.14em] uppercase text-navy-700">{s}</span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-lora text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-navy-900">Be part of the leading men's health telehealth network.</h2>
            <p className="font-space mt-4 max-w-2xl text-[15px] leading-[1.7] text-navy-600">
              Longentis is building a national platform by partnering with best-in-class providers. We handle scheduling, billing, labs, pharmacy coordination, compliance, and marketing — so you can focus on patients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 bg-navy-900/[0.06] border border-navy-900/[0.12]">
              <Diamond size="xs" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-navy-700">Why Longentis</span>
            </div>
            <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-navy-900">Why providers choose us</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {whyItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-navy-900/[0.06] bg-white p-6">
                  <Diamond size="sm" className="text-cta/60 mb-2" />
                  <h3 className="font-sans text-[15px] font-semibold text-navy-900">{item.title}</h3>
                  <p className="font-space mt-2 text-[13px] text-navy-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 noise-overlay py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 bg-white/[0.06] border border-white/[0.1]">
              <Diamond size="xs" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-cream-200/70">Platform Scale</span>
            </div>
            <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-cream-200">Built for national scale</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {scaleCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="rounded-2xl p-6 h-full bg-white/[0.04] border border-white/[0.08]">
                  <Diamond size="sm" className="text-cta/60 mb-3" />
                  <h3 className="font-sans text-[15px] font-semibold text-cream-200">{c.title}</h3>
                  <p className="font-space mt-2 text-[13px] text-cream-200/60">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 bg-navy-900/[0.06] border border-navy-900/[0.12]">
              <Diamond size="xs" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-navy-700">Coverage</span>
            </div>
            <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-navy-900">National reach</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <USMap className="mt-12 max-w-3xl mx-auto" selectedState="VA" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-cream-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-lora text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-navy-900">Provider benefits</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-navy-900/[0.06] bg-white p-6 text-center h-full">
                  <Diamond size="md" className="text-cta/50 mb-3 mx-auto" />
                  <h3 className="font-sans text-[15px] font-semibold text-navy-900">{b.title}</h3>
                  <p className="font-space mt-2 text-[13px] text-navy-600">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 bg-navy-900/[0.06] border border-navy-900/[0.12]">
              <Diamond size="xs" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-navy-700">Growth Roadmap</span>
            </div>
            <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-navy-900">Where we're headed</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {roadmap.map((r, i) => (
              <ScrollReveal key={r.phase} delay={i * 0.15}>
                <div className="relative pl-8 border-l-2 border-navy-400/40">
                  <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-navy-950" />
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-navy-700 inline-flex items-center gap-1.5">
                    <Diamond size="xs" />{`Phase ${i + 1}`}
                  </span>
                  <h3 className="font-sans mt-2 text-[15px] font-semibold text-navy-900">{r.phase}</h3>
                  <p className="font-space mt-2 text-[13px] text-navy-600">{r.desc}</p>
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

export default ForProviders;
