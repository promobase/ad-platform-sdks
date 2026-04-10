export interface WhatsAppBusinessPartnerClientVerificationSubmissionFields {
  client_business_id: string;
  id: string;
  rejection_reasons: string[];
  submitted_info: Record<string, unknown>;
  submitted_time: string;
  update_time: string;
  verification_status: string;
}

