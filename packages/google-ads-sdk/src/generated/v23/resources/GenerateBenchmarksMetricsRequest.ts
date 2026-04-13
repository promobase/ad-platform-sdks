import type { AdditionalApplicationInfo, BenchmarksSource, BreakdownDefinition, DateRange, LocationInfo, ProductFilter } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateBenchmarksMetricsRequest. Do not edit by hand.
export interface GenerateBenchmarksMetricsRequest {
  customerId?: string;
  dateRange?: DateRange;
  location?: LocationInfo;
  benchmarksSource?: BenchmarksSource;
  productFilter?: ProductFilter;
  breakdownDefinition?: BreakdownDefinition;
  currencyCode?: string;
  customerBenchmarksGroup?: string;
  applicationInfo?: AdditionalApplicationInfo;
}
