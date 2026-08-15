// @generated
// fingerprint: sha256:ce87e935eca0fc786e964e8e44512645496f6b4577068687d6a21456dbb321a3
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for advanced_auction — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AdvancedAuctionItemsGetPostResponse, AdvancedAuctionItemsSubmitPostResponse } from "../types.ts";
import type { PostAdvancedAuctionItemsGetPostParams, PostAdvancedAuctionItemsSubmitPostParams } from "../params.ts";

/** advanced_auction — 2 endpoints */
export function createAdvancedAuctionClient(api: PinterestApiClient) {
  return {
    /** Get item bid options (POST)
   * Requires pinterest_oauth2: ads:read, catalogs:read. */
    async postAdvancedAuctionItemsGetPost(params: PostAdvancedAuctionItemsGetPostParams): Promise<AdvancedAuctionItemsGetPostResponse> {
      const rest = params;
      const envelope = await api.post<AdvancedAuctionItemsGetPostResponse>(`/advanced_auction/items/get`, rest);
      return envelope;
    },

    /** Operate on item level bid options
   * Requires pinterest_oauth2: ads:write, catalogs:read. */
    async postAdvancedAuctionItemsSubmitPost(params: PostAdvancedAuctionItemsSubmitPostParams): Promise<AdvancedAuctionItemsSubmitPostResponse> {
      const rest = params;
      const envelope = await api.post<AdvancedAuctionItemsSubmitPostResponse>(`/advanced_auction/items/submit`, rest);
      return envelope;
    },
  };
}
