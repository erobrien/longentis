import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => (
  <footer className="text-[#E8E2D9]">
    {/* Pre-footer CTA */}
    <section
      className="relative overflow-hidden"
      style={{ background: "#0B1029" }}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-24">
        <ScrollReveal>
          <div
            className="rounded-2xl px-8 py-16 sm:px-12 sm:py-20 flex flex-col items-center text-center overflow-hidden relative"
            style={{
              background: "rgba(27,43,75,0.07)",
              border: "1px solid rgba(27,43,75,0.18)",
            }}
          >
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="font-sans font-extrabold text-[clamp(28px,3.5vw,48px)] leading-[1.1] tracking-[-0.03em] text-[#E8E2D9]">
                Ready to see what telehealth<br />looks like for you?
              </h2>
              <p className="font-space font-light text-[14px] leading-[1.7] text-[#E8E2D9]/45 mt-4 max-w-lg">
                One conversation. No pressure. See how Longentis brings clinic-grade men's health to your door.
              </p>
              <Link
                to="/get-started"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1B2B4B] px-6 py-3 font-sans text-[11.5px] font-bold uppercase tracking-[0.09em] text-[#FAFAF7] border border-white/[0.11] shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_-1px_0_rgba(0,0,0,0.22),0_0_0_1px_rgba(27,43,75,0.55),0_4px_14px_rgba(27,43,75,0.38)] hover:bg-[#162340] transition-all active:scale-[0.98]"
              >
                Start your free visit
                <span className="flex items-center justify-center w-[26px] h-[26px] rounded-[5px] bg-[rgba(232,103,10,0.16)]">
                  <ArrowRight className="h-3.5 w-3.5 text-[#E8670A]" />
                </span>
              </Link>
              <div className="mt-10 flex flex-wrap justify-center gap-8">
                {["10,000+ Patients", "Since 2015", "LegitScript Certified", "All 50 States"].map((s) => (
                  <span key={s} className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#E8E2D9]/30">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Footer */}
    <div
      className="bg-[#06081a] noise-overlay"
    >
      <div
        className="mx-auto max-w-[1600px] px-6 lg:px-12 pt-16 pb-8 relative z-10"
        style={{
          backgroundImage: "none",
          backgroundSize: "100% 1px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <p className="font-sans text-lg font-bold text-[#E8E2D9]">Longentis</p>
            <p className="font-mono mt-1 text-[9px] uppercase tracking-[0.14em] text-[#E8E2D9]/40">by Men's Wellness Centers</p>
            <p className="font-space mt-4 text-sm leading-relaxed text-[#E8E2D9]/35 font-light">Clinic-grade men's health, delivered.</p>
          </div>
          <div>
            <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#243656]/60 mb-4">Treatments</p>
            {[["TRT", "/treatments"], ["ED Treatment", "/treatments"], ["Weight Loss", "/treatments"], ["How It Works", "/treatments"]].map(([label, href]) => (
              <Link key={label} to={href} className="font-sans block py-1.5 text-sm font-medium text-[#E8E2D9]/35 hover:text-[#E8E2D9]/70 transition-colors duration-200">{label}</Link>
            ))}
          </div>
          <div>
            <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#243656]/60 mb-4">Company</p>
            {[["About", "/about"], ["Coverage", "/coverage"], ["For Providers", "/for-providers"], ["Careers", "/careers"], ["Press", "/press"]].map(([label, href]) => (
              <Link key={label} to={href} className="font-sans block py-1.5 text-sm font-medium text-[#E8E2D9]/35 hover:text-[#E8E2D9]/70 transition-colors duration-200">{label}</Link>
            ))}
          </div>
          <div>
            <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#243656]/60 mb-4">Contact</p>
            <a href="tel:8663444955" className="font-sans flex items-center gap-2 py-1.5 text-sm font-medium text-[#E8E2D9]/35 hover:text-[#E8E2D9]/70 transition-colors duration-200">
              <Phone className="h-3.5 w-3.5" /> (866) 344-4955
            </a>
            <p className="font-sans flex items-center gap-2 py-1.5 text-sm font-medium text-[#E8E2D9]/35">
              <MapPin className="h-3.5 w-3.5" /> Richmond, VA
            </p>
            <a href="mailto:info@longentis.com" className="font-sans flex items-center gap-2 py-1.5 text-sm font-medium text-[#E8E2D9]/35 hover:text-[#E8E2D9]/70 transition-colors duration-200">
              <Mail className="h-3.5 w-3.5" /> info@longentis.com
            </a>
            <Link
              to="/get-started"
              className="mt-4 inline-flex items-center rounded-lg bg-[#1B2B4B] px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.09em] text-[#FAFAF7] hover:bg-[#162340] transition-all"
            >
              Start Free Visit
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-4" style={{
          backgroundImage: "repeating-linear-gradient(to right, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 4px, transparent 4px, transparent 10px)",
          backgroundSize: "100% 1px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}>
          <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#E8E2D9]/20">© 2026 Longentis, a Men's Wellness Centers brand. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#E8E2D9]/20 hover:text-[#E8E2D9]/50 transition-colors">Privacy</a>
            <a href="#" className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#E8E2D9]/20 hover:text-[#E8E2D9]/50 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
