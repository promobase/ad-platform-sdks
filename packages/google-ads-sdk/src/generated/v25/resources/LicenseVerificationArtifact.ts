// @generated
// fingerprint: sha256:65dac5f5ec8a1b168f5554b265463dd8205395fd42b53b890cfc2d8ee3cc8dda
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LocalServicesDocumentReadOnly, LocalServicesLicenseRejectionReason } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.LicenseVerificationArtifact. Do not edit by hand.
export interface LicenseVerificationArtifact {
  licenseType?: string;
  licenseNumber?: string;
  licenseeFirstName?: string;
  licenseeLastName?: string;
  rejectionReason?: LocalServicesLicenseRejectionReason;
  licenseDocumentReadonly?: LocalServicesDocumentReadOnly;
  expirationDateTime?: string;
}
