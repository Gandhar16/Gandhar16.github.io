import Section from "./ui/Section";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="What I've built">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name}>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{project.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
                >
                  Repo →
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
                >
                  Live →
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>

      <h3 className="mb-4 mt-12 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Patents & Publications
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {publications.map((pub) => (
          <Card key={pub.title}>
            <span className="font-mono text-xs uppercase tracking-wide text-teal-600 dark:text-teal-400">
              {pub.type}
            </span>
            <h4 className="mt-1 font-medium text-zinc-900 dark:text-zinc-50">{pub.title}</h4>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">{pub.year}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
