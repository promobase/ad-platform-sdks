// @generated
// fingerprint: sha256:abd7e30f61df356e9b71490fea403e64c1f06757b359062bc940706efe2ebfb2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for roles — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Role, Rol, ListRolesParams, ListRoles2Params, CreateRolParams, ListRoles3Params, CreateRol2Params, UpdateRolParams, CreateRol3Params, ListRoles4Params, DeleteRolParams } from "../types/roles.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — roles */
export function createRolesClient(api: SnapchatApiClient) {
  return {
    /** roles */
    listRoles(params: ListRolesParams): SnapchatCursor<Role> {
      const { memberId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/members/${memberId}/roles`, link ? undefined : query).then((envelope) => ({
          items: unpack<Role>(envelope, "roles", "role"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** roles */
    listRoles2(params: ListRoles2Params): SnapchatCursor<Role> {
      const { organizationId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/organizations/${organizationId}/roles`, link ? undefined : query).then((envelope) => ({
          items: unpack<Role>(envelope, "roles", "role"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** roles */
    async createRol(params: CreateRolParams): Promise<Role> {
      const { organizationId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/organizations/${organizationId}/roles`, { roles: [{ ...rest }] });
      return ensureOne<Role>(unpack<Role>(envelope, "roles", "role"), "Role");
    },

    /** roles */
    listRoles3(params: ListRoles3Params): SnapchatCursor<Role> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/roles`, link ? undefined : query).then((envelope) => ({
          items: unpack<Role>(envelope, "roles", "role"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** roles */
    async createRol2(params: CreateRol2Params): Promise<Role> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/roles`, { roles: [{ ...rest }] });
      return ensureOne<Role>(unpack<Role>(envelope, "roles", "role"), "Role");
    },

    /** roles */
    async updateRol(params: UpdateRolParams): Promise<Role> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/roles`, { roles: [{ ...rest }] });
      return ensureOne<Role>(unpack<Role>(envelope, "roles", "role"), "Role");
    },

    /** roles */
    async createRol3(params: CreateRol3Params): Promise<Role> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/roles`, { roles: [{ ...rest }] });
      return ensureOne<Role>(unpack<Role>(envelope, "roles", "role"), "Role");
    },

    /** roles */
    listRoles4(params: ListRoles4Params): SnapchatCursor<Role> {
      const { catalogId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/catalogs/${catalogId}/roles`, link ? undefined : query).then((envelope) => ({
          items: unpack<Role>(envelope, "roles", "role"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** roles */
    async deleteRol(params: DeleteRolParams): Promise<void> {
      const { roleId, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/roles/${roleId}`);
    },
  };
}
