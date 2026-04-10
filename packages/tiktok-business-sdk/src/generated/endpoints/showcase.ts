// Auto-generated client for Showcase — do not edit
import type { ShowcaseIdentityGetParams, ShowcaseIdentityGetResponse, ShowcaseRegionGetParams, ShowcaseRegionGetResponse, ShowcaseProductGetParams, ShowcaseProductGetResponse } from "../types/showcase.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createShowcase(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get identities with Showcase permission under an ad account */
    async getIdentity(params: ShowcaseIdentityGetParams): Promise<ShowcaseIdentityGetResponse> {
      return get<ShowcaseIdentityGetResponse>("/open_api/v1.3/showcase/identity/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the available regions for a Showcase via identity */
    async getRegion(params: ShowcaseRegionGetParams): Promise<ShowcaseRegionGetResponse> {
      return get<ShowcaseRegionGetResponse>("/open_api/v1.3/showcase/region/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the available products in a Showcase */
    async getProduct(params: ShowcaseProductGetParams): Promise<ShowcaseProductGetResponse> {
      return get<ShowcaseProductGetResponse>("/open_api/v1.3/showcase/product/get/", params as unknown as Record<string, unknown>);
    },
  };
}
