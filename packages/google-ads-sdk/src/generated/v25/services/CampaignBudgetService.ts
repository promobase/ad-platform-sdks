// @generated
// fingerprint: sha256:e7570e102c801bc532835792602f240f6a85f43ed94f5a46cefbde594372ea72
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignBudgetsRequest, MutateCampaignBudgetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignBudgetService. Do not edit by hand.
export const campaignBudgetService = {
  mutateCampaignBudgets(client: HttpClient, customerId: string, body: Omit<MutateCampaignBudgetsRequest, "customerId">): Promise<MutateCampaignBudgetsResponse> {
    return client.post<MutateCampaignBudgetsResponse>(`/v25/customers/${customerId}/campaignBudgets:mutate`, body);
  }
};
