// @generated
// fingerprint: sha256:049dd00ec02894f2d30520bfd3659a13f7297a0ebc6d010118dde450ef0ba3f2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Leads — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { PageLeadMockCreateParams, PageLeadMockCreateResponse, PageLeadMockGetParams, PageLeadMockGetResponse, PageLeadMockDeleteParams, PageLeadMockDeleteResponse, PageLeadTaskParams, PageLeadTaskResponse, PageLeadTaskDownloadParams, PageLeadTaskDownloadResponse, PageLibraryGetParams, PageLibraryGetResponse, PageLibraryTransferParams, PageLibraryTransferResponse, PageFieldGetParams, PageFieldGetResponse, LeadFieldGetParams, LeadFieldGetResponse, LeadGetParams, LeadGetResponse } from "../types/leads.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createLeads(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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

    /** Create a lead download task */
    async leadTask(params: PageLeadTaskParams): Promise<PageLeadTaskResponse> {
      return post<PageLeadTaskResponse>("/open_api/v1.3/page/lead/task/", params as unknown as Record<string, unknown>);
    },

    /** Download leads */
    async taskDownload(params: PageLeadTaskDownloadParams): Promise<PageLeadTaskDownloadResponse> {
      return get<PageLeadTaskDownloadResponse>("/open_api/v1.3/page/lead/task/download/", params as unknown as Record<string, unknown>);
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
