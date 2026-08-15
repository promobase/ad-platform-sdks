// @generated
// fingerprint: sha256:6d0f89f33e1ab4d9bd2dcc769e64801d9548f3fb4916f8f3ad6c0e5258be289d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CreateProductLinkRequest, CreateProductLinkResponse, RemoveProductLinkRequest, RemoveProductLinkResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ProductLinkService. Do not edit by hand.
export const productLinkService = {
  createProductLink(client: HttpClient, customerId: string, body: Omit<CreateProductLinkRequest, "customerId">): Promise<CreateProductLinkResponse> {
    return client.post<CreateProductLinkResponse>(`/v23/customers/${customerId}/productLinks:create`, body);
  },

  removeProductLink(client: HttpClient, customerId: string, body: Omit<RemoveProductLinkRequest, "customerId">): Promise<RemoveProductLinkResponse> {
    return client.post<RemoveProductLinkResponse>(`/v23/customers/${customerId}/productLinks:remove`, body);
  }
};
