import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AssignedUserFields } from "./assigned-user.ts";
import type { BusinessFields } from "./business.ts";

export interface InstagramBusinessAssetFields {
  id: string;
  ig_user_id: string;
  ig_username: string;
}

export interface InstagramBusinessAssetDeleteAgenciesParams {
  business: string;
  [key: string]: unknown;
}

export interface InstagramBusinessAssetCreateAgenciesParams {
  business: string;
  permitted_tasks: string[];
  [key: string]: unknown;
}

export interface InstagramBusinessAssetDeleteAssignedUsersParams {
  user: number;
  [key: string]: unknown;
}

export interface InstagramBusinessAssetListAssignedUsersParams {
  business: string;
  [key: string]: unknown;
}

export interface InstagramBusinessAssetCreateAssignedUsersParams {
  tasks?: string[];
  user: number;
  [key: string]: unknown;
}

export function instagramBusinessAssetNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as InstagramBusinessAssetFields,
    get: <F extends (keyof InstagramBusinessAssetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<InstagramBusinessAssetFields, F[number]>>(`${id}`, opts),
    agencies: {
      __path: `${id}/agencies`,
      __brand: undefined as unknown as BusinessFields,
      list: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: InstagramBusinessAssetCreateAgenciesParams) =>
        client.post<InstagramBusinessAssetFields>(`${id}/agencies`, params as Record<string, unknown>),
      delete: (params: InstagramBusinessAssetDeleteAgenciesParams) =>
        client.delete(`${id}/agencies`, params as Record<string, unknown> ?? {}),
    },
    assignedUsers: {
      __path: `${id}/assigned_users`,
      __brand: undefined as unknown as AssignedUserFields,
      list: <F extends (keyof AssignedUserFields)[]>(opts: { fields: F; params?: InstagramBusinessAssetListAssignedUsersParams }) =>
        new Cursor<Pick<AssignedUserFields, F[number]>>(client, `${id}/assigned_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: InstagramBusinessAssetCreateAssignedUsersParams) =>
        client.post<InstagramBusinessAssetFields>(`${id}/assigned_users`, params as Record<string, unknown>),
      delete: (params: InstagramBusinessAssetDeleteAssignedUsersParams) =>
        client.delete(`${id}/assigned_users`, params as Record<string, unknown> ?? {}),
    },
  };
}

