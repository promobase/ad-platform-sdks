import type { CommentFields } from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;

export function createComments(api: CreateClientReturn) {
  return {
    /** Post a comment on a Page post. */
    async create(postId: string, message: string): Promise<{ id: string }> {
      const result = await api.pagePost(postId).comments.create({ message });
      return { id: (result as { id: string }).id };
    },

    /** List comments on a Page post. */
    async list(postId: string, opts?: { fields?: (keyof CommentFields)[]; limit?: number }) {
      const cursor = api.pagePost(postId).comments.list({
        fields: opts?.fields ?? ["id", "message", "from", "created_time"] as (keyof CommentFields)[],
        params: opts?.limit ? { limit: opts.limit } : undefined,
      });
      return cursor.toArray();
    },

    /** Reply to an existing comment (nested reply). */
    async reply(commentId: string, message: string): Promise<{ id: string }> {
      const result = await api.comment(commentId).comments.create({ message });
      return { id: (result as { id: string }).id };
    },

    /** Hide or unhide a comment. */
    async hide(commentId: string, hidden: boolean = true): Promise<void> {
      await api.comment(commentId).update({ is_hidden: hidden });
    },

    /** Delete a comment. */
    async delete(commentId: string): Promise<void> {
      await api.comment(commentId).delete();
    },
  };
}
