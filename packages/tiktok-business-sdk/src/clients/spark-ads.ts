import { tiktokRequest } from "./request.ts";
import type {
  AuthorizationDays,
  SparkAdsAuthResult,
  SparkAdsAuthStatus,
  TikTokClientOptions,
} from "./types.ts";

/**
 * Spark Ads authorization management.
 * Enable organic posts to be used as Spark Ads by advertisers.
 */
export function createSparkAds(opts: TikTokClientOptions) {
  const { businessId } = opts;

  async function request<T>(
    method: string,
    path: string,
    body?: Record<string, unknown>,
    query?: Record<string, unknown>,
  ): Promise<T> {
    return tiktokRequest<T>(opts, { method, path, body, query });
  }

  return {
    /** Enable ad authorization on a post. Returns an auth code for advertisers. */
    async enable(
      itemId: string,
      authorizationDays?: AuthorizationDays,
    ): Promise<SparkAdsAuthResult> {
      return request<SparkAdsAuthResult>("POST", "/business/post/authorize/setting/", {
        business_id: businessId,
        item_id: itemId,
        is_ad_promotable: true,
        ...(authorizationDays !== undefined ? { authorization_days: authorizationDays } : {}),
      });
    },

    /** Disable ad authorization on a post. Fails if post is active in Spark Ads. */
    async disable(itemId: string): Promise<void> {
      await request<Record<string, never>>("POST", "/business/post/authorize/setting/", {
        business_id: businessId,
        item_id: itemId,
        is_ad_promotable: false,
      });
    },

    /** Extend the authorization validity period for a post. */
    async extend(
      itemId: string,
      authorizationDays?: AuthorizationDays,
    ): Promise<SparkAdsAuthResult> {
      return request<SparkAdsAuthResult>("POST", "/business/post/authorize/", {
        business_id: businessId,
        item_id: itemId,
        ...(authorizationDays !== undefined ? { authorization_days: authorizationDays } : {}),
      });
    },

    /** Get the current authorization status and auth code for a post. */
    async getStatus(itemId: string): Promise<SparkAdsAuthStatus> {
      return request<SparkAdsAuthStatus>("GET", "/business/post/authorize/status/", undefined, {
        business_id: businessId,
        item_id: itemId,
      });
    },

    /** Delete the authorization code for a post. */
    async deleteAuthCode(itemId: string): Promise<void> {
      await request<{ item_id: string; auth_code_status: string }>(
        "POST",
        "/business/post/authorize/delete/",
        {
          business_id: businessId,
          item_id: itemId,
        },
      );
    },
  };
}
