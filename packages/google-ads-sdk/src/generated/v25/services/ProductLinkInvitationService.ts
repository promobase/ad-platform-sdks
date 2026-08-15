// @generated
// fingerprint: sha256:52cf1e4fabc2a617f2c2a7ab04cfc6a4df7763d9afcb865fa900be7efc960def
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CreateProductLinkInvitationRequest, CreateProductLinkInvitationResponse, RemoveProductLinkInvitationRequest, RemoveProductLinkInvitationResponse, UpdateProductLinkInvitationRequest, UpdateProductLinkInvitationResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ProductLinkInvitationService. Do not edit by hand.
export const productLinkInvitationService = {
  createProductLinkInvitation(client: HttpClient, customerId: string, body: Omit<CreateProductLinkInvitationRequest, "customerId">): Promise<CreateProductLinkInvitationResponse> {
    return client.post<CreateProductLinkInvitationResponse>(`/v25/customers/${customerId}/productLinkInvitations:create`, body);
  },

  updateProductLinkInvitation(client: HttpClient, customerId: string, body: Omit<UpdateProductLinkInvitationRequest, "customerId">): Promise<UpdateProductLinkInvitationResponse> {
    return client.post<UpdateProductLinkInvitationResponse>(`/v25/customers/${customerId}/productLinkInvitations:update`, body);
  },

  removeProductLinkInvitation(client: HttpClient, customerId: string, body: Omit<RemoveProductLinkInvitationRequest, "customerId">): Promise<RemoveProductLinkInvitationResponse> {
    return client.post<RemoveProductLinkInvitationResponse>(`/v25/customers/${customerId}/productLinkInvitations:remove`, body);
  }
};
