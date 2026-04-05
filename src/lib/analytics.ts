/**
 * Analytics & Conversion Tracking Utility
 * 
 * Tracks: CTA clicks, scroll depth, form starts/completions.
 * Integrates with GA4, Meta Pixel, and Google Ads when consent is granted.
 * 
 * All tracking respects cookie consent — only fires after user opt-in.
 */

type TrackingEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Check if analytics consent has been granted
const hasAnalyticsConsent = (): boolean => {
  try {
    const consent = localStorage.getItem("longentis_cookie_consent");
    if (!consent) return false;
    return JSON.parse(consent).analytics === true;
  } catch {
    return false;
  }
};

const hasMarketingConsent = (): boolean => {
  try {
    const consent = localStorage.getItem("longentis_cookie_consent");
    if (!consent) return false;
    return JSON.parse(consent).marketing === true;
  } catch {
    return false;
  }
};

// GA4 event helper
const trackGA4 = (event: TrackingEvent) => {
  if (!hasAnalyticsConsent()) return;
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
};

// Meta Pixel event helper
const trackMeta = (event: string, params?: Record<string, any>) => {
  if (!hasMarketingConsent()) return;
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", event, params);
  }
};

// ─── Public API ─── //

/** Track CTA button clicks */
export const trackCTAClick = (ctaLabel: string, page: string) => {
  trackGA4({ action: "cta_click", category: "conversion", label: `${ctaLabel} | ${page}` });
  trackMeta("Lead", { content_name: ctaLabel });
};

/** Track scroll depth milestones */
export const initScrollTracking = () => {
  if (!hasAnalyticsConsent()) return;

  const milestones = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handler = () => {
    const scrollPct = Math.round(
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );

    milestones.forEach((m) => {
      if (scrollPct >= m && !tracked.has(m)) {
        tracked.add(m);
        trackGA4({ action: "scroll_depth", category: "engagement", label: `${m}%`, value: m });
      }
    });
  };

  window.addEventListener("scroll", handler, { passive: true });
  return () => window.removeEventListener("scroll", handler);
};

/** Track form interactions */
export const trackFormStart = (formName: string) => {
  trackGA4({ action: "form_start", category: "conversion", label: formName });
  trackMeta("InitiateCheckout", { content_name: formName });
};

export const trackFormComplete = (formName: string) => {
  trackGA4({ action: "form_complete", category: "conversion", label: formName });
  trackMeta("CompleteRegistration", { content_name: formName });

  // Google Ads conversion
  if (hasMarketingConsent() && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Replace with actual IDs
    });
  }
};

/** Track page views */
export const trackPageView = (path: string, title: string) => {
  trackGA4({ action: "page_view", category: "navigation", label: `${title} | ${path}` });
  if (hasMarketingConsent() && (window as any).fbq) {
    (window as any).fbq("track", "PageView");
  }
};
