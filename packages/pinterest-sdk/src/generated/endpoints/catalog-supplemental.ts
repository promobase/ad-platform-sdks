// @generated
// fingerprint: sha256:054ce9733fa36f6f5bfdd1c8fd387e881a29da2f94937f8cc23fb107a4e26049
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for catalog_supplemental — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { CatalogsLocalInventoryItemsBatchOperateResponse, CatalogsLocalInventoryItemsPostResponse, CatalogsLocalStoresListResponse, CatalogsLocalStoresCreateResponse, CatalogsLocalStoresUpdateResponse, CatalogsLocalStoresDeleteResponse, CatalogsSupplementalItemsBatchGetResponse } from "../types.ts";
import type { PostCatalogsLocalInventoryItemsBatchOperateParams, PostCatalogsLocalInventoryItemsPostParams, ListCatalogsLocalStoresParams, CreateCatalogsLocalStoreParams, UpdateCatalogsLocalStoreParams, DeleteCatalogsLocalStoreParams, GetCatalogsSupplementalItemsBatchParams } from "../params.ts";

/** catalog_supplemental — 7 endpoints */
export function createCatalogSupplementalClient(api: PinterestApiClient) {
  return {
    /** Operate on local inventory item batch
   * Requires pinterest_oauth2: catalogs:write. */
    async postCatalogsLocalInventoryItemsBatchOperate(params: PostCatalogsLocalInventoryItemsBatchOperateParams): Promise<CatalogsLocalInventoryItemsBatchOperateResponse> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<CatalogsLocalInventoryItemsBatchOperateResponse>(`/catalogs/${catalogId}/local_inventory_items/batch`, rest);
      return envelope;
    },

    /** Get local inventory items (POST)
   * Requires pinterest_oauth2: catalogs:read. */
    async postCatalogsLocalInventoryItemsPost(params: PostCatalogsLocalInventoryItemsPostParams): Promise<CatalogsLocalInventoryItemsPostResponse> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<CatalogsLocalInventoryItemsPostResponse>(`/catalogs/${catalogId}/local_inventory_items/query`, rest);
      return envelope;
    },

    /** List local stores
   * Requires pinterest_oauth2: catalogs:read. */
    async listCatalogsLocalStores(params: ListCatalogsLocalStoresParams): Promise<CatalogsLocalStoresListResponse> {
      const { catalogId, ...query } = params;
      const envelope = await api.get<CatalogsLocalStoresListResponse>(`/catalogs/${catalogId}/local_stores`, query);
      return envelope;
    },

    /** Create local stores
   * Requires pinterest_oauth2: catalogs:write. */
    async createCatalogsLocalStore(params: CreateCatalogsLocalStoreParams): Promise<CatalogsLocalStoresCreateResponse> {
      const { catalogId, body, ...query } = params;
      const envelope = await api.post<CatalogsLocalStoresCreateResponse>(`/catalogs/${catalogId}/local_stores`, body);
      return envelope;
    },

    /** Update local stores
   * Requires pinterest_oauth2: catalogs:write. */
    async updateCatalogsLocalStore(params: UpdateCatalogsLocalStoreParams): Promise<CatalogsLocalStoresUpdateResponse> {
      const { catalogId, body, ...query } = params;
      const envelope = await api.patch<CatalogsLocalStoresUpdateResponse>(`/catalogs/${catalogId}/local_stores`, body);
      return envelope;
    },

    /** Delete local stores
   * Requires pinterest_oauth2: catalogs:write. */
    async deleteCatalogsLocalStore(params: DeleteCatalogsLocalStoreParams): Promise<CatalogsLocalStoresDeleteResponse> {
      const { catalogId } = params;
      const envelope = await api.delete<CatalogsLocalStoresDeleteResponse>(`/catalogs/${catalogId}/local_stores`);
      return envelope;
    },

    /** Get supplemental items batch status
   * Requires pinterest_oauth2: catalogs:read. */
    async getCatalogsSupplementalItemsBatch(params: GetCatalogsSupplementalItemsBatchParams): Promise<CatalogsSupplementalItemsBatchGetResponse> {
      const { catalogId, batchId, ...query } = params;
      const envelope = await api.get<CatalogsSupplementalItemsBatchGetResponse>(`/catalogs/${catalogId}/supplemental_items/batch/${batchId}`, query);
      return envelope;
    },
  };
}
