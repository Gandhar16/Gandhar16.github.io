export interface OnCallMetric {
  label: string;
  value: string;
  sub?: string;
}

export const oncallSummary =
  "Key on-call engineer for the EC2 Metering team at AWS — troubleshooting complex production incidents and acting as the technical point of contact for cross-team queries to maintain high availability.";

export const oncallMetrics: OnCallMetric[] = [
  { label: "Sev2 incidents resolved", value: "70+", sub: "as primary/secondary on-call" },
];

export const oncallHighlights: string[] = [
  "Wrote agent skills/automation so recurring on-call issues are resolved by agents without manual intervention.",
  "Used Grafana to build and maintain dashboards tracking service API availability.",
  "Built out the Auckland region for the EC2 Metering service.",
];
