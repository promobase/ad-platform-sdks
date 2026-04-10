import type {
  TikTokClientOptions, TikTokResponse,
  AuthorizationDays, SparkAdsAuthResult, SparkAdsAuthStatus,
} from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

/**
 * Spark Ads authorization management.
 * Enable organic posts to be used as Spark Ads by advertisers.
 */
export function createSparkAds(opts: TikTokClientOptions) {
  const { accessToken, businessId } = opts;

  async function request<T>(method: string, path: string, body?: Record<string, unknown>, query?: Record<string, unknown>): Promise<T> {
    let url = `${TT_API_BASE}${path}`;
    if (query) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null) {
          params.set(key, String(value));
        }
      }
      url += `?${params.toString()}`;
    }
    const init: RequestInit = {
      method,
      headers: { "Access-Token": accessToken, "Content-Type": "application/json" },
    };
    if (body && method === "POST") init.body = JSON.stringify(body);
    const response = await fetch(url, init);
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
  }

  return {
    /** Enable ad authorization on a post. Returns an auth code for advertisers. */
    async enable(itemId: string, authorizationDays?: AuthorizationDays): Promise<SparkAdsAuthResult> {
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
    async extend(itemId: string, authorizationDays?: AuthorizationDays): Promise<SparkAdsAuthResult> {
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
      await request<{ item_id: string; auth_code_status: string }>("POST", "/business/post/authorize/delete/", {
        business_id: businessId,
        item_id: itemId,
      });
    },
  };
}
