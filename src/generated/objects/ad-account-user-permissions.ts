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

