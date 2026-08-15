// @generated
// fingerprint: sha256:954fe2fbddbdca36fb494971c62207829066a40405039f5e73229ebf0d54ea15
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignConversionGoalsRequest, MutateCampaignConversionGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignConversionGoalService. Do not edit by hand.
export const campaignConversionGoalService = {
  mutateCampaignConversionGoals(client: HttpClient, customerId: string, body: Omit<MutateCampaignConversionGoalsRequest, "customerId">): Promise<MutateCampaignConversionGoalsResponse> {
    return client.post<MutateCampaignConversionGoalsResponse>(`/v23/customers/${customerId}/campaignConversionGoals:mutate`, body);
  }
};
