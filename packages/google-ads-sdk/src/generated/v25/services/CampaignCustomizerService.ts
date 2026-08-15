// @generated
// fingerprint: sha256:1f0bb9fc03e2520de8f01179ac1490e0fea52b5ff36c318369f0f35b5642ed14
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignCustomizersRequest, MutateCampaignCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignCustomizerService. Do not edit by hand.
export const campaignCustomizerService = {
  mutateCampaignCustomizers(client: HttpClient, customerId: string, body: Omit<MutateCampaignCustomizersRequest, "customerId">): Promise<MutateCampaignCustomizersResponse> {
    return client.post<MutateCampaignCustomizersResponse>(`/v25/customers/${customerId}/campaignCustomizers:mutate`, body);
  }
};
