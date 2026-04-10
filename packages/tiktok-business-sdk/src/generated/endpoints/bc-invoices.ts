// Auto-generated client for BC Invoices — do not edit
import type { BcInvoiceGetParams, BcInvoiceGetResponse, BcInvoiceUnpaidGetParams, BcInvoiceUnpaidGetResponse, BcInvoiceDownloadParams, BcInvoiceDownloadResponse, BcInvoiceTaskCreateParams, BcInvoiceTaskCreateResponse, BcInvoiceTaskGetParams, BcInvoiceTaskGetResponse, BcInvoiceTaskListParams, BcInvoiceTaskListResponse } from "../types/bc-invoices.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcInvoices(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get the invoices of a BC */
    async getInvoice(params: BcInvoiceGetParams): Promise<BcInvoiceGetResponse> {
      return get<BcInvoiceGetResponse>("/open_api/v1.3/bc/invoice/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the unpaid amount of a BC */
    async getUnpaid(params: BcInvoiceUnpaidGetParams): Promise<BcInvoiceUnpaidGetResponse> {
      return get<BcInvoiceUnpaidGetResponse>("/open_api/v1.3/bc/invoice/unpaid/get/", params as unknown as Record<string, unknown>);
    },

    /** Download synchronously */
    async invoiceDownload(params: BcInvoiceDownloadParams): Promise<BcInvoiceDownloadResponse> {
      return get<BcInvoiceDownloadResponse>("/open_api/v1.3/bc/invoice/download/", params as unknown as Record<string, unknown>);
    },

    /** Create an asynchronous download task */
    async createTask(params: BcInvoiceTaskCreateParams): Promise<BcInvoiceTaskCreateResponse> {
      return post<BcInvoiceTaskCreateResponse>("/open_api/v1.3/bc/invoice/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Get asynchronous download tasks */
    async getTask(params: BcInvoiceTaskGetParams): Promise<BcInvoiceTaskGetResponse> {
      return get<BcInvoiceTaskGetResponse>("/open_api/v1.3/bc/invoice/task/get/", params as unknown as Record<string, unknown>);
    },

    /** Get asynchronous download task list */
    async listTask(params: BcInvoiceTaskListParams): Promise<BcInvoiceTaskListResponse> {
      return get<BcInvoiceTaskListResponse>("/open_api/v1.3/bc/invoice/task/list/", params as unknown as Record<string, unknown>);
    },
  };
}
