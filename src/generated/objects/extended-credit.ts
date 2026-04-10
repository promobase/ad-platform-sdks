import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { BusinessFields } from "./business.ts";
import type { CRMAddressFields } from "./crm-address.ts";
import type { CurrencyAmountFields } from "./currency-amount.ts";
import type { ExtendedCreditAllocationConfigFields } from "./extended-credit-allocation-config.ts";
import type { ExtendedCreditInvoiceGroupFields } from "./extended-credit-invoice-group.ts";

export interface ExtendedCreditFields {
  allocated_amount: CurrencyAmountFields;
  balance: CurrencyAmountFields;
  credit_available: CurrencyAmountFields;
  credit_type: string;
  id: string;
  is_access_revoked: boolean;
  is_automated_experience: boolean;
  legal_entity_name: string;
  liable_address: CRMAddressFields;
  liable_biz_name: string;
  max_balance: CurrencyAmountFields;
  online_max_balance: CurrencyAmountFields;
  owner_business: BusinessFields;
  owner_business_name: string;
  partition_from: string;
  receiving_credit_allocation_config: ExtendedCreditAllocationConfigFields;
  send_bill_to_address: CRMAddressFields;
  send_bill_to_biz_name: string;
  sold_to_address: CRMAddressFields;
}

export interface ExtendedCreditCreateExtendedCreditInvoiceGroupsParams {
  emails: string[];
  name: string;
  [key: string]: unknown;
}

export interface ExtendedCreditListOwningCreditAllocationConfigsParams {
  receiving_business_id?: string;
  [key: string]: unknown;
}

export interface ExtendedCreditCreateOwningCreditAllocationConfigsParams {
  amount?: Record<string, unknown>;
  liability_type?: string;
  partition_type?: string;
  receiving_business_id: string;
  send_bill_to?: string;
  [key: string]: unknown;
}

export interface ExtendedCreditCreateWhatsappCreditAttachParams {
  waba_currency: string;
  waba_id: string;
  [key: string]: unknown;
}

export interface ExtendedCreditCreateWhatsappCreditSharingParams {
  receiving_business_id: string;
  [key: string]: unknown;
}

export interface ExtendedCreditCreateWhatsappCreditSharingAndAttachParams {
  waba_currency: string;
  waba_id: string;
  [key: string]: unknown;
}

export function extendedCreditNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ExtendedCreditFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ExtendedCreditFields, F[number]>>(`${id}`, opts),
    extendedCreditInvoiceGroups: {
      list: <F extends (keyof ExtendedCreditInvoiceGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ExtendedCreditInvoiceGroupFields, F[number]>>(client, `${id}/extended_credit_invoice_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: ExtendedCreditCreateExtendedCreditInvoiceGroupsParams) =>
        client.post<ExtendedCreditInvoiceGroupFields>(`${id}/extended_credit_invoice_groups`, params as Record<string, unknown>),
    },
    owningCreditAllocationConfigs: {
      list: <F extends (keyof ExtendedCreditAllocationConfigFields)[]>(opts: { fields: F; params?: ExtendedCreditListOwningCreditAllocationConfigsParams }) =>
        new Cursor<Pick<ExtendedCreditAllocationConfigFields, F[number]>>(client, `${id}/owning_credit_allocation_configs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: ExtendedCreditCreateOwningCreditAllocationConfigsParams) =>
        client.post<ExtendedCreditAllocationConfigFields>(`${id}/owning_credit_allocation_configs`, params as Record<string, unknown>),
    },
    createWhatsappCreditAttach: (params: ExtendedCreditCreateWhatsappCreditAttachParams) =>
      client.post<Record<string, unknown>>(`${id}/whatsapp_credit_attach`, params as Record<string, unknown>),
    createWhatsappCreditSharing: (params: ExtendedCreditCreateWhatsappCreditSharingParams) =>
      client.post<Record<string, unknown>>(`${id}/whatsapp_credit_sharing`, params as Record<string, unknown>),
    createWhatsappCreditSharingAndAttach: (params: ExtendedCreditCreateWhatsappCreditSharingAndAttachParams) =>
      client.post<ExtendedCreditAllocationConfigFields>(`${id}/whatsapp_credit_sharing_and_attach`, params as Record<string, unknown>),
  };
}

