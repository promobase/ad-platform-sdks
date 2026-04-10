import type { ApiClient } from "@promobase/sdk-runtime";

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

