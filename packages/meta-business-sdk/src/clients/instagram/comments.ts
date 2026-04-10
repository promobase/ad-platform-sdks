import type { IGCommentFields } from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;

export function createComments(api: CreateClientReturn) {
  return {
    /** Create a comment on a media item using the generated typed endpoint. */
    async create(mediaId: string, message: string): Promise<{ id: string }> {
      const result = await api.iGMedia(mediaId).comments.create({ message });
      return { id: (result as { id: string }).id };
    },

    /** List comments on a media item using the generated typed cursor. */
    async list(mediaId: string, opts?: { fields?: (keyof IGCommentFields)[]; limit?: number }) {
      const cursor = api.iGMedia(mediaId).comments.list({
        fields: opts?.fields ?? ["id", "text", "username", "timestamp"] as (keyof IGCommentFields)[],
        params: opts?.limit ? { limit: opts.limit } : undefined,
      });
      return cursor.toArray();
    },
  };
}
