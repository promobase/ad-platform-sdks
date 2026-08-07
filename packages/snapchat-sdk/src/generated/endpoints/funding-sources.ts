// Auto-generated client for funding-sources — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Fundingsource, ListFundingsourcesParams, GetFundingsourcParams } from "../types/funding-sources.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — funding-sources */
export function createFundingSourcesClient(api: SnapchatApiClient) {
  return {
    /** funding-sources */
    listFundingsources(params: ListFundingsourcesParams): SnapchatCursor<Fundingsource> {
      const { organizationId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/organizations/${organizationId}/fundingsources`, link ? undefined : query).then((envelope) => ({
          items: unpack<Fundingsource>(envelope, "fundingsources", "fundingsource"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** funding-sources */
    async getFundingsourc(params: GetFundingsourcParams): Promise<Fundingsource> {
      const { fundingSourceId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/fundingsources/${fundingSourceId}`, query);
      return ensureOne<Fundingsource>(unpack<Fundingsource>(envelope, "fundingsources", "fundingsource"), "Fundingsource");
    },
  };
}
