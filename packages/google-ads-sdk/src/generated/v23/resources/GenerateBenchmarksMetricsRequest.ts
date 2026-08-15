// @generated
// fingerprint: sha256:0c724d22f519e444be712dba7f90764d1ec545edb1f9247587184973860aac9e
// DO NOT EDIT: generated file; changes will be overwritten.
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
