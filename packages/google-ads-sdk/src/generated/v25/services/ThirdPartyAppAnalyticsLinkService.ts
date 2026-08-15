// @generated
// fingerprint: sha256:ca4ffa59c6122086aa7c260c456951237fc7b895c4ad9beb67a7557f87d04288
// DO NOT EDIT: generated file; changes will be overwritten.
import type { RegenerateShareableLinkIdRequest, RegenerateShareableLinkIdResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ThirdPartyAppAnalyticsLinkService. Do not edit by hand.
export const thirdPartyAppAnalyticsLinkService = {
  regenerateShareableLinkId(client: HttpClient, resourceName: string, body: Omit<RegenerateShareableLinkIdRequest, "resourceName">): Promise<RegenerateShareableLinkIdResponse> {
    return client.post<RegenerateShareableLinkIdResponse>(`/v25/${resourceName}:regenerateShareableLinkId`, body);
  }
};
