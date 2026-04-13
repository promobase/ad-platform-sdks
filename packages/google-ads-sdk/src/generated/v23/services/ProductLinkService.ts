import type { CreateProductLinkRequest, CreateProductLinkResponse, RemoveProductLinkRequest, RemoveProductLinkResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ProductLinkService. Do not edit by hand.
export const productLinkService = {
  createProductLink(client: HttpClient, customerId: string, body: Omit<CreateProductLinkRequest, "customerId">): Promise<CreateProductLinkResponse> {
    return client.post<CreateProductLinkResponse>(`/v23/customers/${customerId}/productLinks:create`, body);
  },

  removeProductLink(client: HttpClient, customerId: string, body: Omit<RemoveProductLinkRequest, "customerId">): Promise<RemoveProductLinkResponse> {
    return client.post<RemoveProductLinkResponse>(`/v23/customers/${customerId}/productLinks:remove`, body);
  }
};
