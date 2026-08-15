// @generated
// fingerprint: sha256:ee4cdf886b7e46856516aa30d623ef888cd17dc22070a28cbcd7b113b7554688
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

