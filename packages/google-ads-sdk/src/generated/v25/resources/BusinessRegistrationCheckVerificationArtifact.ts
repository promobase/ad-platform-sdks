// @generated
// fingerprint: sha256:6d24cebd7122f1e281292a238eac5e1ef749b3c2b77cc67c37ae413d3834ac6e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BusinessRegistrationDocument, BusinessRegistrationNumber, LocalServicesBusinessRegistrationCheckRejectionReason, LocalServicesBusinessRegistrationType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.BusinessRegistrationCheckVerificationArtifact. Do not edit by hand.
export interface BusinessRegistrationCheckVerificationArtifact {
  registrationType?: LocalServicesBusinessRegistrationType;
  checkId?: string;
  rejectionReason?: LocalServicesBusinessRegistrationCheckRejectionReason;
  registrationNumber?: BusinessRegistrationNumber;
  registrationDocument?: BusinessRegistrationDocument;
}
