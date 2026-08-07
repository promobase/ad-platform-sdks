// Auto-generated client for organizations — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Organization, ListOrganizationsParams, GetOrganizationParams } from "../types/organizations.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — organizations */
export function createOrganizationsClient(api: SnapchatApiClient) {
  return {
    /** organizations */
    listOrganizations(params: ListOrganizationsParams): SnapchatCursor<Organization> {
      const query = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/me/organizations`, link ? undefined : query).then((envelope) => ({
          items: unpack<Organization>(envelope, "organizations", "organization"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** organizations */
    async getOrganization(params: GetOrganizationParams): Promise<Organization> {
      const { id, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/organizations/${id}`, query);
      return ensureOne<Organization>(unpack<Organization>(envelope, "organizations", "organization"), "Organization");
    },
  };
}
