// @generated
// fingerprint: sha256:7ddbf5c186b60ea5205ab0af2b42537361d22a7eee385f151d8ee28f701f01ec
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { UserFields } from "./user.ts";

export interface WorkSkillFields {
  id: string;
  name: string;
}

export function workSkillNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WorkSkillFields,
    get: <F extends (keyof WorkSkillFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WorkSkillFields, F[number]>>(`${id}`, opts),
    users: <F extends (keyof UserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<UserFields, F[number]>>(client, `${id}/users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

