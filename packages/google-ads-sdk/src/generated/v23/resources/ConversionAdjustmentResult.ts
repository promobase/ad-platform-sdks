import type { ConversionAdjustmentType, GclidDateTimePair } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ConversionAdjustmentResult. Do not edit by hand.
export interface ConversionAdjustmentResult {
  gclidDateTimePair?: GclidDateTimePair;
  orderId?: string;
  conversionAction?: string;
  adjustmentDateTime?: string;
  adjustmentType?: ConversionAdjustmentType;
}
