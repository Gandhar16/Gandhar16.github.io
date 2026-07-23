import Section from "./ui/Section";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" title="About" eyebrow="Who I am">
      <p className="max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {profile.summary}
      </p>
    </Section>
  );
}
