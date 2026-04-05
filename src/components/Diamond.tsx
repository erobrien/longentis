interface DiamondProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  xs: "text-[8px]",
  sm: "text-[11px]",
  md: "text-[14px]",
  lg: "text-[18px]",
  xl: "text-[28px]",
};

/**
 * Brand ✦ diamond mark.
 * Renders in Bebas Neue at the configured size.
 * Default color is CTA orange — override via className.
 */
const Diamond = ({ size = "sm", className = "" }: DiamondProps) => (
  <span
    className={`text-cta leading-none ${sizeMap[size]} ${className}`}
    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
    aria-hidden="true"
  >
    ✦
  </span>
);

export default Diamond;
