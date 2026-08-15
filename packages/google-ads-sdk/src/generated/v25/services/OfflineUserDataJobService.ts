// @generated
// fingerprint: sha256:4d52ccdd57418511b13683e333a28ac7585c9452aea77e8d1cb43a96096a73c8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AddOfflineUserDataJobOperationsRequest, AddOfflineUserDataJobOperationsResponse, CreateOfflineUserDataJobRequest, CreateOfflineUserDataJobResponse, RunOfflineUserDataJobRequest } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.OfflineUserDataJobService. Do not edit by hand.
export const offlineUserDataJobService = {
  createOfflineUserDataJob(client: HttpClient, customerId: string, body: Omit<CreateOfflineUserDataJobRequest, "customerId">): Promise<CreateOfflineUserDataJobResponse> {
    return client.post<CreateOfflineUserDataJobResponse>(`/v25/customers/${customerId}/offlineUserDataJobs:create`, body);
  },

  addOfflineUserDataJobOperations(client: HttpClient, resourceName: string, body: Omit<AddOfflineUserDataJobOperationsRequest, "resourceName">): Promise<AddOfflineUserDataJobOperationsResponse> {
    return client.post<AddOfflineUserDataJobOperationsResponse>(`/v25/${resourceName}:addOperations`, body);
  },

  runOfflineUserDataJob(client: HttpClient, resourceName: string, body: Omit<RunOfflineUserDataJobRequest, "resourceName">): Promise<unknown> {
    return client.post<unknown>(`/v25/${resourceName}:run`, body);
  }
};
