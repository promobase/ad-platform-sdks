import type { UploadUserDataRequest, UploadUserDataResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.UserDataService. Do not edit by hand.
export const userDataService = {
  uploadUserData(client: HttpClient, customerId: string, body: Omit<UploadUserDataRequest, "customerId">): Promise<UploadUserDataResponse> {
    return client.post<UploadUserDataResponse>(`/v23/customers/${customerId}:uploadUserData`, body);
  }
};
