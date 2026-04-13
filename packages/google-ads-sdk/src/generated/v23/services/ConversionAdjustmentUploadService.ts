import type { UploadConversionAdjustmentsRequest, UploadConversionAdjustmentsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionAdjustmentUploadService. Do not edit by hand.
export const conversionAdjustmentUploadService = {
  uploadConversionAdjustments(client: HttpClient, customerId: string, body: Omit<UploadConversionAdjustmentsRequest, "customerId">): Promise<UploadConversionAdjustmentsResponse> {
    return client.post<UploadConversionAdjustmentsResponse>(`/v23/customers/${customerId}:uploadConversionAdjustments`, body);
  }
};
