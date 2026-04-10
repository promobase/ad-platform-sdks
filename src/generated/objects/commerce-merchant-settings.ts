import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { ApplicationFields } from "./application.ts";
import type { CommerceMerchantSettingsSetupStatusFields } from "./commerce-merchant-settings-setup-status.ts";
import type { CommerceOrderFields } from "./commerce-order.ts";
import type { CommerceOrderTransactionDetailFields } from "./commerce-order-transaction-detail.ts";
import type { CommercePayoutFields } from "./commerce-payout.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { ProfileFields } from "./profile.ts";
import type { ShopFields } from "./shop.ts";

export interface CommerceMerchantSettingsFields {
  checkout_config: string;
  contact_email: string;
  cta: string;
  display_name: string;
  facebook_channel: Record<string, unknown>;
  id: string;
  instagram_channel: Record<string, unknown>;
  korea_ftc_listing: string;
  merchant_page: ProfileFields;
  merchant_status: string;
  offsite_iab_checkout_enabled_countries: string[];
  payment_provider: string;
  privacy_policy_localized: string;
  shops_ads_setup: Record<string, unknown>;
  terms: string;
}

export interface CommerceMerchantSettingsListCommerceOrdersParams {
  filters?: string[];
  state?: string[];
  updated_after?: string;
  updated_before?: string;
  [key: string]: unknown;
}

export interface CommerceMerchantSettingsListCommercePayoutsParams {
  end_time?: string;
  start_time?: string;
  [key: string]: unknown;
}

export interface CommerceMerchantSettingsListCommerceTransactionsParams {
  end_time?: string;
  payout_reference_id?: string;
  start_time?: string;
  [key: string]: unknown;
}

export interface CommerceMerchantSettingsListReturnsParams {
  end_time_created?: string;
  merchant_return_id?: string;
  start_time_created?: string;
  statuses?: string[];
  [key: string]: unknown;
}

export interface CommerceMerchantSettingsCreateShippingProfilesParams {
  handling_time?: Record<string, unknown>;
  is_default?: boolean;
  is_default_shipping_profile?: boolean;
  name: string;
  reference_id?: string;
  shipping_destinations: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface CommerceMerchantSettingsUpdateParams {
  checkout_config?: Record<string, unknown>;
  korea_ftc_listing?: string;
  merchant_status?: string;
  privacy_policy_localized?: Record<string, unknown>;
  [key: string]: unknown;
}

export function commerceMerchantSettingsNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CommerceMerchantSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CommerceMerchantSettingsFields, F[number]>>(`${id}`, opts),
    update: (params: CommerceMerchantSettingsUpdateParams) =>
      client.post<CommerceMerchantSettingsFields>(`${id}`, params as Record<string, unknown>),
    commerceOrders: <F extends (keyof CommerceOrderFields)[]>(opts: { fields: F; params?: CommerceMerchantSettingsListCommerceOrdersParams }) =>
      new Cursor<Pick<CommerceOrderFields, F[number]>>(client, `${id}/commerce_orders`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    commercePayouts: <F extends (keyof CommercePayoutFields)[]>(opts: { fields: F; params?: CommerceMerchantSettingsListCommercePayoutsParams }) =>
      new Cursor<Pick<CommercePayoutFields, F[number]>>(client, `${id}/commerce_payouts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    commerceTransactions: <F extends (keyof CommerceOrderTransactionDetailFields)[]>(opts: { fields: F; params?: CommerceMerchantSettingsListCommerceTransactionsParams }) =>
      new Cursor<Pick<CommerceOrderTransactionDetailFields, F[number]>>(client, `${id}/commerce_transactions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    orderManagementApps: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ApplicationFields, F[number]>>(client, `${id}/order_management_apps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    productCatalogs: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductCatalogFields, F[number]>>(client, `${id}/product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    returns: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: CommerceMerchantSettingsListReturnsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/returns`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    setupStatus: <F extends (keyof CommerceMerchantSettingsSetupStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CommerceMerchantSettingsSetupStatusFields, F[number]>>(client, `${id}/setup_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createShippingProfile: (params: CommerceMerchantSettingsCreateShippingProfilesParams) =>
      client.post<Record<string, unknown>>(`${id}/shipping_profiles`, params as Record<string, unknown>),
    shops: <F extends (keyof ShopFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ShopFields, F[number]>>(client, `${id}/shops`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    taxSettings: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/tax_settings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

