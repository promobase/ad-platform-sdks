// Auto-generated client for app.bsky.embed — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyEmbedExternalView, ComAtprotoRepoStrongRef, GetEmbedExternalViewResponse } from "../types.ts";
import type { GetEmbedExternalViewParams } from "../params.ts";

/** app.bsky.embed — 1 endpoints */
export function createEmbedClient(api: BlueskyApiClient) {
  return {
    /** Resolve one or more AT-URIs into the data needed to render an enhanced external embed. Returns 'associatedRefs' (strongRefs to embed into a post's external.associatedRefs), the raw 'associatedRecords', and a hydrated 'view'. The response is empty ('{}') when no records were resolvable, or when validation determined the resolved records don't actually back the requested URL; clients should fall back to their own link-card rendering in that case and skip writing strongRefs to the post. */
    async getEmbedExternalView(params: GetEmbedExternalViewParams): Promise<GetEmbedExternalViewResponse> {
      const envelope = await api.get<GetEmbedExternalViewResponse>("/xrpc/app.bsky.embed.getEmbedExternalView", params);
      return envelope;
    },
  };
}
