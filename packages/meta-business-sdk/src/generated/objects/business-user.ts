// @generated
// fingerprint: sha256:34caf714857071b7adc712db33201686b8a841bcb12c554c652ab476af28d578
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { BusinessFields } from "./business.ts";
import type { BusinessAssetGroupFields } from "./business-asset-group.ts";
import type { BusinessRoleRequestFields } from "./business-role-request.ts";
import type { PageFields } from "./page.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { WhatsAppBusinessAccountFields } from "./whats-app-business-account.ts";

export interface BusinessUserFields {
  business: BusinessFields;
  business_role_request: BusinessRoleRequestFields;
  email: string;
  finance_permission: string;
  first_name: string;
  id: string;
  ip_permission: string;
  last_name: string;
  marked_for_removal: boolean;
  name: string;
  pending_email: string;
  role: string;
  tasks: string[];
  title: string;
  two_fac_status: string;
}

export interface BusinessUserListAssignedBusinessAssetGroupsParams {
  contained_asset_id?: string;
  [key: string]: unknown;
}

export interface BusinessUserListAssignedPagesParams {
  pages?: number[];
  [key: string]: unknown;
}

export interface BusinessUserUpdateParams {
  clear_pending_email?: boolean;
  email?: string;
  first_name?: string;
  last_name?: string;
  pending_email?: string;
  role?: string;
  skip_verification_email?: boolean;
  tasks?: string[];
  title?: string;
  [key: string]: unknown;
}

export function businessUserNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessUserFields,
    get: <F extends (keyof BusinessUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessUserFields, F[number]>>(`${id}`, opts),
    update: (params: BusinessUserUpdateParams) =>
      client.post<BusinessUserFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    assignedAdAccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/assigned_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    assignedBusinessAssetGroups: <F extends (keyof BusinessAssetGroupFields)[]>(opts: { fields: F; params?: BusinessUserListAssignedBusinessAssetGroupsParams }) =>
      new Cursor<Pick<BusinessAssetGroupFields, F[number]>>(client, `${id}/assigned_business_asset_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    assignedPages: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: BusinessUserListAssignedPagesParams }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/assigned_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    assignedProductCatalogs: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductCatalogFields, F[number]>>(client, `${id}/assigned_product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    assignedWhatsappBusinessAccounts: <F extends (keyof WhatsAppBusinessAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<WhatsAppBusinessAccountFields, F[number]>>(client, `${id}/assigned_whatsapp_business_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

