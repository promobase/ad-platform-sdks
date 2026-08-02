import type { BusinessRegistrationDocument, BusinessRegistrationNumber, LocalServicesBusinessRegistrationCheckRejectionReason, LocalServicesBusinessRegistrationType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.BusinessRegistrationCheckVerificationArtifact. Do not edit by hand.
export interface BusinessRegistrationCheckVerificationArtifact {
  registrationType?: LocalServicesBusinessRegistrationType;
  checkId?: string;
  rejectionReason?: LocalServicesBusinessRegistrationCheckRejectionReason;
  registrationNumber?: BusinessRegistrationNumber;
  registrationDocument?: BusinessRegistrationDocument;
}
