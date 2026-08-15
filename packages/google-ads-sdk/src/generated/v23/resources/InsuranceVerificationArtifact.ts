// @generated
// fingerprint: sha256:7b3f4b5ef1e19271be636e9f274e5aca64889ec9d44f30dea32abb9855dbf231
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LocalServicesDocumentReadOnly, LocalServicesInsuranceRejectionReason } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.InsuranceVerificationArtifact. Do not edit by hand.
export interface InsuranceVerificationArtifact {
  amountMicros?: string;
  rejectionReason?: LocalServicesInsuranceRejectionReason;
  insuranceDocumentReadonly?: LocalServicesDocumentReadOnly;
  expirationDateTime?: string;
}
