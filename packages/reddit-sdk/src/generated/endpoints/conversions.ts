// @generated
// fingerprint: sha256:19e83a9497b3e43d1d3d48dcc0a8f84a65ae2a7a46ed85d72f4800327ade4c59
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Conversions — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { ConversionEventsResponse, ConversionEventsRequest } from "../types.ts";
import type { PostConversionEventsParams } from "../params.ts";

/** Conversions — 1 endpoints */
export function createConversionsClient(api: RedditApiClient) {
  return {
    /** Post conversion events */
    async postConversionEvents(params: PostConversionEventsParams): Promise<ConversionEventsResponse> {
      const { pixelId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/pixels/${pixelId}/conversion_events`, rest);
      return envelope.data as ConversionEventsResponse;
    },
  };
}
