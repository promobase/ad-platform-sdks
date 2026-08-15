// @generated
// fingerprint: sha256:28a0418d33846c9fd18be6c07f8f93ecd2097691dc78fc030f75cf7414501e96
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AddOfflineUserDataJobOperationsRequest, AddOfflineUserDataJobOperationsResponse, CreateOfflineUserDataJobRequest, CreateOfflineUserDataJobResponse, RunOfflineUserDataJobRequest } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

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
