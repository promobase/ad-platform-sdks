// @generated
// fingerprint: sha256:b740b814b88fa8a35e7becdc76abea5a3e53692a10ca01c70b1736d274784c2e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignBidModifiersRequest, MutateCampaignBidModifiersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignBidModifierService. Do not edit by hand.
export const campaignBidModifierService = {
  mutateCampaignBidModifiers(client: HttpClient, customerId: string, body: Omit<MutateCampaignBidModifiersRequest, "customerId">): Promise<MutateCampaignBidModifiersResponse> {
    return client.post<MutateCampaignBidModifiersResponse>(`/v23/customers/${customerId}/campaignBidModifiers:mutate`, body);
  }
};
