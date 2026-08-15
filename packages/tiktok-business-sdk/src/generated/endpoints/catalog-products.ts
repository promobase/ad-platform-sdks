// @generated
// fingerprint: sha256:7fda15fbb4e42d4b0be9a2daa065a06fefb993771b7321a9023c80989280d0ed
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Catalog Products — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CatalogProductFileParams, CatalogProductFileResponse, CatalogProductUploadParams, CatalogProductUploadResponse, CatalogProductUpdateParams, CatalogProductUpdateResponse, CatalogProductDeleteParams, CatalogProductDeleteResponse, CatalogProductGetParams, CatalogProductGetResponse, CatalogProductLogParams, CatalogProductLogResponse } from "../types/catalog-products.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogProducts(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
  }

  return {
    /** Upload products via a file URL */
    async productFile(params: CatalogProductFileParams): Promise<CatalogProductFileResponse> {
      return post<CatalogProductFileResponse>("/open_api/v1.3/catalog/product/file/", params as unknown as Record<string, unknown>);
    },

    /** Upload products via a JSON schema */
    async productUpload(params: CatalogProductUploadParams): Promise<CatalogProductUploadResponse> {
      return post<CatalogProductUploadResponse>("/open_api/v1.3/catalog/product/upload/", params as unknown as Record<string, unknown>);
    },

    /** Update products */
    async updateProduct(params: CatalogProductUpdateParams): Promise<CatalogProductUpdateResponse> {
      return post<CatalogProductUpdateResponse>("/open_api/v1.3/catalog/product/update/", params as unknown as Record<string, unknown>);
    },

    /** Remove products */
    async deleteProduct(params: CatalogProductDeleteParams): Promise<CatalogProductDeleteResponse> {
      return post<CatalogProductDeleteResponse>("/open_api/v1.3/catalog/product/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get products */
    async getProduct(params: CatalogProductGetParams): Promise<CatalogProductGetResponse> {
      return get<CatalogProductGetResponse>("/open_api/v1.3/catalog/product/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the product handling log */
    async productLog(params: CatalogProductLogParams): Promise<CatalogProductLogResponse> {
      return get<CatalogProductLogResponse>("/open_api/v1.3/catalog/product/log/", params as unknown as Record<string, unknown>);
    },
  };
}
