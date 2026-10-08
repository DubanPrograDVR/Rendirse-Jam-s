// Numeración editorial de sección: "03 —— Familia boxeo".
export function SectionLabel({ n, children, className = "" }: { n: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={`t-label flex items-center gap-3 ${className}`}>
      <span>{n}</span>
      <span aria-hidden className="h-px w-10 bg-current opacity-50" />
      <span>{children}</span>
    </p>
  );
}
