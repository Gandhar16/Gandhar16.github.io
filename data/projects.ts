export interface Project {
  name: string;
  description: string;
  tech: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
}

// TODO: replace with your real personal/side projects.
export const projects: Project[] = [
  {
    name: "Example Project",
    description:
      "Placeholder project card — replace with a real project: what it does, the problem it solves, and any notable results.",
    tech: ["Next.js", "TypeScript"],
    repo: "https://github.com/your-github/example-project",
    featured: true,
  },
];
