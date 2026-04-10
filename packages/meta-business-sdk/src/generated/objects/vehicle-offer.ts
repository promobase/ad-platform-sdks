import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { CatalogItemChannelsToIntegrityStatusFields } from "./catalog-item-channels-to-integrity-status.ts";
import type { DynamicVideoMetadataFields } from "./dynamic-video-metadata.ts";
import type { OverrideDetailsFields } from "./override-details.ts";

export interface VehicleOfferFields {
  amount_currency: string;
  amount_percentage: number;
  amount_price: string;
  amount_qualifier: string;
  applinks: CatalogItemAppLinksFields;
  availability: string;
  body_style: string;
  cashback_currency: string;
  cashback_price: string;
  comscore_market_codes: string[];
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
  dma_codes: string[];
  downpayment_currency: string;
  downpayment_price: string;
  downpayment_qualifier: string;
  drivetrain: string;
  end_date: string;
  end_time: number;
  exterior_color: string;
  fuel_type: string;
  generation: string;
  id: string;
  image_fetch_status: string;
  images: string[];
  interior_color: string;
  interior_upholstery: string;
  make: string;
  model: string;
  offer_description: string;
  offer_disclaimer: string;
  offer_type: string;
  price: string;
  product_priority_0: number;
  product_priority_1: number;
  product_priority_2: number;
  product_priority_3: number;
  product_priority_4: number;
  sanitized_images: string[];
  start_date: string;
  start_time: number;
  tags: string[];
  term_length: number;
  term_qualifier: string;
  title: string;
  transmission: string;
  trim: string;
  unit_price: Record<string, unknown>;
  url: string;
  vehicle_offer_id: string;
  visibility: string;
  year: number;
}

export interface VehicleOfferListOverrideDetailsParams {
  keys?: string[];
  type?: string;
  [key: string]: unknown;
}

export function vehicleOfferNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as VehicleOfferFields,
    get: <F extends (keyof VehicleOfferFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VehicleOfferFields, F[number]>>(`${id}`, opts),
    channelsToIntegrityStatus: <F extends (keyof CatalogItemChannelsToIntegrityStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogItemChannelsToIntegrityStatusFields, F[number]>>(client, `${id}/channels_to_integrity_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    overrideDetails: <F extends (keyof OverrideDetailsFields)[]>(opts: { fields: F; params?: VehicleOfferListOverrideDetailsParams }) =>
      new Cursor<Pick<OverrideDetailsFields, F[number]>>(client, `${id}/override_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    videosMetadata: <F extends (keyof DynamicVideoMetadataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<DynamicVideoMetadataFields, F[number]>>(client, `${id}/videos_metadata`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

