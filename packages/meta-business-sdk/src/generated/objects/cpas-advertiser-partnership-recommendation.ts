// @generated
// fingerprint: sha256:55c29caaaed30ff0cdf31c6ace019df21433402ed11fe7b2ef97aa173fa1b8ec
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface CPASAdvertiserPartnershipRecommendationFields {
  advertiser_business_id: string;
  brand_business_id: string;
  brands: string[];
  countries: string[];
  id: string;
  merchant_business_id: string;
  merchant_categories: string[];
  status: string;
  status_reason: string;
}

export function cPASAdvertiserPartnershipRecommendationNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CPASAdvertiserPartnershipRecommendationFields,
    get: <F extends (keyof CPASAdvertiserPartnershipRecommendationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASAdvertiserPartnershipRecommendationFields, F[number]>>(`${id}`, opts),
  };
}

