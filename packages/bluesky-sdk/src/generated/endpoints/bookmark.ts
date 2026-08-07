// Auto-generated client for app.bsky.bookmark — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyBookmarkDefsBookmarkView, GetBookmarksResponse } from "../types.ts";
import type { CreateBookmarkParams, DeleteBookmarkParams, GetBookmarksParams } from "../params.ts";

/** app.bsky.bookmark — 3 endpoints */
export function createBookmarkClient(api: BlueskyApiClient) {
  return {
    /** Creates a private bookmark for the specified record. Currently, only 'app.bsky.feed.post' records are supported. Requires authentication. */
    async createBookmark(params: CreateBookmarkParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.bookmark.createBookmark", params, undefined);
      return envelope;
    },

    /** Deletes a private bookmark for the specified record. Currently, only 'app.bsky.feed.post' records are supported. Requires authentication. */
    async deleteBookmark(params: DeleteBookmarkParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.bookmark.deleteBookmark", params, undefined);
      return envelope;
    },

    /** Gets views of records bookmarked by the authenticated user. Requires authentication. */
    async getBookmarks(params: GetBookmarksParams): Promise<GetBookmarksResponse> {
      const envelope = await api.get<GetBookmarksResponse>("/xrpc/app.bsky.bookmark.getBookmarks", params);
      return envelope;
    },
  };
}
