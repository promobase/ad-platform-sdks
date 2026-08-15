// @generated
// fingerprint: sha256:8c420b044f4d51165d136e026b4ae7454c92edd4d527ca09423a83fd44158759
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as CPASMerchantConfigFields,
    get: <F extends (keyof CPASMerchantConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASMerchantConfigFields, F[number]>>(`${id}`, opts),
  };
}

