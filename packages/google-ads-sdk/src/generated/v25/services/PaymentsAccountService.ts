import type { ListPaymentsAccountsRequest, ListPaymentsAccountsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.PaymentsAccountService. Do not edit by hand.
export const paymentsAccountService = {
  listPaymentsAccounts(client: HttpClient, customerId: string): Promise<ListPaymentsAccountsResponse> {
    return client.get<ListPaymentsAccountsResponse>(`/v25/customers/${customerId}/paymentsAccounts`);
  }
};
