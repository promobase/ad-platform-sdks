// @generated
// fingerprint: sha256:a9017748fe24964a144ae6ad5cf57c9321ef458cc4bf6db56e4cdd3adc8a8eab
// DO NOT EDIT: generated file; changes will be overwritten.
import type { EnablePMaxBrandGuidelinesRequest, EnablePMaxBrandGuidelinesResponse, MutateCampaignsRequest, MutateCampaignsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignService. Do not edit by hand.
export const campaignService = {
  mutateCampaigns(client: HttpClient, customerId: string, body: Omit<MutateCampaignsRequest, "customerId">): Promise<MutateCampaignsResponse> {
    return client.post<MutateCampaignsResponse>(`/v25/customers/${customerId}/campaigns:mutate`, body);
  },

  enablePMaxBrandGuidelines(client: HttpClient, customerId: string, body: Omit<EnablePMaxBrandGuidelinesRequest, "customerId">): Promise<EnablePMaxBrandGuidelinesResponse> {
    return client.post<EnablePMaxBrandGuidelinesResponse>(`/v25/customers/${customerId}/campaigns:enablePMaxBrandGuidelines`, body);
  }
};
