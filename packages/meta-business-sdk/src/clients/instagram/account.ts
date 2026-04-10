import type { ApiClient } from "@promobase/sdk-runtime";
import type { IGUserFields } from "./types.ts";

export function createAccount(client: ApiClient, igAccountId: string) {
  return {
    async get(fields?: string[]): Promise<Partial<IGUserFields>> {
      return client.get<Partial<IGUserFields>>(igAccountId, {
        fields: fields ?? ["id", "username", "name", "followers_count", "follows_count", "media_count", "profile_picture_url", "biography"],
      });
    },
  };
}
