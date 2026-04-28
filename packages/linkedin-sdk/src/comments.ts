import type { LinkedInClient } from "./client.ts";
import type { LinkedInUrn } from "./types.ts";

export interface LinkedInCommentResult {
  commentId?: string;
  commentUrn?: string;
  body: unknown;
}

export function createComments(client: LinkedInClient) {
  return {
    async create(
      postUrn: LinkedInUrn,
      actorUrn: LinkedInUrn,
      text: string,
    ): Promise<LinkedInCommentResult> {
      const trimmed = text.trim();
      if (!trimmed) {
        throw new Error("LinkedIn comment text cannot be empty");
      }

      const response = await client.request<Record<string, unknown>>(
        `/socialActions/${encodeURIComponent(postUrn)}/comments`,
        {
          method: "POST",
          body: {
            actor: actorUrn,
            object: postUrn,
            message: { text: trimmed },
          },
        },
      );

      const commentUrn =
        (typeof response.data.commentUrn === "string" ? response.data.commentUrn : undefined) ??
        response.headers.get("x-resourceidentity-urn") ??
        response.headers.get("X-ResourceIdentity-Urn") ??
        undefined;
      const commentId =
        response.headers.get("x-restli-id") ??
        response.headers.get("X-RestLi-Id") ??
        (typeof response.data.id === "string" ? response.data.id : undefined) ??
        undefined;

      return {
        commentId,
        commentUrn,
        body: response.data,
      };
    },
  };
}
