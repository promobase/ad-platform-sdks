// @generated
// fingerprint: sha256:fd8ddbf7e596a428a8738a72a6c88f9a713adfff6b3b2019078636f541013b6f
// DO NOT EDIT: generated file; changes will be overwritten.
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
