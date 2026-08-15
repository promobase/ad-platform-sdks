// @generated
// fingerprint: sha256:4f818130f00562151a9b177c7e0c8c2c4b9e93dd700212147d8cfaf6daf03215
// DO NOT EDIT: generated file; changes will be overwritten.
import type { Consent, CustomVariable } from "../index.ts";

// Generated from google.ads.googleads.v25.services.CallConversion. Do not edit by hand.
export interface CallConversion {
  callerId?: string;
  callStartDateTime?: string;
  conversionAction?: string;
  conversionDateTime?: string;
  conversionValue?: number;
  currencyCode?: string;
  customVariables?: CustomVariable[];
  consent?: Consent;
}
