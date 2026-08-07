// Auto-generated client for user — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Me, ListMeParams } from "../types/user.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — user */
export function createUserClient(api: SnapchatApiClient) {
  return {
    /** user */
    listMe(params: ListMeParams): SnapchatCursor<Me> {
      const query = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/me`, link ? undefined : query).then((envelope) => ({
          items: unpack<Me>(envelope, "me", "me"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
