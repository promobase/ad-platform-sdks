// Auto-generated client for Catalog Management — do not edit
import type { CatalogCreateParams, CatalogCreateResponse, CatalogUpdateParams, CatalogUpdateResponse, CatalogDeleteParams, CatalogDeleteResponse, CatalogGetParams, CatalogGetResponse, CatalogLexiconGetParams, CatalogLexiconGetResponse, CatalogCapitalizeParams, CatalogCapitalizeResponse, CatalogAvailableCountryGetParams, CatalogAvailableCountryGetResponse, CatalogLocationCurrencyGetParams, CatalogLocationCurrencyGetResponse, CatalogOverviewParams, CatalogOverviewResponse } from "../types/catalog-management.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogManagement(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create a catalog */
    async createCatalog(params: CatalogCreateParams): Promise<CatalogCreateResponse> {
      return post<CatalogCreateResponse>("/open_api/v1.3/catalog/create/", params as unknown as Record<string, unknown>);
    },

    /** Update the name of a catalog */
    async updateCatalog(params: CatalogUpdateParams): Promise<CatalogUpdateResponse> {
      return post<CatalogUpdateResponse>("/open_api/v1.3/catalog/update/", params as unknown as Record<string, unknown>);
    },

    /** Delete a catalog */
    async deleteCatalog(params: CatalogDeleteParams): Promise<CatalogDeleteResponse> {
      return post<CatalogDeleteResponse>("/open_api/v1.3/catalog/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get catalogs */
    async getCatalog(params: CatalogGetParams): Promise<CatalogGetResponse> {
      return get<CatalogGetResponse>("/open_api/v1.3/catalog/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the lexicon list for a catalog */
    async getLexicon(params: CatalogLexiconGetParams): Promise<CatalogLexiconGetResponse> {
      return get<CatalogLexiconGetResponse>("/open_api/v1.3/catalog/lexicon/get/", params as unknown as Record<string, unknown>);
    },

    /** Migrate a catalog to a BC */
    async catalogCapitalize(params: CatalogCapitalizeParams): Promise<CatalogCapitalizeResponse> {
      return post<CatalogCapitalizeResponse>("/open_api/v1.3/catalog/capitalize/", params as unknown as Record<string, unknown>);
    },

    /** Get available regions */
    async getAvailableCountry(params: CatalogAvailableCountryGetParams): Promise<CatalogAvailableCountryGetResponse> {
      return get<CatalogAvailableCountryGetResponse>("/open_api/v1.3/catalog/available_country/get/", params as unknown as Record<string, unknown>);
    },

    /** Get locations and currencies */
    async getLocationCurrency(params: CatalogLocationCurrencyGetParams): Promise<CatalogLocationCurrencyGetResponse> {
      return get<CatalogLocationCurrencyGetResponse>("/open_api/v1.3/catalog/location_currency/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the overview of a catalog */
    async catalogOverview(params: CatalogOverviewParams): Promise<CatalogOverviewResponse> {
      return get<CatalogOverviewResponse>("/open_api/v1.3/catalog/overview/", params as unknown as Record<string, unknown>);
    },
  };
}
