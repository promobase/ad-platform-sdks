import type { ApiClient } from "../../runtime/client.ts";

export interface ExternalMerchantSettingsFields {
  connect_woo: string;
  external_platform: string;
  id: string;
}

export function externalMerchantSettingsNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ExternalMerchantSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ExternalMerchantSettingsFields, F[number]>>(`${id}`, opts),
  };
}

