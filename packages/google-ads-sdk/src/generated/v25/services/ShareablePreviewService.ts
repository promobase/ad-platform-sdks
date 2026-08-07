import type { GenerateShareablePreviewsRequest, GenerateShareablePreviewsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ShareablePreviewService. Do not edit by hand.
export const shareablePreviewService = {
  generateShareablePreviews(client: HttpClient, customerId: string, body: Omit<GenerateShareablePreviewsRequest, "customerId">): Promise<GenerateShareablePreviewsResponse> {
    return client.post<GenerateShareablePreviewsResponse>(`/v25/customers/${customerId}:generateShareablePreviews`, body);
  }
};
