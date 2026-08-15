// @generated
// fingerprint: sha256:3578beb3e07dbffb1f7c4ee34560e22edc383ca883d8338f814dc2f8fa75b6b7
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for com.atproto.label — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { ComAtprotoLabelDefsLabel, QueryLabelsResponse } from "../types.ts";
import type { QueryLabelsParams } from "../params.ts";

/** com.atproto.label — 1 endpoints */
export function createLabelClient(api: BlueskyApiClient) {
  return {
    /** Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth. */
    async queryLabels(params: QueryLabelsParams): Promise<QueryLabelsResponse> {
      const envelope = await api.get<QueryLabelsResponse>("/xrpc/com.atproto.label.queryLabels", params);
      return envelope;
    },
  };
}
