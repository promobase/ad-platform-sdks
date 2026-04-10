import type { ApiClient } from "@promobase/sdk-runtime";
import type { ExperienceFields } from "./experience.ts";
import type { PageFields } from "./page.ts";
import type { UserFields } from "./user.ts";

export interface EducationExperienceFields {
  classes: ExperienceFields[];
  concentration: PageFields[];
  degree: PageFields;
  id: string;
  school: PageFields;
  type: string;
  with: UserFields[];
  year: PageFields;
}

export function educationExperienceNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as EducationExperienceFields,
    get: <F extends (keyof EducationExperienceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<EducationExperienceFields, F[number]>>(`${id}`, opts),
  };
}

