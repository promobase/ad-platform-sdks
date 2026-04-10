import type { ApiClient } from "@promobase/sdk-runtime";

export function createAccount(client: ApiClient, threadsUserId: string) {
  return {
    async get(fields?: string[]) {
      return client.get(threadsUserId, {
        fields: fields ?? ["id", "username", "threads_profile_picture_url", "threads_biography"],
      });
    },
  };
}
