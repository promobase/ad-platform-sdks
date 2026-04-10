import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";
import type { CurrencyAmountFields } from "./currency-amount.ts";
import type { ExtendedCreditFields } from "./extended-credit.ts";

export interface ExtendedCreditAllocationConfigFields {
  currency_amount: CurrencyAmountFields;
  id: string;
  liability_type: string;
  owning_business: BusinessFields;
  owning_credential: ExtendedCreditFields;
  partition_type: string;
  receiving_business: BusinessFields;
  receiving_credential: ExtendedCreditFields;
  request_status: string;
  send_bill_to: string;
}

export interface ExtendedCreditAllocationConfigUpdateParams {
  amount?: Record<string, unknown>;
  [key: string]: unknown;
}

export function extendedCreditAllocationConfigNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ExtendedCreditAllocationConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ExtendedCreditAllocationConfigFields, F[number]>>(`${id}`, opts),
    update: (params: ExtendedCreditAllocationConfigUpdateParams) =>
      client.post<ExtendedCreditAllocationConfigFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

