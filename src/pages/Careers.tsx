import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, HeartHandshake, Lightbulb, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";

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
      {/* Hero */}
      <section className="bg-background pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl max-w-3xl"
          >
            Build the future of men's health with us.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We are building the national telehealth platform for men's health — clinical rigor, real outcomes, and room for people who want their work to matter.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <a href="#openings" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3 font-heading text-sm font-semibold text-cta-foreground hover:brightness-110 active:scale-[0.98] transition-all">
              View openings <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <div className="rounded-lg bg-navy-800 h-80" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Join the team</h2>
            <p className="font-body mt-6 text-base leading-relaxed text-muted-foreground">
              We work shoulder-to-shoulder with providers, operators, and technologists who expect precision and pace. Collaboration here means clear ownership, direct feedback, and room to grow as the platform scales — without losing what made men's health worth building in the first place.
            </p>
            <p className="font-body mt-4 text-base leading-relaxed text-muted-foreground">
              If you want your craft to show up in how patients experience care nationwide, you will find a home here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="bg-navy-950 noise-overlay py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionLabel text="Why Longentis" />
            <h2 className="font-heading mt-3 text-3xl font-bold text-cream-200 md:text-4xl">What you can expect</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {expectCards.map((c, i) => (
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

      {/* Current Openings */}
      <section id="openings" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionLabel text="Roles" />
            <h2 className="font-heading mt-3 text-3xl font-bold text-foreground md:text-4xl">Current openings</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="mt-12 max-w-3xl">
            {departments.map((d, i) => (
              <AccordionItem key={i} value={`dept-${i}`}>
                <AccordionTrigger className="font-heading text-lg font-semibold text-foreground">{d.name}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3">
                    {d.roles.map((r) => (
                      <li key={r} className="flex items-center justify-between rounded-lg border border-border bg-cream-100 p-4">
                        <span className="font-body text-sm text-foreground">{r}</span>
                        <span className="font-heading text-sm font-semibold text-cta cursor-pointer hover:underline">Apply →</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="font-body mt-8 text-sm text-muted-foreground">Prefer a general intro? <a href="mailto:info@longentis.com" className="text-cta hover:underline">Contact us.</a></p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Careers;
