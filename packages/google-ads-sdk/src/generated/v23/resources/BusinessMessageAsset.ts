import type { BusinessMessageCallToActionInfo, BusinessMessageProvider, FacebookMessengerBusinessMessageInfo, WhatsappBusinessMessageInfo, ZaloBusinessMessageInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.common.BusinessMessageAsset. Do not edit by hand.
export interface BusinessMessageAsset {
  messageProvider?: BusinessMessageProvider;
  starterMessage?: string;
  callToAction?: BusinessMessageCallToActionInfo;
  whatsappInfo?: WhatsappBusinessMessageInfo;
  facebookMessengerInfo?: FacebookMessengerBusinessMessageInfo;
  zaloInfo?: ZaloBusinessMessageInfo;
}
