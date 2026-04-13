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
