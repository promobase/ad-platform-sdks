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

