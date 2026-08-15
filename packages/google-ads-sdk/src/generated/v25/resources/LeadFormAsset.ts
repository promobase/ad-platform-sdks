// @generated
// fingerprint: sha256:fe16edca9d49171966af9d0edb9923d623ef674850079eb8dcff8790eba68d3b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LeadFormCallToActionType, LeadFormCustomQuestionField, LeadFormDeliveryMethod, LeadFormDesiredIntent, LeadFormField, LeadFormPostSubmitCallToActionType } from "../index.ts";

// Generated from google.ads.googleads.v25.common.LeadFormAsset. Do not edit by hand.
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
