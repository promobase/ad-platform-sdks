// @generated
// fingerprint: sha256:4939f36c9c330efb5385ff43f8780067d956d57169a9a89c85ec049aee49dad6
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Spark Ads Using Authorized Posts — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { TtVideoInfoParams, TtVideoInfoResponse, TtVideoAuthorizeParams, TtVideoAuthorizeResponse, TtVideoListParams, TtVideoListResponse, TtVideoUnbindParams, TtVideoUnbindResponse } from "../types/spark-ads-using-authorized-posts.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createSparkAdsUsingAuthorizedPosts(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get info about a Spark Ad post */
    async ttVideoInfo(params: TtVideoInfoParams): Promise<TtVideoInfoResponse> {
      return get<TtVideoInfoResponse>("/open_api/v1.3/tt_video/info/", params as unknown as Record<string, unknown>);
    },

    /** Apply an authorization code */
    async ttVideoAuthorize(params: TtVideoAuthorizeParams): Promise<TtVideoAuthorizeResponse> {
      return post<TtVideoAuthorizeResponse>("/open_api/v1.3/tt_video/authorize/", params as unknown as Record<string, unknown>);
    },

    /** Get Spark Ad posts */
    async listTtVideo(params: TtVideoListParams): Promise<TtVideoListResponse> {
      return get<TtVideoListResponse>("/open_api/v1.3/tt_video/list/", params as unknown as Record<string, unknown>);
    },

    /** Unbind a Spark Ad post */
    async ttVideoUnbind(params: TtVideoUnbindParams): Promise<TtVideoUnbindResponse> {
      return post<TtVideoUnbindResponse>("/open_api/v1.3/tt_video/unbind/", params as unknown as Record<string, unknown>);
    },
  };
}
