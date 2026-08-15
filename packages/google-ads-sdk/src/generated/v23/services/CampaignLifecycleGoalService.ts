// @generated
// fingerprint: sha256:bafaf419f0c60b64a817ef061f323913be1aeba8c24262c3479798e21a8b10b5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConfigureCampaignLifecycleGoalsRequest, ConfigureCampaignLifecycleGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignLifecycleGoalService. Do not edit by hand.
export const campaignLifecycleGoalService = {
  configureCampaignLifecycleGoals(client: HttpClient, customerId: string, body: Omit<ConfigureCampaignLifecycleGoalsRequest, "customerId">): Promise<ConfigureCampaignLifecycleGoalsResponse> {
    return client.post<ConfigureCampaignLifecycleGoalsResponse>(`/v23/customers/${customerId}/campaignLifecycleGoal:configureCampaignLifecycleGoals`, body);
  }
};
