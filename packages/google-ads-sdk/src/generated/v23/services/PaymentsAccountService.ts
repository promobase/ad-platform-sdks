// @generated
// fingerprint: sha256:df0282a4fdc9418f9b6e04c6bb4306d3cbebd13ef8bf380d5db91e8505221332
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ListPaymentsAccountsRequest, ListPaymentsAccountsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.PaymentsAccountService. Do not edit by hand.
export const paymentsAccountService = {
  listPaymentsAccounts(client: HttpClient, customerId: string): Promise<ListPaymentsAccountsResponse> {
    return client.get<ListPaymentsAccountsResponse>(`/v23/customers/${customerId}/paymentsAccounts`);
  }
};
