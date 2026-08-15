// @generated
// fingerprint: sha256:d70629b86b1510eab9f39c3f753995a43a6f070072fd6c26790ff8540ced5807
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SuggestGeoTargetConstantsRequest, SuggestGeoTargetConstantsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.GeoTargetConstantService. Do not edit by hand.
export const geoTargetConstantService = {
  suggestGeoTargetConstants(client: HttpClient, body: SuggestGeoTargetConstantsRequest): Promise<SuggestGeoTargetConstantsResponse> {
    return client.post<SuggestGeoTargetConstantsResponse>(`/v23/geoTargetConstants:suggest`, body);
  }
};
