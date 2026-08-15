// @generated
// fingerprint: sha256:af7ad34c562454812990a5a64cedd9f91f17215d523ce8e9be76f63c05ada67f
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Catalog Diagnostics — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { DiagnosticCatalogParams, DiagnosticCatalogResponse, DiagnosticCatalogProductTaskCreateParams, DiagnosticCatalogProductTaskCreateResponse, DiagnosticCatalogProductTaskGetParams, DiagnosticCatalogProductTaskGetResponse, DiagnosticCatalogEventsourceIssueParams, DiagnosticCatalogEventsourceIssueResponse, DiagnosticCatalogEventsourceMetricParams, DiagnosticCatalogEventsourceMetricResponse } from "../types/catalog-diagnostics.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogDiagnostics(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get synchronous catalog product diagnostic information */
    async diagnosticCatalog(params: DiagnosticCatalogParams): Promise<DiagnosticCatalogResponse> {
      return get<DiagnosticCatalogResponse>("/open_api/v1.3/diagnostic/catalog/", params as unknown as Record<string, unknown>);
    },

    /** Create an asynchronous download task for catalog product diagnostic information */
    async createTask(params: DiagnosticCatalogProductTaskCreateParams): Promise<DiagnosticCatalogProductTaskCreateResponse> {
      return post<DiagnosticCatalogProductTaskCreateResponse>("/open_api/v1.3/diagnostic/catalog/product/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Download asynchronous catalog product diagnostic information */
    async getTask(params: DiagnosticCatalogProductTaskGetParams): Promise<DiagnosticCatalogProductTaskGetResponse> {
      return get<DiagnosticCatalogProductTaskGetResponse>("/open_api/v1.3/diagnostic/catalog/product/task/get/", params as unknown as Record<string, unknown>);
    },

    /** Get catalog event source diagnostic information */
    async eventsourceIssue(params: DiagnosticCatalogEventsourceIssueParams): Promise<DiagnosticCatalogEventsourceIssueResponse> {
      return get<DiagnosticCatalogEventsourceIssueResponse>("/open_api/v1.3/diagnostic/catalog/eventsource/issue/", params as unknown as Record<string, unknown>);
    },

    /** Get catalog event trends and match rate */
    async eventsourceMetric(params: DiagnosticCatalogEventsourceMetricParams): Promise<DiagnosticCatalogEventsourceMetricResponse> {
      return get<DiagnosticCatalogEventsourceMetricResponse>("/open_api/v1.3/diagnostic/catalog/eventsource/metric/", params as unknown as Record<string, unknown>);
    },
  };
}
