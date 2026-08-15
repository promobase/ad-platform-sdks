// @generated
// fingerprint: sha256:12cf50748a22f24d530ee4e56e3c9991abf342c2feb488dfb2fa9e9c9772dc3b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SuggestBrandsRequest, SuggestBrandsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BrandSuggestionService. Do not edit by hand.
export const brandSuggestionService = {
  suggestBrands(client: HttpClient, customerId: string, body: Omit<SuggestBrandsRequest, "customerId">): Promise<SuggestBrandsResponse> {
    return client.post<SuggestBrandsResponse>(`/v23/customers/${customerId}:suggestBrands`, body);
  }
};
