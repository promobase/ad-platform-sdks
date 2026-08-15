// @generated
// fingerprint: sha256:a096ed9000f130282dbe3a40866eb953f1e68f5a77ca883a085bb5ff34a22bf4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GenerateShareablePreviewsRequest, GenerateShareablePreviewsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ShareablePreviewService. Do not edit by hand.
export const shareablePreviewService = {
  generateShareablePreviews(client: HttpClient, customerId: string, body: Omit<GenerateShareablePreviewsRequest, "customerId">): Promise<GenerateShareablePreviewsResponse> {
    return client.post<GenerateShareablePreviewsResponse>(`/v25/customers/${customerId}:generateShareablePreviews`, body);
  }
};
