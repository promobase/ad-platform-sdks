import type { GenerateShareablePreviewsRequest, GenerateShareablePreviewsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ShareablePreviewService. Do not edit by hand.
export const shareablePreviewService = {
  generateShareablePreviews(client: HttpClient, customerId: string, body: Omit<GenerateShareablePreviewsRequest, "customerId">): Promise<GenerateShareablePreviewsResponse> {
    return client.post<GenerateShareablePreviewsResponse>(`/v23/customers/${customerId}:generateShareablePreviews`, body);
  }
};
