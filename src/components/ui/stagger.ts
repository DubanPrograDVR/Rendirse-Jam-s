// Posición dentro de un grupo de reveals: el CSS la usa como retraso (--i × 80ms).
export const stagger = (i: number) => ({ "--i": i }) as React.CSSProperties;
