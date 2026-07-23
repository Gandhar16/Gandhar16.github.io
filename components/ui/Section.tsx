import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, eyebrow, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          {eyebrow && (
            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
