// @generated
// fingerprint: sha256:a44a080dc56ef5610506881a7d5f612153289496e0706c79ff77d7bb49495199
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionAdjustmentType, GclidDateTimePair } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ConversionAdjustmentResult. Do not edit by hand.
export interface ConversionAdjustmentResult {
  gclidDateTimePair?: GclidDateTimePair;
  orderId?: string;
  conversionAction?: string;
  adjustmentDateTime?: string;
  adjustmentType?: ConversionAdjustmentType;
}
