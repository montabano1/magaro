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
        <span className="font-[family-name:var(--font-fraunces)] text-[1.05rem] italic text-[var(--color-gold)]">
          {number}
        </span>
      )}
      <span aria-hidden className="h-[1.5px] w-10 bg-[var(--color-gold)]" />
      <span className="eyebrow text-[0.92rem]">{children}</span>
    </div>
  );
}
