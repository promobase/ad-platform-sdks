import type { ApiClient } from "@promobase/sdk-runtime";
import type { PageFields } from "./page.ts";

export interface MailingAddressFields {
  city: string;
  city_page: PageFields;
  country: string;
  id: string;
  postal_code: string;
  region: string;
  street1: string;
  street2: string;
}

export function mailingAddressNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof MailingAddressFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MailingAddressFields, F[number]>>(`${id}`, opts),
  };
}

