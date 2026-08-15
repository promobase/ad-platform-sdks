// @generated
// fingerprint: sha256:48b337e45e8fc12bfa0165ffabf13e4ab37ab71a695de8ee01c111b0d78f6f7c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ListInvoicesRequest, ListInvoicesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.InvoiceService. Do not edit by hand.
export const invoiceService = {
  listInvoices(client: HttpClient, customerId: string, query: Omit<ListInvoicesRequest, "customerId"> = {} as Omit<ListInvoicesRequest, "customerId">): Promise<ListInvoicesResponse> {
    return client.get<ListInvoicesResponse>(`/v25/customers/${customerId}/invoices`, { query: query as Record<string, string | number | boolean | undefined> });
  }
};
