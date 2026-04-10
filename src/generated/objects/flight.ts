import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { CatalogItemChannelsToIntegrityStatusFields } from "./catalog-item-channels-to-integrity-status.ts";
import type { DynamicVideoMetadataFields } from "./dynamic-video-metadata.ts";
import type { OverrideDetailsFields } from "./override-details.ts";

export interface FlightFields {
  applinks: CatalogItemAppLinksFields;
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
  destination_airport: string;
  destination_city: string;
  flight_id: string;
  id: string;
  image_fetch_status: string;
  images: string[];
  oneway_currency: string;
  oneway_price: string;
  origin_airport: string;
  origin_city: string;
  price: string;
  product_priority_0: number;
  product_priority_1: number;
  product_priority_2: number;
  product_priority_3: number;
  product_priority_4: number;
  sanitized_images: string[];
  tags: string[];
  unit_price: Record<string, unknown>;
  url: string;
  visibility: string;
}

export interface FlightListOverrideDetailsParams {
  keys?: string[];
  type?: string;
  [key: string]: unknown;
}

export interface FlightUpdateParams {
  currency?: string;
  description?: string;
  destination_airport?: string;
  destination_city?: string;
  images?: Record<string, unknown>[];
  origin_airport?: string;
  origin_city?: string;
  price?: number;
  url?: string;
  [key: string]: unknown;
}

export function flightNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof FlightFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FlightFields, F[number]>>(`${id}`, opts),
    update: (params: FlightUpdateParams) =>
      client.post<FlightFields>(`${id}`, params as Record<string, unknown>),
    channelsToIntegrityStatus: <F extends (keyof CatalogItemChannelsToIntegrityStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogItemChannelsToIntegrityStatusFields, F[number]>>(client, `${id}/channels_to_integrity_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    overrideDetails: <F extends (keyof OverrideDetailsFields)[]>(opts: { fields: F; params?: FlightListOverrideDetailsParams }) =>
      new Cursor<Pick<OverrideDetailsFields, F[number]>>(client, `${id}/override_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    videosMetadata: <F extends (keyof DynamicVideoMetadataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<DynamicVideoMetadataFields, F[number]>>(client, `${id}/videos_metadata`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

