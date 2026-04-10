// Auto-generated client for Leads — do not edit
import type { PageLeadMockCreateParams, PageLeadMockCreateResponse, PageLeadMockGetParams, PageLeadMockGetResponse, PageLeadMockDeleteParams, PageLeadMockDeleteResponse, PageLibraryGetParams, PageLibraryGetResponse, PageLibraryTransferParams, PageLibraryTransferResponse, PageFieldGetParams, PageFieldGetResponse, LeadFieldGetParams, LeadFieldGetResponse, LeadGetParams, LeadGetResponse } from "../types/leads.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createLeads(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create a test lead */
    async createMock(params: PageLeadMockCreateParams): Promise<PageLeadMockCreateResponse> {
      return post<PageLeadMockCreateResponse>("/open_api/v1.3/page/lead/mock/create/", params as unknown as Record<string, unknown>);
    },

    /** Get a test lead */
    async getMock(params: PageLeadMockGetParams): Promise<PageLeadMockGetResponse> {
      return get<PageLeadMockGetResponse>("/open_api/v1.3/page/lead/mock/get/", params as unknown as Record<string, unknown>);
    },

    /** Delete a test lead */
    async deleteMock(params: PageLeadMockDeleteParams): Promise<PageLeadMockDeleteResponse> {
      return post<PageLeadMockDeleteResponse>("/open_api/v1.3/page/lead/mock/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get form libraries */
    async getLibrary(params: PageLibraryGetParams): Promise<PageLibraryGetResponse> {
      return get<PageLibraryGetResponse>("/open_api/v1.3/page/library/get/", params as unknown as Record<string, unknown>);
    },

    /** Migrate leads to a BC */
    async libraryTransfer(params: PageLibraryTransferParams): Promise<PageLibraryTransferResponse> {
      return post<PageLibraryTransferResponse>("/open_api/v1.3/page/library/transfer/", params as unknown as Record<string, unknown>);
    },

    /** Get the fields of an Instant Form */
    async getField(params: PageFieldGetParams): Promise<PageFieldGetResponse> {
      return get<PageFieldGetResponse>("/open_api/v1.3/page/field/get/", params as unknown as Record<string, unknown>);
    },

    /** Get fields of an Instant Form or direct message leads */
    async getField2(params: LeadFieldGetParams): Promise<LeadFieldGetResponse> {
      return get<LeadFieldGetResponse>("/open_api/v1.3/lead/field/get/", params as unknown as Record<string, unknown>);
    },

    /** Get an Instant Form lead or a direct message lead */
    async getLead(params: LeadGetParams): Promise<LeadGetResponse> {
      return get<LeadGetResponse>("/open_api/v1.3/lead/get/", params as unknown as Record<string, unknown>);
    },
  };
}
