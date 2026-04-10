import type { ApiClient } from "@promobase/sdk-runtime";

export interface CatalogWebsiteSettingsFields {
  id: string;
  is_allowed_to_crawl: boolean;
}

export function catalogWebsiteSettingsNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CatalogWebsiteSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CatalogWebsiteSettingsFields, F[number]>>(`${id}`, opts),
  };
}

