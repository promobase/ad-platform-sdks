// @generated
// fingerprint: sha256:aa13e09d6ef9c118a76a50e6a094ccf1d53ff36db166dfeba60faa10889d34c7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { UploadUserDataRequest, UploadUserDataResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.UserDataService. Do not edit by hand.
export const userDataService = {
  uploadUserData(client: HttpClient, customerId: string, body: Omit<UploadUserDataRequest, "customerId">): Promise<UploadUserDataResponse> {
    return client.post<UploadUserDataResponse>(`/v23/customers/${customerId}:uploadUserData`, body);
  }
};
