// @generated
// fingerprint: sha256:ddf1e59aa3aa08e6b2bb9570454af2bcd0321ff57c0b21dcd7eae576e99dd4e0
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for app.bsky.ageassurance — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyAgeassuranceDefsState, AppBskyAgeassuranceDefsConfig, AppBskyAgeassuranceDefsStateMetadata, BeginResponse, GetConfigResponse, GetStateResponse } from "../types.ts";
import type { BeginParams, GetConfigParams, GetStateParams } from "../params.ts";

/** app.bsky.ageassurance — 3 endpoints */
export function createAgeassuranceClient(api: BlueskyApiClient) {
  return {
    /** Initiate Age Assurance for an account. */
    async begin(params: BeginParams): Promise<BeginResponse> {
      const envelope = await api.post<BeginResponse>("/xrpc/app.bsky.ageassurance.begin", params, undefined);
      return envelope;
    },

    /** Returns Age Assurance configuration for use on the client. */
    async getConfig(params: GetConfigParams): Promise<GetConfigResponse> {
      const envelope = await api.get<GetConfigResponse>("/xrpc/app.bsky.ageassurance.getConfig", params);
      return envelope;
    },

    /** Returns server-computed Age Assurance state, if available, and any additional metadata needed to compute Age Assurance state client-side. */
    async getState(params: GetStateParams): Promise<GetStateResponse> {
      const envelope = await api.get<GetStateResponse>("/xrpc/app.bsky.ageassurance.getState", params);
      return envelope;
    },
  };
}
