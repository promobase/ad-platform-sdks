// @generated
// fingerprint: sha256:f620bb2a49dab425418fbf96332b6201885d482504d4148ae866a7d0be07adba
// DO NOT EDIT: generated file; changes will be overwritten.
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
