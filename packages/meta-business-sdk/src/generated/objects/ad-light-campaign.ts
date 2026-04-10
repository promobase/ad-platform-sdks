import type { ApiClient } from "@promobase/sdk-runtime";

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

