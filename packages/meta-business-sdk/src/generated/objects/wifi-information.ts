import type { ApiClient } from "@promobase/sdk-runtime";

export interface WifiInformationFields {
  id: string;
  name: string;
  network_access_type: string;
}

export function wifiInformationNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WifiInformationFields,
    get: <F extends (keyof WifiInformationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WifiInformationFields, F[number]>>(`${id}`, opts),
  };
}

