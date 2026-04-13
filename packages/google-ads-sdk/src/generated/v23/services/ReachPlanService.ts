import type { GenerateConversionRatesRequest, GenerateConversionRatesResponse, GenerateReachForecastRequest, GenerateReachForecastResponse, ListPlannableLocationsRequest, ListPlannableLocationsResponse, ListPlannableProductsRequest, ListPlannableProductsResponse, ListPlannableUserInterestsRequest, ListPlannableUserInterestsResponse, ListPlannableUserListsRequest, ListPlannableUserListsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ReachPlanService. Do not edit by hand.
export const reachPlanService = {
  generateConversionRates(client: HttpClient, body: GenerateConversionRatesRequest): Promise<GenerateConversionRatesResponse> {
    return client.post<GenerateConversionRatesResponse>(`/v23:generateConversionRates`, body);
  },

  listPlannableLocations(client: HttpClient, body: ListPlannableLocationsRequest): Promise<ListPlannableLocationsResponse> {
    return client.post<ListPlannableLocationsResponse>(`/v23:listPlannableLocations`, body);
  },

  listPlannableProducts(client: HttpClient, body: ListPlannableProductsRequest): Promise<ListPlannableProductsResponse> {
    return client.post<ListPlannableProductsResponse>(`/v23:listPlannableProducts`, body);
  },

  generateReachForecast(client: HttpClient, customerId: string, body: Omit<GenerateReachForecastRequest, "customerId">): Promise<GenerateReachForecastResponse> {
    return client.post<GenerateReachForecastResponse>(`/v23/customers/${customerId}:generateReachForecast`, body);
  },

  listPlannableUserLists(client: HttpClient, body: ListPlannableUserListsRequest): Promise<ListPlannableUserListsResponse> {
    return client.post<ListPlannableUserListsResponse>(`/v23:listPlannableUserLists`, body);
  },

  listPlannableUserInterests(client: HttpClient, body: ListPlannableUserInterestsRequest): Promise<ListPlannableUserInterestsResponse> {
    return client.post<ListPlannableUserInterestsResponse>(`/v23:listPlannableUserInterests`, body);
  }
};
