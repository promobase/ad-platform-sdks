// @generated
// fingerprint: sha256:09d3062d5a6e308215aab1532ed844b2fe42b52a942559d1c9745f90799368f1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { RegenerateShareableLinkIdRequest, RegenerateShareableLinkIdResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ThirdPartyAppAnalyticsLinkService. Do not edit by hand.
export const thirdPartyAppAnalyticsLinkService = {
  regenerateShareableLinkId(client: HttpClient, resourceName: string, body: Omit<RegenerateShareableLinkIdRequest, "resourceName">): Promise<RegenerateShareableLinkIdResponse> {
    return client.post<RegenerateShareableLinkIdResponse>(`/v23/${resourceName}:regenerateShareableLinkId`, body);
  }
};
