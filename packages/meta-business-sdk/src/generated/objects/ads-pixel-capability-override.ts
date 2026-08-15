// @generated
// fingerprint: sha256:1c9146dc7bb2d37a458a233372000288098b8d21f7f5764d4fd6b811c15e5e03
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

