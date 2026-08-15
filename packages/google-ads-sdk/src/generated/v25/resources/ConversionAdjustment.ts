// @generated
// fingerprint: sha256:b8e448b6633813fb366356d3777c14df51489f5b44e0ffbb42852ab4decf8cb1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionAdjustmentType, GclidDateTimePair, RestatementValue, UserIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v25.services.ConversionAdjustment. Do not edit by hand.
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
