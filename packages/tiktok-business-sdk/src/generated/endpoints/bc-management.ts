// @generated
// fingerprint: sha256:823d5ab74382b4fdca0dbb4265b09e7cc3c9119072516dc1b3a93efd09c44375
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BC Management — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BcGetParams, BcGetResponse, ChangelogGetParams, ChangelogGetResponse } from "../types/bc-management.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcManagement(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get Business Centers */
    async getBc(params: BcGetParams): Promise<BcGetResponse> {
      return get<BcGetResponse>("/open_api/v1.3/bc/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the activity log of a Business Center */
    async getChangelog(params: ChangelogGetParams): Promise<ChangelogGetResponse> {
      return get<ChangelogGetResponse>("/open_api/v1.3/changelog/get/", params as unknown as Record<string, unknown>);
    },
  };
}
