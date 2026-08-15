// @generated
// fingerprint: sha256:0e9032884d8c1b35b8107660be54410c48d7c64cd722e5c1a10df2520c8edc2e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AddBatchJobOperationsRequest, AddBatchJobOperationsResponse, ListBatchJobResultsRequest, ListBatchJobResultsResponse, MutateBatchJobRequest, MutateBatchJobResponse, RunBatchJobRequest } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.BatchJobService. Do not edit by hand.
export const batchJobService = {
  mutateBatchJob(client: HttpClient, customerId: string, body: Omit<MutateBatchJobRequest, "customerId">): Promise<MutateBatchJobResponse> {
    return client.post<MutateBatchJobResponse>(`/v25/customers/${customerId}/batchJobs:mutate`, body);
  },

  listBatchJobResults(client: HttpClient, resourceName: string, query: Omit<ListBatchJobResultsRequest, "resourceName"> = {} as Omit<ListBatchJobResultsRequest, "resourceName">): Promise<ListBatchJobResultsResponse> {
    return client.get<ListBatchJobResultsResponse>(`/v25/${resourceName}:listResults`, { query: query as Record<string, string | number | boolean | undefined> });
  },

  runBatchJob(client: HttpClient, resourceName: string, body: Omit<RunBatchJobRequest, "resourceName">): Promise<unknown> {
    return client.post<unknown>(`/v25/${resourceName}:run`, body);
  },

  addBatchJobOperations(client: HttpClient, resourceName: string, body: Omit<AddBatchJobOperationsRequest, "resourceName">): Promise<AddBatchJobOperationsResponse> {
    return client.post<AddBatchJobOperationsResponse>(`/v25/${resourceName}:addOperations`, body);
  }
};
