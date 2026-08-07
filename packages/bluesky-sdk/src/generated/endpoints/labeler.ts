// Auto-generated client for app.bsky.labeler — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyLabelerDefsLabelerView, AppBskyLabelerDefsLabelerViewDetailed, GetServicesResponse } from "../types.ts";
import type { GetServicesParams } from "../params.ts";

/** app.bsky.labeler — 1 endpoints */
export function createLabelerClient(api: BlueskyApiClient) {
  return {
    /** Get information about a list of labeler services. */
    async getServices(params: GetServicesParams): Promise<GetServicesResponse> {
      const envelope = await api.get<GetServicesResponse>("/xrpc/app.bsky.labeler.getServices", params);
      return envelope;
    },
  };
}
