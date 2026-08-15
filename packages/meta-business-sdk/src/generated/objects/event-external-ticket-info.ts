// @generated
// fingerprint: sha256:150647db83edffd780f9941d5422d4c755026d43cb89a28b128fa599ed1ad972
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { CurrencyAmountFields } from "./currency-amount.ts";

export interface EventExternalTicketInfoFields {
  id: string;
  max_sales_price: CurrencyAmountFields;
  min_sales_price: CurrencyAmountFields;
  sales_status: string;
}

export function eventExternalTicketInfoNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as EventExternalTicketInfoFields,
    get: <F extends (keyof EventExternalTicketInfoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<EventExternalTicketInfoFields, F[number]>>(`${id}`, opts),
  };
}

