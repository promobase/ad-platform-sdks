import type { ListInvoicesRequest, ListInvoicesResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.InvoiceService. Do not edit by hand.
export const invoiceService = {
  listInvoices(client: HttpClient, customerId: string, query: Omit<ListInvoicesRequest, "customerId"> = {} as Omit<ListInvoicesRequest, "customerId">): Promise<ListInvoicesResponse> {
    return client.get<ListInvoicesResponse>(`/v23/customers/${customerId}/invoices`, { query: query as Record<string, string | number | boolean | undefined> });
  }
};
