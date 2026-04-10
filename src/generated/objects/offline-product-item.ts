import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { CatalogItemChannelsToIntegrityStatusFields } from "./catalog-item-channels-to-integrity-status.ts";
import type { OverrideDetailsFields } from "./override-details.ts";

export interface OfflineProductItemFields {
  applinks: CatalogItemAppLinksFields;
  brand: string;
  category: string;
  currency: string;
  description: string;
  id: string;
  image_fetch_status: string;
  image_url: string;
  images: string[];
  name: string;
  offline_product_item_id: string;
  price: string;
  sanitized_images: string[];
  url: string;
  visibility: string;
}

export interface OfflineProductItemListOverrideDetailsParams {
  keys?: string[];
  type?: string;
  [key: string]: unknown;
}

export function offlineProductItemNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof OfflineProductItemFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OfflineProductItemFields, F[number]>>(`${id}`, opts),
    channelsToIntegrityStatus: <F extends (keyof CatalogItemChannelsToIntegrityStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogItemChannelsToIntegrityStatusFields, F[number]>>(client, `${id}/channels_to_integrity_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    overrideDetails: <F extends (keyof OverrideDetailsFields)[]>(opts: { fields: F; params?: OfflineProductItemListOverrideDetailsParams }) =>
      new Cursor<Pick<OverrideDetailsFields, F[number]>>(client, `${id}/override_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

