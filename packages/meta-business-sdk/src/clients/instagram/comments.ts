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
        fields:
          opts?.fields ?? (["id", "text", "username", "timestamp"] as (keyof IGCommentFields)[]),
        params: opts?.limit ? { limit: opts.limit } : undefined,
      });
      return cursor.toArray();
    },

    /** Reply to an existing comment. */
    async reply(commentId: string, message: string): Promise<{ id: string }> {
      const result = await api.iGComment(commentId).replies.create({ message });
      return { id: (result as { id: string }).id };
    },

    /** Hide or unhide a comment. */
    async hide(commentId: string, hidden: boolean = true): Promise<void> {
      await api.iGComment(commentId).update({ hide: hidden });
    },

    /** Delete a comment. */
    async delete(commentId: string): Promise<void> {
      await api.iGComment(commentId).delete();
    },
  };
}
