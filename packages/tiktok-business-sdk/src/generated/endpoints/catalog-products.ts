// Auto-generated client for Catalog Products — do not edit
import type { CatalogProductFileParams, CatalogProductFileResponse, CatalogProductUploadParams, CatalogProductUploadResponse, CatalogProductUpdateParams, CatalogProductUpdateResponse, CatalogProductDeleteParams, CatalogProductDeleteResponse, CatalogProductGetParams, CatalogProductGetResponse, CatalogProductLogParams, CatalogProductLogResponse } from "../types/catalog-products.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogProducts(opts: { accessToken: string; advertiserId: string }) {
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
