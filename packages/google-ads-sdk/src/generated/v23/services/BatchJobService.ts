import type { AddBatchJobOperationsRequest, AddBatchJobOperationsResponse, ListBatchJobResultsRequest, ListBatchJobResultsResponse, MutateBatchJobRequest, MutateBatchJobResponse, RunBatchJobRequest } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BatchJobService. Do not edit by hand.
export const batchJobService = {
  mutateBatchJob(client: HttpClient, customerId: string, body: Omit<MutateBatchJobRequest, "customerId">): Promise<MutateBatchJobResponse> {
    return client.post<MutateBatchJobResponse>(`/v23/customers/${customerId}/batchJobs:mutate`, body);
  },

  listBatchJobResults(client: HttpClient, resourceName: string, query: Omit<ListBatchJobResultsRequest, "resourceName"> = {} as Omit<ListBatchJobResultsRequest, "resourceName">): Promise<ListBatchJobResultsResponse> {
    return client.get<ListBatchJobResultsResponse>(`/v23/${resourceName}:listResults`, { query: query as Record<string, string | number | boolean | undefined> });
  },

  runBatchJob(client: HttpClient, resourceName: string, body: Omit<RunBatchJobRequest, "resourceName">): Promise<unknown> {
    return client.post<unknown>(`/v23/${resourceName}:run`, body);
  },

  addBatchJobOperations(client: HttpClient, resourceName: string, body: Omit<AddBatchJobOperationsRequest, "resourceName">): Promise<AddBatchJobOperationsResponse> {
    return client.post<AddBatchJobOperationsResponse>(`/v23/${resourceName}:addOperations`, body);
  }
};
