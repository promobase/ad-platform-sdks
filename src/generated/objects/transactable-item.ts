import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { CatalogItemChannelsToIntegrityStatusFields } from "./catalog-item-channels-to-integrity-status.ts";
import type { OverrideDetailsFields } from "./override-details.ts";

export interface TransactableItemFields {
  action_title: string;
  applinks: CatalogItemAppLinksFields;
  currency: string;
  description: string;
  duration_time: number;
  duration_type: string;
  id: string;
  image_fetch_status: string;
  images: string[];
  order_index: number;
  price: string;
  price_type: string;
  sanitized_images: string[];
  session_type: string;
  time_padding_after_end: number;
  title: string;
  transactable_item_id: string;
  url: string;
  visibility: string;
}

export interface TransactableItemListOverrideDetailsParams {
  keys?: string[];
  type?: string;
  [key: string]: unknown;
}

export function transactableItemNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof TransactableItemFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<TransactableItemFields, F[number]>>(`${id}`, opts),
    channelsToIntegrityStatus: <F extends (keyof CatalogItemChannelsToIntegrityStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogItemChannelsToIntegrityStatusFields, F[number]>>(client, `${id}/channels_to_integrity_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    overrideDetails: <F extends (keyof OverrideDetailsFields)[]>(opts: { fields: F; params?: TransactableItemListOverrideDetailsParams }) =>
      new Cursor<Pick<OverrideDetailsFields, F[number]>>(client, `${id}/override_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

