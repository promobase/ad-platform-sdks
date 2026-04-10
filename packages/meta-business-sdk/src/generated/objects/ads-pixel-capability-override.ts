import type { ApiClient } from "@promobase/sdk-runtime";

export interface AdsPixelCapabilityOverrideFields {
  capability: string;
  id: string;
  override_value: string;
  reason: string;
}

export function adsPixelCapabilityOverrideNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdsPixelCapabilityOverrideFields,
    get: <F extends (keyof AdsPixelCapabilityOverrideFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsPixelCapabilityOverrideFields, F[number]>>(`${id}`, opts),
  };
}

