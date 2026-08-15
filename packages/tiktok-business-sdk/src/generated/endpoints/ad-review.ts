// @generated
// fingerprint: sha256:32a4aeee249a312291f62d5d95168c45b00ff5ddcfc4084ad5ad2e021d92604f
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ad Review — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { AdgroupReviewInfoParams, AdgroupReviewInfoResponse, AdReviewInfoParams, AdReviewInfoResponse, AdgroupAppealParams, AdgroupAppealResponse } from "../types/ad-review.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAdReview(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get review info of ad groups */
    async adgroupReviewInfo(params: AdgroupReviewInfoParams): Promise<AdgroupReviewInfoResponse> {
      return get<AdgroupReviewInfoResponse>("/open_api/v1.3/adgroup/review_info/", params as unknown as Record<string, unknown>);
    },

    /** Get review info of ads */
    async adReviewInfo(params: AdReviewInfoParams): Promise<AdReviewInfoResponse> {
      return get<AdReviewInfoResponse>("/open_api/v1.3/ad/review_info/", params as unknown as Record<string, unknown>);
    },

    /** Appeal a rejection */
    async adgroupAppeal(params: AdgroupAppealParams): Promise<AdgroupAppealResponse> {
      return post<AdgroupAppealResponse>("/open_api/v1.3/adgroup/appeal/", params as unknown as Record<string, unknown>);
    },
  };
}
