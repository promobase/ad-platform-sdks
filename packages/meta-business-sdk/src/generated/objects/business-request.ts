// @generated
// fingerprint: sha256:0607a4a20ec77a58b0dd7b21a386b19fb9bce9a3304c9ec2b9908e406c0fae3a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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

