import type { AdScheduleInfo, Money, PromotionBarcodeInfo, PromotionExtensionDiscountModifier, PromotionExtensionOccasion, PromotionQrCodeInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PromotionAsset. Do not edit by hand.
export interface PromotionAsset {
  promotionTarget?: string;
  discountModifier?: PromotionExtensionDiscountModifier;
  redemptionStartDate?: string;
  redemptionEndDate?: string;
  occasion?: PromotionExtensionOccasion;
  languageCode?: string;
  startDate?: string;
  endDate?: string;
  adScheduleTargets?: AdScheduleInfo[];
  termsAndConditionsText?: string;
  termsAndConditionsUri?: string;
  percentOff?: string;
  moneyAmountOff?: Money;
  promotionCode?: string;
  ordersOverAmount?: Money;
  promotionBarcodeInfo?: PromotionBarcodeInfo;
  promotionQrCodeInfo?: PromotionQrCodeInfo;
}
