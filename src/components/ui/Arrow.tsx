// Flechas dibujadas: Archivo no trae → ni ↗, y el glifo del sistema rompía la familia tipográfica.
export function Arrow({ out = false, className = "" }: { out?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      className={`inline-block size-[1em] shrink-0 ${className}`}
    >
      {out ? <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" /> : <path d="M2.5 8h10M9 4.5 12.5 8 9 11.5" />}
    </svg>
  );
}
