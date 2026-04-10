import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
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
    get: <F extends (keyof HotelRoomFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<HotelRoomFields, F[number]>>(`${id}`, opts),
    pricingVariables: <F extends (keyof DynamicPriceConfigByDateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<DynamicPriceConfigByDateFields, F[number]>>(client, `${id}/pricing_variables`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

