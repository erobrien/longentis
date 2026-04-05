import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileBottomBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-md px-4 py-3 md:hidden border-t border-white/[0.08]"
        >
          <Link
            to="/get-started"
            className="block w-full rounded-xl bg-cta py-3 text-center font-sans text-sm font-semibold text-cta-foreground"
          >
            Start Free Visit
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileBottomBar;
