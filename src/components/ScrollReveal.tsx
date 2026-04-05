import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

/**
 * Simple wrapper that renders children immediately.
 * Scroll-triggered animations can be added via CSS if needed.
 */
const ScrollReveal = ({ children, className = "" }: ScrollRevealProps) => {
  return <div className={className}>{children}</div>;
};

export default ScrollReveal;
