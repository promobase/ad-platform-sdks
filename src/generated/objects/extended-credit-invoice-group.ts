import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { CRMAddressFields } from "./crm-address.ts";
import type { ExtendedCreditEmailFields } from "./extended-credit-email.ts";

export interface ExtendedCreditInvoiceGroupFields {
  auto_enroll: boolean;
  bill_to_address: CRMAddressFields;
  customer_po_number: string;
  email: ExtendedCreditEmailFields;
  emails: string[];
  id: string;
  liable_address: CRMAddressFields;
  name: string;
  sold_to_address: CRMAddressFields;
}

export interface ExtendedCreditInvoiceGroupDeleteAdAccountsParams {
  ad_account_id: string;
  [key: string]: unknown;
}

export interface ExtendedCreditInvoiceGroupCreateAdAccountsParams {
  ad_account_id: string;
  [key: string]: unknown;
}

export interface ExtendedCreditInvoiceGroupUpdateParams {
  emails?: string[];
  name?: string;
  [key: string]: unknown;
}

export function extendedCreditInvoiceGroupNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ExtendedCreditInvoiceGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ExtendedCreditInvoiceGroupFields, F[number]>>(`${id}`, opts),
    update: (params: ExtendedCreditInvoiceGroupUpdateParams) =>
      client.post<ExtendedCreditInvoiceGroupFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    adAccounts: {
      list: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: ExtendedCreditInvoiceGroupCreateAdAccountsParams) =>
        client.post<AdAccountFields>(`${id}/ad_accounts`, params as Record<string, unknown>),
      delete: (params: ExtendedCreditInvoiceGroupDeleteAdAccountsParams) =>
        client.delete(`${id}/ad_accounts`, params as Record<string, unknown> ?? {}),
    },
  };
}

