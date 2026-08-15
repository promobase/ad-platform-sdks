// @generated
// fingerprint: sha256:c8fd3b6a8a2e5841d53e6e4d96df0c1b9e6a66e25ea2540df596cda496dbe593
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignBidModifiersRequest, MutateCampaignBidModifiersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignBidModifierService. Do not edit by hand.
export const campaignBidModifierService = {
  mutateCampaignBidModifiers(client: HttpClient, customerId: string, body: Omit<MutateCampaignBidModifiersRequest, "customerId">): Promise<MutateCampaignBidModifiersResponse> {
    return client.post<MutateCampaignBidModifiersResponse>(`/v25/customers/${customerId}/campaignBidModifiers:mutate`, body);
  }
};
