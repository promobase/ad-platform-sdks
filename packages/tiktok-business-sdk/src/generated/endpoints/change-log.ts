// @generated
// fingerprint: sha256:055c0b3df2ac9c6ff64508ccd78d351a559dfc7b6ca82c8fa25a4a41d9ac5d29
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Change Log — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { ChangelogTaskCreateParams, ChangelogTaskCreateResponse, ChangelogTaskCheckParams, ChangelogTaskCheckResponse, ChangelogTaskDownloadParams, ChangelogTaskDownloadResponse } from "../types/change-log.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createChangeLog(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Create a change log download task */
    async createTask(params: ChangelogTaskCreateParams): Promise<ChangelogTaskCreateResponse> {
      return post<ChangelogTaskCreateResponse>("/open_api/v1.3/changelog/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Check the status of a download task */
    async taskCheck(params: ChangelogTaskCheckParams): Promise<ChangelogTaskCheckResponse> {
      return get<ChangelogTaskCheckResponse>("/open_api/v1.3/changelog/task/check/", params as unknown as Record<string, unknown>);
    },

    /** Get the downloaded file */
    async taskDownload(params: ChangelogTaskDownloadParams): Promise<ChangelogTaskDownloadResponse> {
      return get<ChangelogTaskDownloadResponse>("/open_api/v1.3/changelog/task/download/", params as unknown as Record<string, unknown>);
    },
  };
}
