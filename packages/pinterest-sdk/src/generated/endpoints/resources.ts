// @generated
// fingerprint: sha256:c39912d114a2a02cf94df0afcbf6bb8d901386390d386b82f5e4be78807c91ee
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for resources — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AdAccountCountriesGetResponse, DeliveryMetricsGetResponse, MetricsReadyStateGetResponse, TargetingOptionsGetResponse, InterestTargetingOptionsGetResponse } from "../types.ts";
import type { ListAdAccountCountriesParams, ListDeliveryMetricsParams, GetLeadFormQuestionsParams, GetMetricsReadyStateParams, ListTargetingOptionsParams, GetInterestTargetingOptionsParams } from "../params.ts";

/** resources — 6 endpoints */
export function createResourcesClient(api: PinterestApiClient) {
  return {
    /** Get ad accounts countries
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAdAccountCountries(params: ListAdAccountCountriesParams): Promise<AdAccountCountriesGetResponse> {
      const query = params;
      const envelope = await api.get<AdAccountCountriesGetResponse>(`/resources/ad_account_countries`, query);
      return envelope;
    },

    /** Get available metrics' definitions
   * Requires pinterest_oauth2: ads:read, pins:read, user_accounts:read; client_credentials: ads:read, pins:read, user_accounts:read. */
    async listDeliveryMetrics(params: ListDeliveryMetricsParams): Promise<DeliveryMetricsGetResponse> {
      const query = params;
      const envelope = await api.get<DeliveryMetricsGetResponse>(`/resources/delivery_metrics`, query);
      return envelope;
    },

    /** Get lead form questions
   * Requires pinterest_oauth2: ads:read. */
    async getLeadFormQuestions(params: GetLeadFormQuestionsParams): Promise<unknown> {
      const query = params;
      const envelope = await api.get<unknown>(`/resources/lead_form_questions`, query);
      return envelope;
    },

    /** Get metrics ready state
   * Requires pinterest_oauth2: ads:read. */
    async getMetricsReadyState(params: GetMetricsReadyStateParams): Promise<MetricsReadyStateGetResponse> {
      const query = params;
      const envelope = await api.get<MetricsReadyStateGetResponse>(`/resources/metrics_ready_state`, query);
      return envelope;
    },

    /** Get targeting options
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listTargetingOptions(params: ListTargetingOptionsParams): Promise<TargetingOptionsGetResponse> {
      const { targetingType, ...query } = params;
      const envelope = await api.get<TargetingOptionsGetResponse>(`/resources/targeting/${targetingType}`, query);
      return envelope;
    },

    /** Get interest details
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getInterestTargetingOptions(params: GetInterestTargetingOptionsParams): Promise<InterestTargetingOptionsGetResponse> {
      const { interestId, ...query } = params;
      const envelope = await api.get<InterestTargetingOptionsGetResponse>(`/resources/targeting/interests/${interestId}`, query);
      return envelope;
    },
  };
}
