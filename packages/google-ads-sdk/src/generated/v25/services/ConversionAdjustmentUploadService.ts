import type { UploadConversionAdjustmentsRequest, UploadConversionAdjustmentsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionAdjustmentUploadService. Do not edit by hand.
export const conversionAdjustmentUploadService = {
  uploadConversionAdjustments(client: HttpClient, customerId: string, body: Omit<UploadConversionAdjustmentsRequest, "customerId">): Promise<UploadConversionAdjustmentsResponse> {
    return client.post<UploadConversionAdjustmentsResponse>(`/v25/customers/${customerId}:uploadConversionAdjustments`, body);
  }
};
