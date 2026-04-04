import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => (
  <footer className="bg-navy-950 noise-overlay text-cream-200">
    {/* Pre-footer CTA */}
    <section className="relative border-b border-white/[0.08] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <ScrollReveal>
          <p className="font-mono-label text-xs font-medium uppercase tracking-[0.15em] text-cta mb-4">
            Ready?
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl max-w-2xl">
            Ready to see what telehealth looks like for you?
          </h2>
          <p className="font-body mt-4 max-w-xl text-lg leading-relaxed text-cream-200/70">
            One conversation. No pressure. See how Longentis brings clinic-grade men's health to your door.
          </p>
          <Link
            to="/get-started"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3 font-heading text-sm font-semibold text-cta-foreground transition-all hover:shadow-lg hover:brightness-110 active:scale-[0.98]"
          >
            Start your free visit <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
      {/* Decorative star */}
      <svg className="absolute right-10 top-1/2 -translate-y-1/2 h-64 w-64 opacity-[0.06]" viewBox="0 0 100 100">
        <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" fill="currentColor"/>
      </svg>
    </section>

    {/* Stats bar */}
    <div className="border-b border-white/[0.08] py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 text-center md:justify-between">
        {["10,000+ patients treated", "Since 2015", "LegitScript Certified", "All 50 states"].map((s) => (
          <span key={s} className="font-mono-label text-[11px] font-medium uppercase tracking-[0.15em] text-cream-200/60">
            {s}
          </span>
        ))}
      </div>
    </div>

    {/* 4-column links */}
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold text-cream-200">Longentis</p>
          <p className="font-mono-label mt-1 text-[10px] uppercase tracking-[0.12em] text-cream-200/50">by Men's Wellness Centers</p>
          <p className="font-body mt-4 text-sm leading-relaxed text-cream-200/60">Clinic-grade men's health, delivered.</p>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-cream-200/40 mb-4">Treatments</p>
          {[["TRT", "/treatments"], ["ED Treatment", "/treatments"], ["Weight Loss", "/treatments"], ["How It Works", "/treatments"]].map(([label, href]) => (
            <Link key={label} to={href} className="font-body block py-1.5 text-sm text-cream-200/70 hover:text-cta transition-colors">{label}</Link>
          ))}
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-cream-200/40 mb-4">Company</p>
          {[["About", "/about"], ["Coverage", "/coverage"], ["For Providers", "/for-providers"], ["Careers", "/careers"], ["Press", "/press"]].map(([label, href]) => (
            <Link key={label} to={href} className="font-body block py-1.5 text-sm text-cream-200/70 hover:text-cta transition-colors">{label}</Link>
          ))}
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-cream-200/40 mb-4">Contact</p>
          <a href="tel:8663444955" className="font-body flex items-center gap-2 py-1.5 text-sm text-cream-200/70 hover:text-cta transition-colors">
            <Phone className="h-3.5 w-3.5" /> (866) 344-4955
          </a>
          <p className="font-body flex items-center gap-2 py-1.5 text-sm text-cream-200/70">
            <MapPin className="h-3.5 w-3.5" /> Richmond, VA
          </p>
          <a href="mailto:info@longentis.com" className="font-body flex items-center gap-2 py-1.5 text-sm text-cream-200/70 hover:text-cta transition-colors">
            <Mail className="h-3.5 w-3.5" /> info@longentis.com
          </a>
          <Link
            to="/get-started"
            className="mt-4 inline-block rounded-lg bg-cta px-4 py-2 font-heading text-xs font-semibold text-cta-foreground hover:brightness-110 transition-all"
          >
            Start Free Visit
          </Link>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-white/[0.08] py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-cream-200/40">
        <p className="font-body">© 2026 Longentis, a Men's Wellness Centers brand. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream-200 transition-colors">Privacy</a>
          <a href="#" className="hover:text-cream-200 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
