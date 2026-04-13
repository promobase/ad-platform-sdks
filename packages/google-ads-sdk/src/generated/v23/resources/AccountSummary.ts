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
