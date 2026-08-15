// @generated
// fingerprint: sha256:d89bb2e039304e6d5dddd58bc4aca23e2d47a4e672f32836350b1c0e0eafdf70
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    createShipment: (params: CommerceOrderCreateShipmentsParams) =>
      client.post<CommerceOrderFields>(`${id}/shipments`, params as Record<string, unknown>),
  };
}

