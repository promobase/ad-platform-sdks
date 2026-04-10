import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { CatalogItemChannelsToIntegrityStatusFields } from "./catalog-item-channels-to-integrity-status.ts";
import type { DynamicVideoMetadataFields } from "./dynamic-video-metadata.ts";
import type { HotelRoomFields } from "./hotel-room.ts";
import type { OverrideDetailsFields } from "./override-details.ts";

export interface HotelFields {
  address: string;
  applinks: CatalogItemAppLinksFields;
  brand: string;
  category: string;
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
  guest_ratings: string;
  hotel_id: string;
  id: string;
  image_fetch_status: string;
  images: string[];
  lowest_base_price: string;
  loyalty_program: string;
  margin_level: number;
  name: string;
  phone: string;
  product_priority_0: number;
  product_priority_1: number;
  product_priority_2: number;
  product_priority_3: number;
  product_priority_4: number;
  sale_price: string;
  sanitized_images: string[];
  star_rating: number;
  tags: string[];
  unit_price: Record<string, unknown>;
  url: string;
  visibility: string;
}

export interface HotelListOverrideDetailsParams {
  keys?: string[];
  type?: string;
  [key: string]: unknown;
}

export interface HotelUpdateParams {
  address?: Record<string, unknown>;
  applinks?: Record<string, unknown>;
  base_price?: number;
  brand?: string;
  currency?: string;
  description?: string;
  guest_ratings?: Record<string, unknown>[];
  images?: Record<string, unknown>[];
  name?: string;
  phone?: string;
  star_rating?: number;
  url?: string;
  [key: string]: unknown;
}

export function hotelNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof HotelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<HotelFields, F[number]>>(`${id}`, opts),
    update: (params: HotelUpdateParams) =>
      client.post<HotelFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    channelsToIntegrityStatus: <F extends (keyof CatalogItemChannelsToIntegrityStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogItemChannelsToIntegrityStatusFields, F[number]>>(client, `${id}/channels_to_integrity_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    hotelRooms: <F extends (keyof HotelRoomFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<HotelRoomFields, F[number]>>(client, `${id}/hotel_rooms`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    overrideDetails: <F extends (keyof OverrideDetailsFields)[]>(opts: { fields: F; params?: HotelListOverrideDetailsParams }) =>
      new Cursor<Pick<OverrideDetailsFields, F[number]>>(client, `${id}/override_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    videosMetadata: <F extends (keyof DynamicVideoMetadataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<DynamicVideoMetadataFields, F[number]>>(client, `${id}/videos_metadata`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

