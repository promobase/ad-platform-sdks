// @generated
// fingerprint: sha256:f73218a33b0d66ce99c3ed6d3b514b73d21ad9abf8c392ed54b0c0ec291128e2
// DO NOT EDIT: generated file; changes will be overwritten.
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
