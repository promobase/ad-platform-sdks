// Auto-generated client for Super Split Test — do not edit
import type { SplitTestCreateParams, SplitTestCreateResponse, SplitTestUpdateParams, SplitTestUpdateResponse, SplitTestEndParams, SplitTestEndResponse, SplitTestResultGetParams, SplitTestResultGetResponse, SplitTestPromoteParams, SplitTestPromoteResponse } from "../types/super-split-test.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createSuperSplitTest(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create a split test */
    async createSplitTest(params: SplitTestCreateParams): Promise<SplitTestCreateResponse> {
      return post<SplitTestCreateResponse>("/open_api/v1.3/split_test/create/", params as unknown as Record<string, unknown>);
    },

    /** Update the time of a split test */
    async updateSplitTest(params: SplitTestUpdateParams): Promise<SplitTestUpdateResponse> {
      return post<SplitTestUpdateResponse>("/open_api/v1.3/split_test/update/", params as unknown as Record<string, unknown>);
    },

    /** End a split test */
    async splitTestEnd(params: SplitTestEndParams): Promise<SplitTestEndResponse> {
      return post<SplitTestEndResponse>("/open_api/v1.3/split_test/end/", params as unknown as Record<string, unknown>);
    },

    /** Get the results of a split test */
    async getResult(params: SplitTestResultGetParams): Promise<SplitTestResultGetResponse> {
      return get<SplitTestResultGetResponse>("/open_api/v1.3/split_test/result/get/", params as unknown as Record<string, unknown>);
    },

    /** Run the winning ad group */
    async splitTestPromote(params: SplitTestPromoteParams): Promise<SplitTestPromoteResponse> {
      return post<SplitTestPromoteResponse>("/open_api/v1.3/split_test/promote/", params as unknown as Record<string, unknown>);
    },
  };
}
