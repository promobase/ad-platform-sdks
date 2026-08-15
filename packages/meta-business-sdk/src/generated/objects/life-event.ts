// @generated
// fingerprint: sha256:cfbf42e4008287cc1ab48a45cf8ea5e26c50988a2b9fa711032db1c22359bc39
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { PageFields } from "./page.ts";
import type { ProfileFields } from "./profile.ts";

export interface LifeEventFields {
  description: string;
  end_time: string;
  from: PageFields;
  id: string;
  is_hidden: boolean;
  start_time: string;
  title: string;
  updated_time: string;
}

export function lifeEventNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as LifeEventFields,
    get: <F extends (keyof LifeEventFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LifeEventFields, F[number]>>(`${id}`, opts),
    likes: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

