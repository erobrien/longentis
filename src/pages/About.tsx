import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
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
      <section className="relative bg-navy-950 noise-overlay py-40 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono-label text-xs font-medium uppercase tracking-[0.15em] text-cta mb-4">Our Story</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display text-4xl font-normal leading-tight text-cream-200 md:text-6xl lg:text-7xl max-w-4xl mx-auto"
          >
            Since 2015. 10,000 men. <em className="text-cta italic">We know what works.</em>
          </motion.h1>
          {/* Floating portrait placeholders */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              "top-20 left-[10%] w-20 h-20",
              "top-32 right-[12%] w-24 h-24",
              "bottom-20 left-[20%] w-16 h-16",
              "bottom-16 right-[18%] w-20 h-20",
            ].map((pos, i) => (
              <div key={i} className={`absolute ${pos} rounded-full bg-navy-700 opacity-40`} />
            ))}
          </div>
        </div>
      </section>

      {/* Driven by Purpose */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Driven by Purpose</h2>
            <p className="font-body mt-6 text-lg leading-relaxed text-muted-foreground">
              Longentis is building the telehealth model for men's health at scale: same dedicated providers, clearer standards, and a better experience for patients everywhere.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-lg bg-navy-800 h-80" />
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-navy-950 noise-overlay p-12 lg:p-20">
          <div className="relative z-10">
            <SectionLabel text="Our Mission" />
            <h3 className="font-heading mt-6 text-xl font-semibold text-cream-200 uppercase tracking-wide">Advance Men's Health</h3>
            <p className="font-body mt-3 text-base leading-relaxed text-cream-200/70">
              Our mission is to advance healthier, stronger, more confident lives by making men's health care more accessible, more precise, and more actionable for every patient we serve.
            </p>
            <h3 className="font-heading mt-10 text-xl font-semibold text-cream-200 uppercase tracking-wide">Build the Platform</h3>
            <p className="font-body mt-3 text-base leading-relaxed text-cream-200/70">
              We do that by equipping providers with advanced protocols, real lab data, dedicated patient panels, and the telehealth infrastructure needed to deliver modern care at a higher standard — in all 50 states.
            </p>
          </div>
        </div>
        <div className="bg-cream-100 p-12 lg:p-20">
          <SectionLabel text="Our Vision" />
          <h3 className="font-heading mt-6 text-xl font-semibold text-foreground uppercase tracking-wide">Set the Standard</h3>
          <p className="font-body mt-3 text-base leading-relaxed text-muted-foreground">
            Our vision is to set the standard as the trusted, go-to provider of men's health care and to help define what physician-led telehealth looks like at scale.
          </p>
          <h3 className="font-heading mt-10 text-xl font-semibold text-foreground uppercase tracking-wide">Lead What Comes Next</h3>
          <p className="font-body mt-3 text-base leading-relaxed text-muted-foreground">
            We see where men's health is headed and we intend to be at the forefront: expanding access to real treatment, removing geographic barriers, and helping more men take control of their health for longer.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">How We Work</h2>
            <p className="font-body mt-4 text-lg text-muted-foreground max-w-2xl">
              The principles that shape Longentis — from clinical decisions to how we communicate with patients.
            </p>
          </ScrollReveal>
          <Accordion type="single" collapsible className="mt-12 max-w-3xl">
            {values.map((v, i) => (
              <AccordionItem key={i} value={`v-${i}`}>
                <AccordionTrigger className="font-heading text-lg font-semibold text-foreground">{v.title}</AccordionTrigger>
                <AccordionContent><p className="font-body text-base leading-relaxed text-muted-foreground">{v.desc}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Scale Stats */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Our platform is built for scale.</h2>
            <p className="font-body mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              10,000+ patients. 3 Virginia centers. Now all 50 states. Longentis is leading the charge in men's health telehealth.
            </p>
            <Link to="/get-started" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3 font-heading text-sm font-semibold text-cta-foreground hover:brightness-110 active:scale-[0.98] transition-all">
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
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <SectionLabel text="Powered By" />
            <h2 className="font-display mt-3 text-3xl font-normal text-foreground md:text-4xl italic">Built on Men's Wellness Centers.</h2>
            <p className="font-body mt-6 text-lg leading-relaxed text-muted-foreground">
              Longentis isn't a telehealth startup. It's the digital arm of Men's Wellness Centers — a LegitScript-certified men's health practice that's been treating men in Virginia since 2015. Same ownership. Same providers. Same protocols.
            </p>
            <ul className="font-body mt-6 space-y-3 text-base text-muted-foreground">
              {["Proven clinical model since 2015", "3 Virginia centers with same-day care", "LegitScript certified, state-licensed providers"].map((b) => (
                <li key={b} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cta shrink-0" />{b}</li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-lg bg-navy-800 h-80" />
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">United by a Shared Goal</h2>
            <p className="font-body mt-4 text-lg text-muted-foreground max-w-2xl">
              Across leadership and clinical teams, Longentis brings together operators and physicians working to redefine men's health telehealth at a national level.
            </p>
          </ScrollReveal>
          <Tabs defaultValue="leadership" className="mt-12">
            <TabsList className="bg-muted">
              {teamTabs.map((t) => (
                <TabsTrigger key={t.id} value={t.id} className="font-heading text-sm font-semibold">{t.label}</TabsTrigger>
              ))}
            </TabsList>
            {teamTabs.map((t) => (
              <TabsContent key={t.id} value={t.id}>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {t.members.map((m) => (
                    <motion.div key={m.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-border bg-background p-6">
                      <div className="h-48 rounded-md bg-navy-800 mb-4" />
                      <h3 className="font-heading text-lg font-semibold text-foreground">{m.name}</h3>
                      <p className="font-mono-label text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground mt-1">{m.title}</p>
                      <p className="font-body mt-3 text-sm text-muted-foreground">{m.bio}</p>
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
