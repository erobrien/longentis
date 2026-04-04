import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Stethoscope, CalendarCheck, BookOpen, TrendingUp, Building2, Award, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
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
  { phase: "Expanding Services", desc: "Once standards are set, Longentis will add the next logical services — peptide therapy, longevity medicine, and performance optimization — sharing best practices across the network." },
];

const ForProviders = () => (
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
            Join the Longentis provider network.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We're building the largest dedicated men's health telehealth practice in the country. If you're a licensed provider who specializes in men's health, we want to talk.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
            <Link to="/get-started" className="inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3 font-heading text-sm font-semibold text-cta-foreground hover:brightness-110 active:scale-[0.98] transition-all">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            {["Established panels", "Clinical autonomy", "Full support"].map((s) => (
              <span key={s} className="rounded-full border border-border px-4 py-2 font-mono-label text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{s}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leading Network */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Be part of the leading men's health telehealth network.</h2>
            <p className="font-body mt-4 max-w-2xl text-lg text-muted-foreground">
              Longentis is building a national platform by partnering with best-in-class providers. We handle scheduling, billing, labs, pharmacy coordination, compliance, and marketing — so you can focus on patients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Providers Choose Us */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal>
            <SectionLabel text="Why Longentis" />
            <h2 className="font-heading mt-3 text-3xl font-bold text-foreground md:text-4xl">Why providers choose us</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {whyItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-lg border border-border bg-background p-6">
                  <span className="font-mono-label text-xs font-medium text-cta">{`0${i + 1}`}</span>
                  <h3 className="font-heading mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="font-body mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Scale */}
      <section className="bg-navy-950 noise-overlay py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionLabel text="Platform Scale" />
            <h2 className="font-heading mt-3 text-3xl font-bold text-cream-200 md:text-4xl">Built for national scale</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {scaleCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 h-full">
                  <c.icon className="h-8 w-8 text-cta mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-semibold text-cream-200">{c.title}</h3>
                  <p className="font-body mt-2 text-sm text-cream-200/70">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionLabel text="Coverage" />
            <h2 className="font-heading mt-3 text-3xl font-bold text-foreground md:text-4xl">National reach</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <USMap className="mt-12 max-w-3xl mx-auto" selectedState="VA" />
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Provider benefits</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="rounded-lg border border-border bg-background p-6 text-center h-full">
                  <b.icon className="h-8 w-8 text-cta mb-4 mx-auto" strokeWidth={1.5} />
                  <h3 className="font-heading text-base font-semibold text-foreground">{b.title}</h3>
                  <p className="font-body mt-2 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Roadmap */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionLabel text="Growth Roadmap" />
            <h2 className="font-heading mt-3 text-3xl font-bold text-foreground md:text-4xl">Where we're headed</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {roadmap.map((r, i) => (
              <ScrollReveal key={r.phase} delay={i * 0.15}>
                <div className="relative pl-8 border-l-2 border-cta/30">
                  <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-cta" />
                  <span className="font-mono-label text-xs font-medium text-cta">{`Phase ${i + 1}`}</span>
                  <h3 className="font-heading mt-2 text-lg font-semibold text-foreground">{r.phase}</h3>
                  <p className="font-body mt-2 text-sm text-muted-foreground">{r.desc}</p>
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
