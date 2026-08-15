// @generated
// fingerprint: sha256:bdcc0e72e7ac97170423ad19f0915aa8fd55ed7126390e491cb833027f56d6c2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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
    __path: id,
    __brand: undefined as unknown as MailingAddressFields,
    get: <F extends (keyof MailingAddressFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MailingAddressFields, F[number]>>(`${id}`, opts),
  };
}

