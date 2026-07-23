export interface Project {
  name: string;
  description: string;
  tech: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
}

// TODO: add repo/live links once available.
export const projects: Project[] = [
  {
    name: "Stock Market Hedge Fund",
    description:
      "A personal hedge fund built to analyze stocks across multiple signal types: technical indicators, fundamentals, news, and public sentiment — plus insights from tracked trades made by hedge funds and members of Congress.",
    tech: ["Python", "NLP", "Sentiment Analysis", "Technical Analysis", "Market Data APIs"],
    featured: true,
  },
  {
    name: "Automated Tax Filer",
    description:
      "Automates tax form filing by selecting the correct form based on a user's financial information and filling it out accordingly.",
    tech: ["Python", "Automation", "Document Generation"],
  },
  {
    name: "AURELE",
    description:
      "A clothing brand — in progress.",
    tech: ["Brand", "E-commerce"],
  },
];
