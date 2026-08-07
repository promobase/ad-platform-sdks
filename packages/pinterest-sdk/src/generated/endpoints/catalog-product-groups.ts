// Auto-generated client for catalog_product_groups — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { CatalogsProductGroupsListResponse, CatalogsProductGroupsCreateResponse, CatalogsProductGroupsGetResponse, CatalogsProductGroupsUpdateResponse, CatalogsProductGroupsDeleteResponse, CatalogsProductGroupsProductCountsGetResponse, CatalogsProductGroupPinsListResponse, CatalogsProductGroupsCreateManyResponse, ProductsByProductGroupFilterListResponse } from "../types.ts";
import type { ListCatalogsProductGroupsParams, CreateCatalogsProductGroupParams, GetCatalogsProductGroupsParams, UpdateCatalogsProductGroupParams, DeleteCatalogsProductGroupParams, GetCatalogsProductGroupsProductCountsGetParams, ListCatalogsProductGroupPinsParams, DeleteCatalogsProductGroupsDeleteManyParams, PostCatalogsProductGroupsCreateManyParams, ListProductsByProductGroupFilterParams } from "../params.ts";

/** catalog_product_groups — 10 endpoints */
export function createCatalogProductGroupsClient(api: PinterestApiClient) {
  return {
    /** List product groups
   * Requires pinterest_oauth2: catalogs:read. */
    async listCatalogsProductGroups(params: ListCatalogsProductGroupsParams): Promise<CatalogsProductGroupsListResponse> {
      const query = params;
      const envelope = await api.get<CatalogsProductGroupsListResponse>(`/catalogs/product_groups`, query);
      return envelope;
    },

    /** Create product group
   * Requires pinterest_oauth2: catalogs:write. */
    async createCatalogsProductGroup(params: CreateCatalogsProductGroupParams): Promise<CatalogsProductGroupsCreateResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<CatalogsProductGroupsCreateResponse>(`/catalogs/product_groups`, body);
      return envelope;
    },

    /** Get product group
   * Requires pinterest_oauth2: catalogs:read. */
    async getCatalogsProductGroups(params: GetCatalogsProductGroupsParams): Promise<CatalogsProductGroupsGetResponse> {
      const { productGroupId, ...query } = params;
      const envelope = await api.get<CatalogsProductGroupsGetResponse>(`/catalogs/product_groups/${productGroupId}`, query);
      return envelope;
    },

    /** Update single product group
   * Requires pinterest_oauth2: catalogs:write. */
    async updateCatalogsProductGroup(params: UpdateCatalogsProductGroupParams): Promise<CatalogsProductGroupsUpdateResponse> {
      const { productGroupId, body, ...query } = params;
      const envelope = await api.patch<CatalogsProductGroupsUpdateResponse>(`/catalogs/product_groups/${productGroupId}`, body);
      return envelope;
    },

    /** Delete product group
   * Requires pinterest_oauth2: catalogs:write. */
    async deleteCatalogsProductGroup(params: DeleteCatalogsProductGroupParams): Promise<CatalogsProductGroupsDeleteResponse> {
      const { productGroupId } = params;
      const envelope = await api.delete<CatalogsProductGroupsDeleteResponse>(`/catalogs/product_groups/${productGroupId}`);
      return envelope;
    },

    /** Get product counts
   * Requires pinterest_oauth2: catalogs:read. */
    async getCatalogsProductGroupsProductCountsGet(params: GetCatalogsProductGroupsProductCountsGetParams): Promise<CatalogsProductGroupsProductCountsGetResponse> {
      const { productGroupId, ...query } = params;
      const envelope = await api.get<CatalogsProductGroupsProductCountsGetResponse>(`/catalogs/product_groups/${productGroupId}/product_counts`, query);
      return envelope;
    },

    /** List products by product group
   * Requires pinterest_oauth2: boards:read, catalogs:read, pins:read; client_credentials: boards:read, catalogs:read, pins:read. */
    async listCatalogsProductGroupPins(params: ListCatalogsProductGroupPinsParams): Promise<CatalogsProductGroupPinsListResponse> {
      const { productGroupId, ...query } = params;
      const envelope = await api.get<CatalogsProductGroupPinsListResponse>(`/catalogs/product_groups/${productGroupId}/products`, query);
      return envelope;
    },

    /** Delete product groups
   * Requires pinterest_oauth2: catalogs:write. */
    async deleteCatalogsProductGroupsDeleteMany(params: DeleteCatalogsProductGroupsDeleteManyParams): Promise<unknown> {
      
      const envelope = await api.delete<unknown>(`/catalogs/product_groups/multiple`);
      return envelope;
    },

    /** Create product groups
   * Requires pinterest_oauth2: catalogs:write. */
    async postCatalogsProductGroupsCreateMany(params: PostCatalogsProductGroupsCreateManyParams): Promise<CatalogsProductGroupsCreateManyResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<CatalogsProductGroupsCreateManyResponse>(`/catalogs/product_groups/multiple`, body);
      return envelope;
    },

    /** List products by filter
   * Requires pinterest_oauth2: boards:read, catalogs:read, pins:read. */
    async listProductsByProductGroupFilter(params: ListProductsByProductGroupFilterParams): Promise<ProductsByProductGroupFilterListResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<ProductsByProductGroupFilterListResponse>(`/catalogs/products/get_by_product_group_filters`, body);
      return envelope;
    },
  };
}
