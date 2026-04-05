import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollReveal from "@/components/ScrollReveal";
import Diamond from "@/components/Diamond";

const articles = [
  { category: "Lab Guides", title: "What Your Testosterone Level Actually Means", excerpt: "Total testosterone, free testosterone, SHBG — your lab results decoded by a men's health specialist.", readTime: "6 min", treatmentLink: "/treatments/trt" },
  { category: "Treatment Guides", title: "TRT: What to Expect in Your First 90 Days", excerpt: "Timeline of changes from testosterone replacement therapy — energy, body composition, mood, and libido.", readTime: "8 min", treatmentLink: "/treatments/trt" },
  { category: "Lab Guides", title: "Understanding Your Metabolic Panel", excerpt: "Fasting insulin, glucose, A1C, and why these numbers matter more than the scale.", readTime: "5 min", treatmentLink: "/treatments/weight-loss" },
  { category: "Men's Health", title: "ED at 40: What Your Doctor Isn't Telling You", excerpt: "Erectile dysfunction isn't just a bedroom issue. It's often the first sign of cardiovascular or hormonal problems.", readTime: "7 min", treatmentLink: "/treatments/ed" },
  { category: "Treatment Guides", title: "GLP-1 Medications: Semaglutide vs. Tirzepatide", excerpt: "Comparing the two leading weight loss medications — efficacy, side effects, and which might be right for you.", readTime: "9 min", treatmentLink: "/treatments/weight-loss" },
  { category: "Men's Health", title: "The Connection Between Low T and Weight Gain", excerpt: "How declining testosterone accelerates visceral fat accumulation and what the data says about treating both.", readTime: "6 min", treatmentLink: "/treatments/trt" },
  { category: "Lab Guides", title: "PSA Screening on TRT: What You Need to Know", excerpt: "Prostate-specific antigen monitoring for men on hormone protocols — frequency, ranges, and red flags.", readTime: "5 min", treatmentLink: "/treatments/trt" },
  { category: "Men's Health", title: "Why Your Primary Care Doctor Misses Low T", excerpt: "The standard reference range for testosterone is based on a population average, not an optimal level. Here's why that matters.", readTime: "7 min", treatmentLink: "/treatments/trt" },
  { category: "Treatment Guides", title: "Daily vs. As-Needed Tadalafil for ED", excerpt: "Low-dose daily tadalafil vs. on-demand dosing — comparing approaches for different lifestyles.", readTime: "5 min", treatmentLink: "/treatments/ed" },
];

const categoryFilters = ["All", "Lab Guides", "Treatment Guides", "Men's Health"];

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? articles : articles.filter((a) => a.category === activeFilter);

  return (
    <>
      <Header />
      <main>
        <section className="relative w-full pt-32 lg:pt-40 pb-16 bg-cream-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-sans font-bold text-[clamp(32px,5vw,64px)] leading-[1.08] tracking-[-0.03em] text-navy-900">
                Men's health,{" "}
                <em className="font-lora italic text-cta" style={{ fontStyle: "italic" }}>explained.</em>
              </h1>
              <p className="font-space mt-4 max-w-2xl text-[16px] leading-[1.7] text-navy-700/75">
                Lab guides, treatment explainers, and clinical insights from Longentis providers. No fluff. No clickbait.
              </p>
            </motion.div>

            {/* Filters */}
            <div className="mt-8 flex flex-wrap gap-2">
              {categoryFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-lg px-4 py-2.5 font-mono text-[10px] tracking-[0.12em] uppercase transition-all inline-flex items-center gap-1.5 ${
                    activeFilter === f
                      ? "bg-navy-950 text-cream-100"
                      : "bg-navy-900/[0.04] border border-navy-900/[0.08] text-navy-700/70 hover:bg-navy-900/[0.08]"
                  }`}
                >
                  <Diamond size="xs" className={activeFilter === f ? "text-cta" : "text-cta/40"} />
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream-100 pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article, i) => (
                <ScrollReveal key={article.title} delay={i * 0.04}>
                  <div className="group rounded-2xl p-6 h-full flex flex-col bg-white border border-navy-900/[0.06] hover:border-navy-900/[0.15] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(11,16,41,0.08)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="rounded-md px-2.5 py-1 bg-navy-900/[0.06] font-mono text-[9px] tracking-[0.16em] uppercase text-navy-600 inline-flex items-center gap-1">
                        <Diamond size="xs" className="text-cta/60" />
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[9px] tracking-[0.12em] uppercase text-navy-700/50">
                        <Clock className="h-3 w-3" /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-[17px] leading-[1.35] text-navy-900 group-hover:text-cta transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-space text-[13px] leading-[1.6] text-navy-700/65 mt-2 flex-1">
                      {article.excerpt}
                    </p>
                    <Link
                      to={article.treatmentLink}
                      className="mt-4 inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-cta"
                    >
                      Read more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-950 py-16 noise-overlay">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="font-sans font-bold text-2xl text-cream-200">Ready to take the next step?</h2>
            <p className="font-space mt-3 text-[15px] text-cream-200/60">
              Free online assessment. No commitment. Your dedicated provider reviews your health profile and orders labs.
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

export default Resources;
