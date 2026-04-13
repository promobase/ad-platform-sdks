import type { BreakdownMetrics, Metrics } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateBenchmarksMetricsResponse. Do not edit by hand.
export interface GenerateBenchmarksMetricsResponse {
  customerMetrics?: Metrics;
  averageBenchmarksMetrics?: Metrics;
  breakdownMetrics?: BreakdownMetrics[];
}
