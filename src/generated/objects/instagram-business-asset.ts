import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";

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
    get: <F extends (keyof InstagramBusinessAssetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<InstagramBusinessAssetFields, F[number]>>(`${id}`, opts),
    agencies: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: InstagramBusinessAssetCreateAgenciesParams) =>
        client.post<Record<string, unknown>>(`${id}/agencies`, params as Record<string, unknown>),
      delete: (params: InstagramBusinessAssetDeleteAgenciesParams) =>
        client.delete(`${id}/agencies`, params as Record<string, unknown> ?? {}),
    },
    assignedUsers: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: InstagramBusinessAssetListAssignedUsersParams }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/assigned_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: InstagramBusinessAssetCreateAssignedUsersParams) =>
        client.post<Record<string, unknown>>(`${id}/assigned_users`, params as Record<string, unknown>),
      delete: (params: InstagramBusinessAssetDeleteAssignedUsersParams) =>
        client.delete(`${id}/assigned_users`, params as Record<string, unknown> ?? {}),
    },
  };
}

