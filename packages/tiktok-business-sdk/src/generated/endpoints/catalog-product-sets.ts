// @generated
// fingerprint: sha256:bec1e8e684667d73160bc639d448d83e2764f354a325ed99c7b9c309777156f3
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Catalog Product Sets — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CatalogSetGetParams, CatalogSetGetResponse, CatalogSetProductGetParams, CatalogSetProductGetResponse, CatalogSetCreateParams, CatalogSetCreateResponse, CatalogSetUploadParams, CatalogSetUploadResponse, CatalogSetUpdateParams, CatalogSetUpdateResponse, CatalogSetDeleteParams, CatalogSetDeleteResponse } from "../types/catalog-product-sets.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogProductSets(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get product sets */
    async getSet(params: CatalogSetGetParams): Promise<CatalogSetGetResponse> {
      return get<CatalogSetGetResponse>("/open_api/v1.3/catalog/set/get/", params as unknown as Record<string, unknown>);
    },

    /** Get products in a product set */
    async getProduct(params: CatalogSetProductGetParams): Promise<CatalogSetProductGetResponse> {
      return get<CatalogSetProductGetResponse>("/open_api/v1.3/catalog/set/product/get/", params as unknown as Record<string, unknown>);
    },

    /** Create a product set by conditions */
    async createSet(params: CatalogSetCreateParams): Promise<CatalogSetCreateResponse> {
      return post<CatalogSetCreateResponse>("/open_api/v1.3/catalog/set/create/", params as unknown as Record<string, unknown>);
    },

    /** Create a product set by file */
    async setUpload(params: CatalogSetUploadParams): Promise<CatalogSetUploadResponse> {
      return post<CatalogSetUploadResponse>("/open_api/v1.3/catalog/set/upload/", params as unknown as Record<string, unknown>);
    },

    /** Update a product set */
    async updateSet(params: CatalogSetUpdateParams): Promise<CatalogSetUpdateResponse> {
      return post<CatalogSetUpdateResponse>("/open_api/v1.3/catalog/set/update/", params as unknown as Record<string, unknown>);
    },

    /** Delete product sets */
    async deleteSet(params: CatalogSetDeleteParams): Promise<CatalogSetDeleteResponse> {
      return post<CatalogSetDeleteResponse>("/open_api/v1.3/catalog/set/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
