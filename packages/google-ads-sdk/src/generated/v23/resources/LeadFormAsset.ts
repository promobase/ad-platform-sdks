// @generated
// fingerprint: sha256:8ef801629cfe3b119ab7a5a622d537a4310ca11d09b29dcc8a79e7f76da95900
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LeadFormCallToActionType, LeadFormCustomQuestionField, LeadFormDeliveryMethod, LeadFormDesiredIntent, LeadFormField, LeadFormPostSubmitCallToActionType } from "../index.ts";

// Generated from google.ads.googleads.v23.common.LeadFormAsset. Do not edit by hand.
export interface LeadFormAsset {
  businessName?: string;
  callToActionType?: LeadFormCallToActionType;
  callToActionDescription?: string;
  headline?: string;
  description?: string;
  privacyPolicyUrl?: string;
  postSubmitHeadline?: string;
  postSubmitDescription?: string;
  fields?: LeadFormField[];
  customQuestionFields?: LeadFormCustomQuestionField[];
  deliveryMethods?: LeadFormDeliveryMethod[];
  postSubmitCallToActionType?: LeadFormPostSubmitCallToActionType;
  backgroundImageAsset?: string;
  desiredIntent?: LeadFormDesiredIntent;
  customDisclosure?: string;
}
