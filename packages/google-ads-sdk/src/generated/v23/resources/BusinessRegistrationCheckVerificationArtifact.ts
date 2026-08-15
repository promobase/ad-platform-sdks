// @generated
// fingerprint: sha256:1279d26e700154de029d6dbe5390953b9d256d7e6abc757343e68f925ecafa02
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BusinessRegistrationDocument, BusinessRegistrationNumber, LocalServicesBusinessRegistrationCheckRejectionReason, LocalServicesBusinessRegistrationType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.BusinessRegistrationCheckVerificationArtifact. Do not edit by hand.
export interface BusinessRegistrationCheckVerificationArtifact {
  registrationType?: LocalServicesBusinessRegistrationType;
  checkId?: string;
  rejectionReason?: LocalServicesBusinessRegistrationCheckRejectionReason;
  registrationNumber?: BusinessRegistrationNumber;
  registrationDocument?: BusinessRegistrationDocument;
}
