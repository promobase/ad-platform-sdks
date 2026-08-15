// @generated
// fingerprint: sha256:f62c8faa2c2de745ef702d74a36743d67e168764f6159b719bbbefc8113b1f2a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface PersonaFields {
  id: string;
  name: string;
  profile_picture_url: string;
}

export function personaNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PersonaFields,
    get: <F extends (keyof PersonaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PersonaFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

