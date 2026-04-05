import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const concerns = ["Low Testosterone", "Erectile Dysfunction", "Weight Loss", "Multiple Concerns", "Not Sure"];

const GetStarted = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", state: "", concern: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main className="min-h-screen grid lg:grid-cols-[2fr_3fr]">
        {/* Left — Dark info panel */}
        <div className="relative bg-[#06081a] noise-overlay px-8 py-32 lg:px-12 lg:py-40 flex flex-col justify-center">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="font-lora text-[clamp(28px,3vw,48px)] leading-[1.1] tracking-[-0.02em] text-[#E8E2D9]"
            >
              Let's find out what's going on.
            </motion.h1>

            <div className="mt-12">
              <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 mb-6" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C5CDE0]/70">What to expect</span>
              </div>
              {[
                "Free consultation — zero obligation",
                "Lab kit shipped to your door",
                "Your dedicated provider, every visit",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 mb-4">
                  <span className="font-mono text-[10px] bg-white/10 px-2 py-1 rounded text-[#C5CDE0]/80 border border-white/10">{`0${i + 1}`}</span>
                  <p className="font-space text-[15px] text-[#E8E2D9]/70 font-light">{step}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div
              className="mt-12 rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#E8670A] text-[#E8670A]" />)}
              </div>
              <p className="font-lora text-[15px] italic text-[#E8E2D9]/80 leading-[1.55]">"They answered all my questions, even the stupid ones."</p>
              <p className="font-sans mt-3 text-sm font-semibold text-[#E8E2D9]">Adam C. <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-white/35">— Google Review</span></p>
            </div>

            <a href="tel:8663444955" className="mt-8 inline-flex items-center gap-2 text-[#E8E2D9]/50 hover:text-[#E8E2D9] transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-space text-sm font-light">(866) 344-4955</span>
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="bg-[#FAFAF7] px-8 py-20 lg:px-16 lg:py-40 flex items-center">
          <div className="w-full max-w-lg mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-lora text-[clamp(24px,3vw,40px)] leading-[1.15] tracking-[-0.02em] text-[#0B1029]"
            >
              Start your free visit
            </motion.h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {[
                { name: "name" as const, label: "Full Name", type: "text" },
                { name: "email" as const, label: "Email", type: "email" },
                { name: "phone" as const, label: "Phone", type: "tel" },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label className="font-sans text-[13px] font-semibold text-[#0B1029]">{label} *</label>
                  <input
                    type={type}
                    required
                    value={formData[name]}
                    onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-space text-sm text-[#0B1029] font-light outline-none focus:border-[#1B2B4B] focus:ring-1 focus:ring-[#1B2B4B] transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="font-sans text-[13px] font-semibold text-[#0B1029]">State *</label>
                <select
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-space text-sm text-[#0B1029] font-light outline-none focus:border-[#1B2B4B] focus:ring-1 focus:ring-[#1B2B4B] transition-colors"
                >
                  <option value="">Select your state</option>
                  {states.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="font-sans text-[13px] font-semibold text-[#0B1029]">What brings you in? *</label>
                <select
                  required
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-space text-sm text-[#0B1029] font-light outline-none focus:border-[#1B2B4B] focus:ring-1 focus:ring-[#1B2B4B] transition-colors"
                >
                  <option value="">Select a concern</option>
                  {concerns.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="font-sans text-[13px] font-semibold text-[#0B1029]">Message <span className="text-[#555]">(optional)</span></label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-space text-sm text-[#0B1029] font-light outline-none focus:border-[#1B2B4B] focus:ring-1 focus:ring-[#1B2B4B] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#1B2B4B] py-4 font-sans text-[11.5px] font-bold uppercase tracking-[0.09em] text-[#FAFAF7] transition-all hover:bg-[#162340] active:scale-[0.98] border border-white/[0.11] shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_-1px_0_rgba(0,0,0,0.22),0_0_0_1px_rgba(27,43,75,0.55),0_4px_14px_rgba(27,43,75,0.38)]"
              >
                Book My Free Visit
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GetStarted;
