// @generated
// fingerprint: sha256:82fc222c6810cb80f2e91ff179471f7a85d96566dd36d3ce82937fbe0dc3f47b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GenerateConversionRatesRequest, GenerateConversionRatesResponse, GenerateReachForecastRequest, GenerateReachForecastResponse, ListPlannableLocationsRequest, ListPlannableLocationsResponse, ListPlannableProductsRequest, ListPlannableProductsResponse, ListPlannableUserInterestsRequest, ListPlannableUserInterestsResponse, ListPlannableUserListsRequest, ListPlannableUserListsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ReachPlanService. Do not edit by hand.
export const reachPlanService = {
  generateConversionRates(client: HttpClient, body: GenerateConversionRatesRequest): Promise<GenerateConversionRatesResponse> {
    return client.post<GenerateConversionRatesResponse>(`/v25:generateConversionRates`, body);
  },

  listPlannableLocations(client: HttpClient, body: ListPlannableLocationsRequest): Promise<ListPlannableLocationsResponse> {
    return client.post<ListPlannableLocationsResponse>(`/v25:listPlannableLocations`, body);
  },

  listPlannableProducts(client: HttpClient, body: ListPlannableProductsRequest): Promise<ListPlannableProductsResponse> {
    return client.post<ListPlannableProductsResponse>(`/v25:listPlannableProducts`, body);
  },

  generateReachForecast(client: HttpClient, customerId: string, body: Omit<GenerateReachForecastRequest, "customerId">): Promise<GenerateReachForecastResponse> {
    return client.post<GenerateReachForecastResponse>(`/v25/customers/${customerId}:generateReachForecast`, body);
  },

  listPlannableUserLists(client: HttpClient, body: ListPlannableUserListsRequest): Promise<ListPlannableUserListsResponse> {
    return client.post<ListPlannableUserListsResponse>(`/v25:listPlannableUserLists`, body);
  },

  listPlannableUserInterests(client: HttpClient, body: ListPlannableUserInterestsRequest): Promise<ListPlannableUserInterestsResponse> {
    return client.post<ListPlannableUserInterestsResponse>(`/v25:listPlannableUserInterests`, body);
  }
};
