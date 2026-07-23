import { ReactNode } from "react";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-zinc-200 bg-white/60 p-6 shadow-sm backdrop-blur transition-colors dark:border-zinc-800 dark:bg-zinc-900/60 ${className}`}
    >
      {children}
    </div>
  );
}
