import type { ApiClient } from "../../runtime/client.ts";

export interface AdsPixelCapabilityOverrideFields {
  capability: string;
  id: string;
  override_value: string;
  reason: string;
}

export function adsPixelCapabilityOverrideNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdsPixelCapabilityOverrideFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsPixelCapabilityOverrideFields, F[number]>>(`${id}`, opts),
  };
}

