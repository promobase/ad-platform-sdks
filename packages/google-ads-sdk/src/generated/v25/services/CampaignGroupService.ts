// @generated
// fingerprint: sha256:c11bac6968a3c217df2cc1eccf17977bdd402bf61d3cad3bdd40b6251fea1553
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignGroupsRequest, MutateCampaignGroupsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignGroupService. Do not edit by hand.
export const campaignGroupService = {
  mutateCampaignGroups(client: HttpClient, customerId: string, body: Omit<MutateCampaignGroupsRequest, "customerId">): Promise<MutateCampaignGroupsResponse> {
    return client.post<MutateCampaignGroupsResponse>(`/v25/customers/${customerId}/campaignGroups:mutate`, body);
  }
};
