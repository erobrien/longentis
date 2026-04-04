import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Stethoscope, CalendarCheck, BookOpen, TrendingUp, Building2, Award, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import USMap from "@/components/USMap";

const whyItems = [
  { title: "Established patient flow", desc: "10,000+ patients and growing. No building your own panel from scratch." },
  { title: "Clinical autonomy", desc: "Evidence-based protocols, but you're the provider. No chatbot-first intake." },
  { title: "Operational support", desc: "Labs, pharmacy, scheduling, billing, compliance — handled." },
  { title: "Dedicated panels", desc: "Your patients stay yours. No rotating rosters. Continuity of care is the model." },
];

const scaleCards = [
  { icon: Users, title: "10,000+ Patients Treated", desc: "A proven leader in men's hormone health, leveraging a robust patient panel to deliver quality telehealth care nationwide." },
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
      <section className="bg-[#FAFAF7] pt-36 pb-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-[clamp(32px,4vw,64px)] leading-[1.1] tracking-[-0.02em] text-[#0B1029] max-w-3xl"
          >
            Join the Longentis provider network.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-body mt-6 max-w-2xl text-[15px] leading-[1.7] text-[#555] font-light">
            We're building the largest dedicated men's health telehealth practice in the country. If you're a licensed provider who specializes in men's health, we want to talk.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
            <Link to="/get-started" className="inline-flex items-center gap-2.5 rounded-lg bg-[#1B2B4B] px-6 py-3 font-heading text-[11.5px] font-bold uppercase tracking-[0.09em] text-[#FAFAF7] border border-white/[0.11] hover:bg-[#162340] active:scale-[0.98] transition-all">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            {["Established panels", "Clinical autonomy", "Full support"].map((s) => (
              <span key={s} className="rounded-lg border border-gray-200 px-4 py-2 font-mono-label text-[10px] tracking-[0.14em] uppercase text-[#243656]">{s}</span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#E8EDF5] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">Be part of the leading men's health telehealth network.</h2>
            <p className="font-body mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#555] font-light">
              Longentis is building a national platform by partnering with best-in-class providers. We handle scheduling, billing, labs, pharmacy coordination, compliance, and marketing — so you can focus on patients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)" }}>
              <span className="font-mono-label text-[10px] tracking-[0.22em] uppercase text-[#243656]">Why Longentis</span>
            </div>
            <h2 className="font-display mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">Why providers choose us</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {whyItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <span className="font-mono-label text-[10px] bg-white/70 px-2 py-1 rounded text-[#243656] border border-[#C5CDE0]/60">{`0${i + 1}`}</span>
                  <h3 className="font-heading mt-3 text-[15px] font-semibold text-[#0B1029]">{item.title}</h3>
                  <p className="font-body mt-2 text-[13px] text-[#555] font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06081a] noise-overlay py-24">
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <span className="font-mono-label text-[10px] tracking-[0.22em] uppercase text-[#C5CDE0]/70">Platform Scale</span>
            </div>
            <h2 className="font-display mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#E8E2D9]">Built for national scale</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {scaleCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="rounded-2xl p-6 h-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <c.icon className="h-6 w-6 text-[#C5CDE0]/60 mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-[15px] font-semibold text-[#E8E2D9]">{c.title}</h3>
                  <p className="font-body mt-2 text-[13px] text-[#E8E2D9]/50 font-light">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)" }}>
              <span className="font-mono-label text-[10px] tracking-[0.22em] uppercase text-[#243656]">Coverage</span>
            </div>
            <h2 className="font-display mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">National reach</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <USMap className="mt-12 max-w-3xl mx-auto" selectedState="VA" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#E8EDF5] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">Provider benefits</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm text-center h-full">
                  <b.icon className="h-6 w-6 text-[#1B2B4B] mb-4 mx-auto" strokeWidth={1.5} />
                  <h3 className="font-heading text-[15px] font-semibold text-[#0B1029]">{b.title}</h3>
                  <p className="font-body mt-2 text-[13px] text-[#555] font-light">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)" }}>
              <span className="font-mono-label text-[10px] tracking-[0.22em] uppercase text-[#243656]">Growth Roadmap</span>
            </div>
            <h2 className="font-display mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">Where we're headed</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {roadmap.map((r, i) => (
              <ScrollReveal key={r.phase} delay={i * 0.15}>
                <div className="relative pl-8 border-l-2 border-[#C5CDE0]/40">
                  <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-[#1B2B4B]" />
                  <span className="font-mono-label text-[10px] tracking-[0.22em] uppercase text-[#243656]">{`Phase ${i + 1}`}</span>
                  <h3 className="font-heading mt-2 text-[15px] font-semibold text-[#0B1029]">{r.phase}</h3>
                  <p className="font-body mt-2 text-[13px] text-[#555] font-light">{r.desc}</p>
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
