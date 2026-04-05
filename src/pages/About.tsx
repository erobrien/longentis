import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import SectionHeader from "@/components/SectionHeader";
import Diamond from "@/components/Diamond";

import consultation from "@/assets/iStock-2187145642-1-5.jpg";
import fitMan from "@/assets/iStock-518621045.jpg";
import trackSitting from "@/assets/iStock-864444970-1-7.jpg";

const values = [
  { title: "Integrity in Practice", desc: "We uphold high standards by proactively solving problems and keeping care evidence-based. Patients should feel the quality of our decisions before they ever see the process behind them." },
  { title: "Clinical Excellence", desc: "Every protocol, every dosing adjustment, every follow-up is grounded in lab data and clinical evidence." },
  { title: "Accessibility", desc: "No zip code should determine whether a man gets treatment. Telehealth in 50 states. In-person in Virginia." },
  { title: "Patient-First", desc: "Your provider knows your name. Your labs. Your goals. This is personalized care, not a prescription mill." },
  { title: "Transparency", desc: "You know the cost before you start. No surprise bills. No hidden fees. FSA and HSA accepted." },
  { title: "Teamwork", desc: "Providers, operations, and technology working as one to deliver better outcomes." },
];

const teamTabs = [
  { id: "leadership", label: "Leadership Team", members: [
    { name: "Executive Director", title: "Operations & Growth", bio: "Leading Longentis growth strategy and operational excellence across all 50 states.", img: consultation },
    { name: "Clinical Director", title: "Medical Oversight", bio: "Overseeing all clinical protocols and provider standards nationwide.", img: fitMan },
    { name: "Technology Lead", title: "Platform & Engineering", bio: "Building the telehealth infrastructure that powers every patient interaction.", img: trackSitting },
  ]},
  { id: "medical", label: "Medical Providers", members: [
    { name: "Lead Physician", title: "Men's Health Specialist", bio: "Board-certified with 10+ years in hormone therapy and men's health.", img: consultation },
    { name: "Clinical NP", title: "Nurse Practitioner", bio: "Specialized in TRT protocols and metabolic health management.", img: fitMan },
  ]},
  { id: "advisory", label: "Advisory Board", members: [
    { name: "Medical Advisor", title: "Endocrinology", bio: "Research background in hormone optimization and metabolic health.", img: trackSitting },
    { name: "Strategy Advisor", title: "Healthcare Operations", bio: "Experienced in scaling telehealth platforms nationally.", img: consultation },
  ]},
];

const timeline = [
  { year: "2015", title: "Men's Wellness Centers Founded", desc: "First Virginia clinic opens in Richmond, focused on TRT and men's health." },
  { year: "2018", title: "Multi-Location Expansion", desc: "Newport News and Virginia Beach centers open. 3,000+ patients treated." },
  { year: "2022", title: "Telehealth Launch", desc: "Expanding beyond Virginia — telehealth services begin across the East Coast." },
  { year: "2024", title: "Nationwide Coverage", desc: "Licensed in all 50 states. Longentis brand launches as the digital arm of MWC." },
  { year: "2026", title: "10,000+ Patients", desc: "LegitScript certified. 12+ providers. Setting the standard in men's telehealth." },
];

const About = () => (
  <>
    <Header />
    <main>
      {/* Hero */}
      <section className="relative bg-navy-950 noise-overlay pt-36 pb-20 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 mb-6 bg-white/[0.06] border border-white/[0.1]">
            <Diamond size="xs" />
            <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-cream-200/65">Our Story</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="font-sans font-bold text-[clamp(32px,5vw,72px)] leading-[1.05] tracking-[-0.03em] text-cream-100 max-w-4xl mx-auto"
          >
            Since 2015. 10,000 men.{" "}
            <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>We know what works.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-space text-cream-200/65 text-[16px] max-w-2xl mx-auto mt-5 leading-relaxed"
          >
            What started as a single Virginia clinic is now a nationwide men's health platform — same providers, same protocols, higher standard.
          </motion.p>
        </div>
      </section>

      {/* Driven by Purpose */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <SectionHeader badge="Our Purpose" title="Driven by Purpose" />
            <p className="font-space mt-6 text-[15px] leading-[1.7] text-navy-700/70">
              Longentis is building the telehealth model for men's health at scale: same dedicated providers, clearer standards, and a better experience for patients everywhere.
            </p>
            <p className="font-space mt-4 text-[15px] leading-[1.7] text-navy-700/70">
              The gap between how men feel and what their doctor calls "normal" is where we operate. We started in Virginia. Now we're in all 50 states — bringing the same clinical discipline to telehealth that made our in-person centers work.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden h-80 relative">
              <img src={consultation} alt="Longentis provider consultation" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Journey"
            title={<>From one Virginia clinic to <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>all 50 states.</em></>}
          />
          <div className="mt-14 relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-navy-900/[0.08] hidden md:block" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <ScrollReveal key={t.year} delay={i * 0.06}>
                  <div className="flex gap-6 items-start">
                    <div className="relative z-10 size-10 rounded-full bg-navy-950 flex items-center justify-center shrink-0">
                      <span className="font-sans text-[11px] font-bold tracking-wide text-cta">{t.year.slice(2)}</span>
                    </div>
                    <div className="rounded-2xl p-5 bg-white border border-navy-900/[0.06] flex-1">
                      <p className="font-sans text-[11px] font-medium tracking-wide uppercase text-navy-500 mb-1">{t.year}</p>
                      <h3 className="font-sans font-semibold text-[16px] text-navy-900">{t.title}</h3>
                      <p className="font-space text-[14px] leading-[1.6] text-navy-700/70 mt-1">{t.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-navy-950 noise-overlay p-12 lg:p-20 relative">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 bg-white/[0.06] border border-white/[0.1]">
              <Diamond size="xs" />
              <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-cream-200/65">Our Mission</span>
            </div>
            <h3 className="font-sans mt-6 text-xl font-semibold text-cream-100 uppercase tracking-wide">Advance Men's Health</h3>
            <p className="font-space mt-3 text-[15px] leading-[1.7] text-cream-200/65">
              Our mission is to advance healthier, stronger, more confident lives by making men's health care more accessible, more precise, and more actionable for every patient we serve.
            </p>
            <h3 className="font-sans mt-10 text-xl font-semibold text-cream-100 uppercase tracking-wide">Build the Platform</h3>
            <p className="font-space mt-3 text-[15px] leading-[1.7] text-cream-200/65">
              We do that by equipping providers with advanced protocols, real lab data, dedicated patient panels, and the telehealth infrastructure needed to deliver modern care at a higher standard — in all 50 states.
            </p>
          </div>
        </div>
        <div className="bg-cream-200 p-12 lg:p-20">
          <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 bg-navy-900/[0.06] border border-navy-900/[0.12]">
            <Diamond size="xs" />
            <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-navy-600">Our Vision</span>
          </div>
          <h3 className="font-sans mt-6 text-xl font-semibold text-navy-900 uppercase tracking-wide">Set the Standard</h3>
          <p className="font-space mt-3 text-[15px] leading-[1.7] text-navy-700/70">
            Our vision is to set the standard as the trusted, go-to provider of men's health care and to help define what physician-led telehealth looks like at scale.
          </p>
          <h3 className="font-sans mt-10 text-xl font-semibold text-navy-900 uppercase tracking-wide">Lead What Comes Next</h3>
          <p className="font-space mt-3 text-[15px] leading-[1.7] text-navy-700/70">
            We see where men's health is headed and we intend to be at the forefront: expanding access to real treatment, removing geographic barriers, and helping more men take control of their health for longer.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader badge="Our Values" title="How We Work" description="The principles that shape Longentis — from clinical decisions to how we communicate with patients." />
          <Accordion type="single" collapsible className="mt-12 max-w-3xl">
            {values.map((v, i) => (
              <AccordionItem key={i} value={`v-${i}`} className="border-b border-navy-900/[0.08]">
                <AccordionTrigger className="font-sans text-lg font-semibold text-navy-900">
                  <span className="inline-flex items-center gap-2"><Diamond size="xs" />{v.title}</span>
                </AccordionTrigger>
                <AccordionContent><p className="font-space text-[15px] leading-[1.7] text-navy-700/70">{v.desc}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-sans font-bold text-[clamp(28px,3.8vw,52px)] leading-[1.12] tracking-[-0.02em] text-navy-900">Built for scale.</h2>
            <p className="font-space mt-4 text-[15px] leading-[1.7] text-navy-700/70 max-w-2xl mx-auto">
              10,000+ patients. 3 Virginia centers. Now all 50 states.
            </p>
            <Link to="/get-started" className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-cta px-8 py-4 font-sans text-[15px] font-semibold text-white hover:bg-cta/90 transition-colors active:scale-[0.98]">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
          <div className="mt-16 flex flex-wrap justify-center gap-12">
            <StatCounter end={10000} suffix="+" label="Patients Treated" />
            <StatCounter end={12} suffix="+" label="Providers" />
            <StatCounter end={50} label="States" />
          </div>
        </div>
      </section>

      {/* MWC Origin Story */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <SectionHeader
              badge="Powered By"
              title={<>Built on Men's Wellness <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>Centers.</em></>}
            />
            <p className="font-space mt-6 text-[15px] leading-[1.7] text-navy-700/70">
              Longentis isn't a telehealth startup. It's the digital arm of Men's Wellness Centers — a LegitScript-certified men's health practice that's been treating men in Virginia since 2015. Same ownership. Same providers. Same protocols.
            </p>
            <ul className="font-space mt-6 space-y-3 text-[15px] text-navy-700/70">
              {["Proven clinical model since 2015", "3 Virginia centers with same-day care", "LegitScript certified, state-licensed providers", "12+ dedicated men's health specialists"].map((b) => (
                <li key={b} className="flex items-start gap-2"><Diamond size="xs" className="mt-1.5 shrink-0" />{b}</li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden h-80 relative">
              <img src={fitMan} alt="Men's Wellness Centers" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Team"
            title="United by a Shared Goal"
            description="Across leadership and clinical teams, Longentis brings together operators and physicians working to redefine men's health telehealth."
          />
          <Tabs defaultValue="leadership" className="mt-12">
            <TabsList className="bg-transparent border-0 p-0 h-auto flex flex-wrap gap-2 mb-8">
              {teamTabs.map((t) => (
                <TabsTrigger key={t.id} value={t.id} className="font-sans text-[11px] font-semibold tracking-wide uppercase px-4 py-2.5 rounded-md data-[state=active]:bg-white/80 data-[state=active]:border data-[state=active]:border-navy-900/[0.15] data-[state=active]:shadow-sm data-[state=inactive]:bg-navy-900/[0.04] data-[state=inactive]:border data-[state=inactive]:border-navy-900/[0.06]">{t.label}</TabsTrigger>
              ))}
            </TabsList>
            {teamTabs.map((t) => (
              <TabsContent key={t.id} value={t.id}>
                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {t.members.map((m) => (
                    <motion.div key={m.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-navy-900/[0.06] bg-white p-6">
                      <div className="h-48 rounded-lg overflow-hidden relative mb-4">
                        <img src={m.img} alt={m.name} className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                      <h3 className="font-sans text-lg font-semibold text-navy-900">{m.name}</h3>
                      <p className="font-sans text-[11px] font-medium tracking-wide uppercase text-navy-600 mt-1">{m.title}</p>
                      <p className="font-space mt-3 text-[14px] text-navy-700/70">{m.bio}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Clinical Credentials */}
      <section className="bg-navy-950 noise-overlay py-24 relative">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Credentials"
            badgeVariant="dark"
            title={<>Clinical standards you can <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>verify.</em></>}
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "LegitScript Certified", desc: "Verified pharmacy and healthcare compliance." },
              { label: "HIPAA Compliant", desc: "End-to-end encrypted patient data." },
              { label: "State-Licensed Providers", desc: "Every provider licensed in the state they serve." },
              { label: "FDA-Approved Protocols", desc: "Only evidence-based, FDA-approved medications." },
            ].map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 0.06}>
                <div className="rounded-2xl p-6 bg-white/[0.04] border border-white/[0.08] text-center h-full">
                  <Diamond size="md" className="text-cta/60 mb-3" />
                  <h3 className="font-sans font-semibold text-[15px] text-cream-100">{c.label}</h3>
                  <p className="font-space text-[14px] text-cream-200/65 mt-2">{c.desc}</p>
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

export default About;
