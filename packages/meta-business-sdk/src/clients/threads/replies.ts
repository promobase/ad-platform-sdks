import type { ApiClient } from "@promobase/sdk-runtime";
import type { ThreadsPost } from "./types.ts";

export function createReplies(client: ApiClient) {
  return {
    async list(postId: string, opts?: { limit?: number; after?: string; reverse?: boolean }) {
      const params: Record<string, unknown> = {};
      if (opts?.limit) params.limit = opts.limit;
      if (opts?.after) params.after = opts.after;
      if (opts?.reverse !== undefined) params.reverse = opts.reverse;
      return client.getEdge<ThreadsPost>(`${postId}/replies`, {
        fields: ["id", "text", "username", "timestamp", "media_type", "permalink", "hide_status"],
        params,
      });
    },

    async getConversation(postId: string, opts?: { limit?: number; after?: string; reverse?: boolean }) {
      const params: Record<string, unknown> = {};
      if (opts?.limit) params.limit = opts.limit;
      if (opts?.after) params.after = opts.after;
      if (opts?.reverse !== undefined) params.reverse = opts.reverse;
      return client.getEdge<ThreadsPost>(`${postId}/conversation`, {
        fields: ["id", "text", "username", "timestamp", "media_type", "permalink", "hide_status"],
        params,
      });
    },
  };
}
