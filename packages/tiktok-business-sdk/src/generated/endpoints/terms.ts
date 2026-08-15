// @generated
// fingerprint: sha256:d636458faef0044b7c26cef993268fc4cc44624225ab9096c6bf8e0536dd819e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Terms — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { TermGetParams, TermGetResponse, TermConfirmParams, TermConfirmResponse, TermCheckParams, TermCheckResponse } from "../types/terms.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createTerms(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get Terms */
    async getTerm(params: TermGetParams): Promise<TermGetResponse> {
      return get<TermGetResponse>("/open_api/v1.3/term/get/", params as unknown as Record<string, unknown>);
    },

    /** Sign Terms */
    async termConfirm(params: TermConfirmParams): Promise<TermConfirmResponse> {
      return post<TermConfirmResponse>("/open_api/v1.3/term/confirm/", params as unknown as Record<string, unknown>);
    },

    /** Check the status of Terms */
    async termCheck(params: TermCheckParams): Promise<TermCheckResponse> {
      return get<TermCheckResponse>("/open_api/v1.3/term/check/", params as unknown as Record<string, unknown>);
    },
  };
}
