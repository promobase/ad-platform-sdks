import type { UploadUserDataRequest, UploadUserDataResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.UserDataService. Do not edit by hand.
export const userDataService = {
  uploadUserData(client: HttpClient, customerId: string, body: Omit<UploadUserDataRequest, "customerId">): Promise<UploadUserDataResponse> {
    return client.post<UploadUserDataResponse>(`/v25/customers/${customerId}:uploadUserData`, body);
  }
};
