// @generated
// fingerprint: sha256:ceba03e32e53bcbfd6f070fe60704d7ed8a1c43056629ff22c98536e13143cc2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { EnablePMaxBrandGuidelinesRequest, EnablePMaxBrandGuidelinesResponse, MutateCampaignsRequest, MutateCampaignsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignService. Do not edit by hand.
export const campaignService = {
  mutateCampaigns(client: HttpClient, customerId: string, body: Omit<MutateCampaignsRequest, "customerId">): Promise<MutateCampaignsResponse> {
    return client.post<MutateCampaignsResponse>(`/v23/customers/${customerId}/campaigns:mutate`, body);
  },

  enablePMaxBrandGuidelines(client: HttpClient, customerId: string, body: Omit<EnablePMaxBrandGuidelinesRequest, "customerId">): Promise<EnablePMaxBrandGuidelinesResponse> {
    return client.post<EnablePMaxBrandGuidelinesResponse>(`/v23/customers/${customerId}/campaigns:enablePMaxBrandGuidelines`, body);
  }
};
