import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";

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
  pre_order_details: Record<string, unknown>;
  selected_shipping_option: Record<string, unknown>;
  ship_by_date: string;
  shipping_address: Record<string, unknown>;
}

export interface CommerceOrderListReturnsParams {
  merchant_return_id?: string;
  statuses?: string[];
  [key: string]: unknown;
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
    get: <F extends (keyof CommerceOrderFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CommerceOrderFields, F[number]>>(`${id}`, opts),
    cancellations: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/cancellations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    items: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/items`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    payments: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/payments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    promotionDetails: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/promotion_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    promotions: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/promotions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    refunds: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/refunds`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    returns: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: CommerceOrderListReturnsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/returns`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    shipments: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/shipments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: CommerceOrderCreateShipmentsParams) =>
        client.post<CommerceOrderFields>(`${id}/shipments`, params as Record<string, unknown>),
    },
  };
}

