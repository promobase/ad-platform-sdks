import type { CustomConversionStatsResultAggregation } from "../enums.ts";

export interface CustomConversionStatsResultFields {
  aggregation: CustomConversionStatsResultAggregation;
  data: Record<string, unknown>[];
  timestamp: string;
}

