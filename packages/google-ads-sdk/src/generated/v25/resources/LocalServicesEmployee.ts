// @generated
// fingerprint: sha256:3d3fdd8304491e062bb57e785c534c1ff6bb5ff8cf042c9a96df23104783c8fc
// DO NOT EDIT: generated file; changes will be overwritten.
import type { Fellowship, LocalServicesEmployeeStatus, LocalServicesEmployeeType, Residency, UniversityDegree } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.LocalServicesEmployee. Do not edit by hand.
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
