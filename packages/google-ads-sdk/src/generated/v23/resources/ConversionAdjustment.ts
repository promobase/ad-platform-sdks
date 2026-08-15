// @generated
// fingerprint: sha256:687b304907d637b0fe9914bc2f422d6cdc6ee4fc4d6ca97d96bd9a176d987722
// DO NOT EDIT: generated file; changes will be overwritten.
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
