// @generated
// fingerprint: sha256:0d01d25ee8d9d7f638eb6105f933e36e2fd1d21edd99f69bce3a17e1ea7cf7d7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { UploadConversionAdjustmentsRequest, UploadConversionAdjustmentsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionAdjustmentUploadService. Do not edit by hand.
export const conversionAdjustmentUploadService = {
  uploadConversionAdjustments(client: HttpClient, customerId: string, body: Omit<UploadConversionAdjustmentsRequest, "customerId">): Promise<UploadConversionAdjustmentsResponse> {
    return client.post<UploadConversionAdjustmentsResponse>(`/v25/customers/${customerId}:uploadConversionAdjustments`, body);
  }
};
