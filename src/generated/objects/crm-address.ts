import type { ApiClient } from "../../runtime/client.ts";

export interface CRMAddressFields {
  city: string;
  cnpj_tax_id: string;
  country: string;
  id: string;
  postal_code: string;
  registration_label: string;
  registration_number: string;
  state: string;
  street1: string;
  street2: string;
  street3: string;
  street4: string;
  validation_status: string;
  vat_tax_id: string;
}

export function cRMAddressNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CRMAddressFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CRMAddressFields, F[number]>>(`${id}`, opts),
  };
}

