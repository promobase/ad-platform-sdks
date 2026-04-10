import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { BusinessFields } from "./business.ts";

export interface BusinessAssetGroupFields {
  id: string;
  name: string;
  owner_business: BusinessFields;
}

export interface BusinessAssetGroupDeleteAssignedUsersParams {
  user: number;
  [key: string]: unknown;
}

export interface BusinessAssetGroupListAssignedUsersParams {
  business: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupCreateAssignedUsersParams {
  adaccount_tasks?: string[];
  offline_conversion_data_set_tasks?: string[];
  page_tasks?: string[];
  pixel_tasks?: string[];
  user: number;
  [key: string]: unknown;
}

export interface BusinessAssetGroupDeleteContainedAdaccountsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupCreateContainedAdaccountsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupDeleteContainedApplicationsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupCreateContainedApplicationsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupDeleteContainedCustomConversionsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupCreateContainedCustomConversionsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupDeleteContainedInstagramAccountsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupCreateContainedInstagramAccountsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupDeleteContainedPagesParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupCreateContainedPagesParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupDeleteContainedPixelsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupCreateContainedPixelsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupDeleteContainedProductCatalogsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupCreateContainedProductCatalogsParams {
  asset_id: string;
  [key: string]: unknown;
}

export interface BusinessAssetGroupUpdateParams {
  name?: string;
  [key: string]: unknown;
}

export function businessAssetGroupNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof BusinessAssetGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessAssetGroupFields, F[number]>>(`${id}`, opts),
    update: (params: BusinessAssetGroupUpdateParams) =>
      client.post<BusinessAssetGroupFields>(`${id}`, params as Record<string, unknown>),
    assignedUsers: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: BusinessAssetGroupListAssignedUsersParams }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/assigned_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: BusinessAssetGroupCreateAssignedUsersParams) =>
        client.post<Record<string, unknown>>(`${id}/assigned_users`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteAssignedUsersParams) =>
        client.delete(`${id}/assigned_users`, params as Record<string, unknown> ?? {}),
    },
    containedAdaccounts: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/contained_adaccounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: BusinessAssetGroupCreateContainedAdaccountsParams) =>
        client.post<Record<string, unknown>>(`${id}/contained_adaccounts`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedAdaccountsParams) =>
        client.delete(`${id}/contained_adaccounts`, params as Record<string, unknown> ?? {}),
    },
    containedApplications: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/contained_applications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: BusinessAssetGroupCreateContainedApplicationsParams) =>
        client.post<Record<string, unknown>>(`${id}/contained_applications`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedApplicationsParams) =>
        client.delete(`${id}/contained_applications`, params as Record<string, unknown> ?? {}),
    },
    containedCustomConversions: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/contained_custom_conversions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: BusinessAssetGroupCreateContainedCustomConversionsParams) =>
        client.post<Record<string, unknown>>(`${id}/contained_custom_conversions`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedCustomConversionsParams) =>
        client.delete(`${id}/contained_custom_conversions`, params as Record<string, unknown> ?? {}),
    },
    containedInstagramAccounts: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/contained_instagram_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: BusinessAssetGroupCreateContainedInstagramAccountsParams) =>
        client.post<Record<string, unknown>>(`${id}/contained_instagram_accounts`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedInstagramAccountsParams) =>
        client.delete(`${id}/contained_instagram_accounts`, params as Record<string, unknown> ?? {}),
    },
    containedPages: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/contained_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: BusinessAssetGroupCreateContainedPagesParams) =>
        client.post<Record<string, unknown>>(`${id}/contained_pages`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedPagesParams) =>
        client.delete(`${id}/contained_pages`, params as Record<string, unknown> ?? {}),
    },
    containedPixels: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/contained_pixels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: BusinessAssetGroupCreateContainedPixelsParams) =>
        client.post<Record<string, unknown>>(`${id}/contained_pixels`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedPixelsParams) =>
        client.delete(`${id}/contained_pixels`, params as Record<string, unknown> ?? {}),
    },
    containedProductCatalogs: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/contained_product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: BusinessAssetGroupCreateContainedProductCatalogsParams) =>
        client.post<Record<string, unknown>>(`${id}/contained_product_catalogs`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedProductCatalogsParams) =>
        client.delete(`${id}/contained_product_catalogs`, params as Record<string, unknown> ?? {}),
    },
  };
}

