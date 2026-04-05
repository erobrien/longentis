interface SectionLabelProps {
  text: string;
  className?: string;
}

const SectionLabel = ({ text, className = "" }: SectionLabelProps) => (
  <p className={`font-mono text-xs font-medium uppercase tracking-[0.15em] text-cta ${className}`}>
    {text}
  </p>
);

export default SectionLabel;
