// Auto-generated client for audit-logs — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Changelog, ListExternalChangelogsParams, ListExternalChangelogs2Params, ListExternalChangelogs3Params, ListExternalChangelogs4Params, ListExternalChangelogs5Params } from "../types/audit-logs.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — audit-logs */
export function createAuditLogsClient(api: SnapchatApiClient) {
  return {
    /** audit-logs */
    listExternalChangelogs(params: ListExternalChangelogsParams): SnapchatCursor<Changelog> {
      const { campaignId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/campaigns/${campaignId}/external_changelogs`, link ? undefined : query).then((envelope) => ({
          items: unpack<Changelog>(envelope, "changelogs", "changelog"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** audit-logs */
    listExternalChangelogs2(params: ListExternalChangelogs2Params): SnapchatCursor<Changelog> {
      const { adsquadId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adsquads/${adsquadId}/external_changelogs`, link ? undefined : query).then((envelope) => ({
          items: unpack<Changelog>(envelope, "changelogs", "changelog"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** audit-logs */
    listExternalChangelogs3(params: ListExternalChangelogs3Params): SnapchatCursor<Changelog> {
      const { adId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/ads/${adId}/external_changelogs`, link ? undefined : query).then((envelope) => ({
          items: unpack<Changelog>(envelope, "changelogs", "changelog"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** audit-logs */
    listExternalChangelogs4(params: ListExternalChangelogs4Params): SnapchatCursor<Changelog> {
      const { creativeId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/creatives/${creativeId}/external_changelogs`, link ? undefined : query).then((envelope) => ({
          items: unpack<Changelog>(envelope, "changelogs", "changelog"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** audit-logs */
    listExternalChangelogs5(params: ListExternalChangelogs5Params): SnapchatCursor<Changelog> {
      const { dynamicTemplateId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/dynamic_templates/${dynamicTemplateId}/external_changelogs`, link ? undefined : query).then((envelope) => ({
          items: unpack<Changelog>(envelope, "changelogs", "changelog"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
