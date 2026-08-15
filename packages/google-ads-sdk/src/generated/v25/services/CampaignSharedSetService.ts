// @generated
// fingerprint: sha256:43d8e72e7b68cdcd38ced7736494dfabbabf300706f09b12daa2cafd99bbab49
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignSharedSetsRequest, MutateCampaignSharedSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignSharedSetService. Do not edit by hand.
export const campaignSharedSetService = {
  mutateCampaignSharedSets(client: HttpClient, customerId: string, body: Omit<MutateCampaignSharedSetsRequest, "customerId">): Promise<MutateCampaignSharedSetsResponse> {
    return client.post<MutateCampaignSharedSetsResponse>(`/v25/customers/${customerId}/campaignSharedSets:mutate`, body);
  }
};
