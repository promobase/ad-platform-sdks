import type { WhatsAppBusinessPartnerClientVerificationSubmissionRejectionReasons, WhatsAppBusinessPartnerClientVerificationSubmissionVerificationStatus } from "../enums.ts";

export interface WhatsAppBusinessPartnerClientVerificationSubmissionFields {
  client_business_id: string;
  id: string;
  rejection_reasons: WhatsAppBusinessPartnerClientVerificationSubmissionRejectionReasons[];
  submitted_info: Record<string, unknown>;
  submitted_time: string;
  update_time: string;
  verification_status: WhatsAppBusinessPartnerClientVerificationSubmissionVerificationStatus;
}

