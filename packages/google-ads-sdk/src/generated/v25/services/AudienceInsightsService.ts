import type { GenerateAudienceCompositionInsightsRequest, GenerateAudienceCompositionInsightsResponse, GenerateAudienceDefinitionRequest, GenerateAudienceDefinitionResponse, GenerateAudienceOverlapInsightsRequest, GenerateAudienceOverlapInsightsResponse, GenerateInsightsFinderReportRequest, GenerateInsightsFinderReportResponse, GenerateSuggestedTargetingInsightsRequest, GenerateSuggestedTargetingInsightsResponse, GenerateTargetingSuggestionMetricsRequest, GenerateTargetingSuggestionMetricsResponse, ListAudienceInsightsAttributesRequest, ListAudienceInsightsAttributesResponse, ListInsightsEligibleDatesRequest, ListInsightsEligibleDatesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AudienceInsightsService. Do not edit by hand.
export const audienceInsightsService = {
  generateInsightsFinderReport(client: HttpClient, customerId: string, body: Omit<GenerateInsightsFinderReportRequest, "customerId">): Promise<GenerateInsightsFinderReportResponse> {
    return client.post<GenerateInsightsFinderReportResponse>(`/v25/customers/${customerId}:generateInsightsFinderReport`, body);
  },

  listAudienceInsightsAttributes(client: HttpClient, customerId: string, body: Omit<ListAudienceInsightsAttributesRequest, "customerId">): Promise<ListAudienceInsightsAttributesResponse> {
    return client.post<ListAudienceInsightsAttributesResponse>(`/v25/customers/${customerId}:searchAudienceInsightsAttributes`, body);
  },

  listInsightsEligibleDates(client: HttpClient, body: ListInsightsEligibleDatesRequest): Promise<ListInsightsEligibleDatesResponse> {
    return client.post<ListInsightsEligibleDatesResponse>(`/v25/audienceInsights:listInsightsEligibleDates`, body);
  },

  generateAudienceCompositionInsights(client: HttpClient, customerId: string, body: Omit<GenerateAudienceCompositionInsightsRequest, "customerId">): Promise<GenerateAudienceCompositionInsightsResponse> {
    return client.post<GenerateAudienceCompositionInsightsResponse>(`/v25/customers/${customerId}:generateAudienceCompositionInsights`, body);
  },

  generateAudienceDefinition(client: HttpClient, customerId: string, body: Omit<GenerateAudienceDefinitionRequest, "customerId">): Promise<GenerateAudienceDefinitionResponse> {
    return client.post<GenerateAudienceDefinitionResponse>(`/v25/customers/${customerId}:generateAudienceDefinition`, body);
  },

  generateSuggestedTargetingInsights(client: HttpClient, customerId: string, body: Omit<GenerateSuggestedTargetingInsightsRequest, "customerId">): Promise<GenerateSuggestedTargetingInsightsResponse> {
    return client.post<GenerateSuggestedTargetingInsightsResponse>(`/v25/customers/${customerId}:generateSuggestedTargetingInsights`, body);
  },

  generateAudienceOverlapInsights(client: HttpClient, customerId: string, body: Omit<GenerateAudienceOverlapInsightsRequest, "customerId">): Promise<GenerateAudienceOverlapInsightsResponse> {
    return client.post<GenerateAudienceOverlapInsightsResponse>(`/v25/customers/${customerId}:generateAudienceOverlapInsights`, body);
  },

  generateTargetingSuggestionMetrics(client: HttpClient, customerId: string, body: Omit<GenerateTargetingSuggestionMetricsRequest, "customerId">): Promise<GenerateTargetingSuggestionMetricsResponse> {
    return client.post<GenerateTargetingSuggestionMetricsResponse>(`/v25/customers/${customerId}:generateTargetingSuggestionMetrics`, body);
  }
};
