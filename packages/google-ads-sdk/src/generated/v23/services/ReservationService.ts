// @generated
// fingerprint: sha256:65f0640afaf3715dfd4c0139a97ab70e33a419ff5286733a2819b9e640ff6543
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BookCampaignsRequest, BookCampaignsResponse, QuoteCampaignsRequest, QuoteCampaignsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ReservationService. Do not edit by hand.
export const reservationService = {
  quoteCampaigns(client: HttpClient, customerId: string, body: Omit<QuoteCampaignsRequest, "customerId">): Promise<QuoteCampaignsResponse> {
    return client.post<QuoteCampaignsResponse>(`/v23/customers/${customerId}/reservations:quoteCampaigns`, body);
  },

  bookCampaigns(client: HttpClient, customerId: string, body: Omit<BookCampaignsRequest, "customerId">): Promise<BookCampaignsResponse> {
    return client.post<BookCampaignsResponse>(`/v23/customers/${customerId}/reservations:bookCampaigns`, body);
  }
};
