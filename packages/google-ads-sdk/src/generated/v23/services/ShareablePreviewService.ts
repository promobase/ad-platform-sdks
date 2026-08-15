// @generated
// fingerprint: sha256:08f26f29772b092904b4bedf65a2d3293d3f21230272454ba5f05681860040ec
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GenerateShareablePreviewsRequest, GenerateShareablePreviewsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ShareablePreviewService. Do not edit by hand.
export const shareablePreviewService = {
  generateShareablePreviews(client: HttpClient, customerId: string, body: Omit<GenerateShareablePreviewsRequest, "customerId">): Promise<GenerateShareablePreviewsResponse> {
    return client.post<GenerateShareablePreviewsResponse>(`/v23/customers/${customerId}:generateShareablePreviews`, body);
  }
};
