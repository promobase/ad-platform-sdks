import type { LeadGenCustomDisclaimerBodyFields } from "./lead-gen-custom-disclaimer-body.ts";
import type { LeadGenLegalContentCheckboxFields } from "./lead-gen-legal-content-checkbox.ts";

export interface LeadGenCustomDisclaimerFields {
  body: LeadGenCustomDisclaimerBodyFields;
  checkboxes: LeadGenLegalContentCheckboxFields[];
  title: string;
}

