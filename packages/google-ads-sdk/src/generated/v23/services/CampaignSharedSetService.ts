// @generated
// fingerprint: sha256:5997a11edf5d5023285ec5953b11a5dd498c1e01da8b89741cf3a80c119ef136
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignSharedSetsRequest, MutateCampaignSharedSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignSharedSetService. Do not edit by hand.
export const campaignSharedSetService = {
  mutateCampaignSharedSets(client: HttpClient, customerId: string, body: Omit<MutateCampaignSharedSetsRequest, "customerId">): Promise<MutateCampaignSharedSetsResponse> {
    return client.post<MutateCampaignSharedSetsResponse>(`/v23/customers/${customerId}/campaignSharedSets:mutate`, body);
  }
};
