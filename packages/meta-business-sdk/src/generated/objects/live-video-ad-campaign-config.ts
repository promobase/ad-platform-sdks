import type { ApiClient } from "@promobase/sdk-runtime";

export interface LiveVideoAdCampaignConfigFields {
  id: string;
  live_video_ad_type: string;
}

export function liveVideoAdCampaignConfigNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof LiveVideoAdCampaignConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LiveVideoAdCampaignConfigFields, F[number]>>(`${id}`, opts),
  };
}

