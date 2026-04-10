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
  };
}
