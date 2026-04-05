import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";

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
    { name: "Executive Director", title: "Operations & Growth", bio: "Leading Longentis growth strategy and operational excellence across all 50 states." },
    { name: "Clinical Director", title: "Medical Oversight", bio: "Overseeing all clinical protocols and provider standards nationwide." },
    { name: "Technology Lead", title: "Platform & Engineering", bio: "Building the telehealth infrastructure that powers every patient interaction." },
  ]},
  { id: "medical", label: "Medical Providers", members: [
    { name: "Lead Physician", title: "Men's Health Specialist", bio: "Board-certified with 10+ years in hormone therapy and men's health." },
    { name: "Clinical NP", title: "Nurse Practitioner", bio: "Specialized in TRT protocols and metabolic health management." },
  ]},
  { id: "advisory", label: "Advisory Board", members: [
    { name: "Medical Advisor", title: "Endocrinology", bio: "Research background in hormone optimization and metabolic health." },
    { name: "Strategy Advisor", title: "Healthcare Operations", bio: "Experienced in scaling telehealth platforms nationally." },
  ]},
];

const About = () => (
  <>
    <Header />
    <main>
      {/* Hero */}
      <section className="relative bg-[#06081a] noise-overlay py-40 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 mb-6" style={{ background: "rgba(27,43,75,0.30)", border: "1px solid rgba(255,255,255,0.10)" }}>
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C5CDE0]/70">Our Story</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="font-lora text-[clamp(32px,5vw,72px)] leading-[1.1] tracking-[-0.02em] text-[#E8E2D9] max-w-4xl mx-auto"
          >
            Since 2015. 10,000 men. <em className="italic text-[#E8670A]">We know what works.</em>
          </motion.h1>
          <div className="absolute inset-0 pointer-events-none">
            {[
              "top-20 left-[10%] w-20 h-20",
              "top-32 right-[12%] w-24 h-24",
              "bottom-20 left-[20%] w-16 h-16",
              "bottom-16 right-[18%] w-20 h-20",
            ].map((pos, i) => (
              <div key={i} className={`absolute ${pos} rounded-full bg-[#1B2B4B] opacity-40`} />
            ))}
          </div>
        </div>
      </section>

      {/* Driven by Purpose */}
      <section className="bg-[#FAFAF7] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <h2 className="font-lora text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">Driven by Purpose</h2>
            <p className="font-space mt-6 text-[15px] leading-[1.7] text-[#555] font-light">
              Longentis is building the telehealth model for men's health at scale: same dedicated providers, clearer standards, and a better experience for patients everywhere.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-lg bg-[#1B2B4B] h-80" />
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-[#06081a] noise-overlay p-12 lg:p-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C5CDE0]/70">Our Mission</span>
            </div>
            <h3 className="font-sans mt-6 text-xl font-semibold text-[#E8E2D9] uppercase tracking-wide">Advance Men's Health</h3>
            <p className="font-space mt-3 text-[15px] leading-[1.7] text-[#E8E2D9]/60 font-light">
              Our mission is to advance healthier, stronger, more confident lives by making men's health care more accessible, more precise, and more actionable for every patient we serve.
            </p>
            <h3 className="font-sans mt-10 text-xl font-semibold text-[#E8E2D9] uppercase tracking-wide">Build the Platform</h3>
            <p className="font-space mt-3 text-[15px] leading-[1.7] text-[#E8E2D9]/60 font-light">
              We do that by equipping providers with advanced protocols, real lab data, dedicated patient panels, and the telehealth infrastructure needed to deliver modern care at a higher standard — in all 50 states.
            </p>
          </div>
        </div>
        <div className="bg-[#E8EDF5] p-12 lg:p-20">
          <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)" }}>
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">Our Vision</span>
          </div>
          <h3 className="font-sans mt-6 text-xl font-semibold text-[#0B1029] uppercase tracking-wide">Set the Standard</h3>
          <p className="font-space mt-3 text-[15px] leading-[1.7] text-[#555] font-light">
            Our vision is to set the standard as the trusted, go-to provider of men's health care and to help define what physician-led telehealth looks like at scale.
          </p>
          <h3 className="font-sans mt-10 text-xl font-semibold text-[#0B1029] uppercase tracking-wide">Lead What Comes Next</h3>
          <p className="font-space mt-3 text-[15px] leading-[1.7] text-[#555] font-light">
            We see where men's health is headed and we intend to be at the forefront: expanding access to real treatment, removing geographic barriers, and helping more men take control of their health for longer.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-[#FAFAF7] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-lora text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">How We Work</h2>
            <p className="font-space mt-4 text-[15px] leading-[1.7] text-[#555] font-light max-w-2xl">
              The principles that shape Longentis — from clinical decisions to how we communicate with patients.
            </p>
          </ScrollReveal>
          <Accordion type="single" collapsible className="mt-12 max-w-3xl">
            {values.map((v, i) => (
              <AccordionItem key={i} value={`v-${i}`} className="border-b border-dashed border-[#C5CDE0]/70">
                <AccordionTrigger className="font-sans text-lg font-semibold text-[#0B1029]">{v.title}</AccordionTrigger>
                <AccordionContent><p className="font-space text-[15px] leading-[1.7] text-[#555] font-light">{v.desc}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Scale Stats */}
      <section className="bg-[#E8EDF5] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-lora text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">Our platform is built for scale.</h2>
            <p className="font-space mt-4 text-[15px] leading-[1.7] text-[#555] font-light max-w-2xl mx-auto">
              10,000+ patients. 3 Virginia centers. Now all 50 states. Longentis is leading the charge in men's health telehealth.
            </p>
            <Link to="/get-started" className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-[#1B2B4B] px-6 py-3 font-sans text-[11.5px] font-bold uppercase tracking-[0.09em] text-[#FAFAF7] border border-white/[0.11] hover:bg-[#162340] active:scale-[0.98] transition-all">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
          <div className="mt-16 flex flex-wrap justify-center gap-12">
            <StatCounter end={10000} suffix="+" label="Patients Treated" />
            <StatCounter end={2015} label="Since" prefix="" />
            <StatCounter end={50} label="State Coverage" suffix="-State" />
          </div>
        </div>
      </section>

      {/* MWC Partnership */}
      <section className="bg-[#FAFAF7] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5" style={{ background: "rgba(27,43,75,0.10)", border: "1px solid rgba(27,43,75,0.20)" }}>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#243656]">Powered By</span>
            </div>
            <h2 className="font-lora mt-6 text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029] italic">Built on Men's Wellness Centers.</h2>
            <p className="font-space mt-6 text-[15px] leading-[1.7] text-[#555] font-light">
              Longentis isn't a telehealth startup. It's the digital arm of Men's Wellness Centers — a LegitScript-certified men's health practice that's been treating men in Virginia since 2015. Same ownership. Same providers. Same protocols.
            </p>
            <ul className="font-space mt-6 space-y-3 text-[15px] text-[#555] font-light">
              {["Proven clinical model since 2015", "3 Virginia centers with same-day care", "LegitScript certified, state-licensed providers"].map((b) => (
                <li key={b} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E8670A] shrink-0" />{b}</li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-lg bg-[#1B2B4B] h-80" />
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#E8EDF5] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-lora text-[clamp(28px,3.8vw,56px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]">United by a Shared Goal</h2>
            <p className="font-space mt-4 text-[15px] leading-[1.7] text-[#555] font-light max-w-2xl">
              Across leadership and clinical teams, Longentis brings together operators and physicians working to redefine men's health telehealth at a national level.
            </p>
          </ScrollReveal>
          <Tabs defaultValue="leadership" className="mt-12">
            <TabsList className="bg-transparent border-0 p-0 h-auto flex flex-wrap gap-2 mb-8">
              {teamTabs.map((t) => (
                <TabsTrigger key={t.id} value={t.id} className="font-mono text-[10px] tracking-[0.1em] uppercase px-4 py-2.5 rounded-md data-[state=active]:bg-white/70 data-[state=active]:backdrop-blur-[10px] data-[state=active]:border data-[state=active]:border-[rgba(27,43,75,0.25)] data-[state=inactive]:bg-white/30 data-[state=inactive]:border data-[state=inactive]:border-[rgba(27,43,75,0.15)]">{t.label}</TabsTrigger>
              ))}
            </TabsList>
            {teamTabs.map((t) => (
              <TabsContent key={t.id} value={t.id}>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {t.members.map((m) => (
                    <motion.div key={m.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                      <div className="h-48 rounded-lg bg-[#1B2B4B] mb-4" />
                      <h3 className="font-sans text-lg font-semibold text-[#0B1029]">{m.name}</h3>
                      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#243656] mt-1">{m.title}</p>
                      <p className="font-space mt-3 text-[13px] text-[#555] font-light">{m.bio}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
