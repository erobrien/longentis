import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, HeartHandshake, Lightbulb, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Diamond from "@/components/Diamond";

const expectCards = [
  { icon: GraduationCap, title: "Professional development", desc: "Clinical and technical tracks, mentorship, and exposure to a national telehealth network." },
  { icon: HeartHandshake, title: "Competitive benefits", desc: "Health, dental, and vision designed for teams who take wellness seriously — plus flexible arrangements where roles allow." },
  { icon: Lightbulb, title: "Impactful work", desc: "Help define the standard for men's health telehealth — protocols, data, and outcomes that patients actually feel." },
  { icon: Users, title: "Supportive culture", desc: "Operator-led, physician-respected, and built for people who like solving hard problems without the noise." },
];

const departments = [
  { name: "Clinical", roles: ["Men's Health Provider (NP/PA) — Telehealth", "Clinical Operations Coordinator"] },
  { name: "Operations", roles: ["Patient Experience Specialist", "Lab Operations Manager"] },
  { name: "Corporate", roles: ["Growth Marketing Manager", "Data Analyst — Healthcare"] },
  { name: "General", roles: ["General Application — Tell us about yourself"] },
];

const Careers = () => (
  <>
    <Header />
    <main>
      <section className="bg-cream-50 pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-lora text-[clamp(32px,4vw,64px)] leading-[1.1] tracking-[-0.02em] text-navy-900 max-w-3xl"
          >
            Build the future of men's health with us.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-space mt-6 max-w-2xl text-[15px] leading-[1.7] text-navy-600">
            We are building the national telehealth platform for men's health — clinical rigor, real outcomes, and room for people who want their work to matter.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <a href="#openings" className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-navy-950 px-7 py-3.5 font-sans text-[14px] font-semibold text-white hover:bg-navy-900 active:scale-[0.98] transition-all">
              View openings <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <div className="rounded-2xl bg-navy-700 h-80" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-lora text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-navy-900">Join the team</h2>
            <p className="font-space mt-6 text-[15px] leading-[1.7] text-navy-600">
              We work shoulder-to-shoulder with providers, operators, and technologists who expect precision and pace. Collaboration here means clear ownership, direct feedback, and room to grow as the platform scales.
            </p>
            <p className="font-space mt-4 text-[15px] leading-[1.7] text-navy-600">
              If you want your craft to show up in how patients experience care nationwide, you will find a home here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy-950 noise-overlay py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 bg-white/[0.06] border border-white/[0.1]">
              <Diamond size="xs" />
              <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-cream-200/70">Why Longentis</span>
            </div>
            <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-cream-200">What you can expect</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {expectCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="rounded-2xl p-6 h-full bg-white/[0.04] border border-white/[0.08]">
                  <Diamond size="sm" className="text-cta/60 mb-3" />
                  <h3 className="font-sans text-[16px] font-semibold text-cream-200">{c.title}</h3>
                  <p className="font-space mt-2 text-[14px] leading-[1.6] text-cream-200/65">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 bg-navy-900/[0.06] border border-navy-900/[0.12]">
              <Diamond size="xs" />
              <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-navy-600">Roles</span>
            </div>
            <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-navy-900">Current openings</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="mt-12 max-w-3xl">
            {departments.map((d, i) => (
              <AccordionItem key={i} value={`dept-${i}`} className="border-b border-navy-900/[0.08]">
                <AccordionTrigger className="font-sans text-lg font-semibold text-navy-900">{d.name}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3">
                    {d.roles.map((r) => (
                      <li key={r} className="flex items-center justify-between rounded-2xl border border-navy-900/[0.06] bg-white p-4">
                        <span className="font-space text-[14px] text-navy-900">{r}</span>
                        <span className="font-sans text-[14px] font-semibold text-cta cursor-pointer hover:underline">Apply →</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="font-space mt-8 text-[14px] text-navy-600">Prefer a general intro? <a href="mailto:info@longentis.com" className="text-cta hover:underline">Contact us.</a></p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Careers;
