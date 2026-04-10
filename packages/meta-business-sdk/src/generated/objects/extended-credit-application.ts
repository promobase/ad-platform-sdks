import type { ApiClient } from "@promobase/sdk-runtime";
import type { CurrencyAmountFields } from "./currency-amount.ts";
import type { UserFields } from "./user.ts";

export interface ExtendedCreditApplicationFields {
  billing_country: string;
  city: string;
  cnpj: string;
  country: string;
  display_currency: string;
  duns_number: string;
  id: string;
  invoice_email_address: string;
  is_umi: boolean;
  legal_entity_name: string;
  original_online_limit: CurrencyAmountFields;
  phone_number: string;
  postal_code: string;
  product_types: string[];
  proposed_credit_limit: CurrencyAmountFields;
  registration_number: string;
  run_id: string;
  state: string;
  status: string;
  street1: string;
  street2: string;
  submitter: UserFields;
  tax_exempt_status: string;
  tax_id: string;
  terms: string;
}

export function extendedCreditApplicationNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ExtendedCreditApplicationFields,
    get: <F extends (keyof ExtendedCreditApplicationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ExtendedCreditApplicationFields, F[number]>>(`${id}`, opts),
  };
}

