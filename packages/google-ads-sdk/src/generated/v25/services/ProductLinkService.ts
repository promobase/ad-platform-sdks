// @generated
// fingerprint: sha256:6c232253435a3cfade3bed7d17519b592cc81cc444d5476dab0a4f5d95f24c49
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CreateProductLinkRequest, CreateProductLinkResponse, RemoveProductLinkRequest, RemoveProductLinkResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ProductLinkService. Do not edit by hand.
export const productLinkService = {
  createProductLink(client: HttpClient, customerId: string, body: Omit<CreateProductLinkRequest, "customerId">): Promise<CreateProductLinkResponse> {
    return client.post<CreateProductLinkResponse>(`/v25/customers/${customerId}/productLinks:create`, body);
  },

  removeProductLink(client: HttpClient, customerId: string, body: Omit<RemoveProductLinkRequest, "customerId">): Promise<RemoveProductLinkResponse> {
    return client.post<RemoveProductLinkResponse>(`/v25/customers/${customerId}/productLinks:remove`, body);
  }
};
