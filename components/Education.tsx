import Section from "./ui/Section";
import Card from "./ui/Card";
import { education } from "@/data/education";

export default function Education() {
  return (
    <Section id="education" title="Education" eyebrow="Academic background">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((entry) => (
          <Card key={entry.school}>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{entry.school}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{entry.degree}</p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">GPA: {entry.gpa}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">{entry.location}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
