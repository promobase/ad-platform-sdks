import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface BusinessRequestFields {
  accessor: BusinessFields;
  creation_time: string;
  id: string;
  object_id: string;
  object_type: string;
  permitted_tasks: string[];
  request_status: string;
  request_type: string;
  requestor: string;
}

export function businessRequestNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessRequestFields,
    get: <F extends (keyof BusinessRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessRequestFields, F[number]>>(`${id}`, opts),
  };
}

