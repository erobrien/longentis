import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Coverage", href: "/coverage" },
  { label: "For Providers", href: "/for-providers" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[310] flex w-full flex-col items-center px-6 lg:px-12 max-md:pt-3 max-md:pb-3 md:pt-8 md:pb-4"
      >
        <div className="mx-auto w-full max-w-[1600px] justify-center max-md:px-0 px-4 sm:px-5 lg:px-8 flex flex-col items-center">
          <div
            className={`max-w-[1240px] relative flex w-full items-center justify-between rounded-[14px] border px-4 py-2 lg:px-5 transition-all duration-500 ${
              scrolled
                ? "border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.55)] backdrop-blur-[28px] backdrop-saturate-[1.4] shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
                : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] backdrop-blur-[4px] shadow-none"
            }`}
          >
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              {/* Star mark */}
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none" className="shrink-0">
                <path d="M24 0c0 6.6-2.7 12.6-7 17-4.4 4.3-10.4 7-17 7v-8c8.8 0 16-7.2 16-16h8z" fill="#E8670A"/>
                <path d="M48 0h-8c0 8.8-7.2 16-16 16v8c6.6 0 12.6-2.7 17-7 4.3-4.4 7-10.4 7-17z" fill="#E8670A"/>
                <path d="M24 48c0-6.6 2.7-12.6 7-17 4.4-4.3 10.4-7 17-7v8c-8.8 0-16 7.2-16 16h-8z" fill="#E8670A"/>
                <path d="M0 48h8c0-8.8 7.2-16 16-16v-8c-6.6 0-12.6 2.7-17 7-4.3 4.4-7 10.4-7 17z" fill="#E8670A"/>
              </svg>
              {/* Wordmark */}
              <span className={`font-logo text-[22px] font-normal uppercase tracking-[0.1em] leading-none transition-colors duration-500 ${scrolled ? "text-[#0B1029]" : "text-[#FAFAF7]"}`}>
                Longentis
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative text-[13.5px] font-semibold font-sans transition-colors duration-500 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#E8670A] after:transition-[width] after:duration-200 after:w-0 hover:after:w-full ${
                    location.pathname === link.href ? "after:w-full" : ""
                  } ${scrolled ? "text-[#1B2B4B]" : "text-[#FAFAF7]"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/get-started"
                className="hidden md:inline-flex items-center rounded-xl border border-white/[0.11] bg-[#1B2B4B] px-[18px] py-[10px] text-[11px] font-bold uppercase tracking-[0.09em] text-[#FAFAF7] shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_-1px_0_rgba(0,0,0,0.22),0_0_0_1px_rgba(27,43,75,0.55),0_4px_14px_rgba(27,43,75,0.38)] hover:bg-[#162340] transition-all duration-200 active:scale-[0.98] font-sans"
              >
                Get Started
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className={`md:hidden transition-colors duration-500 ${scrolled ? "text-[#0B1029]" : "text-[#FAFAF7]"}`}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-[#06081a] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Link to="/" className="flex items-center gap-2.5">
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <path d="M24 0c0 6.6-2.7 12.6-7 17-4.4 4.3-10.4 7-17 7v-8c8.8 0 16-7.2 16-16h8z" fill="#E8670A"/>
                  <path d="M48 0h-8c0 8.8-7.2 16-16 16v8c6.6 0 12.6-2.7 17-7 4.3-4.4 7-10.4 7-17z" fill="#E8670A"/>
                  <path d="M24 48c0-6.6 2.7-12.6 7-17 4.4-4.3 10.4-7 17-7v8c-8.8 0-16 7.2-16 16h-8z" fill="#E8670A"/>
                  <path d="M0 48h8c0-8.8 7.2-16 16-16v-8c-6.6 0-12.6 2.7-17 7-4.3 4.4-7 10.4-7 17z" fill="#E8670A"/>
                </svg>
                <span className="font-logo text-[22px] font-normal uppercase tracking-[0.1em] leading-none text-[#E8E2D9]">Longentis</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-[#E8E2D9]" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="font-sans text-2xl font-semibold text-[#E8E2D9] hover:text-[#E8670A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Link
                  to="/get-started"
                  className="mt-4 rounded-xl bg-[#1B2B4B] px-8 py-3 font-sans text-lg font-semibold text-[#FAFAF7]"
                >
                  Get Started
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
