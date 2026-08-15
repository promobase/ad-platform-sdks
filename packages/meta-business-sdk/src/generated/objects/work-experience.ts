// @generated
// fingerprint: sha256:328c497b99b013ea551de81d1bbe4276f4d87958c18050f05963c6bb3a71c964
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { PageFields } from "./page.ts";
import type { UserFields } from "./user.ts";

export interface WorkExperienceFields {
  description: string;
  employer: PageFields;
  end_date: string;
  from: UserFields;
  id: string;
  location: PageFields;
  position: PageFields;
  projects: Record<string, unknown>[];
  start_date: string;
  with: UserFields[];
}

export function workExperienceNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WorkExperienceFields,
    get: <F extends (keyof WorkExperienceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WorkExperienceFields, F[number]>>(`${id}`, opts),
  };
}

