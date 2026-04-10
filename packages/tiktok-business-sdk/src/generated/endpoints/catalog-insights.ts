// Auto-generated client for Catalog Insights — do not edit
import type { CatalogInsightFilterGetParams, CatalogInsightFilterGetResponse, CatalogInsightProductGetParams, CatalogInsightProductGetResponse, CatalogInsightCategoryGetParams, CatalogInsightCategoryGetResponse } from "../types/catalog-insights.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogInsights(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get filters for catalog product insights */
    async getFilter(params: CatalogInsightFilterGetParams): Promise<CatalogInsightFilterGetResponse> {
      return get<CatalogInsightFilterGetResponse>("/open_api/v1.3/catalog/insight/filter/get/", params as unknown as Record<string, unknown>);
    },

    /** Get trending catalog products */
    async getProduct(params: CatalogInsightProductGetParams): Promise<CatalogInsightProductGetResponse> {
      return get<CatalogInsightProductGetResponse>("/open_api/v1.3/catalog/insight/product/get/", params as unknown as Record<string, unknown>);
    },

    /** Get trending catalog product categories */
    async getCategory(params: CatalogInsightCategoryGetParams): Promise<CatalogInsightCategoryGetResponse> {
      return get<CatalogInsightCategoryGetResponse>("/open_api/v1.3/catalog/insight/category/get/", params as unknown as Record<string, unknown>);
    },
  };
}
