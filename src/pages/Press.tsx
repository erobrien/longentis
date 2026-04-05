import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Diamond from "@/components/Diamond";

type Category = "All" | "News" | "Partnerships" | "Press";

const articles = [
  { cat: "News" as const, title: "Longentis Launches Nationwide Men's Health Telehealth Platform", source: "Business Wire", year: "2026", featured: true },
  { cat: "News" as const, title: "The Rise of Telehealth in Men's Health", source: "Healthcare Business Today", year: "2026" },
  { cat: "Press" as const, title: "How One Virginia Practice Is Going National", source: "Authority Magazine", year: "2026" },
  { cat: "Partnerships" as const, title: "Men's Health Gets Personal: Inside the Longentis Model", source: "MSN", year: "2026" },
  { cat: "News" as const, title: "From 3 Clinics to 50 States", source: "Richmond Times", year: "2026" },
  { cat: "Press" as const, title: "The Future of TRT Is Telehealth", source: "Men's Health Today", year: "2026" },
];

const filters: Category[] = ["All", "News", "Partnerships", "Press"];

const Press = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.cat === active);
  const featured = articles.find((a) => a.featured);

  return (
    <>
      <Header />
      <main>
        <section className="bg-cream-50 pt-36 pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="font-sans text-[12px] font-medium tracking-wide uppercase text-navy-600 inline-flex items-center gap-1.5">
              <Diamond size="xs" /> Longentis / Press
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="font-lora mt-4 text-[clamp(32px,4vw,64px)] leading-[1.1] tracking-[-0.02em] text-navy-900"
            >
              Media & Press
            </motion.h1>
          </div>
        </section>

        {featured && (
          <section className="bg-cream-50 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <ScrollReveal>
                <div className="rounded-2xl border border-navy-900/[0.06] bg-white overflow-hidden grid lg:grid-cols-2">
                  <div className="h-64 bg-navy-700 lg:h-auto" />
                  <div className="p-8 lg:p-12">
                    <span className="inline-flex items-center gap-2 text-xs">
                      <Diamond size="xs" />
                      <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-cta">Featured</span>
                    </span>
                    <p className="font-sans mt-4 text-[12px] font-medium tracking-wide uppercase text-navy-600">{featured.year}</p>
                    <h2 className="font-sans mt-2 text-2xl font-bold text-navy-900 md:text-3xl">{featured.title}</h2>
                    <p className="font-space mt-4 text-[15px] leading-[1.7] text-navy-600">
                      Men's Wellness Centers announces the launch of Longentis, its national telehealth platform bringing clinic-grade men's health to all 50 states.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 font-sans text-sm font-semibold text-cta cursor-pointer hover:underline">
                      Read Full Story <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        <section className="bg-cream-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 mb-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-md px-4 py-2 font-sans text-[12px] font-medium tracking-wide uppercase transition-all ${
                    active === f
                      ? "bg-navy-950 text-cream-100"
                      : "bg-white/70 text-navy-700 border border-navy-900/[0.08] hover:border-navy-900/[0.15]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl border border-navy-900/[0.06] bg-white overflow-hidden group"
                  >
                    <div className="h-44 bg-navy-700" />
                    <div className="p-5">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-[11px] font-semibold tracking-wide uppercase text-cta">{a.cat}</span>
                        <span className="font-sans text-[11px] text-navy-400">· {a.year}</span>
                      </div>
                      <h3 className="font-sans mt-2 text-[15px] font-semibold text-navy-900 group-hover:text-cta transition-colors leading-[1.4]">{a.title}</h3>
                      <p className="font-space mt-1 text-[13px] text-navy-600">{a.source}</p>
                      <span className="mt-3 inline-flex items-center gap-1 font-sans text-[12px] font-medium text-navy-600 hover:text-cta transition-colors">
                        Read article <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Press;
