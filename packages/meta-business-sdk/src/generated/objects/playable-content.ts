// @generated
// fingerprint: sha256:275bc75fed981582ef697224d106e3c3d1fe1595b0366825f763655112919ab1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { ProfileFields } from "./profile.ts";

export interface PlayableContentFields {
  id: string;
  name: string;
  owner: ProfileFields;
}

export function playableContentNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PlayableContentFields,
    get: <F extends (keyof PlayableContentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PlayableContentFields, F[number]>>(`${id}`, opts),
  };
}

