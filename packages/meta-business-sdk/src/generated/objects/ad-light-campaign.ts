// @generated
// fingerprint: sha256:bdb00b0fb1fd78ae640ad4942622d92851855cc2b8689137c1d69be14078ef29
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface AdLightCampaignFields {
  campaign_id: string;
  id: string;
}

export function adLightCampaignNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdLightCampaignFields,
    get: <F extends (keyof AdLightCampaignFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdLightCampaignFields, F[number]>>(`${id}`, opts),
  };
}

