import type { UploadCallConversionsRequest, UploadCallConversionsResponse, UploadClickConversionsRequest, UploadClickConversionsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionUploadService. Do not edit by hand.
export const conversionUploadService = {
  uploadClickConversions(client: HttpClient, customerId: string, body: Omit<UploadClickConversionsRequest, "customerId">): Promise<UploadClickConversionsResponse> {
    return client.post<UploadClickConversionsResponse>(`/v25/customers/${customerId}:uploadClickConversions`, body);
  },

  uploadCallConversions(client: HttpClient, customerId: string, body: Omit<UploadCallConversionsRequest, "customerId">): Promise<UploadCallConversionsResponse> {
    return client.post<UploadCallConversionsResponse>(`/v25/customers/${customerId}:uploadCallConversions`, body);
  }
};
