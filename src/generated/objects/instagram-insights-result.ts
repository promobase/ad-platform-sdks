import type { InsightsValueFields } from "./insights-value.ts";
import type { InstagramInsightsValueFields } from "./instagram-insights-value.ts";

export interface InstagramInsightsResultFields {
  description: string;
  id: string;
  name: string;
  period: string;
  title: string;
  total_value: Record<string, unknown>;
  values: InstagramInsightsValueFields[];
}

