// @generated
// fingerprint: sha256:e66e24ba57f4a504515a3225de3a2ce5ebe5c5825fa392d16818974a4aba03c8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface UserContextFields {
  id: string;
}

export function userContextNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as UserContextFields,
    get: <F extends (keyof UserContextFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<UserContextFields, F[number]>>(`${id}`, opts),
  };
}

