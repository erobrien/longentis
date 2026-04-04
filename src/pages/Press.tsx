import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <section className="bg-[#FAFAF7] pt-36 pb-12">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <p className="font-mono-label text-[10px] tracking-[0.22em] uppercase text-[#243656]">Longentis / Press</p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="font-display mt-4 text-[clamp(32px,4vw,64px)] leading-[1.1] tracking-[-0.02em] text-[#0B1029]"
            >
              Media & Press
            </motion.h1>
          </div>
        </section>

        {featured && (
          <section className="bg-[#FAFAF7] pb-16">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
              <ScrollReveal>
                <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden grid lg:grid-cols-2 shadow-sm">
                  <div className="h-64 bg-[#1B2B4B] lg:h-auto" />
                  <div className="p-8 lg:p-12">
                    <span className="inline-flex items-center gap-2 text-xs">
                      <span className="h-2 w-2 rounded-full bg-[#E8670A]" />
                      <span className="font-mono-label text-[10px] tracking-[0.14em] uppercase text-[#E8670A]">Featured</span>
                    </span>
                    <p className="font-mono-label mt-4 text-[10px] tracking-[0.22em] uppercase text-[#243656]">{featured.year}</p>
                    <h2 className="font-heading mt-2 text-2xl font-bold text-[#0B1029] md:text-3xl">{featured.title}</h2>
                    <p className="font-body mt-4 text-[15px] leading-[1.7] text-[#555] font-light">
                      Men's Wellness Centers announces the launch of Longentis, its national telehealth platform bringing clinic-grade men's health to all 50 states.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-semibold text-[#E8670A] cursor-pointer hover:underline">
                      Read Full Story <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        <section className="bg-[#FAFAF7] py-24">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="flex flex-wrap gap-2 mb-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-md px-4 py-2 font-mono-label text-[10px] tracking-[0.1em] uppercase transition-all ${
                    active === f
                      ? "bg-[#0B1029] text-[#FAFAF7]"
                      : "bg-white/70 text-[#243656] border border-[rgba(27,43,75,0.15)] hover:border-[rgba(27,43,75,0.30)]"
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
                    className="rounded-2xl border border-gray-100 bg-white overflow-hidden group shadow-sm"
                  >
                    <div className="h-44 bg-[#1B2B4B]" />
                    <div className="p-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-label text-[8px] tracking-[0.16em] uppercase text-[#E8670A]">{a.cat}</span>
                        <span className="font-mono-label text-[8px] tracking-[0.16em] uppercase text-[#C5CDE0]/50">· {a.year}</span>
                      </div>
                      <h3 className="font-heading mt-2 text-[15px] font-semibold text-[#0B1029] group-hover:text-[#E8670A] transition-colors leading-[1.4]">{a.title}</h3>
                      <p className="font-body mt-1 text-[11px] text-[#555] font-light">{a.source}</p>
                      <span className="mt-3 inline-flex items-center gap-1 font-mono-label text-[8px] tracking-[0.16em] uppercase text-[#243656]">
                        Read article <ArrowRight className="h-2.5 w-2.5" />
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
