import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";

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
        {/* Hero */}
        <section className="bg-background pt-32 pb-12">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-body text-sm text-muted-foreground">Longentis / Press</p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="font-heading mt-2 text-4xl font-bold text-foreground md:text-5xl"
            >
              Media & Press
            </motion.h1>
          </div>
        </section>

        {/* Featured */}
        {featured && (
          <section className="bg-background pb-16">
            <div className="mx-auto max-w-7xl px-6">
              <ScrollReveal>
                <div className="rounded-lg border border-border bg-cream-100 overflow-hidden grid lg:grid-cols-2">
                  <div className="h-64 bg-navy-800 lg:h-auto" />
                  <div className="p-8 lg:p-12">
                    <span className="inline-flex items-center gap-2 text-xs">
                      <span className="h-2 w-2 rounded-full bg-cta" />
                      <span className="font-mono-label font-medium uppercase tracking-[0.12em] text-cta">Featured</span>
                    </span>
                    <p className="font-mono-label mt-4 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">{featured.year}</p>
                    <h2 className="font-heading mt-2 text-2xl font-bold text-foreground md:text-3xl">{featured.title}</h2>
                    <p className="font-body mt-4 text-base text-muted-foreground">
                      Men's Wellness Centers announces the launch of Longentis, its national telehealth platform bringing clinic-grade men's health to all 50 states.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-semibold text-cta cursor-pointer hover:underline">
                      Read Full Story <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Filter + Grid */}
        <section className="bg-cream-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap gap-3 mb-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-5 py-2 font-heading text-sm font-semibold transition-all ${
                    active === f
                      ? "bg-navy-900 text-cream-200"
                      : "bg-background text-foreground border border-border hover:border-navy-700"
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
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-lg border border-border bg-background overflow-hidden group"
                  >
                    <div className="h-44 bg-navy-800" />
                    <div className="p-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-label text-[10px] font-medium uppercase tracking-[0.15em] text-cta">{a.cat}</span>
                        <span className="font-mono-label text-[10px] text-muted-foreground">· {a.year}</span>
                      </div>
                      <h3 className="font-heading mt-2 text-base font-semibold text-foreground group-hover:text-cta transition-colors">{a.title}</h3>
                      <p className="font-body mt-1 text-xs text-muted-foreground">{a.source}</p>
                      <span className="mt-3 inline-flex items-center gap-1 font-heading text-sm font-semibold text-cta">
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
