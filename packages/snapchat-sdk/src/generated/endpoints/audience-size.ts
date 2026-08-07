// Auto-generated client for audience-size — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { AudienceSizeV2, AudienceSize, CreateAudienceSizeV2Params, ListAudienceSizeV2Params, CreateAudienceSizeParams } from "../types/audience-size.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — audience-size */
export function createAudienceSizeClient(api: SnapchatApiClient) {
  return {
    /** audience-size */
    async createAudienceSizeV2(params: CreateAudienceSizeV2Params): Promise<AudienceSizeV2> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/audience_size_v2`, rest);
      return ensureOne<AudienceSizeV2>(unpack<AudienceSizeV2>(envelope, "audience_size_v2", "audience_size_v2"), "AudienceSizeV2");
    },

    /** audience-size */
    listAudienceSizeV2(params: ListAudienceSizeV2Params): SnapchatCursor<AudienceSizeV2> {
      const { adSquadId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adsquads/${adSquadId}/audience_size_v2`, link ? undefined : query).then((envelope) => ({
          items: unpack<AudienceSizeV2>(envelope, "audience_size_v2", "audience_size_v2"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** audience-size */
    async createAudienceSize(params: CreateAudienceSizeParams): Promise<AudienceSize> {
      const { id, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${id}/audience_size`, { geos: [{ ...rest }] });
      return ensureOne<AudienceSize>(unpack<AudienceSize>(envelope, "audience_size", "audience_size"), "AudienceSize");
    },
  };
}
