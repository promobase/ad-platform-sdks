// @generated
// fingerprint: sha256:8be541838ea934a56051a72b43cbf3fffe343c313c42db077592baac5e25101c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BusinessMessageCallToActionInfo, BusinessMessageProvider, FacebookMessengerBusinessMessageInfo, WhatsappBusinessMessageInfo, ZaloBusinessMessageInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.common.BusinessMessageAsset. Do not edit by hand.
export interface BusinessMessageAsset {
  messageProvider?: BusinessMessageProvider;
  starterMessage?: string;
  callToAction?: BusinessMessageCallToActionInfo;
  whatsappInfo?: WhatsappBusinessMessageInfo;
  facebookMessengerInfo?: FacebookMessengerBusinessMessageInfo;
  zaloInfo?: ZaloBusinessMessageInfo;
}
