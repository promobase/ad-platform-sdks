// @generated
// fingerprint: sha256:f7fec550db9e97d808c89b79edcca49a015aaa421bb95d9b8a7464a1e3d70c17
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CreateDataLinkRequest, CreateDataLinkResponse, RemoveDataLinkRequest, RemoveDataLinkResponse, UpdateDataLinkRequest, UpdateDataLinkResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.DataLinkService. Do not edit by hand.
export const dataLinkService = {
  createDataLink(client: HttpClient, customerId: string, body: Omit<CreateDataLinkRequest, "customerId">): Promise<CreateDataLinkResponse> {
    return client.post<CreateDataLinkResponse>(`/v23/customers/${customerId}/dataLinks:create`, body);
  },

  removeDataLink(client: HttpClient, customerId: string, body: Omit<RemoveDataLinkRequest, "customerId">): Promise<RemoveDataLinkResponse> {
    return client.post<RemoveDataLinkResponse>(`/v23/customers/${customerId}/dataLinks:remove`, body);
  },

  updateDataLink(client: HttpClient, customerId: string, body: Omit<UpdateDataLinkRequest, "customerId">): Promise<UpdateDataLinkResponse> {
    return client.post<UpdateDataLinkResponse>(`/v23/customers/${customerId}/dataLinks:update`, body);
  }
};
