// @generated
// fingerprint: sha256:9ee74a7ebb716301388dc24dcc225cc5db44ee056f2ee50a91117c3baab40b3e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SuggestBrandsRequest, SuggestBrandsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.BrandSuggestionService. Do not edit by hand.
export const brandSuggestionService = {
  suggestBrands(client: HttpClient, customerId: string, body: Omit<SuggestBrandsRequest, "customerId">): Promise<SuggestBrandsResponse> {
    return client.post<SuggestBrandsResponse>(`/v25/customers/${customerId}:suggestBrands`, body);
  }
};
