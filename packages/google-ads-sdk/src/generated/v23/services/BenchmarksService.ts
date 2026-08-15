// @generated
// fingerprint: sha256:aab920aebdfdfd40c2d8a3dd7f7e0f34c711b2185963ac26cd3162e4aab71a05
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GenerateBenchmarksMetricsRequest, GenerateBenchmarksMetricsResponse, ListBenchmarksAvailableDatesRequest, ListBenchmarksAvailableDatesResponse, ListBenchmarksLocationsRequest, ListBenchmarksLocationsResponse, ListBenchmarksProductsRequest, ListBenchmarksProductsResponse, ListBenchmarksSourcesRequest, ListBenchmarksSourcesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BenchmarksService. Do not edit by hand.
export const benchmarksService = {
  listBenchmarksAvailableDates(client: HttpClient, body: ListBenchmarksAvailableDatesRequest): Promise<ListBenchmarksAvailableDatesResponse> {
    return client.post<ListBenchmarksAvailableDatesResponse>(`/v23:listBenchmarksAvailableDates`, body);
  },

  listBenchmarksLocations(client: HttpClient, body: ListBenchmarksLocationsRequest): Promise<ListBenchmarksLocationsResponse> {
    return client.post<ListBenchmarksLocationsResponse>(`/v23:listBenchmarksLocations`, body);
  },

  listBenchmarksProducts(client: HttpClient, body: ListBenchmarksProductsRequest): Promise<ListBenchmarksProductsResponse> {
    return client.post<ListBenchmarksProductsResponse>(`/v23:listBenchmarksProducts`, body);
  },

  listBenchmarksSources(client: HttpClient, body: ListBenchmarksSourcesRequest): Promise<ListBenchmarksSourcesResponse> {
    return client.post<ListBenchmarksSourcesResponse>(`/v23:listBenchmarksSources`, body);
  },

  generateBenchmarksMetrics(client: HttpClient, customerId: string, body: Omit<GenerateBenchmarksMetricsRequest, "customerId">): Promise<GenerateBenchmarksMetricsResponse> {
    return client.post<GenerateBenchmarksMetricsResponse>(`/v23/customers/${customerId}:generateBenchmarksMetrics`, body);
  }
};
