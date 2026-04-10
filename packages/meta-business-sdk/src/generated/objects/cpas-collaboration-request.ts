import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface CPASCollaborationRequestFields {
  brands: string[];
  contact_email: string;
  contact_first_name: string;
  contact_last_name: string;
  id: string;
  phone_number: string;
  receiver_business: BusinessFields;
  requester_agency_or_brand: string;
  sender_client_business: BusinessFields;
  status: string;
}

export function cPASCollaborationRequestNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CPASCollaborationRequestFields,
    get: <F extends (keyof CPASCollaborationRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASCollaborationRequestFields, F[number]>>(`${id}`, opts),
  };
}

