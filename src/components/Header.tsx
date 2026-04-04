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

  const isDarkPage = location.pathname === "/" || location.pathname === "/about";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : isDarkPage
              ? "bg-transparent"
              : "bg-background/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex flex-col">
            <span className={`font-heading text-xl font-bold ${scrolled || !isDarkPage ? "text-navy-900" : "text-cream-200"}`}>
              Longentis
            </span>
            <span className={`font-mono-label text-[10px] uppercase tracking-[0.12em] ${scrolled || !isDarkPage ? "text-muted-foreground" : "text-cream-200/60"}`}>
              by Men's Wellness Centers
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-heading text-[13.5px] font-semibold transition-colors hover:opacity-70 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full ${
                  scrolled || !isDarkPage ? "text-navy-700" : "text-cream-200"
                } ${location.pathname === link.href ? "after:w-full" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/get-started"
              className="hidden rounded-xl bg-cta px-5 py-2.5 font-heading text-sm font-semibold text-cta-foreground transition-all hover:shadow-lg hover:brightness-110 active:scale-[0.98] md:inline-block"
            >
              Get Started
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden ${scrolled || !isDarkPage ? "text-navy-900" : "text-cream-200"}`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-950 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Link to="/" className="flex flex-col">
                <span className="font-heading text-xl font-bold text-cream-200">Longentis</span>
                <span className="font-mono-label text-[10px] uppercase tracking-[0.12em] text-cream-200/60">
                  by Men's Wellness Centers
                </span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-cream-200" aria-label="Close menu">
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
                    className="font-heading text-2xl font-semibold text-cream-200 hover:text-cta transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Link
                  to="/get-started"
                  className="mt-4 rounded-xl bg-cta px-8 py-3 font-heading text-lg font-semibold text-cta-foreground"
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
