import type { SuggestGeoTargetConstantsRequest, SuggestGeoTargetConstantsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.GeoTargetConstantService. Do not edit by hand.
export const geoTargetConstantService = {
  suggestGeoTargetConstants(client: HttpClient, body: SuggestGeoTargetConstantsRequest): Promise<SuggestGeoTargetConstantsResponse> {
    return client.post<SuggestGeoTargetConstantsResponse>(`/v23/geoTargetConstants:suggest`, body);
  }
};
