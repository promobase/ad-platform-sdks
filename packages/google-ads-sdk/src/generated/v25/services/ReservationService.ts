// @generated
// fingerprint: sha256:daf3613f4c822fc2691c468c90e8d2f1665ab30caa4f9e76dbfe644d07eb2e3b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BookCampaignsRequest, BookCampaignsResponse, QuoteCampaignsRequest, QuoteCampaignsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ReservationService. Do not edit by hand.
export const reservationService = {
  quoteCampaigns(client: HttpClient, customerId: string, body: Omit<QuoteCampaignsRequest, "customerId">): Promise<QuoteCampaignsResponse> {
    return client.post<QuoteCampaignsResponse>(`/v25/customers/${customerId}/reservations:quoteCampaigns`, body);
  },

  bookCampaigns(client: HttpClient, customerId: string, body: Omit<BookCampaignsRequest, "customerId">): Promise<BookCampaignsResponse> {
    return client.post<BookCampaignsResponse>(`/v25/customers/${customerId}/reservations:bookCampaigns`, body);
  }
};
