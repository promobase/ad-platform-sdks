import type { ApiClient } from "@promobase/sdk-runtime";
import type { CatalogSubscribedAppsDeleteFields } from "./catalog-subscribed-apps-delete.ts";

export interface CatalogSubscribedAppsFields {
}

export function catalogSubscribedAppsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CatalogSubscribedAppsFields,
    deleteSubscribedApps: (params?: Record<string, unknown>) =>
      client.delete(`${id}/subscribed_apps`, params as Record<string, unknown> ?? {}),
  };
}

