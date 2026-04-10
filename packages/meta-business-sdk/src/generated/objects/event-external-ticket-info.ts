import type { ApiClient } from "@promobase/sdk-runtime";
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

