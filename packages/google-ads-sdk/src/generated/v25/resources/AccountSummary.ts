// @generated
// fingerprint: sha256:f6f4d64114efe89d069a69f43508a0aa6fa2c09161a2a2862fa704e0f10205d1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdjustmentSummary, RegulatoryCostSummary } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.Invoice.AccountSummary. Do not edit by hand.
export interface AccountSummary {
  customer?: string;
  billingCorrectionSubtotalAmountMicros?: string;
  billingCorrectionTaxAmountMicros?: string;
  billingCorrectionTotalAmountMicros?: string;
  couponAdjustmentSubtotalAmountMicros?: string;
  couponAdjustmentTaxAmountMicros?: string;
  couponAdjustmentTotalAmountMicros?: string;
  excessCreditAdjustmentSubtotalAmountMicros?: string;
  excessCreditAdjustmentTaxAmountMicros?: string;
  excessCreditAdjustmentTotalAmountMicros?: string;
  regulatoryCostsSubtotalAmountMicros?: string;
  regulatoryCostsTaxAmountMicros?: string;
  regulatoryCostsTotalAmountMicros?: string;
  exportChargeSubtotalAmountMicros?: string;
  exportChargeTaxAmountMicros?: string;
  exportChargeTotalAmountMicros?: string;
  subtotalAmountMicros?: string;
  taxAmountMicros?: string;
  totalAmountMicros?: string;
  regulatoryCostSummaries?: RegulatoryCostSummary[];
  adjustmentSummaries?: AdjustmentSummary[];
}
