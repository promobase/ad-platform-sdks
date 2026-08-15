// @generated
// fingerprint: sha256:df0f4f9cefd6441bcee553614d2494168a8d7b697d8c38ee2c6aba225991052f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";

export interface CommerceOrderFields {
  buyer_details: Record<string, unknown>;
  channel: string;
  contains_bopis_items: boolean;
  created: string;
  estimated_payment_details: Record<string, unknown>;
  id: string;
  is_group_buy: boolean;
  is_test_order: boolean;
  last_updated: string;
  merchant_order_id: string;
  order_status: Record<string, unknown>;
  selected_shipping_option: Record<string, unknown>;
  ship_by_date: string;
  shipping_address: Record<string, unknown>;
}

export interface CommerceOrderCreateShipmentsParams {
  external_redemption_link?: string;
  external_shipment_id?: string;
  fulfillment?: Record<string, unknown>;
  idempotency_key: string;
  items?: Record<string, unknown>[];
  merchant_order_reference?: string;
  shipment_origin_postal_code?: string;
  shipping_tax_details?: Record<string, unknown>;
  should_use_default_fulfillment_location?: boolean;
  tracking_info?: Record<string, unknown>;
  [key: string]: unknown;
}

export function commerceOrderNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CommerceOrderFields,
    get: <F extends (keyof CommerceOrderFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CommerceOrderFields, F[number]>>(`${id}`, opts),
    cancellations: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/cancellations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    items: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/items`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    payments: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/payments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    refunds: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/refunds`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    shipments: {
      __path: `${id}/shipments`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/shipments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
      create: (params: CommerceOrderCreateShipmentsParams) =>
        client.post<CommerceOrderFields>(`${id}/shipments`, params as Record<string, unknown>),
    },
  };
}

