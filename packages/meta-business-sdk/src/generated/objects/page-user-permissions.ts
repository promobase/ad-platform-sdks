// @generated
// fingerprint: sha256:da0d1ad488e9a6b1ebe2b1f6fc6080b88b6d8d604d9dc8ddb412531ea13f90fb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BusinessFields } from "./business.ts";
import type { ProfileFields } from "./profile.ts";

export interface PageUserPermissionsFields {
  business: BusinessFields;
  business_persona: string;
  created_by: ProfileFields;
  created_time: string;
  email: string;
  status: string;
  tasks: string[];
  updated_by: ProfileFields;
  updated_time: string;
  user: ProfileFields;
}

