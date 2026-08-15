// @generated
// fingerprint: sha256:3fad10d0666eb2c2a10b2eaad68db83118a18ceb42b5a1e50e740c3af46ba686
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ListInvoicesRequest, ListInvoicesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.InvoiceService. Do not edit by hand.
export const invoiceService = {
  listInvoices(client: HttpClient, customerId: string, query: Omit<ListInvoicesRequest, "customerId"> = {} as Omit<ListInvoicesRequest, "customerId">): Promise<ListInvoicesResponse> {
    return client.get<ListInvoicesResponse>(`/v23/customers/${customerId}/invoices`, { query: query as Record<string, string | number | boolean | undefined> });
  }
};
