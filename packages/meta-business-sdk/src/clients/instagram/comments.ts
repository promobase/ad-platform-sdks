import type { ApiClient } from "@promobase/sdk-runtime";
import type { CommentData } from "./types.ts";

export function createComments(client: ApiClient) {
  return {
    async create(mediaId: string, message: string): Promise<{ id: string }> {
      return client.post<{ id: string }>(`${mediaId}/comments`, { message });
    },

    async list(mediaId: string, opts?: { limit?: number }): Promise<CommentData[]> {
      const params: Record<string, unknown> = {};
      if (opts?.limit) params.limit = opts.limit;
      const response = await client.getEdge<CommentData>(`${mediaId}/comments`, {
        fields: ["id", "text", "username", "timestamp"],
        params,
      });
      return response.data;
    },
  };
}
