// @generated
// fingerprint: sha256:a531093b7fbc04cb13c26071aad8d043d7860bad41b178c059d58c546e525b6e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { UserFields } from "./user.ts";

export interface WoodhengePurchasedPAYGReceiptFields {
  id: string;
  number_of_subscriptions_purchased: number;
  purchase_time: string;
  user: UserFields;
}

export function woodhengePurchasedPAYGReceiptNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WoodhengePurchasedPAYGReceiptFields,
    get: <F extends (keyof WoodhengePurchasedPAYGReceiptFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WoodhengePurchasedPAYGReceiptFields, F[number]>>(`${id}`, opts),
  };
}

