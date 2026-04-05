import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";

const navLinks = [
  { label: "Testosterone", href: "/treatments" },
  { label: "Sexual Health", href: "/treatments" },
  { label: "Weight Loss", href: "/treatments" },
  { label: "How It Works", href: "/about" },
  { label: "Treatments", href: "/treatments" },
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
        className={`fixed inset-x-0 top-0 z-[310] transition-all duration-300 bg-navy-800/60 backdrop-blur-xl border-b border-white/[0.08] ${
          scrolled
            ? "shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : ""
        }`}
      >
        <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 lg:px-10 h-[64px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-[#E8670A] text-[22px] leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>✦</span>
            <span
              className="text-[19px] uppercase leading-none tracking-[0.12em] text-[#FAFAF7]"
              style={{ fontFamily: "'Bebas Neue', 'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Longentis
            </span>
          </Link>

          {/* Desktop nav — flat links like ro.co */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-4 py-2 text-[14px] font-medium font-sans transition-colors duration-200 rounded-md hover:bg-white/[0.06] ${
                  location.pathname === link.href
                    ? "text-[#FAFAF7]"
                    : "text-[#FAFAF7]/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              to="/get-started"
              className="hidden md:inline-flex items-center rounded-full bg-[#E8670A] px-5 py-2 text-[13px] font-semibold text-white font-sans hover:bg-[#D05A00] transition-colors duration-200 active:scale-[0.98]"
            >
              Get Started
            </Link>
            <button
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-[#FAFAF7]/60 hover:text-[#FAFAF7] hover:border-white/20 transition-colors"
              aria-label="Account"
            >
              <User className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-[#FAFAF7]/80"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-[#06081a] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-[64px]">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-[#E8670A] text-[22px] leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>✦</span>
                <span className="text-[19px] uppercase leading-none tracking-[0.12em] text-[#FAFAF7]" style={{ fontFamily: "'Bebas Neue', 'Inter Tight', sans-serif", fontWeight: 400 }}>Longentis</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-[#FAFAF7]/80" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col px-6 pt-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="block py-3 font-sans text-[18px] font-medium text-[#FAFAF7]/70 hover:text-[#FAFAF7] border-b border-white/[0.06] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <Link
                  to="/get-started"
                  className="mt-6 inline-flex items-center justify-center w-full rounded-full bg-[#E8670A] px-6 py-3 font-sans text-[15px] font-semibold text-white hover:bg-[#D05A00] transition-colors"
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
