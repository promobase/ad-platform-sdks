import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { CatalogItemChannelsToIntegrityStatusFields } from "./catalog-item-channels-to-integrity-status.ts";
import type { DynamicVideoMetadataFields } from "./dynamic-video-metadata.ts";
import type { OverrideDetailsFields } from "./override-details.ts";

export interface AutomotiveModelFields {
  applinks: CatalogItemAppLinksFields;
  automotive_model_id: string;
  availability: string;
  body_style: string;
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
  drivetrain: string;
  exterior_color: string;
  finance_description: string;
  finance_type: string;
  fuel_type: string;
  generation: string;
  id: string;
  image_fetch_status: string;
  images: string[];
  interior_color: string;
  interior_upholstery: string;
  make: string;
  model: string;
  price: string;
  sanitized_images: string[];
  title: string;
  transmission: string;
  trim: string;
  unit_price: Record<string, unknown>;
  url: string;
  visibility: string;
  year: number;
}

export interface AutomotiveModelListOverrideDetailsParams {
  keys?: string[];
  type?: string;
  [key: string]: unknown;
}

export function automotiveModelNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AutomotiveModelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AutomotiveModelFields, F[number]>>(`${id}`, opts),
    channelsToIntegrityStatus: <F extends (keyof CatalogItemChannelsToIntegrityStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogItemChannelsToIntegrityStatusFields, F[number]>>(client, `${id}/channels_to_integrity_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    overrideDetails: <F extends (keyof OverrideDetailsFields)[]>(opts: { fields: F; params?: AutomotiveModelListOverrideDetailsParams }) =>
      new Cursor<Pick<OverrideDetailsFields, F[number]>>(client, `${id}/override_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    videosMetadata: <F extends (keyof DynamicVideoMetadataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<DynamicVideoMetadataFields, F[number]>>(client, `${id}/videos_metadata`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

