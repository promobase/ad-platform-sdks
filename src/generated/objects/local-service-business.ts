import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { CatalogItemChannelsToIntegrityStatusFields } from "./catalog-item-channels-to-integrity-status.ts";
import type { OverrideDetailsFields } from "./override-details.ts";
import type { ProductItemLocalInfoFields } from "./product-item-local-info.ts";

export interface LocalServiceBusinessFields {
  address: Record<string, unknown>;
  applinks: CatalogItemAppLinksFields;
  availability: string;
  brand: string;
  category: string;
  condition: string;
  cuisine_type: string;
  currency: string;
  custom_label_0: string;
  custom_label_1: string;
  custom_label_2: string;
  custom_label_3: string;
  custom_label_4: string;
  custom_number_0: number;
  custom_number_1: number;
  custom_number_2: number;
  custom_number_3: number;
  custom_number_4: number;
  description: string;
  expiration_date: string;
  gtin: string;
  id: string;
  image_fetch_status: string;
  images: string[];
  local_info: ProductItemLocalInfoFields;
  local_service_business_id: string;
  main_local_info: ProductItemLocalInfoFields;
  phone: string;
  price: string;
  price_range: string;
  retailer_category: string;
  sanitized_images: string[];
  size: string;
  tags: string[];
  title: string;
  unit_price: Record<string, unknown>;
  url: string;
  vendor_id: string;
  visibility: string;
}

export interface LocalServiceBusinessListOverrideDetailsParams {
  keys?: string[];
  type?: string;
  [key: string]: unknown;
}

export function localServiceBusinessNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof LocalServiceBusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LocalServiceBusinessFields, F[number]>>(`${id}`, opts),
    channelsToIntegrityStatus: <F extends (keyof CatalogItemChannelsToIntegrityStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogItemChannelsToIntegrityStatusFields, F[number]>>(client, `${id}/channels_to_integrity_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    overrideDetails: <F extends (keyof OverrideDetailsFields)[]>(opts: { fields: F; params?: LocalServiceBusinessListOverrideDetailsParams }) =>
      new Cursor<Pick<OverrideDetailsFields, F[number]>>(client, `${id}/override_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

