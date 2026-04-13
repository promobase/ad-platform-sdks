import type { CustomLeadFormSubmissionField, LeadFormSubmissionField } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.LeadFormSubmissionData. Do not edit by hand.
export interface LeadFormSubmissionData {
  resourceName?: string;
  id?: string;
  asset?: string;
  campaign?: string;
  leadFormSubmissionFields?: LeadFormSubmissionField[];
  customLeadFormSubmissionFields?: CustomLeadFormSubmissionField[];
  adGroup?: string;
  adGroupAd?: string;
  gclid?: string;
  submissionDateTime?: string;
}
