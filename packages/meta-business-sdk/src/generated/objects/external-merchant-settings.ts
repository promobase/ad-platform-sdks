import type { ApiClient } from "@promobase/sdk-runtime";

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

