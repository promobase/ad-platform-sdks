export interface VideoStatsFields {
  aggregate: Record<string, Record<string, unknown>>[];
  error: string;
  metadata: Record<string, Record<string, unknown>>[];
  time_series: Record<string, Record<string, unknown>[]>[];
  totals: Record<string, Record<string, unknown>>[];
  x_axis_breakdown: Record<string, Record<string, unknown>>[][];
}

