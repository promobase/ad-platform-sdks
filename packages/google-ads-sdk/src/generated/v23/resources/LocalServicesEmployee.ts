// @generated
// fingerprint: sha256:1ce038f7d789911eb81034dd9e95f38b80da1d37ee2a00eef47339b5b803a62a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { Fellowship, LocalServicesEmployeeStatus, LocalServicesEmployeeType, Residency, UniversityDegree } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.LocalServicesEmployee. Do not edit by hand.
export interface LocalServicesEmployee {
  resourceName?: string;
  id?: string;
  creationDateTime?: string;
  status?: LocalServicesEmployeeStatus;
  type?: LocalServicesEmployeeType;
  universityDegrees?: UniversityDegree[];
  residencies?: Residency[];
  fellowships?: Fellowship[];
  jobTitle?: string;
  yearStartedPracticing?: number;
  languagesSpoken?: string[];
  categoryIds?: string[];
  nationalProviderIdNumber?: string;
  emailAddress?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
}
