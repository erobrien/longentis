import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => (
  <footer className="text-cream-200">
    {/* Pre-footer CTA — Section 8 */}
    <section className="relative overflow-hidden bg-navy-950 noise-overlay">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <ScrollReveal>
          <div className="rounded-2xl px-8 py-16 sm:px-12 sm:py-20 flex flex-col items-center text-center bg-white/[0.03] border border-white/[0.08]">
            <h2 className="font-sans font-bold text-[clamp(28px,3.5vw,48px)] leading-[1.1] tracking-[-0.03em] text-cream-100">
              Your health shouldn't wait.
            </h2>
            <p className="font-space text-[14px] leading-[1.7] text-cream-200/40 mt-4 max-w-lg">
              One conversation. No pressure. See how Longentis brings clinic-grade men's health to your door.
            </p>
            <Link
              to="/get-started"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-cta px-8 py-4 font-sans text-[15px] font-semibold text-white hover:bg-cta/90 transition-colors active:scale-[0.98]"
            >
              Start Your Free Visit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {["10,000+ Patients", "Since 2015", "LegitScript Certified", "All 50 States"].map((s) => (
                <span key={s} className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream-200/25">{s}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Footer links */}
    <div className="bg-navy-950 noise-overlay relative">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-cta text-[22px] leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>✦</span>
              <span className="text-[18px] uppercase leading-none tracking-[0.12em] text-cream-200/70" style={{ fontFamily: "'Bebas Neue', 'Inter Tight', sans-serif", fontWeight: 400 }}>Longentis</span>
            </div>
            <p className="font-space mt-4 text-sm leading-relaxed text-cream-200/30">Clinic-grade men's health, delivered.</p>
          </div>
          <div>
            <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-cream-200/20 mb-4">Treatments</p>
            {[
              ["TRT", "/treatments/trt"],
              ["ED Treatment", "/treatments/ed"],
              ["Weight Loss", "/treatments/weight-loss"],
              ["All Treatments", "/treatments"],
            ].map(([label, href]) => (
              <Link key={label} to={href} className="font-sans block py-1.5 text-sm font-medium text-cream-200/30 hover:text-cream-200/60 transition-colors duration-200">{label}</Link>
            ))}
          </div>
          <div>
            <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-cream-200/20 mb-4">Company</p>
            {[
              ["About", "/about"],
              ["Pricing", "/pricing"],
              ["FAQ", "/faq"],
              ["Resources", "/resources"],
              ["Coverage", "/coverage"],
              ["Careers", "/careers"],
            ].map(([label, href]) => (
              <Link key={label} to={href} className="font-sans block py-1.5 text-sm font-medium text-cream-200/30 hover:text-cream-200/60 transition-colors duration-200">{label}</Link>
            ))}
          </div>
          <div>
            <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-cream-200/20 mb-4">Contact</p>
            <a href="tel:8663444955" className="font-sans flex items-center gap-2 py-1.5 text-sm font-medium text-cream-200/30 hover:text-cream-200/60 transition-colors duration-200">
              <Phone className="h-3.5 w-3.5" /> (866) 344-4955
            </a>
            <p className="font-sans flex items-center gap-2 py-1.5 text-sm font-medium text-cream-200/30">
              <MapPin className="h-3.5 w-3.5" /> Richmond, VA
            </p>
            <a href="mailto:info@longentis.com" className="font-sans flex items-center gap-2 py-1.5 text-sm font-medium text-cream-200/30 hover:text-cream-200/60 transition-colors duration-200">
              <Mail className="h-3.5 w-3.5" /> info@longentis.com
            </a>
            <Link
              to="/get-started"
              className="mt-4 inline-flex items-center rounded-full bg-cta px-5 py-2.5 font-sans text-[13px] font-semibold text-white hover:bg-cta/90 transition-colors"
            >
              Start Free Visit
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06]">
          <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-cream-200/15">© 2026 Longentis, a Men's Wellness Centers brand. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-[9px] tracking-[0.12em] uppercase text-cream-200/15 hover:text-cream-200/40 transition-colors">Privacy</a>
            <a href="#" className="font-mono text-[9px] tracking-[0.12em] uppercase text-cream-200/15 hover:text-cream-200/40 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
