// @generated
// fingerprint: sha256:f2416857ef783eb84609352e22a1584799788d79075b70e7c5d5fe3684e9c938
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as CRMAddressFields,
    get: <F extends (keyof CRMAddressFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CRMAddressFields, F[number]>>(`${id}`, opts),
  };
}

