import TreatmentTemplate, { TreatmentData } from "@/components/TreatmentTemplate";

const data: TreatmentData = {
  slug: "weight-loss",
  heroLabel: "Physician-Supervised Weight Loss",
  heroTitle: "Lose the weight.",
  heroTitleAccent: "Keep the muscle.",
  heroDescription: "GLP-1 medications and metabolic protocols supervised by your dedicated men's health provider. Lab-driven dosing, body composition tracking, and ongoing adjustments — not a one-size-fits-all prescription.",
  heroStats: [
    { value: "15-20%", label: "Avg Body Weight Loss" },
    { value: "90 days", label: "First Results" },
    { value: "20+", label: "Biomarkers Tracked" },
  ],
  conditionTitle: "Understanding Metabolic Health in Men",
  conditionDescription: "Weight gain in men isn't just calories in, calories out. Hormonal decline, insulin resistance, thyroid dysfunction, and chronic inflammation all contribute to stubborn fat that won't respond to diet and exercise alone. After 35, declining testosterone accelerates visceral fat accumulation while making it harder to build and maintain muscle. Longentis addresses the metabolic root causes — not just the number on the scale.",
  symptoms: [
    "Stubborn abdominal fat",
    "Weight loss resistance",
    "Low energy & fatigue",
    "Increased appetite",
    "Insulin resistance",
    "Muscle loss with age",
    "Poor sleep quality",
    "Metabolic slowdown",
  ],
  approachTitle: "How Longentis approaches",
  approachAccent: "weight loss.",
  approachDescription: "We treat weight as a metabolic condition, not a willpower problem. Your provider builds a protocol based on your labs, body composition, and health goals.",
  approachPoints: [
    { title: "GLP-1 Medications", desc: "Semaglutide and tirzepatide prescribed when clinically appropriate. Dosed based on your labs and tolerance, with gradual titration." },
    { title: "Metabolic Lab Panel", desc: "Fasting insulin, glucose, A1C, thyroid, testosterone, lipids, and inflammatory markers. We find what's driving the weight." },
    { title: "Body Composition Tracking", desc: "Weight alone doesn't tell the story. We track body fat percentage, visceral fat, and lean mass to ensure you're losing fat, not muscle." },
    { title: "Hormone Optimization", desc: "Low testosterone accelerates fat gain and muscle loss. When indicated, TRT and weight loss protocols work together." },
    { title: "Monthly Check-ins", desc: "Dosage adjustments, progress review, and protocol modifications based on your response. Your provider adapts as your body changes." },
    { title: "No Crash Diets", desc: "Sustainable protocols designed for long-term metabolic health, not rapid weight cycling. Evidence-based nutrition guidance included." },
  ],
  labPanelTitle: "Your Metabolic Lab Panel",
  labPanelItems: [
    "Fasting Insulin", "Fasting Glucose", "Hemoglobin A1C", "Lipid Panel",
    "Thyroid (TSH, T3, T4)", "Total Testosterone", "Free Testosterone",
    "hsCRP", "Leptin", "CMP", "CBC", "Vitamin D", "B12",
    "Cortisol", "DHEA-S", "IGF-1", "Liver Function Panel",
  ],
  providerNote: "Comprehensive metabolic panel identifies hormonal, inflammatory, and metabolic contributors to weight gain. At-home kit or Quest/Labcorp draw.",
  faqs: [
    { q: "What weight loss medications do you prescribe?", a: "Semaglutide (the active ingredient in Ozempic/Wegovy) and tirzepatide (Mounjaro/Zepbound) when clinically appropriate. These GLP-1 receptor agonists are FDA-approved for weight management and have strong efficacy data showing 15-20% average body weight reduction." },
    { q: "How is this different from getting a prescription from my PCP?", a: "Most PCPs prescribe GLP-1s without comprehensive metabolic labs, hormone evaluation, or body composition tracking. Longentis evaluates the full metabolic picture — including testosterone, thyroid, insulin resistance, and inflammation — then monitors your progress with repeat labs and dedicated provider follow-ups." },
    { q: "Will I lose muscle on GLP-1 medications?", a: "Muscle loss is a real concern with rapid weight loss. Longentis tracks body composition (not just scale weight) and can combine weight loss protocols with TRT when indicated to preserve lean mass. Your provider monitors and adjusts to minimize muscle loss." },
    { q: "How long do I need to be on medication?", a: "Treatment duration varies by individual. Most patients see significant results within 3-6 months. Your provider will discuss a long-term plan that may include medication taper, metabolic maintenance protocols, and lifestyle optimization." },
    { q: "What does the weight loss program cost?", a: "Weight loss protocols start at $199/month including medication, lab panels, provider consultations, body composition tracking, and shipping. FSA/HSA accepted. No hidden fees." },
  ],
  ctaTitle: "Ready to address",
  ctaAccent: "the root cause?",
  ctaDescription: "Free 5-minute assessment. Your provider evaluates your metabolic profile and builds a protocol based on your labs, not guesswork.",
  price: "From $199/mo",
  priceNote: "Medication & labs included",
  relatedTreatments: [
    { title: "Testosterone Replacement Therapy", href: "/treatments/trt", desc: "Low T accelerates fat gain and muscle loss. TRT and weight loss protocols work together." },
    { title: "Erectile Dysfunction Treatment", href: "/treatments/ed", desc: "Metabolic health directly impacts sexual function. Address both with coordinated care." },
  ],
};

const TreatmentWeightLoss = () => <TreatmentTemplate data={data} />;
export default TreatmentWeightLoss;
