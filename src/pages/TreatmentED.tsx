import TreatmentTemplate, { TreatmentData } from "@/components/TreatmentTemplate";

const data: TreatmentData = {
  slug: "ed",
  heroLabel: "Erectile Dysfunction Treatment",
  heroTitle: "Confidence restored.",
  heroTitleAccent: "Discreetly delivered.",
  heroDescription: "FDA-approved PDE5 inhibitors prescribed by your dedicated men's health provider. Real consultations, real prescriptions — shipped directly to your door.",
  heroStats: [
    { value: "95%", label: "Efficacy Rate" },
    { value: "24-36hr", label: "Duration Options" },
    { value: "100%", label: "Online" },
  ],
  conditionTitle: "Understanding Erectile Dysfunction",
  conditionDescription: "ED affects over 30 million men in the US. It's not just an age issue — it can signal underlying cardiovascular, metabolic, or hormonal problems. That's why Longentis doesn't just prescribe a pill. We run labs to understand what's driving the dysfunction, then build a protocol that addresses the root cause alongside symptom relief. Your provider evaluates testosterone levels, cardiovascular markers, and metabolic health before prescribing.",
  symptoms: [
    "Difficulty achieving erections",
    "Difficulty maintaining erections",
    "Reduced sexual desire",
    "Performance anxiety",
    "Morning erection changes",
    "Delayed response to stimulation",
  ],
  approachTitle: "How Longentis treats",
  approachAccent: "erectile dysfunction.",
  approachDescription: "We treat ED as a clinical condition, not a cosmetic concern. Your dedicated provider evaluates the full picture — hormones, cardiovascular health, and lifestyle factors.",
  approachPoints: [
    { title: "PDE5 Inhibitors", desc: "Sildenafil (generic Viagra) and tadalafil (generic Cialis). Dosed based on your health profile, not a one-size-fits-all approach." },
    { title: "Combination Protocols", desc: "When ED and low testosterone coexist, combination therapy addresses both. Your provider coordinates your full protocol." },
    { title: "Root Cause Analysis", desc: "Lab work evaluates testosterone, cardiovascular markers, and metabolic health. We treat the cause, not just the symptom." },
    { title: "Discreet Delivery", desc: "Medication shipped in plain, unmarked packaging directly to your door. No pharmacy visits." },
    { title: "Ongoing Optimization", desc: "Dosage adjustments based on response. Direct messaging with your provider between visits." },
    { title: "Privacy First", desc: "HIPAA-compliant platform. Your records are encrypted and never shared. Complete confidentiality." },
  ],
  labPanelTitle: "Your ED Lab Panel",
  labPanelItems: [
    "Total Testosterone", "Free Testosterone", "Estradiol (E2)", "Lipid Panel",
    "Hemoglobin A1C", "Fasting Glucose", "Thyroid (TSH)", "CBC",
    "CMP", "hsCRP", "PSA", "Prolactin",
  ],
  providerNote: "Labs evaluate hormonal, cardiovascular, and metabolic contributors to ED. At-home kit or Quest/Labcorp draw available.",
  faqs: [
    { q: "What ED medications do you prescribe?", a: "Sildenafil (generic Viagra) and tadalafil (generic Cialis). Your provider selects based on your health profile, lifestyle, and preferences. Both are FDA-approved PDE5 inhibitors with strong safety and efficacy data." },
    { q: "How quickly do ED medications work?", a: "Sildenafil typically works within 30-60 minutes and lasts 4-6 hours. Tadalafil can work within 30 minutes and lasts up to 36 hours. Daily low-dose tadalafil provides continuous coverage." },
    { q: "Can ED be caused by low testosterone?", a: "Yes. Low testosterone is a common contributor to ED. That's why we run a comprehensive lab panel — if your testosterone is low, treating it alongside ED medication often produces better results than either alone." },
    { q: "Is the consultation private?", a: "Completely. Video consultations are HIPAA-compliant and encrypted. Medication ships in plain, unmarked packaging. Nothing on the outside indicates the contents." },
    { q: "What does ED treatment cost?", a: "ED protocols start at $99/month including medication, provider consultations, and shipping. Lab work is included in your first panel. FSA/HSA accepted." },
  ],
  ctaTitle: "Take the first step",
  ctaAccent: "confidentially.",
  ctaDescription: "Free 5-minute online assessment. Discreet, private, and reviewed by a licensed men's health provider.",
  price: "From $99/mo",
  priceNote: "Medication & consultations included",
  relatedTreatments: [
    { title: "Testosterone Replacement Therapy", href: "/treatments/trt", desc: "Low T often contributes to ED. Comprehensive TRT protocols with quarterly monitoring." },
    { title: "Weight Loss Program", href: "/treatments/weight-loss", desc: "Metabolic health directly impacts sexual function. Physician-supervised weight loss." },
  ],
};

const TreatmentED = () => <TreatmentTemplate data={data} />;
export default TreatmentED;
