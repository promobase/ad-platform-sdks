// Auto-generated client for Custom Conversions — do not edit
import type { CustomConversionListParams, CustomConversionListResponse, CustomConversionGetParams, CustomConversionGetResponse, CustomConversionCreateParams, CustomConversionCreateResponse, CustomConversionUpdateParams, CustomConversionUpdateResponse, CustomConversionDeleteParams, CustomConversionDeleteResponse } from "../types/custom-conversions.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCustomConversions(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get Custom Conversions associated with an event source */
    async listCustomConversion(params: CustomConversionListParams): Promise<CustomConversionListResponse> {
      return get<CustomConversionListResponse>("/open_api/v1.3/custom_conversion/list/", params as unknown as Record<string, unknown>);
    },

    /** Get the details of a Custom Conversion */
    async getCustomConversion(params: CustomConversionGetParams): Promise<CustomConversionGetResponse> {
      return get<CustomConversionGetResponse>("/open_api/v1.3/custom_conversion/get/", params as unknown as Record<string, unknown>);
    },

    /** Create a Custom Conversion */
    async createCustomConversion(params: CustomConversionCreateParams): Promise<CustomConversionCreateResponse> {
      return post<CustomConversionCreateResponse>("/open_api/v1.3/custom_conversion/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a Custom Conversion */
    async updateCustomConversion(params: CustomConversionUpdateParams): Promise<CustomConversionUpdateResponse> {
      return post<CustomConversionUpdateResponse>("/open_api/v1.3/custom_conversion/update/", params as unknown as Record<string, unknown>);
    },

    /** Delete a Custom Conversion */
    async deleteCustomConversion(params: CustomConversionDeleteParams): Promise<CustomConversionDeleteResponse> {
      return post<CustomConversionDeleteResponse>("/open_api/v1.3/custom_conversion/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
