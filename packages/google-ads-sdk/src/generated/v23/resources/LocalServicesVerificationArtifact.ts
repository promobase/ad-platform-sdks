import type { BackgroundCheckVerificationArtifact, BusinessRegistrationCheckVerificationArtifact, InsuranceVerificationArtifact, LicenseVerificationArtifact, LocalServicesVerificationArtifactStatus, LocalServicesVerificationArtifactType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.LocalServicesVerificationArtifact. Do not edit by hand.
export interface LocalServicesVerificationArtifact {
  resourceName?: string;
  id?: string;
  creationDateTime?: string;
  status?: LocalServicesVerificationArtifactStatus;
  artifactType?: LocalServicesVerificationArtifactType;
  backgroundCheckVerificationArtifact?: BackgroundCheckVerificationArtifact;
  insuranceVerificationArtifact?: InsuranceVerificationArtifact;
  licenseVerificationArtifact?: LicenseVerificationArtifact;
  businessRegistrationCheckVerificationArtifact?: BusinessRegistrationCheckVerificationArtifact;
}
