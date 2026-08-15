// @generated
// fingerprint: sha256:8111dbc2068dd0bfb708cec8af246acc6e7cbefd149ea71653f90491222646e4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdScheduleInfo, Money, PromotionBarcodeInfo, PromotionExtensionDiscountModifier, PromotionExtensionOccasion, PromotionQrCodeInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.common.PromotionAsset. Do not edit by hand.
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
