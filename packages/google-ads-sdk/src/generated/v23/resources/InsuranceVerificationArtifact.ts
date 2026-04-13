import type { LocalServicesDocumentReadOnly, LocalServicesInsuranceRejectionReason } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.InsuranceVerificationArtifact. Do not edit by hand.
export interface InsuranceVerificationArtifact {
  amountMicros?: string;
  rejectionReason?: LocalServicesInsuranceRejectionReason;
  insuranceDocumentReadonly?: LocalServicesDocumentReadOnly;
  expirationDateTime?: string;
}
