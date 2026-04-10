import type { ApiClient } from "@promobase/sdk-runtime";

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
    get: <F extends (keyof CPASAdvertiserPartnershipRecommendationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASAdvertiserPartnershipRecommendationFields, F[number]>>(`${id}`, opts),
  };
}

