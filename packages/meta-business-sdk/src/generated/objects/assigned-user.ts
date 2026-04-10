import type { BusinessFields } from "./business.ts";

export interface AssignedUserFields {
  business: BusinessFields;
  id: string;
  name: string;
  user_type: string;
}

