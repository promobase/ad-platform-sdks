import type {
  AccountInfoOptions,
  BenchmarkData,
  BusinessCategory,
  HashtagSuggestion,
  TikTokClientOptions,
  TikTokResponse,
  VideoSettings,
} from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

export function createAccount(opts: TikTokClientOptions) {
  const { accessToken, businessId } = opts;

  async function get<T>(path: string, query: Record<string, unknown>): Promise<T> {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null) {
        params.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }

    const response = await fetch(`${TT_API_BASE}${path}?${params.toString()}`, {
      headers: { "Access-Token": accessToken },
    });

    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(
        `TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`,
      );
    }
    return body.data;
  }

  return {
    /** Get account profile info and metrics. Metrics data has 24-48h latency. */
    async get(opts?: AccountInfoOptions): Promise<Record<string, unknown>> {
      const query: Record<string, unknown> = { business_id: businessId };
      if (opts?.fields) query.fields = JSON.stringify(opts.fields);
      if (opts?.startDate) query.start_date = opts.startDate;
      if (opts?.endDate) query.end_date = opts.endDate;

      return get<Record<string, unknown>>("/business/get/", query);
    },

    /** Get video/post privacy settings and constraints for the account. */
    async getVideoSettings(): Promise<VideoSettings> {
      return get<VideoSettings>("/business/video/settings/", { business_id: businessId });
    },

    /** Get recommended hashtags for a keyword. Returns up to 10 suggestions. */
    async getHashtagSuggestions(keyword: string, language?: string): Promise<HashtagSuggestion[]> {
      const query: Record<string, unknown> = {
        business_id: businessId,
        keyword,
      };
      if (language) query.language = language;

      const data = await get<{ suggestions: HashtagSuggestion[] }>(
        "/business/hashtag/suggestion/",
        query,
      );
      return data.suggestions ?? [];
    },

    /** Get industry benchmarks for a business category. */
    async getBenchmarks(category: BusinessCategory): Promise<BenchmarkData> {
      return get<BenchmarkData>("/business/benchmark/", {
        business_id: businessId,
        business_category: category,
      });
    },
  };
}
