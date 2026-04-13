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
