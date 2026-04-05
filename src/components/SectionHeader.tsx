import ScrollReveal from "@/components/ScrollReveal";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  badge: string;
  badgeVariant?: "light" | "dark";
  title: ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

/**
 * Standardized section header with badge + heading + description.
 * Usage:
 *   <SectionHeader
 *     badge="Our Approach"
 *     title={<>The full stack behind <em className="font-lora italic text-cta">every patient.</em></>}
 *     description="..."
 *   />
 */
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
      <span className="relative flex h-[7px] w-[7px]">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${
            badgeVariant === "dark" ? "bg-cta" : "bg-navy-600"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-[7px] w-[7px] ${
            badgeVariant === "dark" ? "bg-cta" : "bg-navy-600"
          }`}
        />
      </span>
      <span
        className={`text-caption ${
          badgeVariant === "dark" ? "text-white/50" : "text-navy-600"
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
        className={`font-space text-body mt-4 max-w-2xl ${
          badgeVariant === "dark" ? "text-navy-300" : "text-navy-500"
        } ${align === "center" ? "text-center mx-auto" : ""}`}
      >
        {description}
      </p>
    )}
  </ScrollReveal>
);

export default SectionHeader;
