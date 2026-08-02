import type { UserIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v25.services.ClickConversionResult. Do not edit by hand.
export interface ClickConversionResult {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  conversionAction?: string;
  conversionDateTime?: string;
  userIdentifiers?: UserIdentifier[];
}
