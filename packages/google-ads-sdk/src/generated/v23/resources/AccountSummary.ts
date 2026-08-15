// @generated
// fingerprint: sha256:b95f4c41f3e093c35dae0056a7041c7b61731810a79e8b747ffaa96ad9c77998
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdjustmentSummary, RegulatoryCostSummary } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Invoice.AccountSummary. Do not edit by hand.
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
