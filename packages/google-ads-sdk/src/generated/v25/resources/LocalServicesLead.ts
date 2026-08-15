// @generated
// fingerprint: sha256:b5ad27b60aabfefc1ad84fb755d1e0f7c04a074967a0969e1b97dad61b30f8c2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ContactDetails, CreditDetails, LeadStatus, LeadType, Note } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.LocalServicesLead. Do not edit by hand.
export interface LocalServicesLead {
  resourceName?: string;
  id?: string;
  categoryId?: string;
  serviceId?: string;
  contactDetails?: ContactDetails;
  leadType?: LeadType;
  leadStatus?: LeadStatus;
  creationDateTime?: string;
  locale?: string;
  note?: Note;
  leadCharged?: boolean;
  creditDetails?: CreditDetails;
  leadFeedbackSubmitted?: boolean;
}
