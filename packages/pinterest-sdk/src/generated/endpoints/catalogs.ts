// @generated
// fingerprint: sha256:3e65c29a6f6569a7ff505549463015cb58e2ff8eab07215e66afd60d9b6e76f3
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for catalogs — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { CatalogsListResponse, CatalogsCreateResponse, CatalogsAvailableFilterValuesResponse } from "../types.ts";
import type { ListCatalogsParams, CreateCatalogParams, GetCatalogsAvailableFilterValuesParams } from "../params.ts";

/** catalogs — 3 endpoints */
export function createCatalogsClient(api: PinterestApiClient) {
  return {
    /** List catalogs
   * Requires pinterest_oauth2: catalogs:read. */
    async listCatalogs(params: ListCatalogsParams): Promise<CatalogsListResponse> {
      const query = params;
      const envelope = await api.get<CatalogsListResponse>(`/catalogs`, query);
      return envelope;
    },

    /** Create catalog
   * Requires pinterest_oauth2: catalogs:write. */
    async createCatalog(params: CreateCatalogParams): Promise<CatalogsCreateResponse> {
      const rest = params;
      const envelope = await api.post<CatalogsCreateResponse>(`/catalogs`, rest);
      return envelope;
    },

    /** List available filter values
   * Requires pinterest_oauth2: catalogs:read. */
    async getCatalogsAvailableFilterValues(params: GetCatalogsAvailableFilterValuesParams): Promise<CatalogsAvailableFilterValuesResponse> {
      const query = params;
      const envelope = await api.get<CatalogsAvailableFilterValuesResponse>(`/catalogs/available_filter_values`, query);
      return envelope;
    },
  };
}
