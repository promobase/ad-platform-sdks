import type { EndExperimentRequest, GraduateExperimentRequest, ListExperimentAsyncErrorsRequest, ListExperimentAsyncErrorsResponse, MutateExperimentsRequest, MutateExperimentsResponse, PromoteExperimentRequest, ScheduleExperimentRequest } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ExperimentService. Do not edit by hand.
export const experimentService = {
  mutateExperiments(client: HttpClient, customerId: string, body: Omit<MutateExperimentsRequest, "customerId">): Promise<MutateExperimentsResponse> {
    return client.post<MutateExperimentsResponse>(`/v23/customers/${customerId}/experiments:mutate`, body);
  },

  endExperiment(client: HttpClient, experiment: string, body: Omit<EndExperimentRequest, "experiment">): Promise<Record<string, never>> {
    return client.post<Record<string, never>>(`/v23/${experiment}:endExperiment`, body);
  },

  listExperimentAsyncErrors(client: HttpClient, resourceName: string, query: Omit<ListExperimentAsyncErrorsRequest, "resourceName"> = {} as Omit<ListExperimentAsyncErrorsRequest, "resourceName">): Promise<ListExperimentAsyncErrorsResponse> {
    return client.get<ListExperimentAsyncErrorsResponse>(`/v23/${resourceName}:listExperimentAsyncErrors`, { query: query as Record<string, string | number | boolean | undefined> });
  },

  graduateExperiment(client: HttpClient, experiment: string, body: Omit<GraduateExperimentRequest, "experiment">): Promise<Record<string, never>> {
    return client.post<Record<string, never>>(`/v23/${experiment}:graduateExperiment`, body);
  },

  scheduleExperiment(client: HttpClient, resourceName: string, body: Omit<ScheduleExperimentRequest, "resourceName">): Promise<unknown> {
    return client.post<unknown>(`/v23/${resourceName}:scheduleExperiment`, body);
  },

  promoteExperiment(client: HttpClient, resourceName: string, body: Omit<PromoteExperimentRequest, "resourceName">): Promise<unknown> {
    return client.post<unknown>(`/v23/${resourceName}:promoteExperiment`, body);
  }
};
