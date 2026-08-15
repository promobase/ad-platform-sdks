// @generated
// fingerprint: sha256:f3f18e29e6d144d37b162a3a13bfc52c7b82ab175893c3c340b9164cf1a23d46
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignCustomizersRequest, MutateCampaignCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignCustomizerService. Do not edit by hand.
export const campaignCustomizerService = {
  mutateCampaignCustomizers(client: HttpClient, customerId: string, body: Omit<MutateCampaignCustomizersRequest, "customerId">): Promise<MutateCampaignCustomizersResponse> {
    return client.post<MutateCampaignCustomizersResponse>(`/v23/customers/${customerId}/campaignCustomizers:mutate`, body);
  }
};
