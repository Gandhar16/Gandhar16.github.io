import Section from "./ui/Section";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="Where I've worked">
      <ol className="relative space-y-10 border-l border-zinc-200 pl-6 dark:border-zinc-800">
        {experience.map((role) => (
          <li key={`${role.company}-${role.title}`} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-teal-500 bg-white dark:bg-black" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {role.title} · {role.company}
              </h3>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500">{role.dates}</span>
            </div>
            <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-500">{role.location}</p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {role.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
