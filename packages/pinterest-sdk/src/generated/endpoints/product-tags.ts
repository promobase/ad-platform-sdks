// @generated
// fingerprint: sha256:1f1bf3aad296ab52f53bd28669c819b6deb78463d8a8fe5e0e35826133f80c81
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for product_tags — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { ProductTagsBulkAddResponse, ProductTagsListResponse } from "../types.ts";
import type { PostProductTagsBulkAddParams, ListProductTagsParams, PostProductTagsBulkDeleteParams } from "../params.ts";

/** product_tags — 3 endpoints */
export function createProductTagsClient(api: PinterestApiClient) {
  return {
    /** Add product tags to pin
   * Requires pinterest_oauth2: boards:read, boards:write, pins:read, pins:write. */
    async postProductTagsBulkAdd(params: PostProductTagsBulkAddParams): Promise<ProductTagsBulkAddResponse> {
      const { pinId, ...rest } = params;
      const envelope = await api.post<ProductTagsBulkAddResponse>(`/pins/${pinId}/product_tags`, rest);
      return envelope;
    },

    /** Get product tags for pin
   * Requires pinterest_oauth2: boards:read, pins:read. */
    async listProductTags(params: ListProductTagsParams): Promise<ProductTagsListResponse> {
      const { pinId, ...query } = params;
      const envelope = await api.get<ProductTagsListResponse>(`/pins/${pinId}/product_tags`, query);
      return envelope;
    },

    /** Delete product tags from pin
   * Requires pinterest_oauth2: boards:read, boards:write, pins:read, pins:write. */
    async postProductTagsBulkDelete(params: PostProductTagsBulkDeleteParams): Promise<unknown> {
      const { pinId, ...rest } = params;
      const envelope = await api.post<unknown>(`/pins/${pinId}/product_tags/bulk-delete`, rest);
      return envelope;
    },
  };
}
