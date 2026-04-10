import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { CatalogItemChannelsToIntegrityStatusFields } from "./catalog-item-channels-to-integrity-status.ts";
import type { DynamicVideoMetadataFields } from "./dynamic-video-metadata.ts";
import type { OverrideDetailsFields } from "./override-details.ts";
import type { PageFields } from "./page.ts";

export interface VehicleFields {
  address: Record<string, unknown>;
  applinks: CatalogItemAppLinksFields;
  availability: string;
  availability_circle_radius: number;
  availability_circle_radius_unit: string;
  body_style: string;
  condition: string;
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
  date_first_on_lot: string;
  dealer_communication_channel: string;
  dealer_email: string;
  dealer_id: string;
  dealer_name: string;
  dealer_phone: string;
  dealer_privacy_policy_url: string;
  description: string;
  drivetrain: string;
  exterior_color: string;
  fb_page_id: PageFields;
  features: Record<string, unknown>[];
  fuel_type: string;
  id: string;
  image_fetch_status: string;
  images: string[];
  interior_color: string;
  legal_disclosure_impressum_url: string;
  make: string;
  mileage: Record<string, unknown>;
  model: string;
  previous_currency: string;
  previous_price: string;
  price: string;
  product_priority_0: number;
  product_priority_1: number;
  product_priority_2: number;
  product_priority_3: number;
  product_priority_4: number;
  sale_currency: string;
  sale_price: string;
  sanitized_images: string[];
  state_of_vehicle: string;
  tags: string[];
  title: string;
  transmission: string;
  trim: string;
  unit_price: Record<string, unknown>;
  url: string;
  vehicle_id: string;
  vehicle_registration_plate: string;
  vehicle_specifications: Record<string, unknown>[];
  vehicle_type: string;
  vin: string;
  visibility: string;
  year: number;
}

export interface VehicleListOverrideDetailsParams {
  keys?: string[];
  type?: string;
  [key: string]: unknown;
}

export interface VehicleUpdateParams {
  address?: Record<string, unknown>;
  applinks?: Record<string, unknown>;
  availability?: string;
  body_style?: string;
  condition?: string;
  currency?: string;
  date_first_on_lot?: string;
  dealer_id?: string;
  dealer_name?: string;
  dealer_phone?: string;
  description?: string;
  drivetrain?: string;
  exterior_color?: string;
  fb_page_id?: string;
  fuel_type?: string;
  images?: Record<string, unknown>[];
  interior_color?: string;
  make?: string;
  mileage?: Record<string, unknown>;
  model?: string;
  price?: number;
  state_of_vehicle?: string;
  title?: string;
  transmission?: string;
  trim?: string;
  url?: string;
  vehicle_type?: string;
  vin?: string;
  year?: number;
  [key: string]: unknown;
}

export function vehicleNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as VehicleFields,
    get: <F extends (keyof VehicleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VehicleFields, F[number]>>(`${id}`, opts),
    update: (params: VehicleUpdateParams) =>
      client.post<VehicleFields>(`${id}`, params as Record<string, unknown>),
    channelsToIntegrityStatus: <F extends (keyof CatalogItemChannelsToIntegrityStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogItemChannelsToIntegrityStatusFields, F[number]>>(client, `${id}/channels_to_integrity_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    overrideDetails: <F extends (keyof OverrideDetailsFields)[]>(opts: { fields: F; params?: VehicleListOverrideDetailsParams }) =>
      new Cursor<Pick<OverrideDetailsFields, F[number]>>(client, `${id}/override_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    videosMetadata: <F extends (keyof DynamicVideoMetadataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<DynamicVideoMetadataFields, F[number]>>(client, `${id}/videos_metadata`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

