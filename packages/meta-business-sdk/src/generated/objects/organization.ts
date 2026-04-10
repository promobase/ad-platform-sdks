import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface OrganizationFields {
  id: string;
  legal_entity_name: string;
  owner_business: BusinessFields;
}

export function organizationNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof OrganizationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OrganizationFields, F[number]>>(`${id}`, opts),
  };
}

