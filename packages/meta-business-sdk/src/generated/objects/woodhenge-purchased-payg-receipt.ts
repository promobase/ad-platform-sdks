import type { ApiClient } from "@promobase/sdk-runtime";
import type { UserFields } from "./user.ts";

export interface WoodhengePurchasedPAYGReceiptFields {
  id: string;
  number_of_subscriptions_purchased: number;
  purchase_time: string;
  user: UserFields;
}

export function woodhengePurchasedPAYGReceiptNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof WoodhengePurchasedPAYGReceiptFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WoodhengePurchasedPAYGReceiptFields, F[number]>>(`${id}`, opts),
  };
}

