// Auto-generated client for ad-accounts — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Adaccount, CreateAdaccountParams, ListAdaccountsParams, GetAdaccountParams, UpdateAdaccountParams } from "../types/ad-accounts.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — ad-accounts */
export function createAdAccountsClient(api: SnapchatApiClient) {
  return {
    /** ad-accounts */
    async createAdaccount(params: CreateAdaccountParams): Promise<Adaccount> {
      const { organizationId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/organizations/${organizationId}/adaccounts`, { adaccounts: [{ ...rest }] });
      return ensureOne<Adaccount>(unpack<Adaccount>(envelope, "adaccounts", "adaccount"), "Adaccount");
    },

    /** ad-accounts */
    listAdaccounts(params: ListAdaccountsParams): SnapchatCursor<Adaccount> {
      const { organizationId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/organizations/${organizationId}/adaccounts`, link ? undefined : query).then((envelope) => ({
          items: unpack<Adaccount>(envelope, "adaccounts", "adaccount"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** ad-accounts */
    async getAdaccount(params: GetAdaccountParams): Promise<Adaccount> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}`, query);
      return ensureOne<Adaccount>(unpack<Adaccount>(envelope, "adaccounts", "adaccount"), "Adaccount");
    },

    /** ad-accounts */
    async updateAdaccount(params: UpdateAdaccountParams): Promise<Adaccount> {
      const { organizationId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/organizations/${organizationId}/adaccounts`, { adaccounts: [{ ...rest }] });
      return ensureOne<Adaccount>(unpack<Adaccount>(envelope, "adaccounts", "adaccount"), "Adaccount");
    },
  };
}
