// @generated
// fingerprint: sha256:2eea008f247eea256f65811802f88ec77254c8f8585815ebb1c3616b2a7100fe
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignConversionGoalsRequest, MutateCampaignConversionGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignConversionGoalService. Do not edit by hand.
export const campaignConversionGoalService = {
  mutateCampaignConversionGoals(client: HttpClient, customerId: string, body: Omit<MutateCampaignConversionGoalsRequest, "customerId">): Promise<MutateCampaignConversionGoalsResponse> {
    return client.post<MutateCampaignConversionGoalsResponse>(`/v25/customers/${customerId}/campaignConversionGoals:mutate`, body);
  }
};
