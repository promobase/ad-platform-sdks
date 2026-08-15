// @generated
// fingerprint: sha256:e89920c606103720b866e11347504540e1786fb60d8c3bff13e7d8ffb9552dc0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ContactDetails, CreditDetails, LeadStatus, LeadType, Note } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.LocalServicesLead. Do not edit by hand.
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
