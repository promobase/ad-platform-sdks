// Auto-generated client for Structured Posts — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { StructuredPost, StructuredPostCreate } from "../types.ts";
import type { ListStructuredpostsParams, CreateStructuredpostParams } from "../params.ts";

/** Structured Posts — 2 endpoints */
export function createStructuredPostsClient(api: RedditApiClient) {
  return {
    /** List structured posts */
    async listStructuredposts(params: ListStructuredpostsParams): Promise<StructuredPost[]> {
      const { accountId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/structured_posts`, query);
      return envelope.data as StructuredPost[];
    },

    /** Create structured post */
    async createStructuredpost(params: CreateStructuredpostParams): Promise<StructuredPost> {
      const { accountId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}/structured_posts`, rest);
      return envelope.data as StructuredPost;
    },
  };
}
