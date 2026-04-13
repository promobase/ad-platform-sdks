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
