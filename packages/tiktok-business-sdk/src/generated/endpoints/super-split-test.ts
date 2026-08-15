// @generated
// fingerprint: sha256:095c0b14d3efbf7d36a86b63e2124fdb296a02e32171193c4822c92a52a1ef63
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Super Split Test — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { SplitTestCreateParams, SplitTestCreateResponse, SplitTestUpdateParams, SplitTestUpdateResponse, SplitTestEndParams, SplitTestEndResponse, SplitTestResultGetParams, SplitTestResultGetResponse, SplitTestPromoteParams, SplitTestPromoteResponse } from "../types/super-split-test.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createSuperSplitTest(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
