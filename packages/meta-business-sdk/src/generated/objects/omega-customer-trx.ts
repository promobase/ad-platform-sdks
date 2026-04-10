import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { CurrencyAmountFields } from "./currency-amount.ts";

export interface OmegaCustomerTrxFields {
  ad_account_ids: string[];
  advertiser_name: string;
  amount: string;
  amount_due: CurrencyAmountFields;
  billed_amount_details: Record<string, unknown>;
  billing_period: string;
  cdn_download_uri: string;
  currency: string;
  download_uri: string;
  due_date: string;
  entity: string;
  id: string;
  invoice_date: string;
  invoice_id: string;
  invoice_type: string;
  liability_type: string;
  payment_status: string;
  payment_term: string;
  type: string;
}

export function omegaCustomerTrxNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof OmegaCustomerTrxFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OmegaCustomerTrxFields, F[number]>>(`${id}`, opts),
    campaigns: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/campaigns`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

