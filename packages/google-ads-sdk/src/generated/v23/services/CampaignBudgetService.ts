// @generated
// fingerprint: sha256:d3cd7d456ce7d92c1e4c5dbef1f8ae5f2840e649a80cc8d3d3c1a4a518122fd4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignBudgetsRequest, MutateCampaignBudgetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignBudgetService. Do not edit by hand.
export const campaignBudgetService = {
  mutateCampaignBudgets(client: HttpClient, customerId: string, body: Omit<MutateCampaignBudgetsRequest, "customerId">): Promise<MutateCampaignBudgetsResponse> {
    return client.post<MutateCampaignBudgetsResponse>(`/v23/customers/${customerId}/campaignBudgets:mutate`, body);
  }
};
