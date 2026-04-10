import type { ApiClient } from "../../runtime/client.ts";

export interface CatalogWebsiteOnboardingSettingsFields {
  id: string;
  quality_band: string;
  status: string;
}

export function catalogWebsiteOnboardingSettingsNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CatalogWebsiteOnboardingSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CatalogWebsiteOnboardingSettingsFields, F[number]>>(`${id}`, opts),
  };
}

