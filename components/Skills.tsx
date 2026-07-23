import Section from "./ui/Section";
import Badge from "./ui/Badge";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="Tools & technologies">
      <div className="space-y-6">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
