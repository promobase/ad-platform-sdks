import type { IGUserFields } from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;

export function createAccount(api: CreateClientReturn, igAccountId: string) {
  return {
    /** Get account profile using the generated IGUser node accessor. */
    async get(fields?: (keyof IGUserFields)[]) {
      return api.iGUser(igAccountId).get({
        fields:
          fields ??
          ([
            "id",
            "username",
            "name",
            "followers_count",
            "follows_count",
            "media_count",
            "profile_picture_url",
            "biography",
          ] as (keyof IGUserFields)[]),
      });
    },
  };
}
