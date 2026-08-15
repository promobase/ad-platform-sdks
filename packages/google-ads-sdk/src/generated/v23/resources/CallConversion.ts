// @generated
// fingerprint: sha256:ac8eb8f0ac8a029569dc730ba73dded7c26492ef6f688a9d619a3bc31bc023a2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { Consent, CustomVariable } from "../index.ts";

// Generated from google.ads.googleads.v23.services.CallConversion. Do not edit by hand.
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
