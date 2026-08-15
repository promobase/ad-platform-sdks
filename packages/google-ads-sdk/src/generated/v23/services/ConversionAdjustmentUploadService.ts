// @generated
// fingerprint: sha256:235d7e62cbef88e2580fabfb66a1d983c6f2fe4703634fcaa2a46de6115b6c9a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { UploadConversionAdjustmentsRequest, UploadConversionAdjustmentsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionAdjustmentUploadService. Do not edit by hand.
export const conversionAdjustmentUploadService = {
  uploadConversionAdjustments(client: HttpClient, customerId: string, body: Omit<UploadConversionAdjustmentsRequest, "customerId">): Promise<UploadConversionAdjustmentsResponse> {
    return client.post<UploadConversionAdjustmentsResponse>(`/v23/customers/${customerId}:uploadConversionAdjustments`, body);
  }
};
