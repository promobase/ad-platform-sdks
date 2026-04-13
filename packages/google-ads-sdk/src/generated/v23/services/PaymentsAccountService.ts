import type { ListPaymentsAccountsRequest, ListPaymentsAccountsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.PaymentsAccountService. Do not edit by hand.
export const paymentsAccountService = {
  listPaymentsAccounts(client: HttpClient, customerId: string): Promise<ListPaymentsAccountsResponse> {
    return client.get<ListPaymentsAccountsResponse>(`/v23/customers/${customerId}/paymentsAccounts`);
  }
};
