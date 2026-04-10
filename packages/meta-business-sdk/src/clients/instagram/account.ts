import type { ApiClient } from "@promobase/sdk-runtime";

export function createAccount(client: ApiClient, igAccountId: string) {
  return {
    async get(fields?: string[]) {
      return client.get(igAccountId, {
        fields: fields ?? ["id", "username", "name", "followers_count", "follows_count", "media_count", "profile_picture_url", "biography"],
      });
    },
  };
}
