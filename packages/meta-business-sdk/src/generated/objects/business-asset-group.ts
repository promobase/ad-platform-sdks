import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { AdsPixelFields } from "./ads-pixel.ts";
import type { ApplicationFields } from "./application.ts";
import type { AssignedUserFields } from "./assigned-user.ts";
import type { BusinessFields } from "./business.ts";
import type { CustomConversionFields } from "./custom-conversion.ts";
import type { IGUserFields } from "./ig-user.ts";
import type { PageFields } from "./page.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";

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
    __path: id,
    __brand: undefined as unknown as BusinessAssetGroupFields,
    get: <F extends (keyof BusinessAssetGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessAssetGroupFields, F[number]>>(`${id}`, opts),
    update: (params: BusinessAssetGroupUpdateParams) =>
      client.post<BusinessAssetGroupFields>(`${id}`, params as Record<string, unknown>),
    assignedUsers: {
      __path: `${id}/assigned_users`,
      __brand: undefined as unknown as AssignedUserFields,
      list: <F extends (keyof AssignedUserFields)[]>(opts: { fields: F; params?: BusinessAssetGroupListAssignedUsersParams }) =>
        new Cursor<Pick<AssignedUserFields, F[number]>>(client, `${id}/assigned_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessAssetGroupCreateAssignedUsersParams) =>
        client.post<BusinessAssetGroupFields>(`${id}/assigned_users`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteAssignedUsersParams) =>
        client.delete(`${id}/assigned_users`, params as Record<string, unknown> ?? {}),
    },
    containedAdaccounts: {
      __path: `${id}/contained_adaccounts`,
      __brand: undefined as unknown as AdAccountFields,
      list: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/contained_adaccounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessAssetGroupCreateContainedAdaccountsParams) =>
        client.post<BusinessAssetGroupFields>(`${id}/contained_adaccounts`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedAdaccountsParams) =>
        client.delete(`${id}/contained_adaccounts`, params as Record<string, unknown> ?? {}),
    },
    containedApplications: {
      __path: `${id}/contained_applications`,
      __brand: undefined as unknown as ApplicationFields,
      list: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ApplicationFields, F[number]>>(client, `${id}/contained_applications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessAssetGroupCreateContainedApplicationsParams) =>
        client.post<BusinessAssetGroupFields>(`${id}/contained_applications`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedApplicationsParams) =>
        client.delete(`${id}/contained_applications`, params as Record<string, unknown> ?? {}),
    },
    containedCustomConversions: {
      __path: `${id}/contained_custom_conversions`,
      __brand: undefined as unknown as CustomConversionFields,
      list: <F extends (keyof CustomConversionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<CustomConversionFields, F[number]>>(client, `${id}/contained_custom_conversions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessAssetGroupCreateContainedCustomConversionsParams) =>
        client.post<BusinessAssetGroupFields>(`${id}/contained_custom_conversions`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedCustomConversionsParams) =>
        client.delete(`${id}/contained_custom_conversions`, params as Record<string, unknown> ?? {}),
    },
    containedInstagramAccounts: {
      __path: `${id}/contained_instagram_accounts`,
      __brand: undefined as unknown as IGUserFields,
      list: <F extends (keyof IGUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<IGUserFields, F[number]>>(client, `${id}/contained_instagram_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessAssetGroupCreateContainedInstagramAccountsParams) =>
        client.post<BusinessAssetGroupFields>(`${id}/contained_instagram_accounts`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedInstagramAccountsParams) =>
        client.delete(`${id}/contained_instagram_accounts`, params as Record<string, unknown> ?? {}),
    },
    containedPages: {
      __path: `${id}/contained_pages`,
      __brand: undefined as unknown as PageFields,
      list: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PageFields, F[number]>>(client, `${id}/contained_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessAssetGroupCreateContainedPagesParams) =>
        client.post<BusinessAssetGroupFields>(`${id}/contained_pages`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedPagesParams) =>
        client.delete(`${id}/contained_pages`, params as Record<string, unknown> ?? {}),
    },
    containedPixels: {
      __path: `${id}/contained_pixels`,
      __brand: undefined as unknown as AdsPixelFields,
      list: <F extends (keyof AdsPixelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdsPixelFields, F[number]>>(client, `${id}/contained_pixels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessAssetGroupCreateContainedPixelsParams) =>
        client.post<BusinessAssetGroupFields>(`${id}/contained_pixels`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedPixelsParams) =>
        client.delete(`${id}/contained_pixels`, params as Record<string, unknown> ?? {}),
    },
    containedProductCatalogs: {
      __path: `${id}/contained_product_catalogs`,
      __brand: undefined as unknown as ProductCatalogFields,
      list: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProductCatalogFields, F[number]>>(client, `${id}/contained_product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: BusinessAssetGroupCreateContainedProductCatalogsParams) =>
        client.post<BusinessAssetGroupFields>(`${id}/contained_product_catalogs`, params as Record<string, unknown>),
      delete: (params: BusinessAssetGroupDeleteContainedProductCatalogsParams) =>
        client.delete(`${id}/contained_product_catalogs`, params as Record<string, unknown> ?? {}),
    },
  };
}

