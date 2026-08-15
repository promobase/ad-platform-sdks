// @generated
// fingerprint: sha256:aaa748d56d0963a93bbb7c98fecefa9ac162675a7e6a99a40f4bb2cb06d69a0b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface AdLightCampaignGroupFields {
  id: string;
}

export function adLightCampaignGroupNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdLightCampaignGroupFields,
    get: <F extends (keyof AdLightCampaignGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdLightCampaignGroupFields, F[number]>>(`${id}`, opts),
  };
}

