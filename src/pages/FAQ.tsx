import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollReveal from "@/components/ScrollReveal";
import Diamond from "@/components/Diamond";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = [
  {
    id: "getting-started",
    label: "Getting Started",
    faqs: [
      { q: "How does the free assessment work?", a: "Complete a 5-minute health questionnaire online. A licensed men's health provider reviews your responses within 24 hours. If you're a candidate, we order labs and schedule your first video consultation. No obligation, no credit card required." },
      { q: "How long does it take to start treatment?", a: "Most patients go from assessment to treatment in 7-10 days. That includes completing your health questionnaire, getting labs drawn (at-home kit or Quest/Labcorp), provider review, and first consultation. Medication typically ships within 48 hours of your consultation." },
      { q: "Do I need a referral from my doctor?", a: "No referral needed. Longentis providers are licensed to evaluate, diagnose, and prescribe independently. We can coordinate with your primary care physician if you'd like, but it's not required." },
      { q: "What states do you serve?", a: "Longentis provides telehealth services in all 50 states. We also have in-person clinics (Men's Wellness Centers) in Richmond, Newport News, and Virginia Beach, Virginia." },
      { q: "Is the initial consultation really free?", a: "Yes. The online health assessment is completely free with no obligation. If you proceed with treatment, your first lab panel and provider consultation are included in your monthly plan." },
    ],
  },
  {
    id: "labs",
    label: "Labs & Testing",
    faqs: [
      { q: "What does the lab panel test for?", a: "Our comprehensive panel covers 20+ biomarkers including total and free testosterone, SHBG, estradiol, PSA, CBC, CMP, lipid panel, thyroid function (TSH, T3, T4), hemoglobin A1C, vitamin D, B12, and more. The exact panel depends on your treatment protocol." },
      { q: "How do I get my blood drawn?", a: "Two options: an at-home lab kit shipped to your door (finger-prick collection, results in 5-7 days) or a requisition for Quest Diagnostics or Labcorp (standard blood draw, results in 2-3 days). Both are included in your plan." },
      { q: "How often do I need lab work?", a: "Initial labs before starting treatment, then quarterly (every 90 days) for ongoing monitoring. Your provider may order additional labs if adjusting your protocol. All lab work is included in your monthly plan." },
      { q: "Who reviews my results?", a: "Your dedicated provider reviews every lab result line by line. Not an algorithm. Not a different doctor each time. The same provider who knows your history, your goals, and your protocol." },
    ],
  },
  {
    id: "treatments",
    label: "Treatments",
    faqs: [
      { q: "Is testosterone replacement therapy (TRT) safe?", a: "When prescribed and monitored by a qualified provider, TRT has a strong safety profile backed by decades of clinical research. Longentis monitors 20+ biomarkers quarterly — including PSA, hematocrit, and lipids — to ensure your protocol stays safe and optimized." },
      { q: "What ED medications do you prescribe?", a: "Sildenafil (generic Viagra) and tadalafil (generic Cialis). Both are FDA-approved PDE5 inhibitors. Your provider selects based on your health profile, lifestyle, and preferences." },
      { q: "What weight loss medications are available?", a: "Semaglutide (the active ingredient in Ozempic/Wegovy) and tirzepatide (Mounjaro/Zepbound) when clinically appropriate. Dosing is based on your metabolic labs and gradually titrated under provider supervision." },
      { q: "Can I combine treatments?", a: "Yes. Many patients benefit from coordinated protocols — for example, TRT combined with weight loss medication, or TRT with ED treatment. Your provider manages your full protocol to ensure everything works together safely." },
      { q: "Will I need to take medication forever?", a: "It depends on the treatment. TRT is typically ongoing — stopping returns levels to baseline. GLP-1 weight loss medications may be tapered after reaching goals. ED medications are used as needed. Your provider discusses timeline and goals during consultation." },
      { q: "Is this legal in my state?", a: "Yes. Longentis is licensed to practice telehealth in all 50 states. All prescriptions are written by licensed, board-certified physicians and filled through licensed US pharmacies. We are LegitScript certified." },
    ],
  },
  {
    id: "billing",
    label: "Billing & Insurance",
    faqs: [
      { q: "Do you accept insurance?", a: "Longentis operates on a direct-pay model. We do not bill insurance directly. However, many patients use FSA or HSA funds, which are accepted for all plans. Some patients also submit receipts to their insurance for potential reimbursement." },
      { q: "What does my monthly plan include?", a: "Everything: medication, lab panels (quarterly), provider consultations, follow-up visits, direct provider messaging, and shipping. One price, no hidden fees." },
      { q: "Can I use my FSA or HSA?", a: "Yes. All Longentis plans are eligible for FSA and HSA payment. We accept FSA/HSA debit cards directly." },
      { q: "Is there a contract or commitment?", a: "No contracts. Cancel anytime. Your subscription continues month-to-month until you cancel. No cancellation fees." },
      { q: "Are there any hidden fees?", a: "None. Your monthly plan price is all-inclusive. No enrollment fees, no lab fees, no shipping fees, no consultation fees. The price you see is the price you pay." },
    ],
  },
  {
    id: "privacy",
    label: "Privacy & Security",
    faqs: [
      { q: "Is my information private?", a: "Absolutely. Longentis is fully HIPAA compliant. All data is encrypted in transit and at rest. Your medical records are never shared without your explicit consent. We do not sell or share patient data." },
      { q: "How is medication shipped?", a: "All medications ship in plain, unmarked packaging with no indication of the contents. No logos, no treatment names on the exterior. Shipped via USPS or FedEx with tracking." },
      { q: "Who can see my medical records?", a: "Only your dedicated provider and essential clinical staff. Records are encrypted and stored on HIPAA-compliant infrastructure. We do not share records with employers, insurance companies, or third parties without your written authorization." },
      { q: "Are video consultations secure?", a: "Yes. All video consultations use end-to-end encrypted, HIPAA-compliant telehealth technology. No recordings are made without consent." },
    ],
  },
];

const FAQ = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("getting-started");

  const filteredCategories = search.trim()
    ? categories.map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (f) =>
            f.q.toLowerCase().includes(search.toLowerCase()) ||
            f.a.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter((cat) => cat.faqs.length > 0)
    : categories.filter((cat) => cat.id === activeCategory);

  return (
    <>
      <Header />
      <main>
        <section className="relative w-full pt-32 lg:pt-40 pb-16 bg-cream-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-sans font-bold text-[clamp(32px,5vw,64px)] leading-[1.08] tracking-[-0.03em] text-navy-900">
                Questions?{" "}
                <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>Answered.</em>
              </h1>
              <p className="font-space mt-4 max-w-2xl text-[16px] leading-[1.7] text-navy-700/75">
                Everything you need to know about Longentis, from getting started to treatment details and billing.
              </p>
            </motion.div>

            {/* Search */}
            <div className="mt-8 relative max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-700/40" />
              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-navy-900/[0.12] bg-white pl-11 pr-4 py-3.5 font-space text-[14px] text-navy-900 placeholder:text-navy-700/30 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta/40 transition-all shadow-card"
              />
            </div>
          </div>
        </section>

        <section className="bg-cream-100 pb-24 pt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-[240px_1fr] gap-10">
              {/* Category nav */}
              {!search.trim() && (
                <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`whitespace-nowrap rounded-lg px-4 py-2.5 font-sans text-[13px] font-medium transition-all text-left inline-flex items-center gap-2 ${
                        activeCategory === cat.id
                          ? "bg-navy-950 text-cream-100"
                          : "bg-white text-navy-700/70 border border-navy-900/[0.10] hover:bg-white/80"
                      }`}
                    >
                      <Diamond size="xs" className={activeCategory === cat.id ? "text-cta" : "text-cta/50"} />
                      {cat.label}
                    </button>
                  ))}
                </nav>
              )}

              {/* FAQ content */}
              <div className={search.trim() ? "lg:col-span-2" : ""}>
                {filteredCategories.map((cat) => (
                  <div key={cat.id} className="mb-8">
                    {search.trim() && (
                      <h3 className="font-sans font-semibold text-lg text-navy-900 mb-4">{cat.label}</h3>
                    )}
                    <Accordion type="single" collapsible className="space-y-2">
                      {cat.faqs.map((faq, i) => (
                        <AccordionItem
                          key={i}
                          value={`${cat.id}-${i}`}
                          className="rounded-xl border border-navy-900/[0.10] bg-white px-5 overflow-hidden shadow-card"
                        >
                          <AccordionTrigger className="font-sans text-[15px] font-semibold text-navy-900 hover:no-underline py-5">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="font-space text-[14px] leading-[1.7] text-navy-700/70">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
                {filteredCategories.length === 0 && (
                  <p className="font-space text-[15px] text-navy-700/60 py-8">No questions match your search. Try a different term.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-950 py-16 noise-overlay">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="font-sans font-bold text-2xl text-cream-200">Still have questions?</h2>
            <p className="font-space mt-3 text-[15px] text-cream-200/65">
              Start your free assessment and speak directly with a licensed men's health provider.
            </p>
            <Link
              to="/get-started"
              className="mt-6 inline-flex items-center rounded-full bg-cta px-7 py-3.5 text-[14px] font-semibold text-white font-sans hover:bg-cta/90 transition-colors"
            >
              Start Your Free Visit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default FAQ;
