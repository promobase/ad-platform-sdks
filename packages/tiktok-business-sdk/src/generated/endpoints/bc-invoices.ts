// @generated
// fingerprint: sha256:7793ffb762940459e1312fb4cba23c985673be6416e5ce9887f0ff58e6ee1a5c
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BC Invoices — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BcInvoiceGetParams, BcInvoiceGetResponse, BcInvoiceUnpaidGetParams, BcInvoiceUnpaidGetResponse, BcInvoiceDownloadParams, BcInvoiceDownloadResponse, BcInvoiceTaskCreateParams, BcInvoiceTaskCreateResponse, BcInvoiceTaskGetParams, BcInvoiceTaskGetResponse, BcInvoiceTaskListParams, BcInvoiceTaskListResponse } from "../types/bc-invoices.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcInvoices(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
