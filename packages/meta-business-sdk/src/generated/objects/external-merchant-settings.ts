// @generated
// fingerprint: sha256:36bd7545295d06895303427086afba3b6b36284c01f28ae7c6de52431fa2797c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface ExternalMerchantSettingsFields {
  connect_woo: string;
  external_platform: string;
  id: string;
}

export function externalMerchantSettingsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ExternalMerchantSettingsFields,
    get: <F extends (keyof ExternalMerchantSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ExternalMerchantSettingsFields, F[number]>>(`${id}`, opts),
  };
}

