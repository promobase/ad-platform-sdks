// @generated
// fingerprint: sha256:6c5ca58205246fab72bd1568b6e7361f76ef73e43490e9032fbb8eecde615f40
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LocalServicesDocumentReadOnly, LocalServicesInsuranceRejectionReason } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.InsuranceVerificationArtifact. Do not edit by hand.
export interface InsuranceVerificationArtifact {
  amountMicros?: string;
  rejectionReason?: LocalServicesInsuranceRejectionReason;
  insuranceDocumentReadonly?: LocalServicesDocumentReadOnly;
  expirationDateTime?: string;
}
