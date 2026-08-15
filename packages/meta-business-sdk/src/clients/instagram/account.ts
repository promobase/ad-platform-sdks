import type {
  IGUserFields,
  InstagramAccountInsightsOptions,
  InstagramInsightsResultFields,
} from "./types.ts";

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

    /** Read account-level insights with provider-native metric and period names. */
    async insights(opts: InstagramAccountInsightsOptions) {
      return api
        .iGUser(igAccountId)
        .insights({
          fields: [
            "name",
            "period",
            "values",
            "total_value",
          ] as (keyof InstagramInsightsResultFields)[],
          params: {
            metric: [...opts.metrics],
            period: [...opts.period],
            since: opts.since,
            until: opts.until,
            timeframe: opts.timeframe,
            breakdown: opts.breakdown ? [...opts.breakdown] : undefined,
          },
        })
        .toArray();
    },
  };
}
