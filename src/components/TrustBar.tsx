import { Shield, CheckCircle2, Star } from "lucide-react";

interface TrustBadge {
  label: string;
  icon: typeof Shield;
  tooltip?: string;
}

const badges: TrustBadge[] = [
  { label: "LegitScript Certified", icon: Shield },
  { label: "HIPAA Compliant", icon: Shield, tooltip: "Your data is encrypted end-to-end" },
  { label: "Physician-Led · 12+ Providers", icon: CheckCircle2 },
  { label: "4.9★ Google Rating", icon: Star },
  { label: "FSA/HSA Accepted", icon: CheckCircle2 },
];

interface TrustBarProps {
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Trust badge strip — renders above fold or in hero area.
 * Light variant for cream backgrounds, dark for navy.
 */
const TrustBar = ({ variant = "light", className = "" }: TrustBarProps) => (
  <div className={`py-6 px-6 ${className}`}>
    <div className="mx-auto max-w-7xl flex items-center justify-center gap-4 lg:gap-6 flex-wrap">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 transition-colors ${
            variant === "dark"
              ? "bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.15]"
              : "bg-navy-900/[0.04] border border-navy-900/[0.08] hover:border-navy-900/[0.15]"
          }`}
          title={badge.tooltip}
        >
          <badge.icon
            className={`h-3.5 w-3.5 ${variant === "dark" ? "text-cta" : "text-cta"}`}
          />
          <span
            className={`text-caption ${
              variant === "dark" ? "text-white/50" : "text-navy-600"
            }`}
          >
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBar;
