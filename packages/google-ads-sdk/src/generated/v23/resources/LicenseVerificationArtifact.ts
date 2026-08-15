// @generated
// fingerprint: sha256:f883b6b8e55c62c75a8a67abb70de51606966ecd60b0ddd798263ac2830b6288
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LocalServicesDocumentReadOnly, LocalServicesLicenseRejectionReason } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.LicenseVerificationArtifact. Do not edit by hand.
export interface LicenseVerificationArtifact {
  licenseType?: string;
  licenseNumber?: string;
  licenseeFirstName?: string;
  licenseeLastName?: string;
  rejectionReason?: LocalServicesLicenseRejectionReason;
  licenseDocumentReadonly?: LocalServicesDocumentReadOnly;
  expirationDateTime?: string;
}
