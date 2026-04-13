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
