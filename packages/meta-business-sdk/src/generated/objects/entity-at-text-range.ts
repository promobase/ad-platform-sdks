import type { ProfileFields } from "./profile.ts";
import type { EntityAtTextRangeType } from "../enums.ts";

export interface EntityAtTextRangeFields {
  id: string;
  length: number;
  name: string;
  object: ProfileFields;
  offset: number;
  type: EntityAtTextRangeType;
}

