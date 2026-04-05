import ScrollReveal from "@/components/ScrollReveal";
import Diamond from "@/components/Diamond";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  badge: string;
  badgeVariant?: "light" | "dark";
  title: ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeader = ({
  badge,
  badgeVariant = "light",
  title,
  description,
  className = "",
  align = "left",
}: SectionHeaderProps) => (
  <ScrollReveal className={className}>
    {/* Badge */}
    <div
      className={`inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 ${
        badgeVariant === "dark"
          ? "bg-white/[0.06] border border-white/[0.12]"
          : "bg-navy-900/[0.06] border border-navy-900/[0.12]"
      }`}
    >
      <Diamond size="xs" />
      <span
        className={`font-sans text-[11px] font-semibold tracking-wide uppercase ${
          badgeVariant === "dark" ? "text-white/65" : "text-navy-600"
        }`}
      >
        {badge}
      </span>
    </div>

    {/* Heading */}
    <h2
      className={`text-h2 mt-6 ${
        badgeVariant === "dark" ? "text-cream-100" : "text-navy-900"
      } ${align === "center" ? "text-center" : ""}`}
    >
      {title}
    </h2>

    {/* Description */}
    {description && (
      <p
        className={`font-space text-[15px] leading-[1.7] mt-4 max-w-2xl ${
          badgeVariant === "dark" ? "text-cream-200/65" : "text-navy-600"
        } ${align === "center" ? "text-center mx-auto" : ""}`}
      >
        {description}
      </p>
    )}
  </ScrollReveal>
);

export default SectionHeader;
