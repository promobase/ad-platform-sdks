// @generated
// fingerprint: sha256:2ae20d9434cb62ca7b76a8f286975dd2093f04c9ec619af3fc04567860dfa049
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Custom Conversions — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CustomConversionListParams, CustomConversionListResponse, CustomConversionGetParams, CustomConversionGetResponse, CustomConversionCreateParams, CustomConversionCreateResponse, CustomConversionUpdateParams, CustomConversionUpdateResponse, CustomConversionDeleteParams, CustomConversionDeleteResponse } from "../types/custom-conversions.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCustomConversions(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
