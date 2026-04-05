import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield } from "lucide-react";

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_KEY = "longentis_cookie_consent";

const getStoredConsent = (): CookiePreferences | null => {
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

/**
 * Cookie consent banner with granular controls.
 * Essential cookies are always enabled.
 * Analytics and marketing are opt-in.
 */
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({ analytics: false, marketing: false });

  useEffect(() => {
    const consent = getStoredConsent();
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = useCallback((preferences: CookiePreferences) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(preferences));
    setVisible(false);

    // Dispatch event for tracking scripts to listen to
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: preferences }));
  }, []);

  const acceptAll = () => saveConsent({ analytics: true, marketing: true });
  const acceptSelected = () => saveConsent(prefs);
  const rejectAll = () => saveConsent({ analytics: false, marketing: false });

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[500] p-4 md:p-6"
      >
        <div className="mx-auto max-w-2xl rounded-2xl bg-navy-950 border border-white/[0.08] p-6 shadow-[0_-4px_40px_rgba(0,0,0,0.3)]">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-cta" />
              <h3 className="font-sans font-semibold text-[15px] text-cream-100">Your Privacy</h3>
            </div>
            <button onClick={rejectAll} className="text-cream-200/30 hover:text-cream-200/60 transition-colors" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="font-space text-[13px] text-cream-200/45 leading-relaxed mb-4">
            We use essential cookies for site functionality. Analytics and marketing cookies are optional and help us improve your experience.
          </p>

          {showDetails && (
            <div className="mb-4 space-y-3">
              <label className="flex items-center gap-3 cursor-not-allowed">
                <input type="checkbox" checked disabled className="rounded" />
                <div>
                  <span className="font-sans text-[13px] font-medium text-cream-100">Essential</span>
                  <span className="font-space text-[11px] text-cream-200/30 ml-2">Always active</span>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                  className="rounded"
                />
                <div>
                  <span className="font-sans text-[13px] font-medium text-cream-100">Analytics</span>
                  <span className="font-space text-[11px] text-cream-200/30 ml-2">Google Analytics</span>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                  className="rounded"
                />
                <div>
                  <span className="font-sans text-[13px] font-medium text-cream-100">Marketing</span>
                  <span className="font-space text-[11px] text-cream-200/30 ml-2">Meta Pixel, Google Ads</span>
                </div>
              </label>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={acceptAll}
              className="rounded-full bg-cta px-5 py-2.5 font-sans text-[13px] font-semibold text-white hover:bg-cta/90 transition-colors"
            >
              Accept All
            </button>
            {showDetails ? (
              <button
                onClick={acceptSelected}
                className="rounded-full bg-white/[0.08] border border-white/[0.1] px-5 py-2.5 font-sans text-[13px] font-semibold text-cream-100 hover:bg-white/[0.12] transition-colors"
              >
                Save Preferences
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="rounded-full bg-white/[0.08] border border-white/[0.1] px-5 py-2.5 font-sans text-[13px] font-semibold text-cream-100 hover:bg-white/[0.12] transition-colors"
              >
                Customize
              </button>
            )}
            <button
              onClick={rejectAll}
              className="font-sans text-[13px] text-cream-200/35 hover:text-cream-200/60 transition-colors"
            >
              Reject All
            </button>
          </div>

          <div className="mt-4 flex gap-4">
            <a href="#" className="font-mono text-[9px] tracking-[0.12em] uppercase text-cream-200/20 hover:text-cream-200/40 transition-colors">Privacy Policy</a>
            <a href="#" className="font-mono text-[9px] tracking-[0.12em] uppercase text-cream-200/20 hover:text-cream-200/40 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
