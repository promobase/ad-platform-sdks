import type { ApiClient } from "@promobase/sdk-runtime";

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

