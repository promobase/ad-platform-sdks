import type { ApiClient } from "@promobase/sdk-runtime";
import type { UserFields } from "./user.ts";

export interface WoodhengeSupporterFields {
  creation_time: string;
  id: string;
  is_gifted_subscription: boolean;
  most_recent_subscription_time: string;
  number_of_months_subscribed: number;
  user: UserFields;
}

export function woodhengeSupporterNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WoodhengeSupporterFields,
    get: <F extends (keyof WoodhengeSupporterFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WoodhengeSupporterFields, F[number]>>(`${id}`, opts),
  };
}

