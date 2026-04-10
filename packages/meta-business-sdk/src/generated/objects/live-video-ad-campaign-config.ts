import type { ApiClient } from "@promobase/sdk-runtime";

export interface LiveVideoAdCampaignConfigFields {
  id: string;
  live_video_ad_type: string;
}

export function liveVideoAdCampaignConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as LiveVideoAdCampaignConfigFields,
    get: <F extends (keyof LiveVideoAdCampaignConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LiveVideoAdCampaignConfigFields, F[number]>>(`${id}`, opts),
  };
}

