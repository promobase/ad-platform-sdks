import type { BreakdownMetrics, CustomerMetrics, Metrics } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateBenchmarksMetricsResponse. Do not edit by hand.
export interface GenerateBenchmarksMetricsResponse {
  customerMetrics?: CustomerMetrics;
  averageBenchmarksMetrics?: Metrics;
  breakdownMetrics?: BreakdownMetrics[];
}
