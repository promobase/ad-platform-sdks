// Auto-generated client for profile-engagement — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Segment, CreateSegmentParams, ListSegmentsParams } from "../types/audience-creation-profile-engagement.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — profile-engagement */
export function createAudienceCreationProfileEngagementClient(api: SnapchatApiClient) {
  return {
    /** Example: Targeting Engagers ​ */
    async createSegment(params: CreateSegmentParams): Promise<Segment> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/segments`, { segments: [{ ...rest }] });
      return ensureOne<Segment>(unpack<Segment>(envelope, "segments", "segment"), "Segment");
    },

    /** profile-engagement */
    listSegments(params: ListSegmentsParams): SnapchatCursor<Segment> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/segments`, link ? undefined : query).then((envelope) => ({
          items: unpack<Segment>(envelope, "segments", "segment"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
