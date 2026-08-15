// @generated
// fingerprint: sha256:023571f382c6fb57c7cb2e58933a01dd59e23ef5d19cafd3b82b47ead22ce9b9
// DO NOT EDIT: generated file; changes will be overwritten.
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

