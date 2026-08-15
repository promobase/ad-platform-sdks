// @generated
// fingerprint: sha256:99b4eef1f85defe99a37edaf52b9f8acc23190dcc3260f6c6b42b2d91ee310b4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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

