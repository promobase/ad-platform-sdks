// @generated
// fingerprint: sha256:2c13b4aacdfaa5e256e705b57a597ed39e03977d3e1cc2622c2076f6b0c2d1ce
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
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
    __path: id,
    __brand: undefined as unknown as SystemUserFields,
    get: <F extends (keyof SystemUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SystemUserFields, F[number]>>(`${id}`, opts),
    assignedAdAccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/assigned_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    assignedBusinessAssetGroups: <F extends (keyof BusinessAssetGroupFields)[]>(opts: { fields: F; params?: SystemUserListAssignedBusinessAssetGroupsParams }) =>
      new Cursor<Pick<BusinessAssetGroupFields, F[number]>>(client, `${id}/assigned_business_asset_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    assignedPages: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: SystemUserListAssignedPagesParams }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/assigned_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    assignedProductCatalogs: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductCatalogFields, F[number]>>(client, `${id}/assigned_product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    assignedWhatsappBusinessAccounts: <F extends (keyof WhatsAppBusinessAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<WhatsAppBusinessAccountFields, F[number]>>(client, `${id}/assigned_whatsapp_business_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

