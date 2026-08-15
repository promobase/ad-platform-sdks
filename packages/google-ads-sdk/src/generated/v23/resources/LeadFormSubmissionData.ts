// @generated
// fingerprint: sha256:15b83494f928812a34af5f4d796de5c6e5f700a7ec5ce9c17f9b814f5d59381c
// DO NOT EDIT: generated file; changes will be overwritten.
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
