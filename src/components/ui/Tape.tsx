// Cinta atlética pegada sobre el afiche. Decorativa: su texto repite información ya presente.
export function Tape({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span aria-hidden className={`tape t-label block whitespace-nowrap px-6 py-2.5 ${className}`}>
      {children}
    </span>
  );
}
