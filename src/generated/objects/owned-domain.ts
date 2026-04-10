import type { ApiClient } from "../../runtime/client.ts";
import type { BusinessFields } from "./business.ts";

export interface OwnedDomainFields {
  domain_name: string;
  id: string;
  owner_business: BusinessFields;
  status: string;
  verification_code: string;
}

export function ownedDomainNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof OwnedDomainFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OwnedDomainFields, F[number]>>(`${id}`, opts),
  };
}

