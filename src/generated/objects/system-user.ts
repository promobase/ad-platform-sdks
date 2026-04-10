import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { BusinessAssetGroupFields } from "./business-asset-group.ts";
import type { PageFields } from "./page.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { UserFields } from "./user.ts";
import type { WhatsAppBusinessAccountFields } from "./whats-app-business-account.ts";

export interface SystemUserFields {
  created_by: UserFields;
  created_time: string;
  finance_permission: string;
  id: string;
  ip_permission: string;
  name: string;
}

export interface SystemUserListAssignedBusinessAssetGroupsParams {
  contained_asset_id?: string;
  [key: string]: unknown;
}

export interface SystemUserListAssignedPagesParams {
  pages?: number[];
  [key: string]: unknown;
}

export function systemUserNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof SystemUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SystemUserFields, F[number]>>(`${id}`, opts),
    assignedAdAccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/assigned_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedBusinessAssetGroups: <F extends (keyof BusinessAssetGroupFields)[]>(opts: { fields: F; params?: SystemUserListAssignedBusinessAssetGroupsParams }) =>
      new Cursor<Pick<BusinessAssetGroupFields, F[number]>>(client, `${id}/assigned_business_asset_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedPages: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: SystemUserListAssignedPagesParams }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/assigned_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedProductCatalogs: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductCatalogFields, F[number]>>(client, `${id}/assigned_product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedWhatsappBusinessAccounts: <F extends (keyof WhatsAppBusinessAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<WhatsAppBusinessAccountFields, F[number]>>(client, `${id}/assigned_whatsapp_business_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

