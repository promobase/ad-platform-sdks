// @generated
// fingerprint: sha256:06b011dd35f01abfcdd461cc288b0df3359e6fa3de53979f7ac9a326b4e17d75
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface AdLightAdgroupFields {
  adset_id: string;
  id: string;
}

export function adLightAdgroupNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdLightAdgroupFields,
    get: <F extends (keyof AdLightAdgroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdLightAdgroupFields, F[number]>>(`${id}`, opts),
  };
}

