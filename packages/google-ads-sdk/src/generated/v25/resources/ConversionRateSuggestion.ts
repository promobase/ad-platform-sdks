import type { ReachPlanConversionRateModel, SurfaceTargeting } from "../index.ts";

// Generated from google.ads.googleads.v25.services.ConversionRateSuggestion. Do not edit by hand.
export interface ConversionRateSuggestion {
  conversionRateModel?: ReachPlanConversionRateModel;
  plannableProductCode?: string;
  surfaceTargeting?: SurfaceTargeting;
  conversionRate?: number;
}
