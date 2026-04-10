import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface BusinessOwnedObjectOnBehalfOfRequestFields {
  business_owned_object: string;
  id: string;
  receiving_business: BusinessFields;
  requesting_business: BusinessFields;
  status: string;
}

export function businessOwnedObjectOnBehalfOfRequestNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof BusinessOwnedObjectOnBehalfOfRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessOwnedObjectOnBehalfOfRequestFields, F[number]>>(`${id}`, opts),
  };
}

