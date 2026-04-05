import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

/**
 * Animated stat counter — triggers count-up animation on scroll into view.
 * Shows the final value (not "0") before animation via a hidden placeholder.
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
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    setCount(0);
    let start = 0;
    const totalFrames = duration * 60;
    const step = end / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start += step;
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  const displayValue = count !== null ? count : end;

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <motion.p
        className="font-sans text-4xl font-extrabold lg:text-5xl tracking-[-0.03em]"
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
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
