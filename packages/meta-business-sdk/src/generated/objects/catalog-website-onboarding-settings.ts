// @generated
// fingerprint: sha256:c385c8ea71377b88b4a22536ec9245c8a64fac86e83175a48ee51d101d2f9fd8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface CatalogWebsiteOnboardingSettingsFields {
  id: string;
  quality_band: string;
  status: string;
}

export function catalogWebsiteOnboardingSettingsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CatalogWebsiteOnboardingSettingsFields,
    get: <F extends (keyof CatalogWebsiteOnboardingSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CatalogWebsiteOnboardingSettingsFields, F[number]>>(`${id}`, opts),
  };
}

