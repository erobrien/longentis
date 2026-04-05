import Diamond from "@/components/Diamond";

interface SectionLabelProps {
  text: string;
  className?: string;
}

const SectionLabel = ({ text, className = "" }: SectionLabelProps) => (
  <p className={`inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold uppercase tracking-wide text-cta ${className}`}>
    <Diamond size="xs" />
    {text}
  </p>
);

export default SectionLabel;
