// @generated
// fingerprint: sha256:6d054dda9bac0b14caaf9c0d891b893abca54fa8595ceb078f8159ac3cb15e50
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AppendLeadConversationRequest, AppendLeadConversationResponse, ProvideLeadFeedbackRequest, ProvideLeadFeedbackResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.LocalServicesLeadService. Do not edit by hand.
export const localServicesLeadService = {
  appendLeadConversation(client: HttpClient, customerId: string, body: Omit<AppendLeadConversationRequest, "customerId">): Promise<AppendLeadConversationResponse> {
    return client.post<AppendLeadConversationResponse>(`/v23/customers/${customerId}/localServices:appendLeadConversation`, body);
  },

  provideLeadFeedback(client: HttpClient, resourceName: string, body: Omit<ProvideLeadFeedbackRequest, "resourceName">): Promise<ProvideLeadFeedbackResponse> {
    return client.post<ProvideLeadFeedbackResponse>(`/v23/${resourceName}:provideLeadFeedback`, body);
  }
};
