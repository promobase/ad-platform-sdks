import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AutomotiveModelFields } from "./automotive-model.ts";
import type { DestinationFields } from "./destination.ts";
import type { FlightFields } from "./flight.ts";
import type { HomeListingFields } from "./home-listing.ts";
import type { HotelFields } from "./hotel.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { ProductItemFields } from "./product-item.ts";
import type { ProductSetMetadataFields } from "./product-set-metadata.ts";
import type { VehicleFields } from "./vehicle.ts";
import type { VehicleOfferFields } from "./vehicle-offer.ts";

export interface ProductSetFields {
  auto_creation_url: string;
  filter: string;
  id: string;
  latest_metadata: ProductSetMetadataFields;
  live_metadata: ProductSetMetadataFields;
  name: string;
  ordering_info: number[];
  product_catalog: ProductCatalogFields;
  product_count: number;
  retailer_id: string;
}

export interface ProductSetListAutomotiveModelsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductSetListDestinationsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductSetListFlightsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductSetListHomeListingsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductSetListHotelsParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductSetListProductsParams {
  bulk_pagination?: boolean;
  error_priority?: string;
  error_type?: string;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductSetListVehicleOffersParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductSetListVehiclesParams {
  bulk_pagination?: boolean;
  filter?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ProductSetUpdateParams {
  filter?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  name?: string;
  ordering_info?: number[];
  publish_to_shops?: Record<string, unknown>[];
  retailer_id?: string;
  [key: string]: unknown;
}

export function productSetNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductSetFields,
    get: <F extends (keyof ProductSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductSetFields, F[number]>>(`${id}`, opts),
    update: (params: ProductSetUpdateParams) =>
      client.post<ProductSetFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    automotiveModels: <F extends (keyof AutomotiveModelFields)[]>(opts: { fields: F; params?: ProductSetListAutomotiveModelsParams }) =>
      new Cursor<Pick<AutomotiveModelFields, F[number]>>(client, `${id}/automotive_models`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    destinations: <F extends (keyof DestinationFields)[]>(opts: { fields: F; params?: ProductSetListDestinationsParams }) =>
      new Cursor<Pick<DestinationFields, F[number]>>(client, `${id}/destinations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    flights: <F extends (keyof FlightFields)[]>(opts: { fields: F; params?: ProductSetListFlightsParams }) =>
      new Cursor<Pick<FlightFields, F[number]>>(client, `${id}/flights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    homeListings: <F extends (keyof HomeListingFields)[]>(opts: { fields: F; params?: ProductSetListHomeListingsParams }) =>
      new Cursor<Pick<HomeListingFields, F[number]>>(client, `${id}/home_listings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    hotels: <F extends (keyof HotelFields)[]>(opts: { fields: F; params?: ProductSetListHotelsParams }) =>
      new Cursor<Pick<HotelFields, F[number]>>(client, `${id}/hotels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    products: <F extends (keyof ProductItemFields)[]>(opts: { fields: F; params?: ProductSetListProductsParams }) =>
      new Cursor<Pick<ProductItemFields, F[number]>>(client, `${id}/products`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    vehicleOffers: <F extends (keyof VehicleOfferFields)[]>(opts: { fields: F; params?: ProductSetListVehicleOffersParams }) =>
      new Cursor<Pick<VehicleOfferFields, F[number]>>(client, `${id}/vehicle_offers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    vehicles: <F extends (keyof VehicleFields)[]>(opts: { fields: F; params?: ProductSetListVehiclesParams }) =>
      new Cursor<Pick<VehicleFields, F[number]>>(client, `${id}/vehicles`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

