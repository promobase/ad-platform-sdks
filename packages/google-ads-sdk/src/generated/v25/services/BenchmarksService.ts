import type { GenerateBenchmarksMetricsRequest, GenerateBenchmarksMetricsResponse, ListBenchmarksAvailableDatesRequest, ListBenchmarksAvailableDatesResponse, ListBenchmarksLocationsRequest, ListBenchmarksLocationsResponse, ListBenchmarksProductsRequest, ListBenchmarksProductsResponse, ListBenchmarksSourcesRequest, ListBenchmarksSourcesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.BenchmarksService. Do not edit by hand.
export const benchmarksService = {
  listBenchmarksAvailableDates(client: HttpClient, body: ListBenchmarksAvailableDatesRequest): Promise<ListBenchmarksAvailableDatesResponse> {
    return client.post<ListBenchmarksAvailableDatesResponse>(`/v25:listBenchmarksAvailableDates`, body);
  },

  listBenchmarksLocations(client: HttpClient, body: ListBenchmarksLocationsRequest): Promise<ListBenchmarksLocationsResponse> {
    return client.post<ListBenchmarksLocationsResponse>(`/v25:listBenchmarksLocations`, body);
  },

  listBenchmarksProducts(client: HttpClient, body: ListBenchmarksProductsRequest): Promise<ListBenchmarksProductsResponse> {
    return client.post<ListBenchmarksProductsResponse>(`/v25:listBenchmarksProducts`, body);
  },

  listBenchmarksSources(client: HttpClient, body: ListBenchmarksSourcesRequest): Promise<ListBenchmarksSourcesResponse> {
    return client.post<ListBenchmarksSourcesResponse>(`/v25:listBenchmarksSources`, body);
  },

  generateBenchmarksMetrics(client: HttpClient, customerId: string, body: Omit<GenerateBenchmarksMetricsRequest, "customerId">): Promise<GenerateBenchmarksMetricsResponse> {
    return client.post<GenerateBenchmarksMetricsResponse>(`/v25/customers/${customerId}:generateBenchmarksMetrics`, body);
  }
};
