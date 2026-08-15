// @generated
// fingerprint: sha256:0045aaf5182391acf477311d47f5934aad0148fd9a7617e89d41a46df28f49e5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ListPaymentsAccountsRequest, ListPaymentsAccountsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.PaymentsAccountService. Do not edit by hand.
export const paymentsAccountService = {
  listPaymentsAccounts(client: HttpClient, customerId: string): Promise<ListPaymentsAccountsResponse> {
    return client.get<ListPaymentsAccountsResponse>(`/v25/customers/${customerId}/paymentsAccounts`);
  }
};
