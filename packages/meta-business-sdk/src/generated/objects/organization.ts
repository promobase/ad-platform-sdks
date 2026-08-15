// @generated
// fingerprint: sha256:4742107b9f105754652b79c0a42cc8c334d83a2010e3faa98511514c68390f2b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface OrganizationFields {
  id: string;
  legal_entity_name: string;
  owner_business: BusinessFields;
}

export function organizationNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as OrganizationFields,
    get: <F extends (keyof OrganizationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OrganizationFields, F[number]>>(`${id}`, opts),
  };
}

