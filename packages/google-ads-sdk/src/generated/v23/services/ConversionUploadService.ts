import type { UploadCallConversionsRequest, UploadCallConversionsResponse, UploadClickConversionsRequest, UploadClickConversionsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionUploadService. Do not edit by hand.
export const conversionUploadService = {
  uploadClickConversions(client: HttpClient, customerId: string, body: Omit<UploadClickConversionsRequest, "customerId">): Promise<UploadClickConversionsResponse> {
    return client.post<UploadClickConversionsResponse>(`/v23/customers/${customerId}:uploadClickConversions`, body);
  },

  uploadCallConversions(client: HttpClient, customerId: string, body: Omit<UploadCallConversionsRequest, "customerId">): Promise<UploadCallConversionsResponse> {
    return client.post<UploadCallConversionsResponse>(`/v23/customers/${customerId}:uploadCallConversions`, body);
  }
};
