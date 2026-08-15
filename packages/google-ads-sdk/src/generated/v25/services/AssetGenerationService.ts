// @generated
// fingerprint: sha256:931aabd517fda3ddaf2908eade87a6e4cc50f9fca5d13af993d0f17c20943b59
// DO NOT EDIT: generated file; changes will be overwritten.
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
