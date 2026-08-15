// @generated
// fingerprint: sha256:bfe6fa7ba8fd1820d7d218138fc102cda10232a4f46aa20bfb375f420baffd71
// DO NOT EDIT: generated file; changes will be overwritten.
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
