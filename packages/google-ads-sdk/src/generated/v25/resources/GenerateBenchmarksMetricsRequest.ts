// @generated
// fingerprint: sha256:2c0e3c648ca7bc1050949bccd68096d9968bb44d4c438fdbe39ed4c63286aa1e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, BenchmarksSource, BreakdownDefinition, DateRange, LocationInfo, ProductFilter } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateBenchmarksMetricsRequest. Do not edit by hand.
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
