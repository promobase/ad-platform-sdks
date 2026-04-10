import type { LeadGenCustomDisclaimerFields } from "./lead-gen-custom-disclaimer.ts";
import type { LeadGenPrivacyPolicyFields } from "./lead-gen-privacy-policy.ts";

export interface LeadGenLegalContentFields {
  custom_disclaimer: LeadGenCustomDisclaimerFields;
  id: string;
  privacy_policy: LeadGenPrivacyPolicyFields;
}

