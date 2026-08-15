// @generated
// fingerprint: sha256:b2e41a9fe3f44b6ab64ee519a04dd72bd9fddc2d1804fc19107ad8304d0183b1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BusinessFields } from "./business.ts";
import type { UserFields } from "./user.ts";

export interface AdAccountUserPermissionsFields {
  business: BusinessFields;
  business_persona: Record<string, unknown>;
  created_by: UserFields;
  created_time: string;
  email: string;
  status: string;
  tasks: string[];
  updated_by: UserFields;
  updated_time: string;
  user: UserFields;
}

