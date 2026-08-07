// Auto-generated client for catalog_items — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { ItemsPostResponse, ItemsBatchPostResponse, ItemsBatchGetResponse } from "../types.ts";
import type { PostItemsPostParams, PostItemsBatchPostParams, GetItemsBatchParams } from "../params.ts";

/** catalog_items — 3 endpoints */
export function createCatalogItemsClient(api: PinterestApiClient) {
  return {
    /** Get catalogs items (POST)
   * Requires pinterest_oauth2: catalogs:read. */
    async postItemsPost(params: PostItemsPostParams): Promise<ItemsPostResponse> {
      const rest = params;
      const envelope = await api.post<ItemsPostResponse>(`/catalogs/items`, rest);
      return envelope;
    },

    /** Operate on item batch
   * Requires pinterest_oauth2: catalogs:read, catalogs:write; client_credentials: catalogs:read, catalogs:write. */
    async postItemsBatchPost(params: PostItemsBatchPostParams): Promise<ItemsBatchPostResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<ItemsBatchPostResponse>(`/catalogs/items/batch`, body);
      return envelope;
    },

    /** Get item batch status
   * Requires pinterest_oauth2: catalogs:read; client_credentials: catalogs:read. */
    async getItemsBatch(params: GetItemsBatchParams): Promise<ItemsBatchGetResponse> {
      const { batchId, ...query } = params;
      const envelope = await api.get<ItemsBatchGetResponse>(`/catalogs/items/batch/${batchId}`, query);
      return envelope;
    },
  };
}
