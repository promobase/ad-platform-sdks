// @generated
// fingerprint: sha256:8e6673fcfe404117c63bb3377f06b529d876405b2f35db66a04a18b34668fa23
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Spark Ads Recommendation — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BusinessVideoRecommendParams, BusinessVideoRecommendResponse, SparkAdRecommendParams, SparkAdRecommendResponse } from "../types/spark-ads-recommendation.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createSparkAdsRecommendation(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
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
