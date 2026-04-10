import type { UserFields } from "./user.ts";

export interface ExperienceFields {
  description: string;
  from: Record<string, unknown>;
  id: string;
  name: string;
  with: UserFields[];
}

