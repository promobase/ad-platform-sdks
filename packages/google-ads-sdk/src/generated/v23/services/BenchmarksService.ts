import type { GenerateBenchmarksMetricsRequest, GenerateBenchmarksMetricsResponse, ListBenchmarksAvailableDatesRequest, ListBenchmarksAvailableDatesResponse, ListBenchmarksLocationsRequest, ListBenchmarksLocationsResponse, ListBenchmarksProductsRequest, ListBenchmarksProductsResponse, ListBenchmarksSourcesRequest, ListBenchmarksSourcesResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

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
