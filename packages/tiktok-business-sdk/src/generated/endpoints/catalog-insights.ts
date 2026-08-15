// @generated
// fingerprint: sha256:b67bcb7d254dc217236e05fa85bfa36cdddeff2262ed7a618576b03065b322d2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Catalog Insights — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CatalogInsightFilterGetParams, CatalogInsightFilterGetResponse, CatalogInsightProductGetParams, CatalogInsightProductGetResponse, CatalogInsightCategoryGetParams, CatalogInsightCategoryGetResponse } from "../types/catalog-insights.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogInsights(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
