import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AutomotiveModelFields } from "./automotive-model.ts";
import type { DestinationFields } from "./destination.ts";
import type { FlightFields } from "./flight.ts";
import type { HomeListingFields } from "./home-listing.ts";
import type { HotelFields } from "./hotel.ts";
import type { ProductFeedRuleFields } from "./product-feed-rule.ts";
import type { ProductFeedScheduleFields } from "./product-feed-schedule.ts";
import type { ProductFeedUploadFields } from "./product-feed-upload.ts";
import type { ProductItemFields } from "./product-item.ts";
import type { VehicleFields } from "./vehicle.ts";
import type { VehicleOfferFields } from "./vehicle-offer.ts";
import type { ProductFeedDelimiter, ProductFeedIngestionSourceType, ProductFeedQuotedFieldsMode } from "../enums.ts";

export interface ProductFeedFields {
  country: string;
  created_time: string;
  default_currency: string;
  deletion_enabled: boolean;
  delimiter: ProductFeedDelimiter;
  encoding: string;
  file_name: string;
  id: string;
  ingestion_source_type: ProductFeedIngestionSourceType;
  item_sub_type: string;
  latest_upload: ProductFeedUploadFields;
  migrated_from_feed_id: string;
  name: string;
  override_type: string;
  primary_feeds: string[];
  product_count: number;
  quoted_fields_mode: ProductFeedQuotedFieldsMode;
  schedule: ProductFeedScheduleFields;
  supplementary_feeds: string[];
  update_schedule: ProductFeedScheduleFields;
}

export interface ProductFeedListAutomotiveModelsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductFeedListDestinationsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductFeedListFlightsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductFeedListHomeListingsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductFeedListHotelsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductFeedListProductsParams {
  bulk_pagination?: boolean;
  error_priority?: string;
  error_type?: string;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductFeedCreateRulesParams {
  attribute: string;
  params?: Record<string, unknown>;
  rule_type: string;
  [key: string]: unknown;
}

export interface ProductFeedCreateSupplementaryFeedAssocsParams {
  assoc_data: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface ProductFeedCreateUploadSchedulesParams {
  upload_schedule?: string;
  [key: string]: unknown;
}

export interface ProductFeedCreateUploadsParams {
  fbe_external_business_id?: string;
  file?: File | Blob | ReadableStream;
  password?: string;
  update_only?: boolean;
  url?: string;
  username?: string;
  [key: string]: unknown;
}

export interface ProductFeedListVehicleOffersParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductFeedListVehiclesParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductFeedUpdateParams {
  default_currency?: string;
  deletion_enabled?: boolean;
  delimiter?: string;
  encoding?: string;
  migrated_from_feed_id?: string;
  name?: string;
  quoted_fields_mode?: string;
  schedule?: string;
  update_schedule?: string;
  [key: string]: unknown;
}

export function productFeedNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductFeedFields,
    get: <F extends (keyof ProductFeedFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductFeedFields, F[number]>>(`${id}`, opts),
    update: (params: ProductFeedUpdateParams) =>
      client.post<ProductFeedFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    automotiveModels: <F extends (keyof AutomotiveModelFields)[]>(opts: { fields: F; params?: ProductFeedListAutomotiveModelsParams }) =>
      new Cursor<Pick<AutomotiveModelFields, F[number]>>(client, `${id}/automotive_models`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    destinations: <F extends (keyof DestinationFields)[]>(opts: { fields: F; params?: ProductFeedListDestinationsParams }) =>
      new Cursor<Pick<DestinationFields, F[number]>>(client, `${id}/destinations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    flights: <F extends (keyof FlightFields)[]>(opts: { fields: F; params?: ProductFeedListFlightsParams }) =>
      new Cursor<Pick<FlightFields, F[number]>>(client, `${id}/flights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    homeListings: <F extends (keyof HomeListingFields)[]>(opts: { fields: F; params?: ProductFeedListHomeListingsParams }) =>
      new Cursor<Pick<HomeListingFields, F[number]>>(client, `${id}/home_listings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    hotels: <F extends (keyof HotelFields)[]>(opts: { fields: F; params?: ProductFeedListHotelsParams }) =>
      new Cursor<Pick<HotelFields, F[number]>>(client, `${id}/hotels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    products: <F extends (keyof ProductItemFields)[]>(opts: { fields: F; params?: ProductFeedListProductsParams }) =>
      new Cursor<Pick<ProductItemFields, F[number]>>(client, `${id}/products`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    rules: {
      __path: `${id}/rules`,
      __brand: undefined as unknown as ProductFeedRuleFields,
      list: <F extends (keyof ProductFeedRuleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProductFeedRuleFields, F[number]>>(client, `${id}/rules`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductFeedCreateRulesParams) =>
        client.post<ProductFeedRuleFields>(`${id}/rules`, params as Record<string, unknown>),
    },
    createSupplementaryFeedAssoc: (params: ProductFeedCreateSupplementaryFeedAssocsParams) =>
      client.post<Record<string, unknown>>(`${id}/supplementary_feed_assocs`, params as Record<string, unknown>),
    uploadSchedules: {
      __path: `${id}/upload_schedules`,
      __brand: undefined as unknown as ProductFeedScheduleFields,
      list: <F extends (keyof ProductFeedScheduleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProductFeedScheduleFields, F[number]>>(client, `${id}/upload_schedules`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductFeedCreateUploadSchedulesParams) =>
        client.post<ProductFeedFields>(`${id}/upload_schedules`, params as Record<string, unknown>),
    },
    uploads: {
      __path: `${id}/uploads`,
      __brand: undefined as unknown as ProductFeedUploadFields,
      list: <F extends (keyof ProductFeedUploadFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProductFeedUploadFields, F[number]>>(client, `${id}/uploads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductFeedCreateUploadsParams) =>
        client.post<ProductFeedUploadFields>(`${id}/uploads`, params as Record<string, unknown>),
    },
    vehicleOffers: <F extends (keyof VehicleOfferFields)[]>(opts: { fields: F; params?: ProductFeedListVehicleOffersParams }) =>
      new Cursor<Pick<VehicleOfferFields, F[number]>>(client, `${id}/vehicle_offers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    vehicles: <F extends (keyof VehicleFields)[]>(opts: { fields: F; params?: ProductFeedListVehiclesParams }) =>
      new Cursor<Pick<VehicleFields, F[number]>>(client, `${id}/vehicles`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

