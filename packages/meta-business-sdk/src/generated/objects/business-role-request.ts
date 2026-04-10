import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface BusinessRoleRequestFields {
  created_by: Record<string, unknown>;
  created_time: string;
  email: string;
  expiration_time: string;
  expiry_time: string;
  finance_role: string;
  id: string;
  invite_link: string;
  invited_user_type: string[];
  ip_role: string;
  owner: BusinessFields;
  role: string;
  status: string;
  tasks: string[];
  updated_by: Record<string, unknown>;
  updated_time: string;
}

export interface BusinessRoleRequestUpdateParams {
  role?: string;
  tasks?: string[];
  [key: string]: unknown;
}

export function businessRoleRequestNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessRoleRequestFields,
    get: <F extends (keyof BusinessRoleRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessRoleRequestFields, F[number]>>(`${id}`, opts),
    update: (params: BusinessRoleRequestUpdateParams) =>
      client.post<BusinessRoleRequestFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

