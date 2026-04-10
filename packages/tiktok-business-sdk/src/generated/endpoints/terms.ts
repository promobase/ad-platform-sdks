// Auto-generated client for Terms — do not edit
import type { TermGetParams, TermGetResponse, TermConfirmParams, TermConfirmResponse, TermCheckParams, TermCheckResponse } from "../types/terms.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createTerms(opts: { accessToken: string; advertiserId: string }) {
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
