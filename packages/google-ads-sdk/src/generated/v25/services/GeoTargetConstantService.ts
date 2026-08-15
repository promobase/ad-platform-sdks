// @generated
// fingerprint: sha256:00817bcb93a4c25749fdf790bf41f72d2638898a945dca488a638477155adc67
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SuggestGeoTargetConstantsRequest, SuggestGeoTargetConstantsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.GeoTargetConstantService. Do not edit by hand.
export const geoTargetConstantService = {
  suggestGeoTargetConstants(client: HttpClient, body: SuggestGeoTargetConstantsRequest): Promise<SuggestGeoTargetConstantsResponse> {
    return client.post<SuggestGeoTargetConstantsResponse>(`/v25/geoTargetConstants:suggest`, body);
  }
};
