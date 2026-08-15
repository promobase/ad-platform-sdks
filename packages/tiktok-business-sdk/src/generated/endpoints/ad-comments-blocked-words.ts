// @generated
// fingerprint: sha256:84e8f980fe86fd1f6d2158e032e9c6b92f6e4d90928b4218080e21af2fd3c8c7
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ad Comments - Blocked Words — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BlockedwordCreateParams, BlockedwordCreateResponse, BlockedwordUpdateParams, BlockedwordUpdateResponse, BlockedwordCheckParams, BlockedwordCheckResponse, BlockedwordListParams, BlockedwordListResponse, BlockedwordDeleteParams, BlockedwordDeleteResponse, BlockedwordTaskCreateParams, BlockedwordTaskCreateResponse, BlockedwordTaskCheckParams, BlockedwordTaskCheckResponse, BlockedwordTaskDownloadParams, BlockedwordTaskDownloadResponse } from "../types/ad-comments-blocked-words.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAdCommentsBlockedWords(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Create blocked words */
    async createBlockedword(params: BlockedwordCreateParams): Promise<BlockedwordCreateResponse> {
      return post<BlockedwordCreateResponse>("/open_api/v1.3/blockedword/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a blocked word */
    async updateBlockedword(params: BlockedwordUpdateParams): Promise<BlockedwordUpdateResponse> {
      return post<BlockedwordUpdateResponse>("/open_api/v1.3/blockedword/update/", params as unknown as Record<string, unknown>);
    },

    /** Check the statuses of words */
    async blockedwordCheck(params: BlockedwordCheckParams): Promise<BlockedwordCheckResponse> {
      return get<BlockedwordCheckResponse>("/open_api/v1.3/blockedword/check/", params as unknown as Record<string, unknown>);
    },

    /** Get blocked words */
    async listBlockedword(params: BlockedwordListParams): Promise<BlockedwordListResponse> {
      return get<BlockedwordListResponse>("/open_api/v1.3/blockedword/list/", params as unknown as Record<string, unknown>);
    },

    /** Delete blocked words */
    async deleteBlockedword(params: BlockedwordDeleteParams): Promise<BlockedwordDeleteResponse> {
      return post<BlockedwordDeleteResponse>("/open_api/v1.3/blockedword/delete/", params as unknown as Record<string, unknown>);
    },

    /** Create an export task (blocked words) */
    async createTask(params: BlockedwordTaskCreateParams): Promise<BlockedwordTaskCreateResponse> {
      return post<BlockedwordTaskCreateResponse>("/open_api/v1.3/blockedword/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Check the status of an export task (blocked words) */
    async taskCheck(params: BlockedwordTaskCheckParams): Promise<BlockedwordTaskCheckResponse> {
      return get<BlockedwordTaskCheckResponse>("/open_api/v1.3/blockedword/task/check/", params as unknown as Record<string, unknown>);
    },

    /** Download exported data */
    async taskDownload(params: BlockedwordTaskDownloadParams): Promise<BlockedwordTaskDownloadResponse> {
      return get<BlockedwordTaskDownloadResponse>("/open_api/v1.3/blockedword/task/download/", params as unknown as Record<string, unknown>);
    },
  };
}
