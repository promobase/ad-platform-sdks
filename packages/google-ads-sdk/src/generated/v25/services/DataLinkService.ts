import type { CreateDataLinkRequest, CreateDataLinkResponse, RemoveDataLinkRequest, RemoveDataLinkResponse, UpdateDataLinkRequest, UpdateDataLinkResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.DataLinkService. Do not edit by hand.
export const dataLinkService = {
  createDataLink(client: HttpClient, customerId: string, body: Omit<CreateDataLinkRequest, "customerId">): Promise<CreateDataLinkResponse> {
    return client.post<CreateDataLinkResponse>(`/v25/customers/${customerId}/dataLinks:create`, body);
  },

  removeDataLink(client: HttpClient, customerId: string, body: Omit<RemoveDataLinkRequest, "customerId">): Promise<RemoveDataLinkResponse> {
    return client.post<RemoveDataLinkResponse>(`/v25/customers/${customerId}/dataLinks:remove`, body);
  },

  updateDataLink(client: HttpClient, customerId: string, body: Omit<UpdateDataLinkRequest, "customerId">): Promise<UpdateDataLinkResponse> {
    return client.post<UpdateDataLinkResponse>(`/v25/customers/${customerId}/dataLinks:update`, body);
  }
};
