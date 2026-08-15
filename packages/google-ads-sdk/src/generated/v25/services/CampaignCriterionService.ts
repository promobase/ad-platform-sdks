// @generated
// fingerprint: sha256:b07aa64c51d005db07f157647381ec2088216b6eadae63421cc2bf81dcdc05f0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignCriteriaRequest, MutateCampaignCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignCriterionService. Do not edit by hand.
export const campaignCriterionService = {
  mutateCampaignCriteria(client: HttpClient, customerId: string, body: Omit<MutateCampaignCriteriaRequest, "customerId">): Promise<MutateCampaignCriteriaResponse> {
    return client.post<MutateCampaignCriteriaResponse>(`/v25/customers/${customerId}/campaignCriteria:mutate`, body);
  }
};
