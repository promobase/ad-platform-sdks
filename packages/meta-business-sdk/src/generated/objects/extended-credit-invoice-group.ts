// @generated
// fingerprint: sha256:9afd4b824312670398fdee6a752a951c2c3e96fb0c134bb3b9a46057e748071d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
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
    __path: id,
    __brand: undefined as unknown as ExtendedCreditInvoiceGroupFields,
    get: <F extends (keyof ExtendedCreditInvoiceGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ExtendedCreditInvoiceGroupFields, F[number]>>(`${id}`, opts),
    update: (params: ExtendedCreditInvoiceGroupUpdateParams) =>
      client.post<ExtendedCreditInvoiceGroupFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    adAccounts: {
      __path: `${id}/ad_accounts`,
      __brand: undefined as unknown as AdAccountFields,
      list: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
      create: (params: ExtendedCreditInvoiceGroupCreateAdAccountsParams) =>
        client.post<AdAccountFields>(`${id}/ad_accounts`, params as Record<string, unknown>),
      delete: (params: ExtendedCreditInvoiceGroupDeleteAdAccountsParams) =>
        client.delete(`${id}/ad_accounts`, params as Record<string, unknown> ?? {}),
    },
  };
}

