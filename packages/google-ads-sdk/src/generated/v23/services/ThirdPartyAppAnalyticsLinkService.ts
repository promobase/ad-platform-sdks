import type { RegenerateShareableLinkIdRequest, RegenerateShareableLinkIdResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ThirdPartyAppAnalyticsLinkService. Do not edit by hand.
export const thirdPartyAppAnalyticsLinkService = {
  regenerateShareableLinkId(client: HttpClient, resourceName: string, body: Omit<RegenerateShareableLinkIdRequest, "resourceName">): Promise<RegenerateShareableLinkIdResponse> {
    return client.post<RegenerateShareableLinkIdResponse>(`/v23/${resourceName}:regenerateShareableLinkId`, body);
  }
};
