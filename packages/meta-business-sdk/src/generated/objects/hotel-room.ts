// @generated
// fingerprint: sha256:661f07ef7e77f846bebc46eb4fdf39db7af4d728a4ee5e334fe2f1ef56afb110
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { AppLinksFields } from "./app-links.ts";
import type { CatalogItemAppLinksFields } from "./catalog-item-app-links.ts";
import type { DynamicPriceConfigByDateFields } from "./dynamic-price-config-by-date.ts";

export interface HotelRoomFields {
  applinks: CatalogItemAppLinksFields;
  base_price: string;
  currency: string;
  description: string;
  id: string;
  images: string[];
  margin_level: string;
  name: string;
  room_id: string;
  sale_price: string;
  url: string;
}

export function hotelRoomNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as HotelRoomFields,
    get: <F extends (keyof HotelRoomFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<HotelRoomFields, F[number]>>(`${id}`, opts),
    pricingVariables: <F extends (keyof DynamicPriceConfigByDateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<DynamicPriceConfigByDateFields, F[number]>>(client, `${id}/pricing_variables`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

