import type { ConversionAdjustmentType, GclidDateTimePair, RestatementValue, UserIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ConversionAdjustment. Do not edit by hand.
export interface ConversionAdjustment {
  gclidDateTimePair?: GclidDateTimePair;
  orderId?: string;
  conversionAction?: string;
  adjustmentDateTime?: string;
  adjustmentType?: ConversionAdjustmentType;
  restatementValue?: RestatementValue;
  userIdentifiers?: UserIdentifier[];
  userAgent?: string;
}
