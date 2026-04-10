import type { PageFields } from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;

export function createAccount(api: CreateClientReturn, pageId: string) {
  return {
    /** Get Page profile info using the generated Page node. */
    async get(fields?: (keyof PageFields)[]) {
      return api.page(pageId).get({
        fields: fields ?? [
          "id", "name", "username", "about", "category", "fan_count",
          "followers_count", "link", "picture", "verification_status",
        ] as (keyof PageFields)[],
      });
    },

    /** Get connected Instagram accounts for this Page. */
    async getInstagramAccounts() {
      return api.page(pageId).instagramAccounts({
        fields: ["id", "username", "profile_picture_url", "followers_count"] as any,
      }).toArray();
    },
  };
}
