import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface CollaborativeAdsShareSettingsFields {
  agency_business: BusinessFields;
  id: string;
  product_catalog_proxy_id: string;
  utm_campaign: string;
  utm_medium: string;
  utm_source: string;
}

export function collaborativeAdsShareSettingsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CollaborativeAdsShareSettingsFields,
    get: <F extends (keyof CollaborativeAdsShareSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CollaborativeAdsShareSettingsFields, F[number]>>(`${id}`, opts),
  };
}

