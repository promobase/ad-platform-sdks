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
