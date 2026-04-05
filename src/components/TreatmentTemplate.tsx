import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface TreatmentData {
  slug: string;
  heroLabel: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroDescription: string;
  heroStats: { value: string; label: string }[];
  conditionTitle: string;
  conditionDescription: string;
  symptoms: string[];
  approachTitle: string;
  approachAccent: string;
  approachDescription: string;
  approachPoints: { title: string; desc: string }[];
  labPanelTitle: string;
  labPanelItems: string[];
  providerNote: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaAccent: string;
  ctaDescription: string;
  relatedTreatments: { title: string; href: string; desc: string }[];
  price: string;
  priceNote: string;
}

const TreatmentTemplate = ({ data }: { data: TreatmentData }) => (
  <>
    <Header />
    <main>
      {/* Hero */}
      <section className="relative w-full pt-32 lg:pt-40 pb-20 bg-navy-950 noise-overlay">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 bg-white/[0.06] border border-white/[0.12]">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-cta" />
                <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-cta" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">{data.heroLabel}</span>
            </span>
            <h1 className="font-sans font-bold mt-6 text-[clamp(32px,5vw,64px)] leading-[1.08] tracking-[-0.03em] text-cream-100">
              {data.heroTitle}{" "}
              <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>{data.heroTitleAccent}</em>
            </h1>
            <p className="font-space mt-5 max-w-2xl text-[16px] leading-[1.7] text-cream-200/60">
              {data.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              {data.heroStats.map((s) => (
                <div key={s.label}>
                  <p className="font-sans text-2xl font-bold text-cream-100">{s.value}</p>
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/35">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/get-started"
                className="inline-flex items-center rounded-full bg-cta px-7 py-3.5 text-[14px] font-semibold text-white font-sans hover:bg-cta/90 transition-colors"
              >
                Start Your Free Visit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <span className="inline-flex items-center font-mono text-[11px] tracking-[0.12em] uppercase text-white/30 px-4">
                {data.price} · {data.priceNote}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Condition Education */}
      <section className="bg-cream-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="font-sans font-bold text-[clamp(26px,3vw,42px)] leading-[1.12] tracking-[-0.02em] text-navy-900">
                {data.conditionTitle}
              </h2>
              <p className="font-space mt-4 text-[15px] leading-[1.7] text-navy-700/60">
                {data.conditionDescription}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="font-sans font-semibold text-lg text-navy-900 mb-4">Common Symptoms</h3>
              <div className="grid grid-cols-2 gap-3">
                {data.symptoms.map((s) => (
                  <div key={s} className="flex items-start gap-2.5 rounded-xl p-3 bg-white/80 border border-navy-900/[0.06]">
                    <CheckCircle2 className="h-4 w-4 text-cta shrink-0 mt-0.5" />
                    <span className="font-space text-[13px] text-navy-700/70">{s}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-navy-950 py-20 noise-overlay">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-sans font-bold text-[clamp(26px,3vw,42px)] leading-[1.12] tracking-[-0.02em] text-cream-200">
              {data.approachTitle}{" "}
              <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>{data.approachAccent}</em>
            </h2>
            <p className="font-space mt-4 max-w-2xl text-[15px] leading-[1.7] text-cream-200/50">
              {data.approachDescription}
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.approachPoints.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl p-6 bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15] transition-colors h-full">
                  <span className="font-mono text-[10px] text-cta/60 tracking-[0.18em]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-sans font-semibold text-lg text-cream-100 mt-3">{p.title}</h3>
                  <p className="font-space text-[13px] leading-[1.6] text-cream-200/45 mt-2">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Panel */}
      <section className="bg-cream-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-sans font-bold text-[clamp(26px,3vw,42px)] leading-[1.12] tracking-[-0.02em] text-navy-900">
              {data.labPanelTitle}
            </h2>
            <p className="font-space mt-3 text-[15px] text-navy-700/60">{data.providerNote}</p>
          </ScrollReveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {data.labPanelItems.map((item) => (
              <span key={item} className="inline-flex items-center rounded-lg px-4 py-2.5 bg-white border border-navy-900/[0.08] font-space text-[13px] text-navy-700/70">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-200 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-sans font-bold text-[clamp(26px,3vw,42px)] leading-[1.12] tracking-[-0.02em] text-navy-900 mb-8">
              Frequently asked questions
            </h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-2">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-navy-900/[0.08] bg-white/80 px-5 overflow-hidden">
                <AccordionTrigger className="font-sans text-[15px] font-semibold text-navy-900 hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-space text-[14px] leading-[1.7] text-navy-700/60">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-20 noise-overlay">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-sans font-bold text-[clamp(28px,3.5vw,48px)] leading-[1.12] tracking-[-0.02em] text-cream-200">
              {data.ctaTitle}{" "}
              <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>{data.ctaAccent}</em>
            </h2>
            <p className="font-space mt-4 text-[15px] leading-[1.7] text-cream-200/50">{data.ctaDescription}</p>
            <Link
              to="/get-started"
              className="mt-8 inline-flex items-center rounded-full bg-cta px-8 py-4 text-[15px] font-semibold text-white font-sans hover:bg-cta/90 transition-colors"
            >
              Start Your Free Visit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Treatments */}
      <section className="bg-cream-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="font-sans font-bold text-xl text-navy-900 mb-6">Related Treatments</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {data.relatedTreatments.map((rt) => (
              <Link
                key={rt.href}
                to={rt.href}
                className="group rounded-2xl p-6 bg-white border border-navy-900/[0.06] hover:border-navy-900/[0.15] hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="font-sans font-semibold text-lg text-navy-900 group-hover:text-cta transition-colors">{rt.title}</h4>
                <p className="font-space text-[13px] text-navy-700/50 mt-2">{rt.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-sans text-sm font-semibold text-cta">
                  Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <MobileBottomBar />
  </>
);

export default TreatmentTemplate;
