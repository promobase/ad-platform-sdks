import type { ListCampaignDraftAsyncErrorsRequest, ListCampaignDraftAsyncErrorsResponse, MutateCampaignDraftsRequest, MutateCampaignDraftsResponse, PromoteCampaignDraftRequest } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignDraftService. Do not edit by hand.
export const campaignDraftService = {
  mutateCampaignDrafts(client: HttpClient, customerId: string, body: Omit<MutateCampaignDraftsRequest, "customerId">): Promise<MutateCampaignDraftsResponse> {
    return client.post<MutateCampaignDraftsResponse>(`/v23/customers/${customerId}/campaignDrafts:mutate`, body);
  },

  promoteCampaignDraft(client: HttpClient, campaignDraft: string, body: Omit<PromoteCampaignDraftRequest, "campaignDraft">): Promise<unknown> {
    return client.post<unknown>(`/v23/${campaignDraft}:promote`, body);
  },

  listCampaignDraftAsyncErrors(client: HttpClient, resourceName: string, query: Omit<ListCampaignDraftAsyncErrorsRequest, "resourceName"> = {} as Omit<ListCampaignDraftAsyncErrorsRequest, "resourceName">): Promise<ListCampaignDraftAsyncErrorsResponse> {
    return client.get<ListCampaignDraftAsyncErrorsResponse>(`/v23/${resourceName}:listAsyncErrors`, { query: query as Record<string, string | number | boolean | undefined> });
  }
};
