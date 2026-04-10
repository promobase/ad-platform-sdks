import type { ProfileFields } from "./profile.ts";

export interface EntityAtTextRangeFields {
  id: string;
  length: number;
  name: string;
  object: ProfileFields;
  offset: number;
  type: string;
}

