import type { AppendLeadConversationRequest, AppendLeadConversationResponse, ProvideLeadFeedbackRequest, ProvideLeadFeedbackResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.LocalServicesLeadService. Do not edit by hand.
export const localServicesLeadService = {
  appendLeadConversation(client: HttpClient, customerId: string, body: Omit<AppendLeadConversationRequest, "customerId">): Promise<AppendLeadConversationResponse> {
    return client.post<AppendLeadConversationResponse>(`/v23/customers/${customerId}/localServices:appendLeadConversation`, body);
  },

  provideLeadFeedback(client: HttpClient, resourceName: string, body: Omit<ProvideLeadFeedbackRequest, "resourceName">): Promise<ProvideLeadFeedbackResponse> {
    return client.post<ProvideLeadFeedbackResponse>(`/v23/${resourceName}:provideLeadFeedback`, body);
  }
};
