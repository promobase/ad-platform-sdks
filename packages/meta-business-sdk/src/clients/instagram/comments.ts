import type { ApiClient } from "@promobase/sdk-runtime";
import type { IGCommentFields } from "./types.ts";

export function createComments(client: ApiClient) {
  return {
    async create(mediaId: string, message: string): Promise<{ id: string }> {
      return client.post<{ id: string }>(`${mediaId}/comments`, { message });
    },

    async list(mediaId: string, opts?: { limit?: number }): Promise<Partial<IGCommentFields>[]> {
      const params: Record<string, unknown> = {};
      if (opts?.limit) params.limit = opts.limit;
      const response = await client.getEdge<Partial<IGCommentFields>>(`${mediaId}/comments`, {
        fields: ["id", "text", "username", "timestamp"],
        params,
      });
      return response.data;
    },
  };
}
