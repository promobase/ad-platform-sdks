import type { AddOfflineUserDataJobOperationsRequest, AddOfflineUserDataJobOperationsResponse, CreateOfflineUserDataJobRequest, CreateOfflineUserDataJobResponse, RunOfflineUserDataJobRequest } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.OfflineUserDataJobService. Do not edit by hand.
export const offlineUserDataJobService = {
  createOfflineUserDataJob(client: HttpClient, customerId: string, body: Omit<CreateOfflineUserDataJobRequest, "customerId">): Promise<CreateOfflineUserDataJobResponse> {
    return client.post<CreateOfflineUserDataJobResponse>(`/v23/customers/${customerId}/offlineUserDataJobs:create`, body);
  },

  addOfflineUserDataJobOperations(client: HttpClient, resourceName: string, body: Omit<AddOfflineUserDataJobOperationsRequest, "resourceName">): Promise<AddOfflineUserDataJobOperationsResponse> {
    return client.post<AddOfflineUserDataJobOperationsResponse>(`/v23/${resourceName}:addOperations`, body);
  },

  runOfflineUserDataJob(client: HttpClient, resourceName: string, body: Omit<RunOfflineUserDataJobRequest, "resourceName">): Promise<unknown> {
    return client.post<unknown>(`/v23/${resourceName}:run`, body);
  }
};
