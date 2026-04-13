import type { SuggestBrandsRequest, SuggestBrandsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BrandSuggestionService. Do not edit by hand.
export const brandSuggestionService = {
  suggestBrands(client: HttpClient, customerId: string, body: Omit<SuggestBrandsRequest, "customerId">): Promise<SuggestBrandsResponse> {
    return client.post<SuggestBrandsResponse>(`/v23/customers/${customerId}:suggestBrands`, body);
  }
};
