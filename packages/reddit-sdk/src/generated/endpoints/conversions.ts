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
