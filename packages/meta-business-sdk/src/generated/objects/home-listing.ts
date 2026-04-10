import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { CatalogItemChannelsToIntegrityStatusFields } from "./catalog-item-channels-to-integrity-status.ts";
import type { DynamicVideoMetadataFields } from "./dynamic-video-metadata.ts";
import type { OverrideDetailsFields } from "./override-details.ts";
import type { PageFields } from "./page.ts";
import type { HomeListingImageFetchStatus, HomeListingVisibility } from "../enums.ts";

export interface HomeListingFields {
  ac_type: string;
  additional_fees_description: string;
  address: Record<string, unknown>;
  agent_company: string;
  agent_email: string;
  agent_fb_page_id: PageFields;
  agent_name: string;
  agent_phone: string;
  applinks: CatalogItemAppLinksFields;
  area_size: number;
  area_unit: string;
  availability: string;
  co_2_emission_rating_eu: Record<string, unknown>;
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
  days_on_market: number;
  description: string;
  energy_rating_eu: Record<string, unknown>;
  furnish_type: string;
  group_id: string;
  heating_type: string;
  home_listing_id: string;
  id: string;
  image_fetch_status: HomeListingImageFetchStatus;
  images: string[];
  laundry_type: string;
  listing_type: string;
  max_currency: string;
  max_price: string;
  min_currency: string;
  min_price: string;
  name: string;
  num_baths: number;
  num_beds: number;
  num_rooms: number;
  num_units: number;
  parking_type: string;
  partner_verification: string;
  pet_policy: string;
  price: string;
  property_type: string;
  sanitized_images: string[];
  securitydeposit_currency: string;
  securitydeposit_price: string;
  tags: string[];
  unit_price: Record<string, unknown>;
  url: string;
  visibility: HomeListingVisibility;
  year_built: number;
}

export interface HomeListingListOverrideDetailsParams {
  keys?: string[];
  type?: string;
  [key: string]: unknown;
}

export interface HomeListingUpdateParams {
  address?: Record<string, unknown>;
  availability?: string;
  currency?: string;
  description?: string;
  images?: Record<string, unknown>[];
  listing_type?: string;
  name?: string;
  num_baths?: number;
  num_beds?: number;
  num_units?: number;
  price?: number;
  property_type?: string;
  url?: string;
  year_built?: number;
  [key: string]: unknown;
}

export function homeListingNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as HomeListingFields,
    get: <F extends (keyof HomeListingFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<HomeListingFields, F[number]>>(`${id}`, opts),
    update: (params: HomeListingUpdateParams) =>
      client.post<HomeListingFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    channelsToIntegrityStatus: <F extends (keyof CatalogItemChannelsToIntegrityStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogItemChannelsToIntegrityStatusFields, F[number]>>(client, `${id}/channels_to_integrity_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    overrideDetails: <F extends (keyof OverrideDetailsFields)[]>(opts: { fields: F; params?: HomeListingListOverrideDetailsParams }) =>
      new Cursor<Pick<OverrideDetailsFields, F[number]>>(client, `${id}/override_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    videosMetadata: <F extends (keyof DynamicVideoMetadataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<DynamicVideoMetadataFields, F[number]>>(client, `${id}/videos_metadata`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

