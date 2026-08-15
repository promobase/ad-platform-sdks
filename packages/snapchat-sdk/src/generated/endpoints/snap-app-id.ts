// @generated
// fingerprint: sha256:06085bd2cbe8c2cd470b352d1bc9eb3d5135c1bcc59a6ed90184b14f80eb969e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for snap-app-id — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { MobileApp, ListMobileAppsParams, ListMobileApps2Params, GetMobileAppParams } from "../types/snap-app-id.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — snap-app-id */
export function createSnapAppIdClient(api: SnapchatApiClient) {
  return {
    /** snap-app-id */
    listMobileApps(params: ListMobileAppsParams): SnapchatCursor<MobileApp> {
      const { organizationId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/organizations/${organizationId}/mobile_apps`, link ? undefined : query).then((envelope) => ({
          items: unpack<MobileApp>(envelope, "mobile_apps", "mobile_app"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** snap-app-id */
    listMobileApps2(params: ListMobileApps2Params): SnapchatCursor<MobileApp> {
      const { adaccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adaccountId}/mobile_apps`, link ? undefined : query).then((envelope) => ({
          items: unpack<MobileApp>(envelope, "mobile_apps", "mobile_app"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** snap-app-id */
    async getMobileApp(params: GetMobileAppParams): Promise<MobileApp> {
      const { mobileAppId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/mobile_apps/${mobileAppId}`, query);
      return ensureOne<MobileApp>(unpack<MobileApp>(envelope, "mobile_apps", "mobile_app"), "MobileApp");
    },
  };
}
