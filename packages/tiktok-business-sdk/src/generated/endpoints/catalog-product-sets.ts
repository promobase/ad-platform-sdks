// Auto-generated client for Catalog Product Sets — do not edit
import type { CatalogSetGetParams, CatalogSetGetResponse, CatalogSetProductGetParams, CatalogSetProductGetResponse, CatalogSetCreateParams, CatalogSetCreateResponse, CatalogSetUploadParams, CatalogSetUploadResponse, CatalogSetUpdateParams, CatalogSetUpdateResponse, CatalogSetDeleteParams, CatalogSetDeleteResponse } from "../types/catalog-product-sets.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogProductSets(opts: { accessToken: string; advertiserId: string }) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
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
