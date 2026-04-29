export default function SectionEyebrow({
  number,
  children,
  className = "",
}: {
  number?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {number && (
        <span className="font-[family-name:var(--font-fraunces)] text-[0.85rem] italic text-[var(--color-gold)]">
          {number}
        </span>
      )}
      <span aria-hidden className="h-px w-8 bg-[var(--color-gold)]" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
