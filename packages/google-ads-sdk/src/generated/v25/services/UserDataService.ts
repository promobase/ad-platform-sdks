// @generated
// fingerprint: sha256:3b3b1264e9dce2793c0cb8874e97447ed03c3404d4400d06a26eb90f8c9b4cf2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { UploadUserDataRequest, UploadUserDataResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.UserDataService. Do not edit by hand.
export const userDataService = {
  uploadUserData(client: HttpClient, customerId: string, body: Omit<UploadUserDataRequest, "customerId">): Promise<UploadUserDataResponse> {
    return client.post<UploadUserDataResponse>(`/v25/customers/${customerId}:uploadUserData`, body);
  }
};
