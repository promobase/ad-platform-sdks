import type { GenerateImagesRequest, GenerateImagesResponse, GenerateTextRequest, GenerateTextResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetGenerationService. Do not edit by hand.
export const assetGenerationService = {
  generateText(client: HttpClient, customerId: string, body: Omit<GenerateTextRequest, "customerId">): Promise<GenerateTextResponse> {
    return client.post<GenerateTextResponse>(`/v25/customers/${customerId}/assetGenerations:generateText`, body);
  },

  generateImages(client: HttpClient, customerId: string, body: Omit<GenerateImagesRequest, "customerId">): Promise<GenerateImagesResponse> {
    return client.post<GenerateImagesResponse>(`/v25/customers/${customerId}/assetGenerations:generateImages`, body);
  }
};
