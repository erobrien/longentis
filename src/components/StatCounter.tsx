import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

/**
 * Animated stat counter — triggers count-up on scroll into view.
 * Respects prefers-reduced-motion.
 */
const StatCounter = ({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  className = "",
}: StatCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    // Skip animation if user prefers reduced motion
    if (shouldReduceMotion) {
      setCount(end);
      return;
    }

    setCount(0);
    const totalFrames = duration * 60;
    const step = end / totalFrames;
    let frame = 0;
    let current = 0;

    const timer = setInterval(() => {
      frame++;
      current += step;
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration, shouldReduceMotion]);

  const displayValue = count !== null ? count : end;

  return (
    <div ref={ref} className={`text-center ${className}`} role="figure" aria-label={`${prefix}${end.toLocaleString()}${suffix} ${label}`}>
      <motion.p
        className="font-sans text-4xl font-extrabold lg:text-5xl tracking-[-0.03em]"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </motion.p>
      <p className="text-caption mt-2 opacity-60">{label}</p>
    </div>
  );
};

export default StatCounter;
