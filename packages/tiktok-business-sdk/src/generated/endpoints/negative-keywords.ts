// @generated
// fingerprint: sha256:854274551390915b8a20f8e5dc23c7a0e5978b40b29cc924c5f7f50dd85528eb
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Negative Keywords — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { SearchAdNegativeKeywordGetParams, SearchAdNegativeKeywordGetResponse, SearchAdNegativeKeywordAddParams, SearchAdNegativeKeywordAddResponse, SearchAdNegativeKeywordUpdateParams, SearchAdNegativeKeywordUpdateResponse, SearchAdNegativeKeywordDeleteParams, SearchAdNegativeKeywordDeleteResponse, SearchAdNegativeKeywordDownloadParams, SearchAdNegativeKeywordDownloadResponse } from "../types/negative-keywords.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createNegativeKeywords(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get negative keywords */
    async getNegativeKeyword(params: SearchAdNegativeKeywordGetParams): Promise<SearchAdNegativeKeywordGetResponse> {
      return get<SearchAdNegativeKeywordGetResponse>("/open_api/v1.3/search_ad/negative_keyword/get/", params as unknown as Record<string, unknown>);
    },

    /** Create negative keywords */
    async negativeKeywordAdd(params: SearchAdNegativeKeywordAddParams): Promise<SearchAdNegativeKeywordAddResponse> {
      return post<SearchAdNegativeKeywordAddResponse>("/open_api/v1.3/search_ad/negative_keyword/add/", params as unknown as Record<string, unknown>);
    },

    /** Update a negative keyword */
    async updateNegativeKeyword(params: SearchAdNegativeKeywordUpdateParams): Promise<SearchAdNegativeKeywordUpdateResponse> {
      return post<SearchAdNegativeKeywordUpdateResponse>("/open_api/v1.3/search_ad/negative_keyword/update/", params as unknown as Record<string, unknown>);
    },

    /** Delete negative keywords */
    async deleteNegativeKeyword(params: SearchAdNegativeKeywordDeleteParams): Promise<SearchAdNegativeKeywordDeleteResponse> {
      return post<SearchAdNegativeKeywordDeleteResponse>("/open_api/v1.3/search_ad/negative_keyword/delete/", params as unknown as Record<string, unknown>);
    },

    /** Download negative keywords */
    async negativeKeywordDownload(params: SearchAdNegativeKeywordDownloadParams): Promise<SearchAdNegativeKeywordDownloadResponse> {
      return get<SearchAdNegativeKeywordDownloadResponse>("/open_api/v1.3/search_ad/negative_keyword/download/", params as unknown as Record<string, unknown>);
    },
  };
}
