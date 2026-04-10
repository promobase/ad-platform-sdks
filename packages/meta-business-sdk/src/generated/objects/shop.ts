import type { ApiClient } from "@promobase/sdk-runtime";
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
    get: <F extends (keyof ShopFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ShopFields, F[number]>>(`${id}`, opts),
  };
}

