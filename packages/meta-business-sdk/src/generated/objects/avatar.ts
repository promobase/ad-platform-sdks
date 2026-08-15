// @generated
// fingerprint: sha256:596ea8fb81b0afedc4ba49c7ee59b52bdd20be5193a7ceacfee9571ba1094126
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface AvatarFields {
  id: string;
}

export function avatarNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AvatarFields,
    get: <F extends (keyof AvatarFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AvatarFields, F[number]>>(`${id}`, opts),
  };
}

