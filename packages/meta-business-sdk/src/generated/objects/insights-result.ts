import type { InsightsValueFields } from "./insights-value.ts";

export interface InsightsResultFields {
  description: string;
  description_from_api_doc: string;
  id: string;
  name: string;
  period: string;
  title: string;
  values: InsightsValueFields[];
}

