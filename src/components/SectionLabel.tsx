import Diamond from "@/components/Diamond";

interface SectionLabelProps {
  text: string;
  className?: string;
}

const SectionLabel = ({ text, className = "" }: SectionLabelProps) => (
  <p className={`inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-[0.15em] text-cta ${className}`}>
    <Diamond size="xs" />
    {text}
  </p>
);

export default SectionLabel;
