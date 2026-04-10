import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdAccountFields } from "./ad-account.ts";

export interface AdsCreationSavedStateFields {
  ad_account: AdAccountFields;
  id: string;
  serialized_store_data: string;
  time_updated: string;
  user: Record<string, unknown>;
}

export function adsCreationSavedStateNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdsCreationSavedStateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsCreationSavedStateFields, F[number]>>(`${id}`, opts),
  };
}

