// @generated
// fingerprint: sha256:3bbd41dd83afc38284d6e272d1acb0bdee855ab51b01b8f0ec8baff700961e99
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for lookalikes — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Segment, CreateSegmentParams } from "../types/audience-creation-lookalikes.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — lookalikes */
export function createAudienceCreationLookalikesClient(api: SnapchatApiClient) {
  return {
    /** lookalikes */
    async createSegment(params: CreateSegmentParams): Promise<Segment> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/segments`, { segments: [{ ...rest }] });
      return ensureOne<Segment>(unpack<Segment>(envelope, "segments", "segment"), "Segment");
    },
  };
}
