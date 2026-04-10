import type { ApiClient } from "@promobase/sdk-runtime";

export interface CreditCardFields {
  billing_address: Record<string, unknown>;
  card_cobadging: string;
  card_holder_name: string;
  card_type: string;
  credential_id: number;
  default_receiving_method_products: string[];
  expiry_month: string;
  expiry_year: string;
  id: string;
  is_cvv_tricky_bin: boolean;
  is_enabled: boolean;
  is_last_used: boolean;
  is_network_tokenized_in_india: boolean;
  is_soft_disabled: boolean;
  is_user_verified: boolean;
  is_zip_verified: boolean;
  last4: string;
  readable_card_type: string;
  time_created: string;
  time_created_ts: number;
  type: string;
}

export function creditCardNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CreditCardFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CreditCardFields, F[number]>>(`${id}`, opts),
  };
}

