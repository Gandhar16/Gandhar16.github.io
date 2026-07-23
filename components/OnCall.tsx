import Section from "./ui/Section";
import Card from "./ui/Card";
import { oncallMetrics, oncallHighlights, oncallSummary } from "@/data/oncall";

export default function OnCall() {
  return (
    <Section id="oncall" title="On-Call & Operational Impact" eyebrow="Reliability">
      <p className="mb-8 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {oncallSummary}
      </p>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="grid grid-cols-1 gap-4 sm:col-span-1">
          {oncallMetrics.map((metric) => (
            <Card key={metric.label} className="text-center">
              <p className="text-4xl font-bold text-teal-600 dark:text-teal-400">{metric.value}</p>
              <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">{metric.label}</p>
              {metric.sub && <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{metric.sub}</p>}
            </Card>
          ))}
        </div>

        <Card className="sm:col-span-2">
          <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {oncallHighlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
