// @generated
// fingerprint: sha256:768730b4450d26c23db0a49f4814b19f1540b90c40d0bc0b08a0e79542ddd26a
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Welcome Messages — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CreativeAutoMessageCreateParams, CreativeAutoMessageCreateResponse, CreativeAutoMessageGetParams, CreativeAutoMessageGetResponse } from "../types/welcome-messages.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createWelcomeMessages(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Create a welcome message within an ad account */
    async createAutoMessage(params: CreativeAutoMessageCreateParams): Promise<CreativeAutoMessageCreateResponse> {
      return post<CreativeAutoMessageCreateResponse>("/open_api/v1.3/creative/auto_message/create/", params as unknown as Record<string, unknown>);
    },

    /** Get welcome messages within an ad account */
    async getAutoMessage(params: CreativeAutoMessageGetParams): Promise<CreativeAutoMessageGetResponse> {
      return get<CreativeAutoMessageGetResponse>("/open_api/v1.3/creative/auto_message/get/", params as unknown as Record<string, unknown>);
    },
  };
}
