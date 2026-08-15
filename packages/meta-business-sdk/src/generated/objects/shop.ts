// @generated
// fingerprint: sha256:600b42ff94c29fc565c93c4e689bc4f165e52a177dc23d2578179b11b069138a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { CommerceMerchantSettingsFields } from "./commerce-merchant-settings.ts";

export interface ShopFields {
  commerce_merchant_settings: CommerceMerchantSettingsFields;
  fb_sales_channel: Record<string, unknown>;
  id: string;
  ig_sales_channel: Record<string, unknown>;
  shop_status: string;
  workspace: Record<string, unknown>;
}

export function shopNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ShopFields,
    get: <F extends (keyof ShopFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ShopFields, F[number]>>(`${id}`, opts),
  };
}

