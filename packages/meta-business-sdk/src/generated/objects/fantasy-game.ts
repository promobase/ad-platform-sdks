// @generated
// fingerprint: sha256:11b532b98024295fb2580f2af625e04eb8614c490c529c0aa9d7e5e370aa994d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface FantasyGameFields {
  id: string;
  name: string;
}

export function fantasyGameNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as FantasyGameFields,
    get: <F extends (keyof FantasyGameFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FantasyGameFields, F[number]>>(`${id}`, opts),
  };
}

