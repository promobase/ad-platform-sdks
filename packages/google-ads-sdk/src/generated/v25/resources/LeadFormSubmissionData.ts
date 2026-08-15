// @generated
// fingerprint: sha256:611658e817f9a9627adf36581e2e7542e04b7eadcef9f0f6c49312e75d3ffe86
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomLeadFormSubmissionField, LeadFormSubmissionField } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.LeadFormSubmissionData. Do not edit by hand.
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
