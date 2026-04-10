// Auto-generated client for Spark Ads Recommendation — do not edit
import type { BusinessVideoRecommendParams, BusinessVideoRecommendResponse, SparkAdRecommendParams, SparkAdRecommendResponse } from "../types/spark-ads-recommendation.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createSparkAdsRecommendation(opts: { accessToken: string; advertiserId: string }) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
  }

  return {
    /** Get Spark Ads video recommendations for a Business Account */
    async videoRecommend(params: BusinessVideoRecommendParams): Promise<BusinessVideoRecommendResponse> {
      return get<BusinessVideoRecommendResponse>("/open_api/v1.3/business/video/recommend/", params as unknown as Record<string, unknown>);
    },

    /** Get Spark Ads video recommendations for a TTO account */
    async sparkAdRecommend(params: SparkAdRecommendParams): Promise<SparkAdRecommendResponse> {
      return get<SparkAdRecommendResponse>("/open_api/v1.3/spark_ad/recommend/", params as unknown as Record<string, unknown>);
    },
  };
}
