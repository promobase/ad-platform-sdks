// @generated
// fingerprint: sha256:3655d2d7df16c5f3003fa9798303d4eec061a76d6ea402fd306310574c8474d1
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Catalog Management — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CatalogCreateParams, CatalogCreateResponse, CatalogUpdateParams, CatalogUpdateResponse, CatalogDeleteParams, CatalogDeleteResponse, CatalogGetParams, CatalogGetResponse, CatalogLexiconGetParams, CatalogLexiconGetResponse, CatalogCapitalizeParams, CatalogCapitalizeResponse, CatalogAvailableCountryGetParams, CatalogAvailableCountryGetResponse, CatalogLocationCurrencyGetParams, CatalogLocationCurrencyGetResponse, CatalogOverviewParams, CatalogOverviewResponse } from "../types/catalog-management.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogManagement(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
