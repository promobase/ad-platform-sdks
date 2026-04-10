import type { ApiClient } from "@promobase/sdk-runtime";

export interface CPASMerchantConfigFields {
  accepted_tos: boolean;
  beta_features: string[];
  business_outcomes_status: Record<string, string>[];
  id: string;
  is_test_merchant: boolean;
  outcomes_compliance_status: Record<string, Record<string, unknown>>[];
  qualified_to_onboard: boolean;
}

export function cPASMerchantConfigNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CPASMerchantConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASMerchantConfigFields, F[number]>>(`${id}`, opts),
  };
}

