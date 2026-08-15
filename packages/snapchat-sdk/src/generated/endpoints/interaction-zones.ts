// @generated
// fingerprint: sha256:f143e0e6f93f9f3f2beaafa2200224512c3466991e6156cb56fb74e6c46a6862
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for interaction-zones — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { InteractionZone, GetInteractionZonParams, ListInteractionZonesParams } from "../types/interaction-zones.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — interaction-zones */
export function createInteractionZonesClient(api: SnapchatApiClient) {
  return {
    /** interaction-zones */
    async getInteractionZon(params: GetInteractionZonParams): Promise<InteractionZone> {
      const { interactionZoneId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/interaction_zones/${interactionZoneId}`, query);
      return ensureOne<InteractionZone>(unpack<InteractionZone>(envelope, "interaction_zones", "interaction_zone"), "InteractionZone");
    },

    /** interaction-zones */
    listInteractionZones(params: ListInteractionZonesParams): SnapchatCursor<InteractionZone> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/interaction_zones`, link ? undefined : query).then((envelope) => ({
          items: unpack<InteractionZone>(envelope, "interaction_zones", "interaction_zone"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
