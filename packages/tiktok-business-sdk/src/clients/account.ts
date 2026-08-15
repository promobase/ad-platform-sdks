import { tiktokRequest } from "./request.ts";
import type {
  AccountInfoOptions,
  BenchmarkData,
  BusinessCategory,
  HashtagSuggestion,
  TikTokClientOptions,
  VideoSettings,
} from "./types.ts";

export function createAccount(clientOpts: TikTokClientOptions) {
  const { businessId } = clientOpts;

  return {
    /** Get account profile info and metrics. Metrics data has 24-48h latency. */
    async get(options?: AccountInfoOptions): Promise<Record<string, unknown>> {
      const query: Record<string, unknown> = { business_id: businessId };
      if (options?.fields) query.fields = JSON.stringify(options.fields);
      if (options?.startDate) query.start_date = options.startDate;
      if (options?.endDate) query.end_date = options.endDate;

      return tiktokRequest<Record<string, unknown>>(clientOpts, {
        method: "GET",
        path: "/business/get/",
        query,
      });
    },

    /** Get video/post privacy settings and constraints for the account. */
    async getVideoSettings(): Promise<VideoSettings> {
      return tiktokRequest<VideoSettings>(clientOpts, {
        method: "GET",
        path: "/business/video/settings/",
        query: { business_id: businessId },
      });
    },

    /** Get recommended hashtags for a keyword. Returns up to 10 suggestions. */
    async getHashtagSuggestions(keyword: string, language?: string): Promise<HashtagSuggestion[]> {
      const query: Record<string, unknown> = {
        business_id: businessId,
        keyword,
      };
      if (language) query.language = language;

      const data = await tiktokRequest<{ suggestions: HashtagSuggestion[] }>(clientOpts, {
        method: "GET",
        path: "/business/hashtag/suggestion/",
        query,
      });
      return data.suggestions ?? [];
    },

    /** Get industry benchmarks for a business category. */
    async getBenchmarks(category: BusinessCategory): Promise<BenchmarkData> {
      return tiktokRequest<BenchmarkData>(clientOpts, {
        method: "GET",
        path: "/business/benchmark/",
        query: {
          business_id: businessId,
          business_category: category,
        },
      });
    },
  };
}
