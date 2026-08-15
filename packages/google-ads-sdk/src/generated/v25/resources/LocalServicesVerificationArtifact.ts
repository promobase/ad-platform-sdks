// @generated
// fingerprint: sha256:c34e86b341411ff57203cf425910eb7b8f3a41bbae6a2f207cc8659a67569a2c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BackgroundCheckVerificationArtifact, BusinessRegistrationCheckVerificationArtifact, InsuranceVerificationArtifact, LicenseVerificationArtifact, LocalServicesVerificationArtifactStatus, LocalServicesVerificationArtifactType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.LocalServicesVerificationArtifact. Do not edit by hand.
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
